import {
  AppNav,
  Composer,
  HomeNav,
  ModelDot,
  RefractionBloom,
  ScreenShell,
  SpectrumDots,
  StatusBar,
  TitleNav,
} from "./screen-parts";

const M = {
  gpt: "#B8C7B1",
  claude: "#F2A7A0",
  gemini: "#8EA4D2",
  perplexity: "#A3CEC9",
  grok: "#C7B8D6",
};

/* ─── Real app screenshots (body cropped from the recording) under coded
   chrome, so the status bar + Dynamic Island match the coded screens. ─── */
export function ComparingShot() {
  return (
    <ScreenShell>
      <StatusBar />
      <HomeNav trailing="0 of 10 asks" />
      <div className="relative flex-1 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/shots/comparing_body.png"
          alt="Prism comparing four AI models in parallel"
          className="absolute inset-0 h-full w-full object-cover object-top"
          loading="lazy"
        />
      </div>
    </ScreenShell>
  );
}

export function VerdictShot() {
  return (
    <ScreenShell>
      <StatusBar />
      <TitleNav title="Verdict" />
      <div className="relative flex-1 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/shots/verdict_body.png"
          alt="Prism's synthesized verdict with agreement and disagreement"
          className="absolute inset-0 h-full w-full object-cover object-top"
          loading="lazy"
        />
      </div>
    </ScreenShell>
  );
}

/* ─────────────── 1b. COMPACT VERDICT (step 3 — "Get the verdict") ─────────── */
export function StepVerdictScreen() {
  return (
    <ScreenShell>
      <StatusBar />
      <TitleNav title="Verdict" />
      <div className="flex flex-1 flex-col px-4 pt-1">
        <p className="text-[9.5px] leading-snug text-ink-muted">
          You asked · &ldquo;I have 365 days to completely change my life…&rdquo;
        </p>

        {/* where-they-differ banner */}
        <div className="mt-2 flex gap-2 rounded-xl border border-hairline bg-inset/60 px-2.5 py-2">
          <span className="mt-[1px] text-[10px] text-coral">⅄</span>
          <div>
            <p className="text-[9px] font-semibold text-ink">
              The agents disagree on something that matters
            </p>
            <p className="mt-0.5 text-[8.5px] leading-snug text-ink-muted">
              Whether to attempt a broad life overhaul or concentrate on just
              2–3 domains first.
            </p>
          </div>
        </div>

        <div className="relative mt-2.5 overflow-hidden rounded-2xl border border-hairline bg-card p-3.5 shadow-card">
          <div className="absolute inset-y-0 left-0 w-[3px] bg-gradient-to-b from-model-claude to-gold" />
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <SpectrumDots />
              <span className="text-[8px] font-semibold uppercase tracking-[0.16em] text-ink-soft">
                Prism&apos;s Verdict
              </span>
            </div>
            <span className="rounded-full bg-sage/15 px-2 py-0.5 text-[7.5px] font-semibold text-sage ring-1 ring-sage/25">
              High confidence
            </span>
          </div>
          <p className="mt-2.5 font-serif text-[16px] leading-snug text-ink">
            Use one anchor habit and a yearly system.
          </p>
          <p className="mt-2 text-[10px] leading-relaxed text-ink-soft">
            The most ambitious-but-realistic way to change your life in 365 days:
            stop trying to fix everything at once and run a 1-year system with a
            few non-negotiables, built in phases.
          </p>
          <p className="mt-2.5 text-[9px] font-semibold text-ink">
            A practical 365-day plan
          </p>
          <p className="mt-1 text-[9px] font-medium text-prism-glow">
            1) Days 1–30: Reset
          </p>
        </div>

        <div className="mt-2.5 flex gap-1.5">
          {["Copy", "Read aloud", "Share"].map((a) => (
            <span
              key={a}
              className="rounded-full border border-hairline bg-inset px-2.5 py-1.5 text-[9px] text-ink-soft"
            >
              {a}
            </span>
          ))}
        </div>
      </div>
    </ScreenShell>
  );
}

