"use client";

import Link from "next/link";
import Container from "@/components/Container";
import { usePathname } from "next/navigation";
import BrandLogo from "@/components/BrandLogo";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/enquiry", label: "Enquiry" },
  { href: "/contact", label: "Contact" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/about", label: "About" },
];

export default function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="border-b border-black/10 bg-white sticky top-0 z-50">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <BrandLogo className="flex items-center" width={120} height={24} />
          <nav className="hidden md:flex items-center gap-6 text-sm">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={
                    active
                      ? "text-black"
                      : "text-black/70 hover:text-black transition-colors"
                  }
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <Link href="/enquiry" className="rounded-md bg-black text-white px-4 py-2 text-sm font-medium hover:bg-black/90">
            Start an enquiry
          </Link>
        </div>
      </Container>
    </header>
  );
}


