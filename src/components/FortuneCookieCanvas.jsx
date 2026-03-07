import React, { useRef, useEffect, useState } from 'react';

const TOTAL_FRAMES = 192;

const FortuneCookieCanvas = ({ onProgressUpdate }) => {
    const canvasRef = useRef(null);
    const imagesRef = useRef([]);
    const [imagesLoaded, setImagesLoaded] = useState(0);

    // 1. Instant First Frame & 2. Async Off-Thread Decoding
    useEffect(() => {
        let isSetup = true;

        const loadSequence = async () => {
            try {
                // Instantly load and decode the very first frame to unblock rendering
                const firstImg = new Image();
                firstImg.src = `/frames/frame_000_delay-0.041s.jpg`;
                await firstImg.decode();

                if (!isSetup) return;
                imagesRef.current[0] = firstImg;
                setImagesLoaded(1);

                // Silently decode the rest off the main thread
                let loadedCount = 1;
                for (let i = 1; i < TOTAL_FRAMES; i++) {
                    const img = new Image();
                    const frameIndexStr = i.toString().padStart(3, '0');
                    img.src = `/frames/frame_${frameIndexStr}_delay-0.041s.jpg`;

                    try {
                        await img.decode();
                        if (!isSetup) return;
                        imagesRef.current[i] = img;
                    } catch (e) {
                        console.warn(`Failed to decode frame i=${i}`);
                        if (!isSetup) return;
                        if (i > 0) {
                            imagesRef.current[i] = imagesRef.current[i - 1]; // Fallback safely
                        }
                    }
                    loadedCount++;
                    setImagesLoaded(loadedCount);
                }
            } catch (e) {
                console.error("Critical failure loading first frame", e);
            }
        };

        loadSequence();
        return () => { isSetup = false; };
    }, []);

    // Handle Scroll and Draw
    useEffect(() => {
        // Only require the FIRST frame to be loaded to start rendering immediately
        if (imagesLoaded < 1) return;

        const canvas = canvasRef.current;
        const context = canvas.getContext('2d', { alpha: false }); // Optimization for opaque canvas
        let animationFrameId;

        // 4. Cached Dimensions
        let cachedDimensions = { width: window.innerWidth, height: window.innerHeight };

        // 3. Decoupled Render Loop state
        let lastRenderedFrame = -1;

        const updateDimensions = () => {
            cachedDimensions = { width: window.innerWidth, height: window.innerHeight };
            canvas.width = cachedDimensions.width;
            canvas.height = cachedDimensions.height;
            lastRenderedFrame = -1; // Force a violent redraw on next resize
        };

        // Initialize once
        updateDimensions();

        const container = canvas.closest('section');

        const tick = () => {
            if (!container) return;

            const rect = container.getBoundingClientRect();
            const scrolledPx = -rect.top;
            const maxScroll = rect.height - cachedDimensions.height;

            const progress = maxScroll > 0 ? scrolledPx / maxScroll : 0;
            const clampedProgress = Math.min(Math.max(progress, 0), 1);

            onProgressUpdate(clampedProgress);

            const frameIndex = Math.floor(clampedProgress * (TOTAL_FRAMES - 1));

            // 3. Decoupled Render Loop: Only draw if the target frame mathematically changed
            if (frameIndex !== lastRenderedFrame) {
                // Fallback safely to nearest loaded image or 0th frame
                const imageToDraw = imagesRef.current[frameIndex] || imagesRef.current[0];

                if (imageToDraw) {
                    const { width, height } = cachedDimensions;
                    const scale = Math.max(width / imageToDraw.width, height / imageToDraw.height);
                    const drawWidth = imageToDraw.width * scale;
                    const drawHeight = imageToDraw.height * scale;

                    const xOffset = (width - drawWidth) / 2;
                    const yOffset = (height - drawHeight) / 2;

                    // Clear and draw native bounds
                    context.fillRect(0, 0, width, height);
                    context.drawImage(imageToDraw, 0, 0, imageToDraw.width, imageToDraw.height, xOffset, yOffset, drawWidth, drawHeight);

                    lastRenderedFrame = frameIndex;
                }
            }

            animationFrameId = requestAnimationFrame(tick);
        };

        tick();

        window.addEventListener('resize', updateDimensions);
        // We removed window.addEventListener('scroll') because tick now runs consistently under RAF decoupled from scroll jank events

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', updateDimensions);
        };
    }, [imagesLoaded, onProgressUpdate]);

    return (
        <div className="absolute inset-0 w-full h-full bg-black overflow-hidden flex flex-col justify-center items-center pointer-events-none">
            {/* Minimalist background loader that doesn't block the instant 1st frame rendering */}
            {imagesLoaded > 0 && imagesLoaded < TOTAL_FRAMES && (
                <div className="absolute bottom-[2%] right-[2%] z-50 flex items-center justify-center pointer-events-none mix-blend-difference opacity-50">
                    <div className="w-24 h-[1px] bg-white/30 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-white transition-all duration-300"
                            style={{ width: `${(imagesLoaded / TOTAL_FRAMES) * 100}%` }}
                        />
                    </div>
                </div>
            )}
            {/* The canvas sits behind everything. Mask the very top and very bottom so it fades seamlessly */}
            <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                style={{
                    WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)',
                    maskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)'
                }}
            />
        </div>
    );
};

export default FortuneCookieCanvas;
