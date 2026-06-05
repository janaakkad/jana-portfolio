import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Leadership from "@/components/Leadership";
import Moments from "@/components/Moments";
import Pillars from "@/components/Pillars";
import Journey from "@/components/Journey";
import Chess from "@/components/Chess";
import Bjj from "@/components/Bjj";
import Engineering from "@/components/Engineering";
import Experience from "@/components/Experience";
import Achievements from "@/components/Achievements";
import Skills from "@/components/Skills";
import Future from "@/components/Future";
import Contact from "@/components/Contact";
import EasterEggs from "@/components/EasterEggs";

export default function Home() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <Marquee />
      <Leadership />
      <Moments />
      <Pillars />
      <Journey />
      <Chess />
      <Bjj />
      <Engineering />
      <Experience />
      <Achievements />
      <Skills />
      <Future />
      <Contact />
      <EasterEggs />
    </main>
  );
}
