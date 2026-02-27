import React, { useState } from 'react';

const ProductDetail = () => {
    const [selectedTier, setSelectedTier] = useState('ritual');

    return (
        <section className="bg-background-dark text-text-dark font-body antialiased transition-colors duration-300">
            <main className="min-h-screen grid grid-cols-1 lg:grid-cols-2">

                {/* Left Panel - Sticky Visuals */}
                <div className="relative h-[50vh] lg:h-screen lg:sticky lg:top-0 bg-[#000000] flex items-center justify-center overflow-hidden group border-r border-white/5">
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-white/5 pointer-events-none"></div>
                    <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

                    <div className="relative w-3/4 max-w-md aspect-[3/4] transition-transform duration-700 ease-out group-hover:scale-105">
                        <img
                            alt="Sleek matte black metallic tin with silver accents containing premium fortune cookies"
                            className="w-full h-full object-cover shadow-2xl filter brightness-90 contrast-125 grayscale-[20%]"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBptwuhjF1iw4ewwGYgu42mXejwHKfRAdnA84Y9jQjFnd8myQbB1j2QcnxRPJQj6qxd_oPRLT_QF-C7i8Dqs1FlS5mp-IPJoZQpTplfw09QnRjYXJ9IuCySePExClCE0kj1nC4Aa026VMazIHJ38l3Q7nCyDO_1i2mW59Gah8Nk3F-WkqQ37qCcBRBhwsWa0J-8Wxd0WpheY5rD4p95wlR4-iuf9HwDk_5ve46A2_9rryLAHZhw812WkfAOkwxblRjNAxWV5P_jITOW"
                        />
                        <div className="absolute -bottom-10 -right-10 w-32 h-32 border border-current opacity-20 rounded-full"></div>
                        <div className="absolute top-10 -left-10 text-9xl font-display font-bold opacity-5 select-none -rotate-90 text-white">01</div>
                    </div>

                    <div className="absolute bottom-8 left-8 text-white">
                        <p className="font-display text-xs tracking-[0.2em] uppercase opacity-60">Matte Black Edition</p>
                        <p className="font-display text-xs tracking-[0.2em] uppercase opacity-60 mt-1">Batch No. 892</p>
                    </div>
                </div>

                {/* Right Panel - Interactivity & Details */}
                <div className="px-6 py-12 lg:px-16 lg:py-24 flex flex-col justify-center min-h-screen bg-background-dark text-white">
                    <div className="max-w-xl mx-auto w-full space-y-12">

                        {/* Header Area */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="px-2 py-0.5 border border-white/20 text-[10px] tracking-widest uppercase font-bold text-white">Best Seller</span>
                                <span className="text-xs text-green-400 font-medium flex items-center gap-1">
                                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span> In Stock
                                </span>
                            </div>
                            <h1 className="text-5xl md:text-7xl font-display font-bold leading-[0.9] tracking-tighter uppercase text-white">
                                The <br /><span className="text-transparent" style={{ WebkitTextStroke: '1px currentColor' }}>Ritual</span>
                            </h1>
                            <p className="text-lg md:text-xl font-light opacity-80 leading-relaxed max-w-md font-sans text-gray-300">
                                Guidance, neatly packaged. A monthly supply of wisdom and artisanal flavor, designed to align your chakras and your palate.
                            </p>
                        </div>

                        {/* Tier Selection */}
                        <div className="space-y-6">
                            <h3 className="font-display text-sm tracking-[0.2em] uppercase opacity-50 border-b border-white pb-2 text-white">Select Your Frequency</h3>

                            {/* Option 1: The Taste */}
                            <label className="group relative block cursor-pointer">
                                <input
                                    type="radio"
                                    name="plan"
                                    value="taste"
                                    className="peer sr-only"
                                    checked={selectedTier === 'taste'}
                                    onChange={() => setSelectedTier('taste')}
                                />
                                <div className={`flex items-start justify-between p-6 border transition-all duration-300 hover:border-white ${selectedTier === 'taste' ? 'bg-white text-black border-white' : 'border-gray-700 bg-transparent text-white'}`}>
                                    <div className="space-y-1">
                                        <span className="font-display text-2xl font-bold uppercase">The Taste</span>
                                        <p className="text-sm opacity-70 group-hover:opacity-100 transition-opacity font-sans">Single tin. 12 cookies. One time purchase.</p>
                                    </div>
                                    <div className="font-display text-xl">$15</div>
                                </div>
                            </label>

                            {/* Option 2: The Week */}
                            <label className="group relative block cursor-pointer">
                                <input
                                    type="radio"
                                    name="plan"
                                    value="week"
                                    className="peer sr-only"
                                    checked={selectedTier === 'week'}
                                    onChange={() => setSelectedTier('week')}
                                />
                                <div className={`flex items-start justify-between p-6 border transition-all duration-300 hover:border-white ${selectedTier === 'week' ? 'bg-white text-black border-white' : 'border-gray-700 bg-transparent text-white'}`}>
                                    <div className="space-y-1">
                                        <span className="font-display text-2xl font-bold uppercase">The Week</span>
                                        <p className="text-sm opacity-70 group-hover:opacity-100 transition-opacity font-sans">7 tins. Daily ritual. One time purchase.</p>
                                    </div>
                                    <div className="text-right">
                                        <div className="font-display text-xl">$85</div>
                                        <div className="text-xs line-through opacity-50 font-sans">$105</div>
                                    </div>
                                </div>
                            </label>

                            {/* Option 3: The Ritual */}
                            <label className="group relative block cursor-pointer">
                                <input
                                    type="radio"
                                    name="plan"
                                    value="ritual"
                                    className="peer sr-only"
                                    checked={selectedTier === 'ritual'}
                                    onChange={() => setSelectedTier('ritual')}
                                />
                                <div className={`flex items-start justify-between p-6 border-2 transition-all duration-300 relative overflow-hidden ${selectedTier === 'ritual' ? 'bg-white text-black border-white' : 'border-white bg-[#111] text-white'}`}>
                                    <div className={`absolute top-0 right-0 px-3 py-1 text-[10px] font-bold uppercase tracking-widest ${selectedTier === 'ritual' ? 'bg-black text-white' : 'bg-white text-black'}`}>
                                        Most Popular
                                    </div>
                                    <div className="space-y-1 relative z-10 pt-2">
                                        <span className="font-display text-2xl font-bold uppercase">The Ritual</span>
                                        <p className="text-sm opacity-70 group-hover:opacity-100 transition-opacity font-sans">Monthly subscription. 4 tins/mo.</p>
                                        <p className="text-xs opacity-60 mt-2 font-mono">Cancel anytime. Free shipping.</p>
                                    </div>
                                    <div className="text-right relative z-10 mt-6">
                                        <div className="font-display text-xl">$75<span className="text-sm opacity-60 font-normal">/mo</span></div>
                                    </div>
                                </div>
                            </label>
                        </div>

                        <button className="w-full bg-white text-black py-5 px-8 font-display text-lg font-bold tracking-widest uppercase hover:opacity-90 transition-opacity flex justify-between items-center group">
                            <span>Add to Bag</span>
                            <span className="group-hover:translate-x-1 transition-transform material-icons-outlined">arrow_forward</span>
                        </button>

                        {/* Accordion area */}
                        <div className="border-t border-gray-700 pt-8 space-y-4 text-white">
                            <details className="group border-b border-gray-800 pb-4 cursor-pointer" open>
                                <summary className="flex justify-between items-center font-display text-lg font-bold uppercase list-none select-none">
                                    The Formulation
                                    <span className="material-icons-outlined transition-transform group-open:rotate-180">expand_more</span>
                                </summary>
                                <div className="mt-4 text-sm opacity-80 leading-relaxed font-light grid grid-cols-2 gap-4 font-sans">
                                    <div>
                                        <h4 className="font-bold mb-1 uppercase text-xs tracking-widest opacity-60">Base</h4>
                                        <ul className="space-y-1">
                                            <li>Organic Wheat Flour</li>
                                            <li>Grass-fed Ghee</li>
                                            <li>Free-range Eggs</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-bold mb-1 uppercase text-xs tracking-widest opacity-60">Notes</h4>
                                        <ul className="space-y-1">
                                            <li>Madagascar Vanilla</li>
                                            <li>Activated Charcoal</li>
                                            <li>Hint of Sea Salt</li>
                                        </ul>
                                    </div>
                                    <p className="col-span-2 mt-2 text-xs opacity-60 border-t border-dashed border-gray-700 pt-2">
                                        * Contains gluten, dairy, and eggs. Processed in a facility that handles nuts.
                                    </p>
                                </div>
                            </details>

                            <details className="group border-b border-gray-800 pb-4 cursor-pointer">
                                <summary className="flex justify-between items-center font-display text-lg font-bold uppercase list-none select-none">
                                    The Wisdom
                                    <span className="material-icons-outlined transition-transform group-open:rotate-180">expand_more</span>
                                </summary>
                                <div className="mt-4 text-sm opacity-80 leading-relaxed font-light font-sans text-gray-300">
                                    <p>
                                        Each cookie contains a fortune curated by modern philosophers, poets, and AI hallucinating about the future. No lucky numbers. No vague promises. Just raw, unfiltered truth.
                                    </p>
                                </div>
                            </details>

                            {/* Removed Shipping accordion to keep it cleaner */}

                        </div>
                    </div>
                </div>
            </main>
        </section>
    );
};

export default ProductDetail;
