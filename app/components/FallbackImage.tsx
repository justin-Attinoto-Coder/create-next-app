"use client";

import Image from "next/image";
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
    <Image
      src={imgSrc}
      alt={alt}
      className={className}
      width={300}
      height={300}
      onError={() => setImgSrc(fallbackSrc)}
    />
  );
}