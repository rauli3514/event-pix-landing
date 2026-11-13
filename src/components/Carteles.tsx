import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CARTELES, RUBROS, cartelImg, type Cartel } from '../carteles';

// Dos filas de carteles que pasan solas, en sentidos contrarios.
export function CarruselCarteles() {
  const mitad = Math.ceil(CARTELES.length / 2);
  const filas = [CARTELES.slice(0, mitad), CARTELES.slice(mitad)];
  return (
    <div className="space-y-4 md:space-y-5 [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
      {filas.map((fila, k) => (
        <div key={k} className="overflow-hidden">
          <div className={`flex w-max gap-4 md:gap-5 marquee ${k === 1 ? 'marquee-reverse' : ''}`}>
            {[...fila, ...fila].map((c, i) => (
              <Tarjeta key={`${c.id}-${i}`} c={c} hidden={i >= fila.length} className="w-[240px] md:w-[320px]" />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function Tarjeta({ c, className = '', hidden = false }: { c: Cartel; className?: string; hidden?: boolean }) {
  return (
    <figure className={`shrink-0 ${className}`} aria-hidden={hidden || undefined}>
      <div className="aspect-video overflow-hidden rounded-xl ring-1 ring-white/10 bg-black shadow-lg">
        <img src={cartelImg(c.id)} alt={hidden ? '' : `Cartel ${c.name} para ${c.rubro}`} loading="lazy" decoding="async" className="w-full h-full object-cover" />
      </div>
      <figcaption className="mt-2 text-xs text-slate-400 truncate">
        <span className="text-slate-200 font-medium">{c.name}</span> · {c.rubro}
      </figcaption>
    </figure>
  );
}

// Todos los diseños, con filtro por rubro.
export function GaleriaCarteles() {
  const [rubro, setRubro] = useState<string>('Todos');
  const [todos, setTodos] = useState(false);
  const lista = useMemo(() => (rubro === 'Todos' ? CARTELES : CARTELES.filter(c => c.grupo === rubro)), [rubro]);
  const visibles = todos || rubro !== 'Todos' ? lista : lista.slice(0, 12);
  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {['Todos', ...RUBROS].map(r => (
          <button
            key={r}
            type="button"
            onClick={() => setRubro(r)}
            aria-pressed={rubro === r}
            className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${rubro === r ? 'border-primary bg-primary text-white' : 'border-white/10 text-slate-300 hover:border-white/30'}`}
          >
            {r}
          </button>
        ))}
      </div>
      <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
        <AnimatePresence initial={false}>
          {visibles.map(c => (
            <motion.div key={c.id} layout initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
              <Tarjeta c={c} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
      {rubro === 'Todos' && !todos && (
        <div className="text-center mt-8">
          <button type="button" onClick={() => setTodos(true)} className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold hover:border-primary hover:text-white text-slate-200 transition-colors">
            Ver los {CARTELES.length} diseños
          </button>
        </div>
      )}
    </div>
  );
}
