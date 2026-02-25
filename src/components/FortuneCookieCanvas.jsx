import React, { useRef, useEffect, useState } from 'react';

const TOTAL_FRAMES = 192;

const FortuneCookieCanvas = ({ onProgressUpdate }) => {
    const canvasRef = useRef(null);
    const imagesRef = useRef([]);
    const [imagesLoaded, setImagesLoaded] = useState(0);

    // Preload Images
    useEffect(() => {
        let loadedCount = 0;
        const preloadImages = async () => {
            for (let i = 0; i < TOTAL_FRAMES; i++) {
                const img = new Image();
                const frameIndexStr = i.toString().padStart(3, '0');
                img.src = `/frames/frame_${frameIndexStr}_delay-0.041s.jpg`;

                await new Promise((resolve) => {
                    img.onload = () => {
                        loadedCount++;
                        setImagesLoaded(loadedCount);
                        imagesRef.current[i] = img;
                        resolve();
                    };
                    img.onerror = () => {
                        console.warn(`Failed to generate or load frame i=${i}`);
                        if (i > 0) {
                            imagesRef.current[i] = imagesRef.current[i - 1];
                        }
                        loadedCount++;
                        resolve();
                    };
                });
            }
        };

        preloadImages();
    }, []);

    // Handle Scroll and Draw
    useEffect(() => {
        if (imagesLoaded < TOTAL_FRAMES) return;

        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        let animationFrameId;

        // Find the parent section that dictates the scroll height for this animation
        const container = canvas.closest('section');

        const updateCanvas = () => {
            if (!container) return;

            // Calculate progress based strictly on this section's dimensions
            const rect = container.getBoundingClientRect();
            // How far have we scrolled past the top of the container?
            const scrolledPx = -rect.top;
            // The total scrollable distance within this container is its height minus the viewport height
            const maxScroll = rect.height - window.innerHeight;

            const progress = maxScroll > 0 ? scrolledPx / maxScroll : 0;
            const clampedProgress = Math.min(Math.max(progress, 0), 1);

            onProgressUpdate(clampedProgress);

            const frameIndex = Math.floor(clampedProgress * (TOTAL_FRAMES - 1));
            const imageToDraw = imagesRef.current[frameIndex];

            if (imageToDraw) {
                // To position the cookie strictly on the right side on desktop, 
                // we alter the draw coordinates.
                const isDesktop = window.innerWidth >= 768; // basic md breakpoint

                // We want the image to fill its intended space
                const scale = Math.max(window.innerWidth / imageToDraw.width, window.innerHeight / imageToDraw.height);
                const drawWidth = imageToDraw.width * scale;
                const drawHeight = imageToDraw.height * scale;

                // Default: center
                let xOffset = (window.innerWidth - drawWidth) / 2;
                const yOffset = (window.innerHeight - drawHeight) / 2;

                if (isDesktop) {
                    // Shift the image center to the right 25% of the screen
                    xOffset += window.innerWidth * 0.25;
                }

                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;

                context.drawImage(imageToDraw, 0, 0, imageToDraw.width, imageToDraw.height, xOffset, yOffset, drawWidth, drawHeight);
            }

            animationFrameId = requestAnimationFrame(updateCanvas);
        };

        updateCanvas();

        const handleResize = () => updateCanvas();
        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll', updateCanvas, { passive: true });

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', updateCanvas);
        };
    }, [imagesLoaded, onProgressUpdate]);

    return (
        <div className="absolute inset-0 w-full h-full bg-black overflow-hidden flex flex-col justify-center items-center pointer-events-none">
            {imagesLoaded < TOTAL_FRAMES && (
                <div className="absolute inset-0 flex flex-col justify-center items-center z-50 bg-black text-white font-sans pointer-events-none">
                    <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-white transition-all duration-300"
                            style={{ width: `${(imagesLoaded / TOTAL_FRAMES) * 100}%` }}
                        />
                    </div>
                </div>
            )}
            {/* The canvas sits behind everything. Mask it so the grainy dark grey softly fades into the black background */}
            <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                style={{
                    WebkitMaskImage: 'radial-gradient(circle at center right, black 30%, transparent 90%)',
                    maskImage: 'radial-gradient(circle at center right, black 30%, transparent 90%)'
                }}
            />

            {/* Overlay gradient to ensure text readability on the left */}
            {/* Smooth transition from solid black on the left to transparent over the cookie */}
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent pointer-events-none hidden md:block" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none md:hidden" />
        </div>
    );
};

export default FortuneCookieCanvas;
