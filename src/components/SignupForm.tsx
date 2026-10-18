import { useState } from "react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";

const inputClasses =
  "w-full rounded-xl border border-beige bg-card px-5 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-sage/30 transition shadow-sm";

type Props = {
  kind: "hospital" | "newsletter";
};

// Both forms save to the existing registrations table, which syncs to the
// Google Sheet: hospital calls as "hospital-partnership", newsletter sign-ups
// with the reader's role (or "waitlist").
const SignupForm = ({ kind }: Props) => {
  const hospital = kind === "hospital";
  const [org, setOrg] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (hospital && !org.trim()) return void toast.error("Please enter your hospital or health service.");
    if (!name.trim()) return void toast.error("Please enter your name.");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) return void toast.error("Please enter a valid email address.");

    setLoading(true);
    try {
      const details = hospital
        ? [`Hospital or health service: ${org.trim()}`, role ? `Role: ${role}` : null, message.trim() || null]
        : [message.trim() || null];
      const { error } = await supabase.from("registrations").insert({
        name: name.trim(),
        email: email.trim(),
        type: hospital ? "hospital-partnership" : role || "waitlist",
        message: [...details, "Sent from mimbuddy.com.au"].filter(Boolean).join("\n"),
      });
      if (error) throw error;
      setSubmitted(true);
    } catch {
      toast.error("Something went wrong. Please try again, or email mickey@mimbuddy.com.au.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="max-w-[480px] mx-auto text-center bg-card border border-beige rounded-2xl p-8 shadow-sm" role="status">
        <img src="/assets/mimbuddy-koala.png" alt="" className="h-14 w-auto mx-auto mb-4" />
        <h3 className="h-card text-[22px]">{hospital ? "Thank you, we'll be in touch soon." : "Thank you for joining."}</h3>
        {hospital && <p className="text-mid text-sm leading-relaxed m-0">We'll email you to find a time for a 10-minute call.</p>}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="max-w-[480px] mx-auto space-y-3 text-left">
      {hospital && (
        <input type="text" value={org} onChange={e => setOrg(e.target.value)} placeholder="Hospital or health service" aria-label="Hospital or health service" autoComplete="organization" className={inputClasses} maxLength={150} />
      )}
      <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Your name" aria-label="Your name" autoComplete="name" className={inputClasses} maxLength={100} />
      <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder={hospital ? "Your work email address" : "Your email address"} aria-label={hospital ? "Your work email address" : "Your email address"} autoComplete="email" className={inputClasses} maxLength={255} />
      <select value={role} onChange={e => setRole(e.target.value)} aria-label={hospital ? "Your role (optional)" : "I'm a… (optional)"} className={`${inputClasses} ${!role ? "text-muted-foreground" : ""}`}>
        <option value="">{hospital ? "Your role (optional)" : "I'm a… (optional)"}</option>
        {(hospital
          ? ["Nursing", "Medical", "Allied health", "Executive or administration", "Other"]
          : ["Parent", "Teacher", "Therapist", "Other"]
        ).map(o => <option key={o} value={o}>{o}</option>)}
      </select>
      <textarea value={message} onChange={e => setMessage(e.target.value)} placeholder={hospital ? "What would you like to explore? (optional)" : "Anything you'd like us to know? (optional)"} aria-label={hospital ? "What would you like to explore? (optional)" : "Anything you'd like us to know? (optional)"} className={`${inputClasses} resize-none min-h-[90px]`} maxLength={1000} />
      <Button type="submit" disabled={loading} className="w-full bg-sage-deep text-primary-foreground px-7 py-3.5 rounded-xl text-sm font-semibold hover:bg-dark hover:-translate-y-0.5 transition-all disabled:opacity-60 shadow-sm h-auto">
        {loading ? "Sending…" : hospital ? "Book a 10-min call →" : "Join the newsletter list →"}
      </Button>
      {hospital && (
        <p className="text-mid text-xs text-center pt-1 m-0">
          Prefer email? <a href="mailto:mickey@mimbuddy.com.au" className="underline">mickey@mimbuddy.com.au</a>
        </p>
      )}
    </form>
  );
};

export default SignupForm;
