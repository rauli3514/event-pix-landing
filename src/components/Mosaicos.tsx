import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

// Formas de combinar pantallas: un mismo cartel repartido entre varias TV.
// Son los mismos formatos de mosaico que tiene el editor de carteles.
interface Forma { id: string; label: string; short: string; cols: number; rows: number; portrait: boolean; img: string }

const FORMAS: Forma[] = [
  { id: '16x9', label: '1 TV', short: '1 TV', cols: 1, rows: 1, portrait: false, img: '/mosaicos/pizzas-16x9.webp' },
  { id: 'h2x1', label: '2 TV lado a lado', short: '2 × 1', cols: 2, rows: 1, portrait: false, img: '/mosaicos/lanzamiento-juego-h2x1.webp' },
  { id: 'h1x2', label: '2 TV una arriba de otra', short: '1 × 2', cols: 1, rows: 2, portrait: false, img: '/mosaicos/partido-h1x2.webp' },
  { id: 'h2x2', label: '4 TV en cuadro', short: '2 × 2', cols: 2, rows: 2, portrait: false, img: '/mosaicos/hamburguesas-h2x2.webp' },
  { id: '9x16', label: '1 TV parada', short: '1 TV', cols: 1, rows: 1, portrait: true, img: '/mosaicos/liquidacion-9x16.webp' },
  { id: 'v2x1', label: '2 TV paradas lado a lado', short: '2 × 1', cols: 2, rows: 1, portrait: true, img: '/mosaicos/helados-precios-v2x1.webp' },
  { id: 'v1x2', label: '2 TV paradas una arriba de otra', short: '1 × 2', cols: 1, rows: 2, portrait: true, img: '/mosaicos/zapatillas-v1x2.webp' },
  { id: 'v2x2', label: '4 TV paradas en cuadro', short: '2 × 2', cols: 2, rows: 2, portrait: true, img: '/mosaicos/jeans-v2x2.webp' },
];

// El tamaño más grande que entra en la caja, con la proporción del mosaico.
function useFit(ratio: number) {
  const ref = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ w: 0, h: 0 });
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const measure = () => {
      const W = el.clientWidth, H = el.clientHeight;
      const w = Math.min(W, H * ratio);
      setSize({ w, h: w / ratio });
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [ratio]);
  return { ref, size };
}

export function Pared({ forma }: { forma: Forma }) {
  const tvW = forma.portrait ? 9 : 16, tvH = forma.portrait ? 16 : 9;
  const ratio = (forma.cols * tvW) / (forma.rows * tvH);
  const { ref, size } = useFit(ratio);
  const gap = 6;
  return (
    <div ref={ref} className="w-full h-full flex items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={forma.id}
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.97 }}
          transition={{ duration: 0.35 }}
          className="relative"
          style={{ width: size.w, height: size.h }}
        >
          <div className="absolute -inset-8 bg-primary/15 blur-[60px] rounded-full pointer-events-none" />
          <div className="relative grid w-full h-full" style={{ gridTemplateColumns: `repeat(${forma.cols}, 1fr)`, gridTemplateRows: `repeat(${forma.rows}, 1fr)`, gap }}>
            {Array.from({ length: forma.cols * forma.rows }).map((_, k) => {
              const c = k % forma.cols, r = Math.floor(k / forma.cols);
              return (
                <motion.div
                  key={k}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 * k, duration: 0.3 }}
                  className="relative rounded-[6px] bg-[#05070d] p-[4px] ring-1 ring-white/10 shadow-xl"
                >
                  <div
                    className="w-full h-full rounded-[3px] bg-black"
                    style={{
                      backgroundImage: `url(${forma.img})`,
                      backgroundSize: `${forma.cols * 100}% ${forma.rows * 100}%`,
                      backgroundPosition: `${forma.cols > 1 ? (c / (forma.cols - 1)) * 100 : 0}% ${forma.rows > 1 ? (r / (forma.rows - 1)) * 100 : 0}%`,
                    }}
                  />
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

// Selector + pared. Va pasando sola hasta que la persona toca una opción.
export function MosaicoInteractivo() {
  const [i, setI] = useState(3);
  const [auto, setAuto] = useState(true);
  useEffect(() => {
    if (!auto) return;
    const t = window.setInterval(() => setI(n => (n + 1) % FORMAS.length), 3200);
    return () => window.clearInterval(t);
  }, [auto]);
  const forma = FORMAS[i];
  const pick = (k: number) => { setAuto(false); setI(k); };
  const grupo = (portrait: boolean) => (
    <div>
      <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">{portrait ? 'TV paradas' : 'TV acostadas'}</p>
      <div className="flex flex-wrap gap-2">
        {FORMAS.map((f, k) => f.portrait !== portrait ? null : (
          <button
            key={f.id}
            type="button"
            onClick={() => pick(k)}
            aria-pressed={k === i}
            className={`flex items-center gap-2 rounded-full border px-3.5 py-2 text-sm transition-colors ${k === i ? 'border-primary bg-primary/15 text-white' : 'border-white/10 text-slate-300 hover:border-white/30'}`}
          >
            <Mini cols={f.cols} rows={f.rows} portrait={f.portrait} active={k === i} />
            {f.short}
          </button>
        ))}
      </div>
    </div>
  );
  return (
    <div className="grid lg:grid-cols-[minmax(0,1fr)_320px] gap-8 lg:gap-12 items-center">
      <div className="h-[300px] sm:h-[420px] lg:h-[520px] min-w-0">
        <Pared forma={forma} />
      </div>
      <div className="space-y-6">
        <div aria-live="polite">
          <p className="text-sm text-primary font-semibold">{forma.cols * forma.rows === 1 ? 'Una pantalla' : `${forma.cols * forma.rows} pantallas, un solo cartel`}</p>
          <p className="text-2xl font-display font-bold">{forma.label}</p>
        </div>
        {grupo(false)}
        {grupo(true)}
        <p className="text-sm text-slate-400 leading-relaxed">
          El cartel se arma al tamaño de todo el mosaico, así que se ve como una sola pantalla gigante.
        </p>
      </div>
    </div>
  );
}

// Dibujito de la forma (los cuadraditos de las TV).
function Mini({ cols, rows, portrait, active }: { cols: number; rows: number; portrait: boolean; active: boolean }) {
  const w = portrait ? 6 : 10, h = portrait ? 10 : 6;
  return (
    <span className="inline-grid gap-[2px]" style={{ gridTemplateColumns: `repeat(${cols}, ${w}px)`, gridTemplateRows: `repeat(${rows}, ${h}px)` }} aria-hidden>
      {Array.from({ length: cols * rows }).map((_, k) => (
        <span key={k} className={`rounded-[1px] ${active ? 'bg-primary' : 'bg-slate-500'}`} />
      ))}
    </span>
  );
}
