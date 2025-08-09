import Link from "next/link";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-black text-white">
        <Container>
          <div className="py-28 lg:py-36">
            <div className="max-w-3xl">
              <p className="text-xs tracking-[0.2em] uppercase text-white/60">UK Venue Finding</p>
              <h1 className="mt-3 text-4xl sm:text-5xl font-semibold tracking-tight">
                Find the perfect UK venue for your next event
              </h1>
              <p className="mt-5 text-white/80 text-lg">
                Erland Events sources and negotiates meeting, conference, and event spaces across the UK—saving you time and budget.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/enquiry" className="rounded-md bg-white text-black px-5 py-3 font-medium hover:bg-white/90">Start an enquiry</Link>
                <Link href="#services" className="rounded-md border border-white/20 px-5 py-3 font-medium hover:bg-white/10">See our services</Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Services */}
      <section id="services" className="bg-white">
        <Container>
          <div className="py-20">
            <SectionHeading
              eyebrow="Services"
              title="Services designed to structure your event"
              subtitle="Quick options, relevant shortlists, and negotiated rates."
            />
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { title: "Venue sourcing", desc: "Targeted research across the UK to match your brief." },
                { title: "Negotiation", desc: "Competitive rates, favourable terms, and options held while you decide." },
                { title: "Logistics", desc: "Coordination with venues for setup, catering, AV, and access." },
                { title: "Corporate events", desc: "Meetings, away days, conferences, launches, client dinners." },
                { title: "Guided support", desc: "A single point of contact from scoping to confirmation." },
                { title: "UK network", desc: "Independent network of venues and partners nationwide." },
              ].map((card) => (
                <div key={card.title} className="rounded-xl border border-black/10 p-6 bg-white">
                  <h3 className="text-lg font-semibold">{card.title}</h3>
                  <p className="mt-2 text-black/70">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="bg-black/5">
        <Container>
          <div className="py-20">
            <SectionHeading
              eyebrow="Approach"
              title="A step-by-step process"
              subtitle="Simple, clear, and outcome-focused."
            />
            <ol className="mt-10 grid gap-6 sm:grid-cols-3 text-black/80">
              {["Scoping", "Shortlist", "Negotiation"].map((step, idx) => (
                <li key={step} className="rounded-xl bg-white border border-black/10 p-6">
                  <div className="text-xs uppercase tracking-[0.2em] text-black/60">00{idx + 1}</div>
                  <div className="mt-2 font-medium text-black">{step}</div>
                  <p className="mt-2 text-black/70">
                    {idx === 0 && "We clarify your brief, objectives, constraints, and priorities."}
                    {idx === 1 && "We provide relevant options with availability and indicative budget."}
                    {idx === 2 && "We secure the venue and optimise terms to match your budget."}
                  </p>
                </li>
              ))}
            </ol>
            <div className="mt-10">
              <Link href="/enquiry" className="inline-block rounded-md bg-black text-white px-5 py-3 font-medium hover:bg-black/90">Start an enquiry</Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Testimonials teaser */}
      <section>
        <Container>
          <div className="py-20">
            <SectionHeading eyebrow="Testimonials" title="Trusted by teams across the UK" />
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {["Professional and responsive.", "Saved us time and budget.", "Relevant proposals, fast."].map((q, i) => (
                <figure key={i} className="rounded-xl border border-black/10 p-6 bg-white">
                  <blockquote className="text-black/90">“{q}”</blockquote>
                  <figcaption className="mt-3 text-sm text-black/60">Client • UK</figcaption>
                </figure>
              ))}
            </div>
            <div className="mt-8">
              <Link href="/testimonials" className="text-sm underline">See more testimonials</Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="bg-black text-white">
        <Container>
          <div className="py-16 flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-semibold tracking-tight">You’re one click away from getting started</h3>
              <p className="mt-2 text-white/80">Tangible results in days. We’ll show you how to keep it simple and effective.</p>
            </div>
            <div className="flex gap-3">
              <Link href="/enquiry" className="rounded-md bg-white text-black px-5 py-3 font-medium hover:bg-white/90">Get started</Link>
              <Link href="/contact" className="rounded-md border border-white/20 px-5 py-3 font-medium hover:bg-white/10">Contact us</Link>
        </div>
    </div>
        </Container>
      </section>
    </>
  );
}
