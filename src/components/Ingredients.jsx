import React from 'react';
import WaitlistButton from './WaitlistButton';

const Ingredients = () => {
    return (
        <section className="bg-[#0a0a0a] text-gray-100 font-sans antialiased w-full w-full">
            <main className="p-6 md:p-12 lg:p-20 max-w-7xl mx-auto w-full">
                {/* Waitlist Call to Action */}
                <div className="w-full flex flex-col items-center justify-center mb-32 mt-16 text-center space-y-10">
                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif italic text-white leading-[1.1] tracking-tighter">
                        Captivated? <br />
                        <span className="text-gray-400 text-2xl md:text-3xl lg:text-4xl not-italic font-light tracking-tight mt-4 block">Secure your fate.</span>
                    </h2>
                    <WaitlistButton />
                </div>

                {/* Header */}
                <div className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-gray-800 pb-8">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold tracking-tight mb-2 text-white">Origin & Extraction</h1>
                        <p className="text-sm uppercase tracking-widest text-gray-400 font-mono">The Formulation</p>
                    </div>
                </div>

                {/* 3 Column Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-gray-600">

                    {/* Item 1: Artisanal Ghee */}
                    <div className="group relative flex flex-col border-r border-b border-gray-600 bg-card-dark h-[500px]">
                        <div className="h-1/2 w-full overflow-hidden relative">
                            <img alt="Macro photography of golden clarified butter texture" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale hover:grayscale-0 filter brightness-90" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDH-uE-DGx162At3IhZ2k0DO6UZSu0LnJr64wYNMWz29YR7idw-9Djn5xG9yB0n5-6RDR6RApXVxKuV04cgJaodpawYzEa3M4me6qNnXzEthcIBcxGy3K7b9JskQxip6ijqSRi4oXoHzoSZ4uarC48L-kT1Y5PjK8lYldKn10ihOiDNmJqRLe3a1KpqdPY0HvdnR3OtNJ_FJzSQuM3UBtXzr62rU3oPWJVS_zbGa8dZxsdPj0RQxpNhgMitlF6uqJYFvyX6jISAuC67" />
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-300"></div>
                        </div>
                        <div className="h-1/2 p-6 flex flex-col justify-between">
                            <div>
                                <h3 className="text-2xl font-serif mb-2 text-white">Artisanal Ghee</h3>
                                <p className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-4">Origin: Normandy, France</p>
                                <p className="text-sm text-gray-300 leading-relaxed line-clamp-3 font-sans">
                                    Clarified to absolute purity. Our butter is sourced from grass-fed herds in Normandy, then slow-simmered until the milk solids caramelize, imparting a nutty, rich depth to the cookie shell.
                                </p>
                            </div>
                            <div className="pt-6 border-t border-gray-700 mt-auto">
                                <div className="mt-4 flex gap-4 text-[10px] uppercase tracking-wider text-gray-400">
                                    <span className="flex items-center gap-1"><span className="material-icons text-xs">verified</span> Hand Clarified</span>
                                    <span className="flex items-center gap-1"><span className="material-icons text-xs">verified</span> Grass-Fed</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Item 2: Heirloom Coconut */}
                    <div className="group relative flex flex-col border-r border-b border-gray-600 bg-card-dark h-[500px]">
                        <div className="h-1/2 w-full overflow-hidden relative">
                            <img alt="Cracked organic coconut close up" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale hover:grayscale-0 filter brightness-90" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXCHHXAGXT-wKsP0Xo1ne91SVqnMDfYlKRpNBSWSbNF_QJ0GYJ8dPWNMFJJ_pNP3I3E8tvXjX7eon1GXp4aB3d8Iy-kVL5lz3Push0u8dy10XHt0QSjkcyVX7qdeIaH_7yftSZ1CPGDfGiqYw8DvCQKj_FSqImqlsvCgvGCAApZYJFc-3V1WTlbRum_IR0qgmRHaSWu348IYtIt_3vEPlJQJoKvQVV4BGWaO4QYnItR6Ja_3b2eogk5oKe2zbocFfDQ_WEiGP7faSa" />
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-300"></div>
                        </div>
                        <div className="h-1/2 p-6 flex flex-col justify-between">
                            <div>
                                <h3 className="text-2xl font-serif mb-2 text-white">Heirloom Coconut</h3>
                                <p className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-4">Origin: Kerala, India</p>
                                <p className="text-sm text-gray-300 leading-relaxed line-clamp-3 font-sans">
                                    Sourced from ancient groves. We use the full fat of the kernel, cold-pressed to retain the volatile oils that provide a crisp snap and a lingering tropical finish without artificial sweetness.
                                </p>
                            </div>
                            <div className="pt-6 border-t border-gray-700 mt-auto">
                                <div className="mt-4 flex gap-4 text-[10px] uppercase tracking-wider text-gray-400">
                                    <span className="flex items-center gap-1"><span className="material-icons text-xs">verified</span> Cold Pressed</span>
                                    <span className="flex items-center gap-1"><span className="material-icons text-xs">verified</span> Organic</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Item 3: Bourbon Vanilla */}
                    <div className="group relative flex flex-col border-r border-b border-gray-600 bg-card-dark h-[500px]">
                        <div className="h-1/2 w-full overflow-hidden relative">
                            <img alt="Dark vanilla bean pods macro" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale hover:grayscale-0 filter brightness-90" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCy5SFo02iCCL0BkCOhsvZPMTILIhSUBL1saRI5Njaulcp3O2dLZw0UfKnqs8JNNKmVVLlFjnnK2CAEeM63d4n9JIxEmGgIj9G-8WWXa8gf6ZLNl2JgFVZW3x8QaIzMu-HotFREXRK-b7kXnmPv8VHL3fJCDMQgeXM6OC1NARQM_z5POazHH-mR76dbOgGuVE-GHMewS_I3LFKo-lI4bQJUujNsEB8Q66AKHww8mz-bGCkjYDmXwpjH9DOtcy42V5puHfhe5Lm0e1Wn" />
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-300"></div>
                        </div>
                        <div className="h-1/2 p-6 flex flex-col justify-between">
                            <div>
                                <h3 className="text-2xl font-serif mb-2 text-white">Bourbon Vanilla</h3>
                                <p className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-4">Origin: Madagascar</p>
                                <p className="text-sm text-gray-300 leading-relaxed line-clamp-3 font-sans">
                                    Whole beans, scraped by hand. Never extract. The tiny black seeds visible in our dough release a complex floral aroma that balances the savory notes of the ghee.
                                </p>
                            </div>
                            <div className="pt-6 border-t border-gray-700 mt-auto">
                                <div className="mt-4 flex gap-4 text-[10px] uppercase tracking-wider text-gray-400">
                                    <span className="flex items-center gap-1"><span className="material-icons text-xs">verified</span> Hand Scraped</span>
                                    <span className="flex items-center gap-1"><span className="material-icons text-xs">verified</span> Single Origin</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Lower Typography Section - The Fortunes */}
                <div className="mt-24 border-t-2 border-gray-100 pt-16">
                    <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
                        <div className="lg:w-1/4">
                            <h2 className="text-3xl font-serif font-bold mb-4 text-white">The Fortunes</h2>
                            <p className="text-sm text-gray-400 leading-relaxed mb-6 font-sans">
                                We rejected the vague optimism of mass production. Our fortunes are authored by contemporary poets, cynics, and realists. Expect provocation, not platitudes.
                            </p>
                        </div>
                        <div className="lg:w-3/4 w-full grid grid-cols-1 md:grid-cols-2 gap-8">

                            <div className="bg-[#111] p-8 shadow-sm border border-gray-700 relative overflow-hidden group hover:border-white transition-colors">
                                <span className="absolute top-2 left-4 text-4xl text-gray-800 font-serif">"</span>
                                <p className="font-mono text-lg md:text-xl text-gray-200 leading-relaxed pt-4">
                                    YOUR AMBITION IS A HAMMER, BUT THE PROBLEM IS NOT A NAIL. TRY LISTENING FOR ONCE.
                                </p>
                                <div className="mt-6 flex justify-between items-end border-t border-gray-700 pt-4">
                                    <span className="text-[10px] uppercase tracking-widest text-gray-500 font-sans">Series: 001-A</span>
                                    <span className="text-[10px] uppercase tracking-widest text-gray-500 font-sans">#Brutalist</span>
                                </div>
                            </div>

                            <div className="bg-[#111] p-8 shadow-sm border border-gray-700 relative overflow-hidden group hover:border-white transition-colors">
                                <span className="absolute top-2 left-4 text-4xl text-gray-800 font-serif">"</span>
                                <p className="font-mono text-lg md:text-xl text-gray-200 leading-relaxed pt-4">
                                    THE LOVE YOU ARE LOOKING FOR IS ALREADY IN THE ROOM. PUT DOWN YOUR PHONE.
                                </p>
                                <div className="mt-6 flex justify-between items-end border-t border-gray-700 pt-4">
                                    <span className="text-[10px] uppercase tracking-widest text-gray-500 font-sans">Series: 004-C</span>
                                    <span className="text-[10px] uppercase tracking-widest text-gray-500 font-sans">#RealityCheck</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </main>
        </section>
    );
};

export default Ingredients;
