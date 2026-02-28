import { useState } from 'react';
import FortuneCookieCanvas from './components/FortuneCookieCanvas';
import Hero from './components/Hero';
import Ingredients from './components/Ingredients';
import ProductDetail from './components/ProductDetail';
import Footer from './components/Footer';
import Marquee from './components/Marquee';

const App = () => {
  // We keep track of the scroll progress from the canvas if needed, 
  // but the canvas itself handles its own animation based on scroll position.
  const [scrollProgress, setScrollProgress] = useState(0);

  // Calculate opacities based on scroll progress
  // The text fades in quickly, stays, then fades out at the very end (scroll > 0.8)
  const textOpacity = scrollProgress > 0.1 && scrollProgress < 0.8 ? 1 : 0;

  return (
    <div className="relative w-full bg-[#0a0a0a] text-[#f5f5f5] font-sans selection:bg-white selection:text-black">

      {/* 1. The Stitch Typography Hero */}
      <Hero />

      {/* 
                2. The 3D Scroll Bridge
                We give this a huge fixed height so the scroll-[0a0a0a]ing canvas can play thoroughly 
                as the user scrolls down from the Hero.
            */}
      <section className="relative w-full h-[400vh] bg-[#000000]">
        {/* 
                    The sticky container holds the canvas firmly in the viewport.
                    Because the background is pitch black, it transitions perfectly from the dark Stitch hero.
                */}
        <div className="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center">
          <FortuneCookieCanvas onProgressUpdate={setScrollProgress} />

          {/* Add a subtle overlay so it blends perfectly with the very dark gray #0a0a0a above and below */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-black pointer-events-none z-10 opacity-60"></div>

          {/* Floating text over the 3D cookie during the scroll sequence */}
          <div className="absolute top-[20%] w-full text-center z-20 pointer-events-none transition-opacity duration-700" style={{ opacity: textOpacity }}>
            <p className="font-serif italic text-3xl md:text-5xl text-white/80 tracking-wide">Break the illusion.</p>
          </div>
        </div>
      </section>

      {/* 
                3. The Main Content (Stitch Designs) 
                These flow naturally after the cookie has cracked open.
            */}
      <main className="relative z-20 bg-[#0a0a0a] flex flex-col items-center">
        <Marquee />
        <Ingredients />
        <ProductDetail />
        <Footer />
      </main>

    </div>
  );
};

export default App;
