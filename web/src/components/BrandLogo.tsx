"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type BrandLogoProps = {
  href?: string;
  width?: number;
  height?: number;
  className?: string;
  ariaLabel?: string;
};

export default function BrandLogo({
  href = "/",
  width = 120,
  height = 24,
  className,
  ariaLabel = "Erland Events home",
}: BrandLogoProps) {
  const [failed, setFailed] = useState(false);

  return (
    <Link href={href} aria-label={ariaLabel} className={className}>
      {failed ? (
        <span className="text-lg font-semibold tracking-tight">Erland Events</span>
      ) : (
        <Image
          src="/erlandevents/logo.webp"
          alt="Erland Events"
          width={width}
          height={height}
          priority
          onError={() => setFailed(true)}
        />
      )}
    </Link>
  );
}


