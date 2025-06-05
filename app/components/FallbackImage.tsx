"use client";

import { useState } from "react";

interface FallbackImageProps {
  src: string;
  fallbackSrc: string;
  alt: string;
  className?: string;
}

export default function FallbackImage({ src, fallbackSrc, alt, className }: FallbackImageProps) {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={imgSrc}
      onError={() => setImgSrc(fallbackSrc)}
      alt={alt}
      className={className}
    />
  );
}