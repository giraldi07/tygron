import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Pricelist from '@/components/Pricelist';
import Gallery from '@/components/Gallery';
import Events from '@/components/Events';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Pricelist />
      <Gallery />
      <Events />
      <Contact />
      <Footer />
    </main>
  );
}