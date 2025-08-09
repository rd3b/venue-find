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
                We find venues that make your events work
              </h1>
              <p className="mt-5 text-white/80 text-lg">
                From brief to booking, venue-find curates options, negotiates rates, and secures UK venues fast.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/enquiry" className="rounded-md bg-white text-black px-5 py-3 font-medium hover:bg-white/90">Commencer votre projet</Link>
                <Link href="#services" className="rounded-md border border-white/20 px-5 py-3 font-medium hover:bg-white/10">Voir nos services</Link>
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
              title="Des services conçus pour structurer votre événement"
              subtitle="Des options rapides, une sélection pertinente, des tarifs négociés."
            />
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { title: "Sourcing de lieux", desc: "Recherche ciblée de lieux partout au Royaume‑Uni selon votre brief." },
                { title: "Négociation", desc: "Tarifs compétitifs, conditions avantageuses, options tenues pendant votre décision." },
                { title: "Logistique", desc: "Coordination avec les lieux pour configurations, restauration, AV, et accès." },
                { title: "Événements d’entreprise", desc: "Réunions, séminaires, conférences, lancements, dîners clients." },
                { title: "Accompagnement", desc: "Un interlocuteur unique, du cadrage à la confirmation." },
                { title: "Réseau UK", desc: "Un réseau indépendant de lieux et partenaires dans tout le pays." },
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
              eyebrow="Méthode"
              title="Une approche pensée étape par étape"
              subtitle="Simple, claire, et orientée résultats."
            />
            <ol className="mt-10 grid gap-6 sm:grid-cols-3 text-black/80">
              {["Cadrage", "Sélection", "Négociation"].map((step, idx) => (
                <li key={step} className="rounded-xl bg-white border border-black/10 p-6">
                  <div className="text-xs uppercase tracking-[0.2em] text-black/60">00{idx + 1}</div>
                  <div className="mt-2 font-medium text-black">{step}</div>
                  <p className="mt-2 text-black/70">
                    {idx === 0 && "On clarifie votre brief, objectifs, contraintes, et priorités."}
                    {idx === 1 && "On propose des options pertinentes avec disponibilité et budget indicatif."}
                    {idx === 2 && "On sécurise le lieu et optimise les conditions pour votre budget."}
                  </p>
                </li>
              ))}
            </ol>
            <div className="mt-10">
              <Link href="/enquiry" className="inline-block rounded-md bg-black text-white px-5 py-3 font-medium hover:bg-black/90">Démarrer la conversation</Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Testimonials teaser */}
      <section>
        <Container>
          <div className="py-20">
            <SectionHeading eyebrow="Avis" title="Ils nous font confiance" />
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {["Professionnel et réactif.", "Des économies et un gain de temps.", "Des propositions pertinentes très vite."].map((q, i) => (
                <figure key={i} className="rounded-xl border border-black/10 p-6 bg-white">
                  <blockquote className="text-black/90">“{q}”</blockquote>
                  <figcaption className="mt-3 text-sm text-black/60">Client • UK</figcaption>
                </figure>
              ))}
            </div>
            <div className="mt-8">
              <Link href="/testimonials" className="text-sm underline">Voir plus d’avis</Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="bg-black text-white">
        <Container>
          <div className="py-16 flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-semibold tracking-tight">Vous êtes à un clic de tout changer</h3>
              <p className="mt-2 text-white/80">Des résultats concrets en quelques jours. On vous montre comment faire simple et efficace.</p>
            </div>
            <div className="flex gap-3">
              <Link href="/enquiry" className="rounded-md bg-white text-black px-5 py-3 font-medium hover:bg-white/90">Démarrer</Link>
              <Link href="/contact" className="rounded-md border border-white/20 px-5 py-3 font-medium hover:bg-white/10">Nous contacter</Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
