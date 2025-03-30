import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Loader from "@/components/Loader";
import Services from "@/components/Services";
import Testimonials from "@/components/Testmonials";
import WhyChoose from "@/components/WhyChoose";



export default function Home() {
  return (<>
    <Loader />

    <Header />
      <Hero />
      <About />
      <Services />
      <WhyChoose />
      <Experience />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
  
  </>
  );
}
