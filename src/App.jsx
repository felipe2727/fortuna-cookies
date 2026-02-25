import { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import FortuneCookieCanvas from './components/FortuneCookieCanvas';
import WaitlistButton from './components/WaitlistButton';
import ProductShowcase from './components/ProductShowcase';
import NutritionGrid from './components/NutritionGrid';

const App = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const progressValue = useMotionValue(0);

  useEffect(() => {
    progressValue.set(scrollProgress);
  }, [scrollProgress, progressValue]);

  // Apple-like scroll effect for the text
  const textOpacity = useTransform(progressValue, [0.1, 0.4], [0, 1]);
  const textTranslateY = useTransform(progressValue, [0.1, 0.4], [50, 0]);

  // Waitlist button fades in slightly later as you continue to scroll
  const btnOpacity = useTransform(progressValue, [0.5, 0.8], [0, 1]);
  const btnTranslateY = useTransform(progressValue, [0.5, 0.8], [20, 0]);

  return (
    // Base background is pitch black to match the cookie background seamlessly
    <div className="relative w-full bg-black text-[#f5f5f5] font-sans selection:bg-white/20">

      {/* 
        Hero Section: 
        We give this a huge fixed height so the scroll-jacking canvas can play thoroughly.
      */}
      <section className="relative w-full h-[400vh] bg-black">

        {/* The sticky container holds both the canvas and the text overlay firmly in the viewport */}
        <div className="sticky top-0 w-full h-screen overflow-hidden">

          {/* The canvas that plays the frame sequence */}
          <FortuneCookieCanvas onProgressUpdate={setScrollProgress} />

          {/* 
            Foreground Content: 
            Brand name and provocative copy, aligned to the left half.
            It sits absolutely over the canvas within the sticky container.
          */}
          <div className="absolute inset-0 pointer-events-none z-10 flex items-center">
            <div className="w-full max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2">

              <div className="flex flex-col justify-center max-w-xl pointer-events-auto">
                <motion.div style={{ opacity: textOpacity, y: textTranslateY }}>
                  <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6">
                    fortuna.
                  </h1>
                  <p className="text-xl md:text-2xl font-light leading-relaxed text-[#ffffffa0] mb-12">
                    Unapologetically premium. <br className="hidden md:block" />
                    Fortunes that actually mean something, inside a cookie that actually tastes good.
                  </p>
                </motion.div>

                <motion.div style={{ opacity: btnOpacity, y: btnTranslateY }} className="h-20">
                  <WaitlistButton isVisible={true} />
                </motion.div>
              </div>

              {/* Right side is intentionally empty to let the 3D cookie shine */}
              <div className="hidden md:block"></div>

            </div>
          </div>
        </div>
      </section>

      {/* Main Content below the Hero */}
      <main className="relative z-20 bg-black">
        <ProductShowcase />
        <NutritionGrid />
      </main>

    </div>
  );
};

export default App;