/* ─────────────────────────── 1. THE VERDICT (hero) ───────────────────────── */
export function VerdictScreen() {
  return (
    <ScreenShell>
      <StatusBar />
      <TitleNav title="Verdict" />
      <div className="flex-1 overflow-hidden px-4">
        <p className="text-[9.5px] leading-snug text-ink-muted">
          You asked · &ldquo;I have 365 days to completely change my life. Create
          the most ambitious—but realistic—plan possible.&rdquo;
        </p>

        {/* where-they-differ banner */}
        <div className="mt-2 flex gap-2 rounded-xl border border-hairline bg-inset/60 px-2.5 py-2">
          <span className="mt-[1px] text-[10px] text-coral">⅄</span>
          <div>
            <p className="text-[9px] font-semibold text-ink">
              The agents disagree on something that matters
            </p>
            <p className="mt-0.5 text-[8.5px] leading-snug text-ink-muted">
              Whether to attempt a broad life overhaul or concentrate on just
              2–3 domains first.
            </p>
          </div>
        </div>

        {/* Continue with top model */}
        <div className="mt-2.5 flex items-center gap-2">
          <div className="flex flex-1 items-center justify-center gap-1.5 rounded-full bg-inset px-3 py-2 ring-1 ring-hairline">
            <ModelDot color={M.gpt} />
            <span className="text-[10px] font-semibold text-ink">
              Continue with GPT
            </span>
          </div>
          <div className="flex h-8 w-8 items-center justify-center rounded-full border border-hairline text-ink-soft">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
              <path d="M7 10l-3 3 3 3M4 13h13M17 14l3-3-3-3M20 11H7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        {/* Verdict card — the hero */}
        <div className="relative mt-2.5 overflow-hidden rounded-2xl border border-hairline bg-card p-3.5 shadow-card">
          <div className="absolute inset-y-0 left-0 w-[3px] bg-gradient-to-b from-model-claude to-gold" />
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <SpectrumDots />
              <span className="text-[8px] font-semibold uppercase tracking-[0.16em] text-ink-soft">
                Prism&apos;s Verdict
              </span>
            </div>
            <span className="rounded-full bg-sage/15 px-2 py-0.5 text-[7.5px] font-semibold text-sage ring-1 ring-sage/25">
              High confidence
            </span>
          </div>
          <p className="mt-2.5 font-serif text-[17px] leading-snug text-ink">
            Use one anchor habit and a yearly system.
          </p>
          <p className="mt-2 text-[10px] leading-relaxed text-ink-soft">
            The most ambitious-but-realistic way to change your life in 365 days
            is to stop trying to fix everything at once and instead run a 1-year
            system with a few non-negotiables. Pick 2–3 domains that matter most,
            choose one anchor habit each, and build in phases.
          </p>
          <p className="mt-2.5 text-[9px] font-semibold text-ink">
            A practical 365-day plan
          </p>
          <p className="mt-1 text-[9px] font-medium text-prism-glow">
            1) Days 1–30: Reset
          </p>
        </div>

        {/* what each agent added */}
        <p className="mt-3 text-[8px] font-semibold uppercase tracking-[0.16em] text-ink-muted">
          What each agent added
        </p>
        <div className="mt-1.5 space-y-1.5">
          {[
            { c: M.gpt, n: "GPT", tag: "the structure", s: "8.4", star: true },
            { c: M.claude, n: "Claude", tag: "the framing", s: "8.6" },
            { c: M.gemini, n: "Gemini", tag: "the steps", s: "8.6" },
            { c: M.perplexity, n: "Perplexity", tag: "the caveat", s: "8.0" },
          ].map((r) => (
            <div
              key={r.n}
              className="flex items-center justify-between rounded-xl border border-hairline bg-card/60 px-2.5 py-2"
            >
              <div className="flex items-center gap-2">
                <ModelDot color={r.c} />
                <span className="text-[10.5px] font-medium text-ink">
                  {r.n}
                </span>
                {r.star && <span className="text-[9px] text-gold">★</span>}
                <span className="text-[8.5px] italic text-ink-muted">
                  {r.tag}
                </span>
              </div>
              <span className="text-[10px] font-semibold text-gold">{r.s}</span>
            </div>
          ))}
        </div>
      </div>
    </ScreenShell>
  );
}

