import Container from "@/components/Container";
import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t border-black/10 bg-white">
      <Container>
        <div className="py-10 flex flex-col sm:flex-row gap-6 sm:gap-0 items-center justify-between text-sm text-black/70">
          <p>© {new Date().getFullYear()} venue-find. All rights reserved.</p>
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


