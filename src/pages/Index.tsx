
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import Benefits from "@/components/Benefits";
import Framework from "@/components/Framework";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <AboutUs />
      <Benefits />
      <Framework />
      <ContactCTA />
      <Footer />
    </div>
  );
};

export default Index;
