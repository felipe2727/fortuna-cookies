import React from 'react';
import { ArrowRight } from 'lucide-react';

const WaitlistButton = () => {
  return (
    <form className="flex w-full max-w-lg mx-auto pointer-events-auto" onSubmit={(e) => e.preventDefault()}>
      <input
        type="email"
        placeholder="Enter your email for early access"
        required
        className="flex-grow bg-transparent border border-white/20 border-r-0 text-white placeholder-gray-500 px-6 py-4 text-sm font-sans focus:outline-none focus:border-white focus:border-r transition-colors duration-300 min-w-0"
      />
      <button
        type="submit"
        className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-black font-sans text-sm font-bold tracking-widest uppercase overflow-hidden whitespace-nowrap shrink-0"
      >
        <span className="relative z-10 transition-colors duration-300 group-hover:text-white">Join Waitlist</span>
        <ArrowRight className="w-4 h-4 relative z-10 transition-colors duration-300 group-hover:text-white group-hover:translate-x-1" />

        {/* Hover fill effect */}
        <div className="absolute inset-0 translate-y-[100%] bg-[#111] transition-transform duration-300 ease-in-out group-hover:translate-y-0 z-0" />
      </button>
    </form>
  );
};

export default WaitlistButton;
