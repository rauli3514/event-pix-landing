import { useEffect, useState, type ReactNode } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

// Una TV dibujada: marco fino, pantalla y (opcional) patas.
export function TvFrame({ children, portrait = false, stand = true, className = '' }: { children: ReactNode; portrait?: boolean; stand?: boolean; className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <div className={`relative rounded-[10px] bg-[#05070d] p-[5px] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)] ring-1 ring-white/10 ${portrait ? 'aspect-[9/16]' : 'aspect-video'}`}>
        <div className="relative w-full h-full overflow-hidden rounded-[5px] bg-black">{children}</div>
      </div>
      {stand && !portrait && (
        <div className="flex justify-between px-[18%]" aria-hidden>
          <span className="block w-[3px] h-4 bg-[#1a1f2b] -skew-x-[20deg]" />
          <span className="block w-[3px] h-4 bg-[#1a1f2b] skew-x-[20deg]" />
        </div>
      )}
    </div>
  );
}

// Imágenes que se van pasando con fundido (como en la TV).
export function Slideshow({ images, every = 3500, offset = 0, alt }: { images: string[]; every?: number; offset?: number; alt: string }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    let timer: number | undefined;
    const start = window.setTimeout(() => {
      setI(n => (n + 1) % images.length);
      timer = window.setInterval(() => setI(n => (n + 1) % images.length), every);
    }, every + offset);
    return () => { window.clearTimeout(start); if (timer) window.clearInterval(timer); };
  }, [images.length, every, offset]);
  return (
    <AnimatePresence initial={false}>
      <motion.img
        key={images[i]}
        src={images[i]}
        alt={alt}
        initial={{ opacity: 0, scale: 1.03 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.7 }}
        className="absolute inset-0 w-full h-full object-cover"
      />
    </AnimatePresence>
  );
}
