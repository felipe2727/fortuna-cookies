import React from 'react';
import { Leaf, Award, Flame, Zap } from 'lucide-react';

const NutritionGrid = () => {
    return (
        <section className="relative w-full bg-black py-32 px-6 md:px-12 text-[#f5f5f5] overflow-hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-12 border-t border-zinc-900 pt-16">

                {/* Left Side: Editorial/Scientific text */}
                <div className="lg:col-span-5 mb-16 lg:mb-0 pr-0 lg:pr-12 border-b lg:border-b-0 lg:border-r border-zinc-900 pb-16 lg:pb-0">
                    <span className="text-xs font-mono tracking-widest text-zinc-500 uppercase mb-4 block">Formulation & Quality</span>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8 leading-tight">
                        Actually Good.<br />
                        No Compromises.
                    </h2>
                    <p className="text-zinc-400 font-light leading-relaxed mb-8">
                        Every ingredient in our cookies was selected to prove that a gimmick doesn't have to taste like one.
                        We use premium organic flour, real Madagascar vanilla, and a hint of dark cocoa.
                    </p>

                    <div className="grid grid-cols-2 gap-y-8 gap-x-4">
                        <div>
                            <div className="text-4xl font-light mb-2">0<span className="text-xl text-zinc-500">g</span></div>
                            <p className="text-xs font-semibold tracking-wide text-zinc-400 uppercase">Seed Oils</p>
                        </div>
                        <div>
                            <div className="text-4xl font-light mb-2">100<span className="text-xl text-zinc-500">%</span></div>
                            <p className="text-xs font-semibold tracking-wide text-zinc-400 uppercase">Organic Wheat</p>
                        </div>
                        <div>
                            <div className="text-4xl font-light mb-2">3<span className="text-xl text-zinc-500">g</span></div>
                            <p className="text-xs font-semibold tracking-wide text-zinc-400 uppercase">Sugar Per Box</p>
                        </div>
                        <div>
                            <div className="text-4xl font-light mb-2">∞</div>
                            <p className="text-xs font-semibold tracking-wide text-zinc-400 uppercase">Bold Fortunes</p>
                        </div>
                    </div>
                </div>

                {/* Right Side: Visuals & Icon Grid */}
                <div className="lg:col-span-7 flex flex-col justify-center gap-12">

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {/* Icon 1 */}
                        <div className="flex flex-col items-center text-center group">
                            <div className="w-16 h-16 rounded-full border border-zinc-800 flex items-center justify-center mb-4 transition-colors group-hover:bg-white group-hover:text-black">
                                <Leaf className="w-6 h-6" />
                            </div>
                            <span className="text-sm font-medium">Non-GMO</span>
                        </div>

                        {/* Icon 2 */}
                        <div className="flex flex-col items-center text-center group">
                            <div className="w-16 h-16 rounded-full border border-zinc-800 flex items-center justify-center mb-4 transition-colors group-hover:bg-white group-hover:text-black">
                                <Award className="w-6 h-6" />
                            </div>
                            <span className="text-sm font-medium">Chef Crafted</span>
                        </div>

                        {/* Icon 3 */}
                        <div className="flex flex-col items-center text-center group">
                            <div className="w-16 h-16 rounded-full border border-zinc-800 flex items-center justify-center mb-4 transition-colors group-hover:bg-white group-hover:text-black">
                                <Zap className="w-6 h-6" />
                            </div>
                            <span className="text-sm font-medium">Low Carb</span>
                        </div>

                        {/* Icon 4 */}
                        <div className="flex flex-col items-center text-center group">
                            <div className="w-16 h-16 rounded-full border border-zinc-800 flex items-center justify-center mb-4 transition-colors group-hover:bg-white group-hover:text-black">
                                <Flame className="w-6 h-6" />
                            </div>
                            <span className="text-sm font-medium">Bad B*tch Approved</span>
                        </div>
                    </div>

                    {/* Placeholder for Single Cookie Detailed Image */}
                    <div className="w-full h-80 bg-[#111] rounded-3xl overflow-hidden relative mt-8 flex items-center justify-center">
                        <span className="text-zinc-600 font-mono text-sm inline-flex flex-col items-center gap-2">
                            <span>+ /public/cookie.jpg</span>
                            <span className="text-xs text-zinc-700">(Macro shot of the glowing cookie & slip)</span>
                        </span>
                        {/* <img src="/cookie.jpg" alt="Macro detail of fortune cookie" className="w-full h-full object-cover" /> */}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default NutritionGrid;
