import About from "@/components/About/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Services from "@/components/Services";


export default function Home() {
  return (<>
    <Header />
      <Hero />
      <About />
      <Services />
      <Contact />
      <Footer />
  
  </>
  );
}
