interface Props {
  src: string;
  alt: string;
}

const FullWidthImage = ({ src, alt }: Props) => (
  <div className="w-full leading-[0] my-8 md:my-12">
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      className="w-full max-h-[70vh] object-cover object-center block"
    />
  </div>
);

export default FullWidthImage;
