import React from 'react';

const Footer = () => {
    return (
        <footer className="w-full bg-[#0a0a0a] text-white py-12 px-6 lg:px-16 border-t border-white/10 mt-auto">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
                {/* Brand & Description */}
                <div className="text-center md:text-left space-y-4">
                    <h4 className="text-2xl font-serif font-semibold italic tracking-tighter">fortuna.</h4>
                    <p className="text-gray-400 text-sm max-w-sm leading-relaxed font-sans">
                        Curated fortunes for the modern soul. <br className="hidden md:block" />
                        Handcrafted in strictly limited batches.
                    </p>
                </div>

                {/* Social Links */}
                <div className="flex gap-8 text-xs font-mono uppercase tracking-[0.2em] text-gray-400 pt-2">
                    <a className="hover:text-white transition-colors" href="#">Instagram</a>
                    <a className="hover:text-white transition-colors" href="#">Twitter</a>
                    <a className="hover:text-white transition-colors" href="#">Contact</a>
                </div>
            </div>

            {/* Copyright */}
            <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/10 text-center md:text-left text-[10px] text-gray-500 uppercase tracking-widest font-sans">
                © 2026 Fortuna Holdings. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
