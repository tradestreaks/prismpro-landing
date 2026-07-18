import type { Metadata } from "next";
import LegalShell from "@/components/sections/LegalShell";

export const metadata: Metadata = {
  title: "Privacy",
  description: "How Prism Pro handles your data. Privacy is a first principle.",
};

export default function PrivacyPage() {
  return (
    <LegalShell title="Privacy Policy" updated="July 18, 2026">
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
        Your comparison and chat history lives on your device by default — we
        do not store it on our servers.
      </p>
      <ul>
        <li>
          <strong>Account.</strong> If you sign in with Apple, we receive an
          account identifier and, only if you choose to share it, your email
          address. Guest mode requires no account.
        </li>
        <li>
          <strong>Prompts.</strong> AI runs server-side using Prism&apos;s own
          provider credentials, so you never hand us your API keys. Your
          prompts and attachments are sent to the AI providers solely to
          generate your results and are not used to train Prism&apos;s systems.
        </li>
        <li>
          <strong>Payments.</strong> Subscriptions are billed by Apple through
          your App Store account. We never see your payment details.
        </li>
      </ul>

      <h2>Your choices</h2>
      <p>
        You can clear your history on your device at any time from Settings.
        To remove your email from the waitlist or delete your account data,
        contact{" "}
        <a href="mailto:support@tradestreaks.com">support@tradestreaks.com</a>.
      </p>
    </LegalShell>
  );
}
