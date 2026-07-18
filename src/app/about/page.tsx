import type { Metadata } from "next";
import LegalShell from "@/components/sections/LegalShell";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Why Prism exists: one prompt, the best AI models compared blind, one clearer answer.",
};

export default function AboutPage() {
  return (
    <LegalShell title="About Prism">
      <p>
        Ask the same question to four leading AI models and you&apos;ll get four
        different answers — sometimes agreeing, sometimes contradicting each
        other outright. Most people never see that, because they only ever ask
        one model.
      </p>
      <p>
        <strong>Prism</strong> sends one prompt to leading models from OpenAI,
        Anthropic, Google and Perplexity, compares the responses blind, and
        shows you the strongest answer, where the models agree, and where they
        differ. When there isn&apos;t a clear winner, Prism says so — an honest
        &ldquo;no clear winner&rdquo; beats false confidence.
      </p>

      <h2>What we believe</h2>
      <ul>
        <li>
          <strong>Comparison beats trust.</strong> No single model is best at
          everything. Seeing responses side by side is the fastest way to a
          reliable answer.
        </li>
        <li>
          <strong>Blind means fair.</strong> Responses are judged on substance,
          not brand. Model names are revealed only after the verdict.
        </li>
        <li>
          <strong>Privacy is a first principle.</strong> Your history lives on
          your device by default, and Prism products are ad-free.
        </li>
      </ul>

      <h2>Who&apos;s behind it</h2>
      <p>
        Prism is built by <strong>{site.company}</strong>. We&apos;re a small
        team that got tired of pasting the same prompt into four tabs.
      </p>

      <h2>Get in touch</h2>
      <p>
        Questions, feedback, or support:{" "}
        <a href="mailto:support@tradestreaks.com">support@tradestreaks.com</a>.
      </p>
    </LegalShell>
  );
}
