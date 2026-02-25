import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, ChevronRight, Check } from 'lucide-react';

const ProductShowcase = () => {
    const [selectedTier, setSelectedTier] = useState('month');

    return (
        <section id="shop" className="relative w-full bg-black py-32 px-6 md:px-12 text-[#f5f5f5] selection:bg-white/20">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">The Collection.</h2>
                    <p className="text-lg text-[#ffffffa0] max-w-2xl font-light">
                        Designed for those who demand more from their daily rituals. Precision-baked, intentionally packaged, and unapologetically bold.
                    </p>
                </div>

                {/* Bento Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

                    {/* Main Visual - The Bundle (Left Side, 7 columns) */}
                    <div className="lg:col-span-7 rounded-3xl overflow-hidden bg-[#111] relative aspect-square lg:aspect-auto group">
                        {/* 
              Placeholder for the majestic stack/bundle image 
            */}
                        <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-black w-full h-full flex items-center justify-center">
                            <span className="text-zinc-600 font-mono text-sm">+ /public/bundle.jpg</span>
                            {/* <img src="/bundle.jpg" alt="A stack of premium metallic fortuna boxes" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700" /> */}
                        </div>

                        {/* Subtle overlay text on the image */}
                        <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-black/80 via-transparent to-transparent">
                            <h3 className="text-3xl font-bold tracking-tight">The Week</h3>
                            <p className="text-[#ffffffa0] mt-2 font-light">Seven days of raw honesty.</p>
                        </div>
                    </div>

                    {/* Pricing & Tiers (Right Side, 5 columns) */}
                    <div className="lg:col-span-5 flex flex-col gap-6">

                        {/* The single box */}
                        <div className="rounded-3xl bg-[#111] p-8 flex flex-col justify-between relative overflow-hidden h-full min-h-[300px]">
                            <div className="relative z-10">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="text-2xl font-bold tracking-tight">The Taste</h3>
                                        <p className="text-sm text-[#ffffffa0] mt-1">Single Box (10 Cookies)</p>
                                    </div>
                                    <span className="text-xl font-light">$15</span>
                                </div>
                                <p className="text-sm text-zinc-400 font-light mt-4">
                                    For the curious. A sleek metallic tin containing 10 individually wrapped fortunes.
                                </p>
                            </div>

                            <button className="relative z-10 w-full mt-8 py-4 px-6 rounded-full bg-white text-black font-semibold text-sm hover:scale-[1.02] hover:bg-zinc-200 transition-all flex justify-between items-center group">
                                <span>Add to Bag</span>
                                <ShoppingBag className="w-4 h-4 transition-transform group-hover:scale-110" />
                            </button>

                            {/* Background gradient hint */}
                            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white/5 blur-3xl rounded-full pointer-events-none" />
                        </div>

                        {/* Subscribe & Save Box */}
                        <div className="rounded-3xl bg-zinc-900 border border-zinc-800 p-8 flex flex-col">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-xl font-bold">The Ritual</h3>
                                <span className="px-3 py-1 bg-white/10 text-xs font-semibold rounded-full text-white">Save 20%</span>
                            </div>

                            <div className="space-y-4 mb-8">
                                {/* Option 1: Month */}
                                <label
                                    className={`flex flex-col p-4 rounded-2xl border cursor-pointer transition-colors ${selectedTier === 'month' ? 'border-white bg-white/5' : 'border-zinc-800 hover:border-zinc-700 bg-transparent'}`}
                                    onClick={() => setSelectedTier('month')}
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${selectedTier === 'month' ? 'border-white bg-white' : 'border-zinc-600'}`}>
                                                {selectedTier === 'month' && <Check className="w-3 h-3 text-black" />}
                                            </div>
                                            <span className="font-medium">Monthly Supply</span>
                                        </div>
                                        <div className="text-right">
                                            <span className="block font-bold">$75<span className="text-xs text-zinc-500 font-normal">/mo</span></span>
                                            <span className="text-xs text-red-400 line-through">$95</span>
                                        </div>
                                    </div>
                                    <p className="text-xs text-zinc-500 mt-2 ml-8">4 weeks of bundles delivered seamlessly.</p>
                                </label>

                                {/* Option 2: Week */}
                                <label
                                    className={`flex flex-col p-4 rounded-2xl border cursor-pointer transition-colors ${selectedTier === 'week' ? 'border-white bg-white/5' : 'border-zinc-800 hover:border-zinc-700 bg-transparent'}`}
                                    onClick={() => setSelectedTier('week')}
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${selectedTier === 'week' ? 'border-white bg-white' : 'border-zinc-600'}`}>
                                                {selectedTier === 'week' && <Check className="w-3 h-3 text-black" />}
                                            </div>
                                            <span className="font-medium">The Week (7 Boxes)</span>
                                        </div>
                                        <div className="text-right">
                                            <span className="block font-bold">$85</span>
                                            <span className="text-xs text-zinc-500">One-time</span>
                                        </div>
                                    </div>
                                </label>
                            </div>

                            <button className="w-full py-4 px-6 rounded-full bg-zinc-800 text-white font-semibold text-sm hover:bg-zinc-700 transition-colors flex justify-center items-center gap-2">
                                <span>Select Plan</span>
                                <ChevronRight className="w-4 h-4" />
                            </button>
                            <ul className="mt-4 space-y-2 text-xs text-zinc-500 font-light">
                                <li className="flex items-center gap-2">✓ Free expedited shipping</li>
                                <li className="flex items-center gap-2">✓ Cancel or pause anytime</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductShowcase;
