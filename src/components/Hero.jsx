import React from 'react';

const Hero = () => {
    return (
        <section className="relative w-full min-h-screen flex flex-col overflow-hidden bg-background-dark text-white selection:bg-white selection:text-black">
            {/* Top Navigation Overlay */}
            <nav className="absolute top-0 w-full z-50 px-6 py-6 md:px-12 md:py-8 flex justify-between items-center bg-transparent mix-blend-difference">
                <div className="flex items-center space-x-8">
                    <a className="text-sm font-medium tracking-widest uppercase hover:underline decoration-1 underline-offset-4 transition-all" href="#shop">Shop</a>
                    <a className="hidden md:block text-sm font-medium tracking-widest uppercase hover:underline decoration-1 underline-offset-4 transition-all" href="#ritual">The Ritual</a>
                </div>
                {/* Logo centered */}
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <a className="text-2xl font-serif font-semibold tracking-tighter italic" href="#">fortuna.</a>
                </div>
                <div className="flex items-center space-x-6">
                    <a className="text-sm font-medium tracking-widest uppercase hover:underline decoration-1 underline-offset-4 transition-all hidden md:block" href="#">Login</a>
                    <button className="relative group hover:opacity-70 transition-opacity">
                        <span className="material-icons-outlined text-2xl">shopping_bag</span>
                    </button>
                    <button className="hover:opacity-70 transition-opacity md:hidden">
                        <span className="material-icons-outlined text-2xl">menu</span>
                    </button>
                </div>
            </nav>

            {/* Main Hero Content */}
            <main className="flex-grow flex justify-center items-center relative z-10 w-full h-full px-6 md:px-12 pt-20">
                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 pointer-events-none"></div>

                {/* Single central column for typography instead of two since we removed the cookie */}
                <div className="relative z-20 flex flex-col justify-center items-center text-center space-y-10 max-w-4xl mx-auto w-full">
                    <div className="space-y-4 animate-[fadeInUp_1s_ease-out_forwards]">
                        <p className="text-xs font-bold tracking-[0.3em] uppercase text-gray-400">Limited Edition Release</p>
                        <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif italic text-white leading-[0.9]">
                            Unapologetic <br />
                            <span className="not-italic font-bold tracking-tighter block mt-2 font-display">Truth.</span>
                        </h1>
                    </div>

                    <div className="max-w-xl mx-auto animate-[fadeInUp_1s_ease-out_forwards]" style={{ animationDelay: '0.2s', opacity: 0 }}>
                        <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-light font-sans">
                            Fortunes that don't sugarcoat. A minimalist confection for the stark realist. Experience the future of fate.
                        </p>
                    </div>

                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-3 opacity-50 hover:opacity-100 transition-opacity cursor-pointer">
                    <span className="text-[10px] font-sans uppercase tracking-[0.2em] font-bold">Scroll</span>
                    <div className="w-[1px] h-16 bg-gray-600 overflow-hidden relative">
                        <div className="absolute top-0 left-0 w-full h-1/2 bg-white animate-[slideDown_1.5s_infinite]"></div>
                    </div>
                </div>
            </main>

            {/* Custom CSS specifically for these animations */}
            <style jsx>{`
                @keyframes fadeInUp {
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                }
                @keyframes slideDown {
                    0% { transform: translateY(-100%); }
                    100% { transform: translateY(200%); }
                }
            `}</style>
        </section>
    );
};

export default Hero;
