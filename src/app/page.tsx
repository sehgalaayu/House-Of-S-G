import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Story from "@/components/Story";
import Collections from "@/components/Collections";
import CatalogueCTA from "@/components/CatalogueCTA";
import EnquiryCTA from "@/components/EnquiryCTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <a href="#story" className="skip-link">
        Skip to content
      </a>
      <div style={{ minHeight: "100vh", overflowX: "hidden" }}>
        <Header />
        <Hero />
        <Marquee />
        <Story />
        <Collections />
        <CatalogueCTA />
        <EnquiryCTA />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
