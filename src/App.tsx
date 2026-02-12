import { MatrixBackground } from "./components/MatrixBackground";
import { Scanline } from "./components/Scanline";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { Quote } from "./components/Quote";
import { Footer } from "./components/Footer";
import { SEO } from "./components/SEO";

function App() {
  return (
    <div className="min-h-screen bg-black text-zinc-100 font-sans selection:bg-lime-500 selection:text-black overflow-x-hidden relative">
      <SEO />
      <MatrixBackground />
      <Scanline />
      <div className="fixed inset-0 grid-bg pointer-events-none" />

      <Navbar />

      <main className="relative z-10">
        <Hero />
        <Features />
        <Quote />
        <Footer />
      </main>
    </div>
  );
}

export default App;