/* ─────────────────── 2. HOME / ASK ONCE (compose constellation) ──────────── */
export function CompareScreen() {
  return (
    <ScreenShell>
      <StatusBar />
      <HomeNav trailing="1 of 10 asks" />
      <div className="flex flex-1 flex-col px-5">
        <p className="mt-6 text-center font-serif text-[20px] text-ink-soft/70">
          Good evening.
        </p>

        {/* model constellation — GPT top · Gemini left · Claude right · Perplexity bottom */}
        <div className="relative mx-auto mt-8 h-[150px] w-[190px]">
          {[
            { n: "GPT", c: M.gpt, cls: "left-1/2 top-0 -translate-x-1/2" },
            { n: "Gemini", c: M.gemini, cls: "left-2 top-[46px]" },
            { n: "Claude", c: M.claude, cls: "right-2 top-[46px]" },
            { n: "Perplexity", c: M.perplexity, cls: "left-1/2 top-[92px] -translate-x-1/2" },
          ].map((m) => (
            <div key={m.n} className={`absolute flex flex-col items-center ${m.cls}`}>
              <span
                className="h-9 w-9 rounded-full"
                style={{ background: m.c, boxShadow: `0 0 16px ${m.c}55` }}
              />
              <span className="mt-1.5 text-[9.5px] text-ink-soft">{m.n}</span>
            </div>
          ))}
        </div>

        <p className="mt-3 text-center text-[12px] font-semibold text-ink">
          Asking everyone
        </p>
        <p className="mt-1 text-center text-[9.5px] text-ink-muted">
          Tap a color to chat with just that model
        </p>

        <div className="flex-1" />

        {/* composer — same chat box as the "Prism compares" screen (idle, ready to send) */}
        <PromptCard />
      </div>
    </ScreenShell>
  );
}

/** The app's prompt chat box — prompt text, the "•••• 4 models" pill, and a
 *  send/stop control. Shared so the Home and Comparing screens match exactly. */
