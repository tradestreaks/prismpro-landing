import type { Metadata } from "next";
import LegalShell from "@/components/sections/LegalShell";

export const metadata: Metadata = {
  title: "Terms",
  description: "The terms for joining the Prism Pro early-access waitlist.",
};

export default function TermsPage() {
  return (
    <LegalShell title="Terms of Use" updated="July 18, 2026">
      <p>
        These interim terms cover the Prism Pro pre-launch site and waitlist.
        Prism Pro is operated by <strong>Tradestreaks LLC</strong>. Full product
        terms will accompany the app at launch.
      </p>

      <h2>The waitlist</h2>
      <p>
        Joining the waitlist expresses interest in early access. It is not a
        purchase and does not guarantee a spot, a price, or a launch date. We
        may invite members in batches as capacity allows.
      </p>

      <h2>No warranties yet</h2>
      <p>
        This site describes a product in active development. Features, models,
        pricing, and timelines shown here are directional and may change before
        launch.
      </p>

      <h2>Acceptable use</h2>
      <ul>
        <li>Submit only an email address you control.</li>
        <li>Don&apos;t attempt to disrupt or abuse the site or its forms.</li>
      </ul>

      <h2>Contact</h2>
      <p>
        Questions about these terms? Reach us at{" "}
        <a href="mailto:support@tradestreaks.com">support@tradestreaks.com</a>.
      </p>
    </LegalShell>
  );
}
