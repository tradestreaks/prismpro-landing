import type { Metadata } from "next";
import LegalShell from "@/components/sections/LegalShell";

export const metadata: Metadata = {
  title: "Privacy",
  description: "How Prism Pro handles your data. Privacy is a first principle.",
};

export default function PrivacyPage() {
  return (
    <LegalShell title="Privacy Policy" updated="July 12, 2026">
      <p>
        Prism Pro is operated by <strong>Tradestreaks LLC</strong>. Privacy is a
        first principle here. This summary explains what we collect for the
        pre-launch waitlist and how we handle it. It will be replaced by our full
        policy at launch.
      </p>

      <h2>What we collect now</h2>
      <p>
        If you join the waitlist, we collect the email address you submit and
        basic technical metadata (timestamp and referring source) so we can
        notify you about early access. That&apos;s it.
      </p>

      <h2>How we use it</h2>
      <ul>
        <li>To email you when early access and launch open.</li>
        <li>To understand where interest is coming from, in aggregate.</li>
      </ul>
      <p>
        We do not sell your data, and Prism products are ad-free — advertisers
        cannot pay to influence what Prism shows you.
      </p>

      <h2>In the app</h2>
      <p>
        When Prism launches, your comparison and chat history lives on your
        device by default. AI runs server-side using Prism&apos;s own provider
        credentials, so you never hand us your API keys, and your prompts are
        used only to produce your results.
      </p>

      <h2>Your choices</h2>
      <p>
        You can ask us to remove your email from the waitlist at any time by
        contacting <a href="mailto:hello@prismpro.ai">hello@prismpro.ai</a>.
      </p>
    </LegalShell>
  );
}
