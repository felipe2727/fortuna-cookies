import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const ScrollAnimation = () => {
  const canvasRef = useRef(null);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentFrame, setCurrentFrame] = useState(0);

  const frameCount = 148; // Assuming 148 frames based on the example

  useEffect(() => {
    const preloadImages = async () => {
      const imagePromises = [];
      for (let i = 1; i <= frameCount; i++) {
        const promise = new Promise((resolve, reject) => {
          const img = new Image();
          img.src = `/frames/${i}.jpg`;
          img.onload = () => resolve(img);
          img.onerror = reject;
        });
        imagePromises.push(promise);
      }
      const loadedImages = await Promise.all(imagePromises);
      setImages(loadedImages);
      setLoading(false);
    };

    preloadImages();
  }, []);

  useEffect(() => {
    if (!loading && images.length > 0) {
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');

      const resizeCanvas = () => {
        const dpr = window.devicePixelRatio || 1;
        canvas.width = window.innerWidth * dpr;
        canvas.height = window.innerHeight * dpr;
        context.scale(dpr, dpr);
      };

      const render = () => {
        const scrollTop = window.scrollY;
        const maxScrollTop = document.documentElement.scrollHeight - window.innerHeight;
        const scrollFraction = scrollTop / maxScrollTop;
        const frameIndex = Math.min(
          frameCount - 1,
          Math.floor(scrollFraction * frameCount)
        );

        setCurrentFrame(frameIndex);

        if (images[frameIndex]) {
          const img = images[frameIndex];
          const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
          const x = (canvas.width / 2) - (img.width / 2) * scale;
          const y = (canvas.height / 2) - (img.height / 2) * scale;
          
          context.clearRect(0, 0, canvas.width, canvas.height);
          context.drawImage(img, x, y, img.width * scale, img.height * scale);
        }
      };

      const onScroll = () => {
        requestAnimationFrame(render);
      };

      window.addEventListener('scroll', onScroll);
      window.addEventListener('resize', resizeCanvas);

      resizeCanvas();
      render();

      return () => {
        window.removeEventListener('scroll', onScroll);
        window.removeEventListener('resize', resizeCanvas);
      };
    }
  }, [loading, images]);

  return (
    <div className="h-[500vh] bg-black">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center">
        <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full"></canvas>
        {currentFrame === frameCount - 1 && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="absolute bottom-10 bg-white/10 backdrop-blur-md text-white font-sans font-bold py-3 px-6 rounded-full hover:scale-105 transition-transform"
          >
            Join Waitlist
          </motion.button>
        )}
      </div>
    </div>
  );
};

export default ScrollAnimation;
