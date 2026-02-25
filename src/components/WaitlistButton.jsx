import React from 'react';
import { ArrowRight } from 'lucide-react';

const WaitlistButton = () => {
  return (
    <div className="flex pointer-events-auto w-fit">
      <a
        href="#join"
        className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-black font-sans text-sm font-bold tracking-widest uppercase overflow-hidden"
      >
        <span className="relative z-10 transition-colors duration-300 group-hover:text-white">Join Waitlist</span>
        <ArrowRight className="w-4 h-4 relative z-10 transition-colors duration-300 group-hover:text-white group-hover:translate-x-1" />

        {/* Hover fill effect */}
        <div className="absolute inset-0 translate-y-[100%] bg-zinc-800 transition-transform duration-300 ease-in-out group-hover:translate-y-0 z-0" />
      </a>
    </div>
  );
};

export default WaitlistButton;
