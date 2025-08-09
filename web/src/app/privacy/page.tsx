import Container from "@/components/Container";

export default function PrivacyPage() {
  return (
    <Container>
      <div className="py-12 prose prose-sm sm:prose lg:prose-lg max-w-none">
        <h1>Privacy Policy</h1>
        <p>
          This is a placeholder privacy policy for venue-find. We are UK-based and will update this page with full details covering how we process personal data, the lawful bases under UK GDPR, data retention, and your rights.
        </p>
        <h2>What we collect</h2>
        <ul>
          <li>Contact details you provide via enquiry and contact forms</li>
          <li>Brief information about your event</li>
        </ul>
        <h2>Contact</h2>
        <p>
          For privacy enquiries, email us at privacy@venue-find.example.
        </p>
      </div>
    </Container>
  );
}


