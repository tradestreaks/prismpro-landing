import type { Metadata } from "next";
import LegalShell from "@/components/sections/LegalShell";

export const metadata: Metadata = {
  title: "Terms",
  description: "The terms for using Prism Pro and joining the waitlist.",
};

export default function TermsPage() {
  return (
    <LegalShell title="Terms of Use" updated="July 18, 2026">
      <p>
        Prism Pro (&quot;Prism&quot;) is operated by{" "}
        <strong>Tradestreaks LLC</strong>. By using the Prism app or this
        site, you agree to these terms.
      </p>

      <h2>Service</h2>
      <p>
        Prism lets you chat with individual AI models or submit prompts to
        multiple models and receive comparison summaries. AI outputs may be
        inaccurate; use judgment before acting on results.
      </p>

      <h2>Accounts</h2>
      <p>
        Guests may use a limited lifetime sample allowance. A Prism account
        using Sign in with Apple is required for renewable monthly allowances,
        synced history, attachments, and subscriptions. You are responsible
        for activity on your account.
      </p>

      <h2>Plans</h2>
      <ul>
        <li>
          <strong>Guest:</strong> 3 lifetime fast-model asks per device across
          chat and compare.
        </li>
        <li>
          <strong>Free:</strong> 10 fast-model asks per calendar month.
        </li>
        <li>
          <strong>Pro:</strong> 200 fast-model asks and 75 frontier-model asks
          per calendar month via subscription.
        </li>
        <li>
          <strong>Max:</strong> 400 fast-model asks, 200 frontier-model asks,
          and 25 deep-synthesis asks per calendar month via subscription.
        </li>
      </ul>
      <p>
        Subscriptions renew automatically unless cancelled in Apple ID
        settings.
      </p>

      <h2>The waitlist</h2>
      <p>
        Joining the waitlist on this site expresses interest in early access.
        It is not a purchase and does not guarantee a spot, a price, or a
        launch date. We may invite members in batches as capacity allows.
        Features, models, pricing, and timelines shown on this site are
        directional and may change.
      </p>

      <h2>Acceptable use</h2>
      <ul>
        <li>
          Do not use Prism for illegal activity, harassment, or attempts to
          bypass usage limits.
        </li>
        <li>Submit only an email address you control to the waitlist.</li>
        <li>Do not attempt to disrupt or abuse the site or its forms.</li>
      </ul>

      <h2>Disclaimer</h2>
      <p>
        Prism is provided &quot;as is&quot; without warranties. We are not
        liable for decisions made based on AI-generated content.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about these terms? Reach us at{" "}
        <a href="mailto:support@tradestreaks.com">support@tradestreaks.com</a>.
      </p>
    </LegalShell>
  );
}
