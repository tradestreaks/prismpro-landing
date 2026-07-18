import Link from "next/link";
import Wordmark from "../brand/Wordmark";
import Footer from "./Footer";
import AuroraBackground from "../ui/AuroraBackground";

export default function LegalShell({
  title,
  updated,
  children,
}: {
  title: string;
  updated?: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <AuroraBackground />
      <header className="container-prism flex items-center justify-between py-6">
        <Link href="/" aria-label="Prism Pro home">
          <Wordmark />
        </Link>
        <Link href="/" className="btn-ghost !px-4 !py-2 text-[13px]">
          ← Back
        </Link>
      </header>
      <main className="container-prism max-w-[760px] py-12">
        <h1 className="text-[38px] font-semibold tracking-tighter text-ink">
          {title}
        </h1>
        {updated && (
          <p className="mt-2 text-[14px] text-ink-muted">
            Last updated {updated}
          </p>
        )}
        <div className="prose-prism mt-10 space-y-6">{children}</div>
      </main>
      <Footer />
    </>
  );
}
