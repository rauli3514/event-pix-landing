import { useEffect, useState, type ReactNode } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight, BellRing, CalendarClock, Check, ChevronDown, Film, Link2, ListChecks, MessageCircle, MonitorSmartphone,
  PlayCircle, QrCode, RefreshCw, Smartphone, Tags, Tv, WifiOff,
} from 'lucide-react';
import { Slideshow, TvFrame } from './components/Tv';
import { MosaicoInteractivo } from './components/Mosaicos';
import { CarruselCarteles, GaleriaCarteles } from './components/Carteles';
import { CARTELES } from './carteles';

const WHATSAPP = 'https://wa.me/5493624547382?text=' + encodeURIComponent('¡Hola! Quiero conocer Display Digital');
const APP = 'https://app.event-pix.com.ar/usuarios';
const PRECIO = '$30.000';

const HERO = ['pizzas-16x9-promo', 'combo-burger-16x9', 'helados-precios-16x9', 'happy-hour-16x9', 'consolas-16x9', 'gym-planes-16x9', 'vinos-16x9'].map(n => `/inicio/${n}.webp`);
const HERO_VERTICAL = ['liquidacion-9x16', 'cafe-especialidad-9x16', 'zapatillas-9x16', 'gusto-del-mes-9x16'].map(n => `/inicio/${n}.webp`);

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.5 },
};

function Boton({ href, children, variant = 'primary', className = '' }: { href: string; children: ReactNode; variant?: 'primary' | 'ghost'; className?: string }) {
  const external = href.startsWith('http');
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
      className={`inline-flex items-center justify-center gap-2 rounded-full font-bold transition-all ${variant === 'primary'
        ? 'bg-primary hover:bg-orange-600 text-white px-7 py-3.5 shadow-[0_0_30px_-8px_rgba(255,69,0,0.7)]'
        : 'border border-white/15 hover:border-white/40 text-white px-7 py-3.5'} ${className}`}
    >
      {children}
    </a>
  );
}

