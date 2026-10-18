const HeroImage = ({ src, alt }: { src: string; alt: string }) => (
  <div className="w-full leading-[0]">
    <img
      src={src}
      alt={alt}
      width={1600}
      height={1067}
      fetchPriority="high"
      decoding="async"
      className="w-full h-auto max-h-[90vh] object-cover object-center block"
    />
  </div>
);

export default HeroImage;
