import Link from "next/link";
import Container from "@/components/Container";

export default function Home() {
  return (
    <>
      <section className="bg-gradient-to-b from-black to-black/80 text-white">
        <Container>
          <div className="py-24 sm:py-28 lg:py-32">
            <div className="max-w-2xl">
              <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">
                Find the perfect UK venue for your next event
              </h1>
              <p className="mt-5 text-white/80 text-lg">
                venue-find sources and negotiates meeting, conference, and event spaces across the UK—saving you time and budget.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/enquiry" className="rounded-md bg-white text-black px-5 py-3 font-medium hover:bg-white/90">
                  Start an enquiry
                </Link>
                <Link href="/contact" className="rounded-md border border-white/20 px-5 py-3 font-medium hover:bg-white/10">
                  Speak to us
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section>
        <Container>
          <div className="py-16 grid gap-8 sm:grid-cols-3">
            <div>
              <h3 className="text-lg font-semibold">Nationwide coverage</h3>
              <p className="mt-2 text-black/70">From boardrooms to ballrooms, we shortlist venues across the UK to match your brief.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Fast turnaround</h3>
              <p className="mt-2 text-black/70">Receive tailored options quickly—complete with availability and indicative pricing.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Expert negotiation</h3>
              <p className="mt-2 text-black/70">We negotiate competitive rates and favourable terms so you stay on budget.</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-black/5">
        <Container>
          <div className="py-16">
            <h2 className="text-2xl font-semibold">How it works</h2>
            <ol className="mt-6 grid gap-6 sm:grid-cols-3 text-black/80">
              <li>
                <span className="block font-medium text-black">1) Share your brief</span>
                Tell us your date, location, numbers, and must‑haves.
              </li>
              <li>
                <span className="block font-medium text-black">2) Review options</span>
                We curate the best venues and hold spaces while you decide.
              </li>
              <li>
                <span className="block font-medium text-black">3) Confirm and save</span>
                We secure the venue and negotiate the best value for you.
              </li>
            </ol>
            <div className="mt-8">
              <Link href="/enquiry" className="inline-block rounded-md bg-black text-white px-5 py-3 font-medium hover:bg-black/90">
                Make an enquiry
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
