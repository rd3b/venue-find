import Container from "@/components/Container";

const testimonials = [
  {
    quote:
      "venue-find delivered brilliant options within 24 hours and negotiated a great rate.",
    author: "Events Lead, Tech Company",
  },
  {
    quote:
      "Professional and responsive—our conference ran smoothly from start to finish.",
    author: "Operations Director, Charity",
  },
  {
    quote:
      "We saved both time and budget. Highly recommended for UK venue sourcing.",
    author: "Marketing Manager, FMCG",
  },
];

export default function TestimonialsPage() {
  return (
    <Container>
      <div className="py-12">
        <h1 className="text-3xl font-semibold">Testimonials</h1>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, idx) => (
            <figure key={idx} className="rounded-lg border border-black/10 p-6 bg-white">
              <blockquote className="text-black/90">“{t.quote}”</blockquote>
              <figcaption className="mt-4 text-sm text-black/60">{t.author}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </Container>
  );
}


