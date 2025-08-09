import Container from "@/components/Container";

export default function AboutPage() {
  return (
    <Container>
      <div className="py-12 space-y-6">
        <h1 className="text-3xl font-semibold">About Erland Events</h1>
        <p className="text-black/75 max-w-3xl">
          We’re a UK-based venue finding service helping organisations plan meetings, away days, conferences, and events. We combine market knowledge with strong venue relationships to deliver the right space at the right value.
        </p>
        <div className="grid gap-6 sm:grid-cols-3">
          <div>
            <h3 className="font-medium">Independent</h3>
            <p className="text-black/70 mt-1">We recommend venues that best fit your brief—not ours.</p>
          </div>
          <div>
            <h3 className="font-medium">Transparent</h3>
            <p className="text-black/70 mt-1">Clear proposals and competitive rates with no surprises.</p>
          </div>
          <div>
            <h3 className="font-medium">Efficient</h3>
            <p className="text-black/70 mt-1">Fast shortlists with availability, pricing, and holds where possible.</p>
          </div>
        </div>
      </div>
    </Container>
  );
}