export function PromptCard({ sending = false }: { sending?: boolean }) {
  return (
    <div className="mb-5 rounded-[13px] border border-hairline bg-card/70 px-3 pb-2 pt-2.5">
      <p className="text-[9.5px] leading-[1.4] text-ink-soft">
        I have 365 days to completely change my life. Create the most
        ambitious—but realistic—plan possible.
      </p>
      <div className="mt-2.5 flex items-center justify-between">
        <span className="flex items-center gap-1 rounded-full bg-inset px-1.5 py-[3px]">
          <span className="flex -space-x-[1px]">
            {(["gpt", "claude", "gemini", "perplexity"] as const).map((m) => (
              <span
                key={m}
                className="h-[5px] w-[5px] rounded-full ring-1 ring-card"
                style={{ background: M[m] }}
              />
            ))}
          </span>
          <span className="text-[8px] font-semibold text-ink-soft">4 models</span>
        </span>

        <div className="flex items-center gap-1.5">
          {sending && (
            <span className="flex items-center gap-1 text-[8px] text-ink-muted">
              <span className="flex -space-x-[1px]">
                {[M.gpt, M.claude, M.gemini].map((c) => (
                  <span key={c} className="h-[5px] w-[5px] rounded-full" style={{ background: c }} />
                ))}
              </span>
              0 of 4 in
            </span>
          )}
          <span
            className="flex items-center justify-center rounded-full bg-[#EDEAE3]"
            style={{ width: 22, height: 22 }}
          >
            {sending ? (
              <span className="rounded-[2px] bg-canvas-2" style={{ width: 8, height: 8 }} />
            ) : (
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 19V5M5 12l7-7 7 7"
                  stroke="#14161A"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </span>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────── 2b. COMPARING (in flight) ───────────────────── */
export function ComparingScreen() {
  const agents = [
    { n: "GPT", c: M.gpt },
    { n: "Claude", c: M.claude },
    { n: "Perplexity", c: M.perplexity },
    { n: "Gemini", c: M.gemini },
  ];
  return (
    <ScreenShell>
      <StatusBar />
      <HomeNav trailing="0 of 10 asks" />
      <div className="flex flex-1 flex-col items-center px-5">
        <div className="flex flex-1 flex-col items-center justify-center">
          <RefractionBloom size={130} />
          <p className="mt-5 text-[12.5px] font-medium text-ink">
            Waiting on 4 models…
          </p>
          <p className="mt-1.5 max-w-[170px] text-center text-[9px] leading-[1.45] text-ink-muted">
            Your verdict starts the moment the last answer lands.
          </p>

          <div className="mt-4 grid w-full grid-cols-2 gap-x-2 gap-y-1.5">
            {agents.map((a) => (
              <span
                key={a.n}
                className="inline-flex items-center gap-1.5 text-[8.5px] font-medium text-ink-soft"
              >
                <span
                  className="h-1.5 w-1.5 rounded-full"
                  style={{ background: a.c }}
                />
                {a.n} · writing…
              </span>
            ))}
          </div>
        </div>
      </div>
      <Composer
        placeholder="I have 365 days to completely change my life. Create the most ambitious—but realistic—plan possible."
        sending
        chip={
          <>
            <span className="flex -space-x-1">
              {agents.map((a) => (
                <span
                  key={a.n}
                  className="h-[7px] w-[7px] rounded-full ring-1 ring-canvas-2"
                  style={{ background: a.c }}
                />
              ))}
            </span>
            4 models · 0 of 4 in
          </>
        }
      />
    </ScreenShell>
  );
}

/* ─────────────────────────── 3. AI CHAT ──────────────────────────────────── */
export function ChatScreen() {
  return (
    <ScreenShell>
      <StatusBar />
      <AppNav
        trailing="Claude · Chat"
        leading={
          <div className="flex items-center gap-1.5">
            <ModelDot color={M.claude} />
            <span className="text-[12px] font-semibold text-ink">Claude</span>
          </div>
        }
      />
      <div className="flex-1 space-y-2.5 overflow-hidden px-4 pt-2">
        <div className="ml-auto w-[78%] rounded-2xl rounded-tr-md bg-inset px-3 py-2 text-[10.5px] leading-relaxed text-ink">
          Rewrite this so it sounds calm and confident, not salesy.
        </div>
        <div className="w-[86%] rounded-2xl rounded-tl-md border border-hairline bg-card px-3 py-2.5">
          <div className="mb-1.5 flex items-center gap-1.5">
            <ModelDot color={M.claude} />
            <span className="text-[8.5px] uppercase tracking-wider text-ink-muted">
              Claude
            </span>
          </div>
          <p className="text-[10.5px] leading-relaxed text-ink-soft">
            Here&apos;s a steadier version: &ldquo;We built Prism for people who
            think for a living. One prompt, every model, one clear answer.&rdquo;
          </p>
          <p className="mt-1.5 text-[10.5px] leading-relaxed text-ink-soft">
            Want it warmer, or shorter for a headline?
          </p>
        </div>
        <div className="w-[50%] rounded-2xl rounded-tl-md border border-hairline bg-card px-3 py-2">
          <div className="flex items-center gap-1">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="h-1.5 w-1.5 rounded-full bg-model-claude animate-breathe"
                style={{ animationDelay: `${i * 180}ms` }}
              />
            ))}
          </div>
        </div>
      </div>
      <Composer
        placeholder="Message Claude…"
        chip={
          <>
            <ModelDot color={M.claude} />
            Claude · Chat
          </>
        }
      />
    </ScreenShell>
  );
}

/* ─────────────────────────── 4. HISTORY ──────────────────────────────────── */
export function HistoryScreen() {
  const rows = [
    { t: "Native iOS vs web for MVP launch", kind: "Compare", meta: "3 models · High confidence", c: M.claude },
    { t: "Positioning line for the landing page", kind: "Chat", meta: "Claude", c: M.claude },
    { t: "Best database for realtime sync", kind: "Compare", meta: "4 models · Split verdict", c: M.gemini },
    { t: "Summarize the Q3 board memo", kind: "Chat", meta: "GPT", c: M.gpt },
    { t: "Pricing tiers for a pro tool", kind: "Compare", meta: "3 models · High confidence", c: M.perplexity },
  ];
  return (
    <ScreenShell>
      <StatusBar />
      <div className="px-5 pb-1 pt-1">
        <h3 className="font-serif text-[20px] text-ink">History</h3>
      </div>
      <div className="px-4">
        <div className="flex gap-1 rounded-full bg-inset p-1 text-[10px]">
          {["All", "Chats", "Compares"].map((s, i) => (
            <span
              key={s}
              className={`flex-1 rounded-full py-1 text-center ${
                i === 0
                  ? "bg-card font-medium text-ink shadow-sm"
                  : "text-ink-muted"
              }`}
            >
              {s}
            </span>
          ))}
        </div>
        <div className="mt-2 flex items-center gap-2 rounded-xl border border-hairline bg-card/50 px-3 py-2 text-[10px] text-ink-muted">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
            <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
            <path d="m20 20-3-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
          Search your history
        </div>
      </div>
      <div className="mt-2 flex-1 space-y-1.5 overflow-hidden px-4">
        {rows.map((r) => (
          <div
            key={r.t}
            className="rounded-xl border border-hairline bg-card/60 px-3 py-2.5"
          >
            <div className="flex items-center gap-1.5">
              <ModelDot color={r.c} />
              <span className="rounded bg-inset px-1.5 py-0.5 text-[8px] font-medium text-ink-muted">
                {r.kind}
              </span>
            </div>
            <p className="mt-1.5 text-[11px] font-medium leading-snug text-ink">
              {r.t}
            </p>
            <p className="mt-0.5 text-[9px] text-ink-muted">{r.meta}</p>
          </div>
        ))}
      </div>
    </ScreenShell>
  );
}

/* ─────────────────────────── 5. VOICE ────────────────────────────────────── */
export function VoiceScreen() {
  return (
    <ScreenShell>
      <StatusBar />
      <AppNav trailing="Voice" />
      <div className="flex flex-1 flex-col items-center justify-center px-6">
        <div className="relative flex h-40 w-40 items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-prism/20 blur-2xl animate-breathe" />
          <div className="absolute inset-4 rounded-full border border-prism/30" />
          <div className="absolute inset-9 rounded-full border border-spectrum-lavender/25" />
          <div
            className="h-16 w-16 rounded-full"
            style={{
              background: "radial-gradient(circle at 40% 35%,#E9B08F,#B96842)",
            }}
          />
        </div>
        {/* waveform */}
        <div className="mt-8 flex h-10 items-center gap-[3px]">
          {[6, 14, 22, 30, 18, 34, 24, 12, 28, 16, 8, 20, 32, 14, 6].map(
            (hgt, i) => (
              <span
                key={i}
                className="w-[3px] rounded-full bg-gradient-to-t from-spectrum-slate to-spectrum-coral animate-breathe"
                style={{ height: hgt, animationDelay: `${i * 70}ms` }}
              />
            )
          )}
        </div>
        <p className="mt-7 text-center font-serif text-[15px] leading-snug text-ink">
          &ldquo;Draft a reply to the investor update…&rdquo;
        </p>
        <p className="mt-2 text-[10px] text-ink-muted">Listening — tap to send</p>
      </div>
    </ScreenShell>
  );
}

/* ─────────────────────────── 6. RESEARCH / AGENTS ────────────────────────── */
export function ResearchScreen() {
  const steps = [
    { s: "done", t: "Scanned 42 sources across the web", c: M.perplexity },
    { s: "done", t: "Cross-checked claims with GPT + Claude", c: M.gpt },
    { s: "run", t: "Synthesizing a cited briefing…", c: M.gemini },
  ];
  return (
    <ScreenShell>
      <StatusBar />
      <AppNav trailing="Research" />
      <div className="flex-1 px-5 pt-3">
        <p className="text-[10px] text-ink-muted">Deep research · running</p>
        <h3 className="mt-1 font-serif text-[17px] leading-snug text-ink">
          State of on-device AI for consumer apps, 2026
        </h3>
        <div className="mt-5 space-y-2.5">
          {steps.map((st) => (
            <div key={st.t} className="flex items-start gap-2.5">
              <span
                className="mt-[2px] flex h-4 w-4 items-center justify-center rounded-full text-[8px]"
                style={{
                  background:
                    st.s === "done" ? st.c + "33" : "rgba(245,241,232,0.06)",
                  border: `1px solid ${st.c}66`,
                }}
              >
                {st.s === "done" ? (
                  <svg width="8" height="8" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M5 12l5 5L20 6"
                      stroke={st.c}
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : (
                  <span className="h-1.5 w-1.5 rounded-full bg-prism animate-breathe" />
                )}
              </span>
              <p className="text-[10.5px] leading-snug text-ink-soft">{st.t}</p>
            </div>
          ))}
        </div>
        <div className="mt-5 rounded-xl border border-hairline bg-card/60 p-3">
          <div className="flex items-center gap-1.5">
            <SpectrumDots size={5} />
            <span className="text-[8px] uppercase tracking-widest text-ink-muted">
              Emerging finding
            </span>
          </div>
          <p className="mt-1.5 text-[10px] leading-relaxed text-ink-soft">
            Latency, not accuracy, is the real 2026 differentiator — models
            agree hybrid on-device routing wins for consumer feel.
          </p>
          <div className="mt-2 flex gap-1">
            {["arxiv", "a16z", "apple", "+39"].map((s) => (
              <span
                key={s}
                className="rounded bg-inset px-1.5 py-0.5 text-[7.5px] text-ink-muted"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </ScreenShell>
  );
}

/* ─────────────────────────── 7. IMAGE ────────────────────────────────────── */
export function ImageScreen() {
  const tiles = [
    "linear-gradient(135deg,#DC9A7E,#B8B1C2)",
    "linear-gradient(135deg,#8EA4D2,#9CAEA1)",
    "linear-gradient(135deg,#E3C3A4,#C97B57)",
    "linear-gradient(135deg,#A3CEC9,#808D9B)",
  ];
  return (
    <ScreenShell>
      <StatusBar />
      <AppNav trailing="Images" />
      <div className="flex-1 px-5 pt-3">
        <p className="text-[10px] text-ink-muted">Prompt</p>
        <p className="mt-1 rounded-xl border border-hairline bg-card/60 px-3 py-2 text-[10.5px] leading-snug text-ink-soft">
          A calm ensō brushstroke refracting light into a soft spectrum,
          editorial, minimal.
        </p>
        <div className="mt-4 grid grid-cols-2 gap-2">
          {tiles.map((g, i) => (
            <div
              key={i}
              className="relative aspect-square overflow-hidden rounded-xl"
              style={{ background: g }}
            >
              <div className="absolute inset-0 bg-black/10" />
              <div className="grain absolute inset-0 opacity-20 mix-blend-overlay" />
            </div>
          ))}
        </div>
        <div className="mt-3 flex items-center justify-between text-[9px] text-ink-muted">
          <span>4 variations</span>
          <span className="rounded-full border border-hairline px-2 py-1 text-ink-soft">
            Regenerate
          </span>
        </div>
      </div>
    </ScreenShell>
  );
}

/* ─────────────────────────── 8. SETTINGS ─────────────────────────────────── */
export function SettingsScreen() {
  const groups = [
    {
      h: "Account",
      rows: [
        ["Plan", "Pro"],
        ["Default models", "3 selected"],
      ],
    },
    {
      h: "Experience",
      rows: [
        ["Appearance", "Dark"],
        ["Read aloud voice", "Warm"],
        ["Haptics", "On"],
      ],
    },
    {
      h: "Privacy",
      rows: [
        ["History", "On this device"],
        ["Provider keys", "Off-device"],
      ],
    },
  ];
  return (
    <ScreenShell>
      <StatusBar />
      <div className="px-5 pb-2 pt-1">
        <h3 className="font-serif text-[20px] text-ink">Settings</h3>
      </div>
      <div className="flex-1 space-y-3.5 px-4">
        {groups.map((g) => (
          <div key={g.h}>
            <p className="mb-1.5 px-1 text-[8.5px] font-semibold uppercase tracking-[0.16em] text-ink-muted">
              {g.h}
            </p>
            <div className="overflow-hidden rounded-xl border border-hairline bg-card/60">
              {g.rows.map(([k, v], i) => (
                <div
                  key={k}
                  className={`flex items-center justify-between px-3 py-2.5 text-[11px] ${
                    i > 0 ? "border-t border-hairline" : ""
                  }`}
                >
                  <span className="text-ink">{k}</span>
                  <span className="text-ink-muted">{v}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </ScreenShell>
  );
}
