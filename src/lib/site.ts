export const site = {
  name: "Prism",
  company: "Tradestreaks LLC",
  domain: "prismpro.ai",
  url: "https://prismpro.ai",
  tagline: "Ask once. Compare the best AI models. Get a clearer answer.",
  description:
    "Prism sends one prompt to leading models from OpenAI, Anthropic, Google and Perplexity, compares them blind, and shows the strongest response, where they agree, and where they differ. When there isn't a clear winner, Prism says so.",
  ogTitle: "Prism — Ask once. Compare the best AI models. Get a clearer answer.",
  twitter: "@prismproai",
  social: {
    x: "https://x.com/prismproai",
    github: "https://github.com/tradestreaks/Prism",
    contact: "mailto:hello@prismpro.ai",
    support: "mailto:support@prismpro.ai",
  },
};

// The blind roster Prism compares (final copy: OpenAI · Anthropic · Google · Perplexity).
export const models = [
  { id: "gpt", name: "GPT", maker: "OpenAI", color: "#B8C7B1" },
  { id: "claude", name: "Claude", maker: "Anthropic", color: "#F2A7A0" },
  { id: "gemini", name: "Gemini", maker: "Google", color: "#8EA4D2" },
  { id: "perplexity", name: "Perplexity", maker: "Perplexity", color: "#A3CEC9" },
];
