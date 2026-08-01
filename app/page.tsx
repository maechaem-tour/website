import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedTours from "./components/FeaturedTours";
import Destinations from "./components/Destinations";
import WhyUs from "./components/WhyUs";
import FleetPreview from "./components/FleetPreview";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FeaturedTours />
        <Destinations />
        <WhyUs />
        <FleetPreview />
        <Testimonials />
        <CTA />
      </main>
      <FloatingWhatsApp />
      <Footer />
    </>
  );
}
