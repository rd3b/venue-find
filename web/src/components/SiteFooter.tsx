import Container from "@/components/Container";
import Link from "next/link";
import BrandLogo from "@/components/BrandLogo";

export default function SiteFooter() {
  return (
    <footer className="border-t border-black/10 bg-white">
      <Container>
        <div className="py-10 flex flex-col sm:flex-row gap-6 sm:gap-0 items-center justify-between text-sm text-black/70">
          <div className="flex items-center gap-3">
            <BrandLogo width={120} height={24} />
            <span className="hidden sm:inline text-black/30">|</span>
            <p>© {new Date().getFullYear()} Erland Events. All rights reserved.</p>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-black">Privacy</Link>
            <span aria-hidden>·</span>
            <Link href="/terms" className="hover:text-black">Terms</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}


