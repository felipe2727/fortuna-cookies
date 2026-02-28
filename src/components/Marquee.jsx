import React from 'react';

const Marquee = () => {
    return (
        <div className="w-full bg-[#111111] text-white overflow-hidden py-4 border-y border-white/10">
            <div className="whitespace-nowrap flex animate-[marquee_20s_linear_infinite]">
                <span className="mx-8 text-sm font-mono uppercase tracking-widest">• Fortune favors the bold</span>
                <span className="mx-8 text-sm font-mono uppercase tracking-widest">• No empty promises</span>
                <span className="mx-8 text-sm font-mono uppercase tracking-widest">• Break it open</span>
                <span className="mx-8 text-sm font-mono uppercase tracking-widest">• Fortune favors the bold</span>
                <span className="mx-8 text-sm font-mono uppercase tracking-widest">• No empty promises</span>
                <span className="mx-8 text-sm font-mono uppercase tracking-widest">• Break it open</span>
                <span className="mx-8 text-sm font-mono uppercase tracking-widest">• Fortune favors the bold</span>
                <span className="mx-8 text-sm font-mono uppercase tracking-widest">• No empty promises</span>
                <span className="mx-8 text-sm font-mono uppercase tracking-widest">• Break it open</span>
            </div>
        </div>
    );
};

export default Marquee;
