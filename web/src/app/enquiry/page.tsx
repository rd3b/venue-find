"use client";

import { useState, FormEvent } from "react";
import Container from "@/components/Container";

type EnquiryFormData = {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  eventDate?: string;
  location?: string;
  attendees?: string;
  budget?: string;
  requirements?: string;
};

export default function EnquiryPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries()) as unknown as EnquiryFormData;
    // Placeholder: send to backend later
    // For now, log and show confirmation
    console.log("Enquiry submitted", data);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      event.currentTarget.reset();
    }, 600);
  }

  return (
    <Container>
      <div className="py-12">
        <h1 className="text-3xl font-semibold">Enquiry</h1>
        <p className="mt-2 text-black/70 max-w-2xl">
          Tell us about your event and we’ll return with tailored venue options across the UK.
        </p>

        {submitted && (
          <div className="mt-6 rounded-md bg-green-50 text-green-700 border border-green-200 p-4">
            Thank you—your enquiry has been received. We’ll be in touch shortly.
          </div>
        )}

        <form onSubmit={handleSubmit} className="mt-8 grid gap-6 max-w-2xl">
          <div className="grid gap-2">
            <label htmlFor="name" className="text-sm font-medium">Full name</label>
            <input id="name" name="name" required className="h-11 rounded-md border border-black/20 px-3" />
          </div>
          <div className="grid gap-2 sm:grid-cols-2">
            <div className="grid gap-2">
              <label htmlFor="email" className="text-sm font-medium">Email</label>
              <input id="email" name="email" type="email" required className="h-11 rounded-md border border-black/20 px-3" />
            </div>
            <div className="grid gap-2">
              <label htmlFor="phone" className="text-sm font-medium">Phone</label>
              <input id="phone" name="phone" type="tel" className="h-11 rounded-md border border-black/20 px-3" />
            </div>
          </div>
          <div className="grid gap-2 sm:grid-cols-2">
            <div className="grid gap-2">
              <label htmlFor="company" className="text-sm font-medium">Company</label>
              <input id="company" name="company" className="h-11 rounded-md border border-black/20 px-3" />
            </div>
            <div className="grid gap-2">
              <label htmlFor="eventDate" className="text-sm font-medium">Event date</label>
              <input id="eventDate" name="eventDate" type="date" className="h-11 rounded-md border border-black/20 px-3" />
            </div>
          </div>
          <div className="grid gap-2 sm:grid-cols-3">
            <div className="grid gap-2">
              <label htmlFor="location" className="text-sm font-medium">Preferred location</label>
              <input id="location" name="location" placeholder="e.g., London" className="h-11 rounded-md border border-black/20 px-3" />
            </div>
            <div className="grid gap-2">
              <label htmlFor="attendees" className="text-sm font-medium">Attendees</label>
              <input id="attendees" name="attendees" type="number" min="1" className="h-11 rounded-md border border-black/20 px-3" />
            </div>
            <div className="grid gap-2">
              <label htmlFor="budget" className="text-sm font-medium">Budget (approx)</label>
              <input id="budget" name="budget" placeholder="£" className="h-11 rounded-md border border-black/20 px-3" />
            </div>
          </div>
          <div className="grid gap-2">
            <label htmlFor="requirements" className="text-sm font-medium">Requirements</label>
            <textarea id="requirements" name="requirements" rows={5} placeholder="Tell us about setup, catering, AV, accessibility, etc." className="rounded-md border border-black/20 px-3 py-2" />
          </div>
          <div>
            <button disabled={loading} className="rounded-md bg-black text-white px-5 py-3 font-medium hover:bg-black/90 disabled:opacity-60">
              {loading ? "Submitting…" : "Submit enquiry"}
            </button>
          </div>
        </form>
      </div>
    </Container>
  );
}


