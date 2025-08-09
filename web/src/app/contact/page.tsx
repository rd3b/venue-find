"use client";

import { useState, FormEvent } from "react";
import Container from "@/components/Container";
import Link from "next/link";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    console.log("Contact form", data);
    setTimeout(() => setSent(true), 400);
    e.currentTarget.reset();
  }

  return (
    <Container>
      <div className="py-12 grid gap-10 lg:grid-cols-2">
        <div>
          <h1 className="text-3xl font-semibold">Contact</h1>
          <p className="mt-2 text-black/70">We’re UK-based and happy to help.</p>
          <div className="mt-6 space-y-2 text-black/80">
            <p>
              Email: <Link href="mailto:hello@venue-find.example" className="underline">hello@venue-find.example</Link>
            </p>
            <p>Phone: <span className="font-medium">+44 (0)20 0000 0000</span></p>
            <p>Hours: Mon–Fri, 9:00–17:30 (UK)</p>
          </div>
        </div>
        <form onSubmit={onSubmit} className="grid gap-6 max-w-xl">
          {sent && (
            <div className="rounded-md bg-green-50 text-green-700 border border-green-200 p-3">
              Thanks—message sent. We’ll get back shortly.
            </div>
          )}
          <div className="grid gap-2">
            <label htmlFor="name" className="text-sm font-medium">Name</label>
            <input id="name" name="name" required className="h-11 rounded-md border border-black/20 px-3" />
          </div>
          <div className="grid gap-2">
            <label htmlFor="email" className="text-sm font-medium">Email</label>
            <input id="email" name="email" type="email" required className="h-11 rounded-md border border-black/20 px-3" />
          </div>
          <div className="grid gap-2">
            <label htmlFor="message" className="text-sm font-medium">Message</label>
            <textarea id="message" name="message" rows={6} className="rounded-md border border-black/20 px-3 py-2" />
          </div>
          <button className="rounded-md bg-black text-white px-5 py-3 font-medium hover:bg-black/90">Send</button>
        </form>
      </div>
    </Container>
  );
}


