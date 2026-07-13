import AuroraBackground from "@/components/ui/AuroraBackground";
import Nav from "@/components/sections/Nav";
import Hero from "@/components/sections/Hero";
import VerdictBand from "@/components/sections/VerdictBand";
import HowItWorks from "@/components/sections/HowItWorks";
import Pricing from "@/components/sections/Pricing";
import Roadmap from "@/components/sections/Roadmap";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <AuroraBackground />
      <Nav />
      <main>
        <Hero />
        <VerdictBand />
        <HowItWorks />
        <Pricing />
        <Roadmap />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
