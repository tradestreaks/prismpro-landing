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
        Prism Pro (&quot;Prism&quot;, &quot;we&quot;, &quot;our&quot;) is
        operated by <strong>Tradestreaks LLC</strong>. Privacy is a first
        principle here. This policy describes how we handle information when
        you use the Prism iOS app and this website.
      </p>

      <h2>Information we collect</h2>
      <ul>
        <li>
          <strong>Apple Sign In.</strong> We receive an anonymous Apple user
          identifier and, only if you choose to share them, your name and
          email. Guest mode requires no account.
        </li>
        <li>
          <strong>Prompts and attachments.</strong> Text and files you submit
          for AI comparison are sent to our servers and to selected AI
          providers (OpenAI, Anthropic, Google, Perplexity) solely to generate
          your results. AI runs server-side using Prism&apos;s own provider
          credentials, so you never hand us your API keys.
        </li>
        <li>
          <strong>Dictation.</strong> If you use voice input, audio is
          processed by Apple&apos;s on-device or Apple-server speech
          recognition to produce text. We receive only the resulting text,
          never the audio.
        </li>
        <li>
          <strong>Usage data.</strong> We track signed-in ask counts by plan
          and routing tier (Fast, Frontier, or Deep) across comparisons and
          chats, plus the lifetime guest sample count, to enforce allowances.
        </li>
        <li>
          <strong>Guest access and retry data.</strong> If you use Prism
          without signing in during the private beta, the app sends
          Apple&apos;s vendor identifier. Our server hashes that identifier,
          uses your IP address for rate limiting, and combines the hashed
          device identifier with a client-generated request identifier to
          enforce the lifetime guest allowance and safely replay an ask after
          a lost network response.
        </li>
        <li>
          <strong>Payments.</strong> Subscriptions are billed by Apple through
          your App Store account. Subscription status is verified through
          Apple&apos;s In-App Purchase system; we never see your payment
          details.
        </li>
        <li>
          <strong>Waitlist.</strong> If you join the waitlist on this site, we
          collect the email address you submit and basic technical metadata
          (timestamp and referring source) so we can notify you about early
          access.
        </li>
      </ul>

      <h2>How we use information</h2>
      <ul>
        <li>Run AI model comparisons and return synthesized results.</li>
        <li>Authenticate your account and sync your history.</li>
        <li>Enforce Guest, Free, Pro, and Max plan allowances.</li>
        <li>Improve reliability and support.</li>
        <li>Email waitlist members when early access and launch open.</li>
      </ul>
      <p>
        We do not sell your data, and Prism products are ad-free — advertisers
        cannot pay to influence what Prism shows you. We do not use your data
        to train AI models today; if we ever offer that, it will be strictly
        opt-in and clearly disclosed — never silent.
      </p>

      <h2>What we do not collect</h2>
      <p>
        We do not request access to contacts, photos, location, or calendar.
        Microphone access is requested only if you choose to dictate a prompt,
        and audio never reaches our servers.
      </p>

      <h2>Data storage and retention</h2>
      <ul>
        <li>
          In guest mode, your comparisons stay on your device and are not
          added to server history. When a guest ask includes a retry
          identifier, its response remains in a device-scoped replay cache for
          24 hours so retrying does not spend another guest sample; a
          retention job deletes expired cache records regularly.
        </li>
        <li>
          If you sign in, your account, comparison history, and chat history
          are stored on our servers so they can sync across your devices.
        </li>
        <li>
          Signed-in asks use a client-generated retry identifier to prevent
          duplicate charges after a lost response; retry records remain
          available for up to 24 hours. Completed comparisons remain in normal
          History until you delete them or your account.
        </li>
        <li>
          The hashed guest device identifier and used-sample count remain
          while needed to enforce the lifetime guest allowance. Rate-limit
          records expire with the rate-limit window.
        </li>
        <li>
          Your comparisons and chats are kept until you delete them or delete
          your account. When you delete a comparison or chat, it leaves your
          history immediately and any residual server record is purged within
          90 days.
        </li>
        <li>
          Feedback you provide on a comparison (ratings, flags, and comments,
          plus in-app interaction signals such as copying an answer) is stored
          to improve result quality. Feedback is kept until you delete the
          comparison it belongs to or your account, and is purged with it.
        </li>
        <li>
          Deleting your account immediately removes your data from active
          systems, including your feedback; any residual server records are
          purged within 90 days.
        </li>
        <li>
          A local device cache may store recent comparisons and chats for
          offline viewing. You can clear your history on your device at any
          time from Settings.
        </li>
      </ul>

      <h2>Third-party services</h2>
      <p>
        Prompts are processed by third-party AI providers under their
        respective privacy policies.
      </p>

      <h2>Your choices</h2>
      <p>
        You can clear your on-device history from Settings and delete
        comparisons, chats, or your entire account in the app. To remove your
        email from the waitlist or ask a privacy question, contact{" "}
        <a href="mailto:support@tradestreaks.com">support@tradestreaks.com</a>.
      </p>
    </LegalShell>
  );
}