function Titulo({ eyebrow, children, sub, center = true }: { eyebrow?: string; children: ReactNode; sub?: ReactNode; center?: boolean }) {
  return (
    <motion.div {...fadeUp} className={`${center ? 'text-center mx-auto' : ''} max-w-3xl mb-12 md:mb-16`}>
      {eyebrow && <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary mb-3">{eyebrow}</p>}
      <h2 className="text-3xl md:text-5xl font-display font-bold leading-[1.1] text-balance">{children}</h2>
      {sub && <p className="mt-5 text-lg md:text-xl text-slate-300 font-light leading-relaxed text-pretty">{sub}</p>}
    </motion.div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#0B0F19] text-white font-sans selection:bg-primary/30 overflow-x-clip">
      <Nav />
      <Hero />
      <Carteles />
      <Fudo />
      <Mosaicos />
      <Descuentos />
      <MasHerramientas />
      <ComoFunciona />
      <Precio />
      <Preguntas />
      <Final />
      <Footer />
      <WhatsappFlotante />
    </div>
  );
}

// Botón de WhatsApp fijo: aparece cuando ya se bajó del inicio (ahí está el botón grande).
function WhatsappFlotante() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <a href={WHATSAPP} target="_blank" rel="noreferrer" aria-label="Escribinos por WhatsApp" tabIndex={visible ? 0 : -1}
      className={`fixed bottom-5 right-5 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-xl shadow-black/40 hover:scale-105 transition-all duration-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
      <MessageCircle className="w-7 h-7" />
    </a>
  );
}

function Nav() {
  return (
    <nav className="fixed w-full z-50 bg-[#0B0F19]/85 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 md:h-20 flex items-center justify-between gap-4">
        <a href="#" className="flex items-center gap-2 shrink-0">
          <span className="w-9 h-9 md:w-10 md:h-10 bg-gradient-to-br from-primary to-orange-600 rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
            <PlayCircle className="text-white w-5 h-5 md:w-6 md:h-6" />
          </span>
          <span className="font-display font-bold text-xl md:text-2xl tracking-tight">Display Digital<span className="text-primary">.</span></span>
        </a>
        <div className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
          <a href="#carteles" className="hover:text-white transition-colors">Carteles</a>
          <a href="#fudo" className="hover:text-white transition-colors">Fudo</a>
          <a href="#mosaicos" className="hover:text-white transition-colors">Mosaicos</a>
          <a href="#precio" className="hover:text-white transition-colors">Precio</a>
          <a href="#preguntas" className="hover:text-white transition-colors">Preguntas</a>
        </div>
        <div className="flex items-center gap-2">
          <a href={APP} target="_blank" rel="noreferrer" className="px-4 md:px-5 py-2 bg-white/10 hover:bg-white/20 rounded-full text-sm font-medium transition-colors">Ingresar</a>
          <a href={WHATSAPP} target="_blank" rel="noreferrer" className="hidden sm:inline-flex px-5 py-2 bg-primary hover:bg-orange-600 rounded-full text-sm font-bold transition-colors">Quiero probarlo</a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/15 via-[#0B0F19] to-[#0B0F19]" />
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative grid lg:grid-cols-[1fr_1.15fr] gap-12 lg:gap-14 items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center lg:text-left">
          <a href="#fudo" className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs md:text-sm text-orange-200 mb-6">
            <span className="rounded-full bg-primary px-2 py-0.5 text-[10px] font-bold uppercase text-white">Nuevo</span>
            Carteles, conexión con Fudo y mosaicos
          </a>
          <h1 className="text-[2.5rem] leading-[1.05] md:text-6xl lg:text-[4.2rem] font-display font-extrabold tracking-tight mb-6 text-balance">
            Tus precios y promos en la TV, <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">siempre al día.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-9 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light text-pretty">
            Elegí un cartel de tu rubro, cargá tus precios o traelos de Fudo en un clic, y mostralo en una o en varias pantallas. Todo desde el celular.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
            <Boton href={WHATSAPP} className="w-full sm:w-auto text-lg">Quiero probarlo <ArrowRight className="w-5 h-5" /></Boton>
            <Boton href="#carteles" variant="ghost" className="w-full sm:w-auto">Ver los carteles</Boton>
          </div>
          <p className="mt-6 text-sm text-slate-400">
            <span className="text-white font-semibold">{PRECIO}</span> por mes · Más de {Math.floor(CARTELES.length / 10) * 10} diseños listos
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.15 }} className="relative pb-10 sm:pb-6 pr-[16%] sm:pr-[14%]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-[80%] bg-primary/25 blur-[90px] rounded-full pointer-events-none" />
          <TvFrame>
            <Slideshow images={HERO} alt="Cartel de Display Digital en la TV" />
          </TvFrame>
          <div className="absolute right-0 bottom-0 w-[24%] min-w-[78px]">
            <TvFrame portrait stand={false}>
              <Slideshow images={HERO_VERTICAL} every={3500} offset={1700} alt="Cartel vertical de Display Digital" />
            </TvFrame>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Carteles() {
  return (
    <section id="carteles" className="py-20 md:py-28 bg-[#0F1423] border-y border-white/5 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <Titulo eyebrow="Carteles" sub="Elegís el de tu rubro, cambiás los textos, la foto y los colores, y lo mandás a la pantalla. Sin saber diseño.">
          Más de {Math.floor(CARTELES.length / 10) * 10} carteles listos para tu negocio
        </Titulo>
      </div>
      <CarruselCarteles />
      <div className="max-w-7xl mx-auto px-4 md:px-6 mt-16 md:mt-20">
        <motion.h3 {...fadeUp} className="text-center text-xl md:text-2xl font-display font-bold mb-6">Buscá los de tu rubro</motion.h3>
        <GaleriaCarteles />
      </div>
    </section>
  );
}

function Fudo() {
  const pasos = [
    { icon: Link2, t: 'Pegá el link de tu menú', d: 'El de siempre: menu.fu.do/tulocal.' },
    { icon: ListChecks, t: 'Elegí las categorías', d: 'Hamburguesas, pizzas, bebidas… cada una queda como lista con su color.' },
    { icon: RefreshCw, t: 'Listo, se actualiza solo', d: 'Cambiás un precio en Fudo y al otro día ya está en la TV. O tocás "Actualizar".' },
  ];
  return (
    <section id="fudo" className="relative py-20 md:py-28 overflow-hidden scroll-mt-16">
      <div className="absolute -left-40 top-20 w-[480px] h-[480px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div {...fadeUp}>
          <p className="inline-flex items-center gap-2 rounded-full bg-primary px-3 py-1 text-xs font-bold uppercase tracking-wider mb-5">¿Usás Fudo?</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold leading-[1.1] mb-5 text-balance">
            Si ya trabajás con Fudo, traé tus productos <span className="text-primary">en un clic.</span>
          </h2>
          <p className="text-lg text-slate-300 font-light leading-relaxed mb-8">
            No hace falta cargar nada dos veces. Los nombres y precios de tu carta pasan solos a tus carteles.
          </p>
          <ol className="space-y-5 mb-8">
            {pasos.map((p, i) => (
              <li key={p.t} className="flex gap-4">
                <span className="relative shrink-0 w-11 h-11 rounded-xl bg-primary/15 text-primary flex items-center justify-center">
                  <p.icon className="w-5 h-5" />
                  <span className="absolute -top-1.5 -left-1.5 w-5 h-5 rounded-full bg-primary text-[11px] font-bold text-white flex items-center justify-center">{i + 1}</span>
                </span>
                <span>
                  <span className="block font-semibold text-lg">{p.t}</span>
                  <span className="block text-slate-400">{p.d}</span>
                </span>
              </li>
            ))}
          </ol>
          <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
            <QrCode className="w-6 h-6 text-primary shrink-0 mt-0.5" />
            <p className="text-slate-300 text-sm leading-relaxed">
              <span className="text-white font-semibold">Y el QR de tu menú Fudo en la pantalla:</span> tus clientes lo escanean, ven la carta y piden desde el celular.
            </p>
          </div>
        </motion.div>
        <motion.div {...fadeUp} className="relative">
          <div className="absolute inset-6 bg-primary/20 blur-[70px] rounded-full pointer-events-none" />
          <img src="/app/fudo-traer.webp" alt="Pantalla de Display Digital para traer las categorías del menú de Fudo" loading="lazy"
            className="relative w-full max-w-[520px] mx-auto rounded-2xl ring-1 ring-white/10 shadow-2xl" />
          <div className="relative -mt-2 ml-auto mr-0 sm:-mr-3 w-[58%] max-w-[320px]">
            <TvFrame>
              <img src="/inicio/pizzas-16x9.webp" alt="Los precios de Fudo en un cartel de la TV" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
            </TvFrame>
            <p className="mt-2 text-center text-xs text-slate-400">Así se ve en la TV</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Mosaicos() {
  return (
    <section id="mosaicos" className="py-20 md:py-28 bg-[#0F1423] border-y border-white/5 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <Titulo eyebrow="Mosaicos" sub="Juntá 2 o 4 TV y armá una sola pantalla gigante. Acostadas o paradas, una al lado de la otra o en cuadro.">
          Combiná tus pantallas como quieras
        </Titulo>
        <MosaicoInteractivo />

        <div className="grid md:grid-cols-3 gap-5 mt-20">
          <Modo titulo="Espejo" texto="Todas las pantallas muestran lo mismo al mismo tiempo.">
            <div className="grid grid-cols-3 gap-2">
              {[0, 1, 2].map(k => (
                <TvFrame key={k} stand={false}><Slideshow images={HERO.slice(1, 4)} every={2800} alt="" /></TvFrame>
              ))}
            </div>
          </Modo>
          <Modo titulo="Olas" texto="La misma lista, pero cada pantalla unos segundos después que la anterior.">
            <div className="grid grid-cols-3 gap-2">
              {[0, 1, 2].map(k => (
                <TvFrame key={k} stand={false}><Slideshow images={HERO.slice(1, 5)} every={2800} offset={k * 900} alt="" /></TvFrame>
              ))}
            </div>
          </Modo>
          <Modo titulo="Pantalla dividida" texto="Un cartel y otro contenido a la vez, en la misma TV.">
            <TvFrame stand={false} className="mx-auto w-[70%]">
              <div className="absolute inset-0 grid grid-cols-[1.9fr_1fr] gap-[3px] bg-black">
                <div className="relative overflow-hidden"><Slideshow images={[HERO[2], HERO[4]]} every={3200} alt="" /></div>
                <div className="relative overflow-hidden"><Slideshow images={HERO_VERTICAL} every={2600} alt="" /></div>
              </div>
            </TvFrame>
          </Modo>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mt-24">
          <motion.div {...fadeUp} className="order-2 lg:order-1">
            <img src="/app/enviar-mosaico.webp" alt="Pantalla de la app para enviar un cartel en mosaico a 4 TV" loading="lazy"
              className="w-full max-w-[460px] mx-auto rounded-2xl ring-1 ring-white/10 shadow-2xl" />
          </motion.div>
          <motion.div {...fadeUp} className="order-1 lg:order-2 text-center lg:text-left">
            <h3 className="text-3xl md:text-4xl font-display font-bold mb-5 text-balance">Lo mandás desde la app y ves cómo queda</h3>
            <p className="text-lg text-slate-300 font-light leading-relaxed mb-6">
              Elegís el cartel, tocás <span className="text-white font-medium">Enviar a pantallas</span> y elegís Espejo, Olas o Mosaico. Antes de mandarlo ves exactamente qué parte va en cada TV.
            </p>
            <ul className="space-y-3 text-slate-300 inline-block text-left">
              {['Desde el celular o la compu', 'Las TV se ordenan con flechas', 'Cambia en todas las pantallas al instante'].map(t => (
                <li key={t} className="flex items-center gap-3"><Check className="w-5 h-5 text-primary shrink-0" /> {t}</li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Modo({ titulo, texto, children }: { titulo: string; texto: string; children: ReactNode }) {
  return (
    <motion.div {...fadeUp} className="rounded-3xl border border-white/10 bg-[#0B0F19] p-6 flex flex-col gap-5">
      <div className="h-[120px] flex items-center">{<div className="w-full">{children}</div>}</div>
      <div>
        <h3 className="text-xl font-display font-bold mb-1">{titulo}</h3>
        <p className="text-slate-400 text-sm leading-relaxed">{texto}</p>
      </div>
    </motion.div>
  );
}

function Descuentos() {
  const [promo, setPromo] = useState(false);
  useEffect(() => {
    const t = window.setInterval(() => setPromo(p => !p), 3000);
    return () => window.clearInterval(t);
  }, []);
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div {...fadeUp} className="text-center lg:text-left">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary mb-3">Descuentos por tiempo</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold leading-[1.1] mb-5 text-balance">Una promo de un rato, sin tocar tu lista</h2>
          <p className="text-lg text-slate-300 font-light leading-relaxed">
            Poné por ejemplo −15 % por una hora o por 24 horas. En la pantalla se ve el precio anterior tachado y el nuevo. Cuando termina, todo vuelve solo al precio de siempre.
          </p>
        </motion.div>
        <motion.div {...fadeUp}>
          <TvFrame className="max-w-[560px] mx-auto">
            <img src="/inicio/pizzas-16x9.webp" alt="Cartel con precios normales" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
            <img src="/inicio/pizzas-16x9-promo.webp" alt="El mismo cartel con descuento y precios tachados" loading="lazy"
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${promo ? 'opacity-100' : 'opacity-0'}`} />
          </TvFrame>
          <div className="mt-6 flex justify-center gap-2 text-sm" aria-hidden>
            <span className={`rounded-full px-4 py-1.5 border transition-colors ${!promo ? 'border-white/40 text-white' : 'border-white/10 text-slate-500'}`}>Precio de siempre</span>
            <span className={`rounded-full px-4 py-1.5 border transition-colors ${promo ? 'border-primary bg-primary/15 text-white' : 'border-white/10 text-slate-500'}`}>−15 % hasta las 23:59</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function MasHerramientas() {
  const items = [
    { icon: Tags, t: 'Listas de precios', d: 'Cargás los precios una vez y se actualizan en todos tus carteles y pantallas. Podés pegarlos desde una planilla.' },
    { icon: QrCode, t: 'QR en la pantalla', d: 'Tu menú de Fudo, tu WhatsApp con el mensaje ya escrito o tu Instagram.' },
    { icon: CalendarClock, t: 'Por horario', d: 'El desayuno a la mañana, el almuerzo al mediodía y el happy hour a la tarde. Cambia solo.' },
    { icon: Film, t: 'Fotos y videos', d: 'Subí tus propias fotos y videos y armá la lista que se va pasando.' },
    { icon: BellRing, t: 'Te avisamos', d: 'Si una pantalla se desconecta te llega un aviso por email, para que no te enteres por un cliente.' },
    { icon: WifiOff, t: 'Sin internet, sigue', d: 'Si se corta internet, la pantalla sigue mostrando tus precios.' },
  ];
  return (
    <section className="py-20 md:py-28 bg-[#0F1423] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <Titulo eyebrow="Y además">Todo lo que necesitás, en un solo lugar</Titulo>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((it, i) => (
            <motion.div key={it.t} {...fadeUp} transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-2xl border border-white/5 hover:border-primary/30 bg-[#0B0F19] p-7 transition-colors">
              <span className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5"><it.icon className="w-6 h-6" /></span>
              <h3 className="font-bold text-xl mb-2">{it.t}</h3>
              <p className="text-slate-400 leading-relaxed">{it.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ComoFunciona() {
  const pasos = [
    { icon: Tv, t: 'Conectá la TV', d: 'Con el equipo Display Digital en cualquier TV con HDMI, o con nuestra app en una TV Android.' },
    { icon: MonitorSmartphone, t: 'Vinculala', d: 'En la TV aparece un código. Lo ponés en la app y la pantalla queda en tu cuenta.' },
    { icon: Smartphone, t: 'Manejá todo desde el celular', d: 'Carteles, precios y promos. Lo que cambies se ve en la TV al instante.' },
  ];
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <Titulo eyebrow="Cómo funciona">Empezás en 3 pasos</Titulo>
        <div className="grid md:grid-cols-3 gap-6">
          {pasos.map((p, i) => (
            <motion.div key={p.t} {...fadeUp} transition={{ duration: 0.4, delay: i * 0.08 }}
              className="relative overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-br from-[#0F1423] to-[#0B0F19] p-8 text-center">
              <span className="absolute top-4 right-5 text-6xl font-black text-white/5">0{i + 1}</span>
              <span className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6"><p.icon className="w-8 h-8" /></span>
              <h3 className="text-2xl font-bold mb-3">{p.t}</h3>
              <p className="text-slate-400 leading-relaxed">{p.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Precio() {
  const incluye = ['Más de 50 carteles para tu rubro', 'Listas de precios y descuentos por tiempo', 'Conexión con Fudo', 'Mosaicos, Espejo y Olas', 'Fotos, videos y QR', 'Soporte por WhatsApp'];
  return (
    <section id="precio" className="py-20 md:py-28 bg-[#0F1423] border-y border-white/5 scroll-mt-16">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <motion.div {...fadeUp} className="relative overflow-hidden rounded-[2rem] border border-primary/30 bg-gradient-to-br from-primary/20 via-[#0B0F19] to-[#0B0F19] p-8 md:p-14 grid md:grid-cols-2 gap-10 items-center">
          <div className="absolute -right-24 -top-24 w-72 h-72 bg-primary/30 blur-[100px] rounded-full pointer-events-none" />
          <div className="relative text-center md:text-left">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary mb-4">Precio</p>
            <p className="font-display font-extrabold leading-none">
              <span className="text-6xl md:text-7xl">{PRECIO}</span>
              <span className="block mt-3 text-xl md:text-2xl font-medium text-slate-300">por mes</span>
            </p>
            <Boton href={WHATSAPP} className="mt-8 w-full sm:w-auto text-lg">Quiero empezar <ArrowRight className="w-5 h-5" /></Boton>
          </div>
          <ul className="relative space-y-3.5">
            {incluye.map(t => (
              <li key={t} className="flex items-center gap-3 text-lg"><span className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center shrink-0"><Check className="w-4 h-4" /></span>{t}</li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

function Preguntas() {
  const faq = [
    { q: '¿Necesito una Smart TV?', a: 'No. Funciona en cualquier TV con entrada HDMI usando el equipo Display Digital. Si tu TV es Android, también podés usar nuestra app.' },
    { q: '¿Lo puedo manejar desde el celular?', a: 'Sí. Todo se maneja desde el celular o la compu: cambiás un precio o un cartel y se ve en la TV al instante.' },
    { q: '¿Tengo que usar Fudo?', a: 'No. Si usás Fudo, traés tus productos en un clic. Si no, cargás tus precios a mano o los pegás desde una planilla.' },
    { q: '¿Necesito saber de diseño?', a: 'No. Elegís un cartel de tu rubro y cambiás los textos, la foto y los colores. Ya viene armado.' },
    { q: '¿Cuántas pantallas puedo tener?', a: 'Las que necesites. Podés mostrar lo mismo en todas, cosas distintas en cada una o juntarlas en un mosaico.' },
    { q: '¿Qué pasa si se corta internet?', a: 'La pantalla sigue mostrando tus precios. Cuando vuelve internet, se pone al día sola.' },
  ];
  return (
    <section id="preguntas" className="py-20 md:py-28 scroll-mt-16">
      <div className="max-w-3xl mx-auto px-4 md:px-6">
        <Titulo eyebrow="Preguntas frecuentes">¿Tenés dudas?</Titulo>
        <div className="space-y-3">
          {faq.map(f => (
            <details key={f.q} className="group rounded-2xl border border-white/10 bg-[#0F1423] open:border-primary/30">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 md:p-6 font-semibold text-lg [&::-webkit-details-marker]:hidden">
                {f.q}
                <ChevronDown className="w-5 h-5 shrink-0 text-slate-400 transition-transform group-open:rotate-180" />
              </summary>
              <p className="px-5 md:px-6 pb-6 -mt-1 text-slate-300 leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Final() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-primary">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.18),transparent_45%),radial-gradient(circle_at_85%_90%,rgba(0,0,0,0.25),transparent_50%)]" />
      <motion.div {...fadeUp} className="relative max-w-4xl mx-auto px-4 md:px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-display font-extrabold mb-6 leading-tight text-balance">Menos carteles impresos. Más ventas.</h2>
        <p className="text-xl md:text-2xl font-light text-white/90 mb-10 text-pretty">
          Escribinos y te mostramos cómo quedan tus precios y tus promos en la TV de tu local.
        </p>
        <a href={WHATSAPP} target="_blank" rel="noreferrer"
          className="inline-flex items-center gap-3 rounded-full bg-white text-[#0B0F19] px-9 py-4 text-lg md:text-xl font-bold shadow-2xl hover:scale-[1.03] transition-transform">
          <MessageCircle className="w-6 h-6 text-[#25D366]" /> Hablemos por WhatsApp
        </a>
      </motion.div>
    </section>
  );
}

function Footer() {
  return (
    <>
      <section className="py-16 bg-[#0F1423] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl font-bold mb-3">¿Buscás algo para tu evento?</h2>
          <p className="text-slate-400 mb-7 max-w-2xl mx-auto">
            También hacemos entretenimiento para eventos: fotos en vivo en pantalla gigante, PhotoBooth y trivias.
          </p>
          <a href="https://event-pix.com.ar/eventos" className="inline-flex px-7 py-3 border border-primary/50 hover:bg-primary hover:border-primary rounded-full font-bold transition-colors">
            Conocer EventPix para Eventos
          </a>
        </div>
      </section>
      <footer className="py-10 pb-24 md:pb-10 bg-[#0B0F19] text-slate-500 text-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Display Digital by EventPix</p>
          <div className="flex items-center gap-5">
            <a href={APP} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">Ingresar</a>
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">WhatsApp 362 454-7382</a>
            <a href="https://www.instagram.com/disp.digital/" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">@disp.digital</a>
          </div>
        </div>
      </footer>
    </>
  );
}
