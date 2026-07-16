import { motion } from 'framer-motion';
import { ArrowRight, Monitor, Wifi, Smartphone, RefreshCw, CheckCircle2, PlayCircle, Clock } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-background text-white font-sans selection:bg-primary/30">
      
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-background/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-orange-600 rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
              <PlayCircle className="text-white w-6 h-6" />
            </div>
            <span className="font-display font-bold text-2xl tracking-tight">Display Digital<span className="text-primary">.</span></span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#solucion" className="hover:text-white transition-colors">La Solución</a>
            <a href="#como-funciona" className="hover:text-white transition-colors">Cómo Funciona</a>
            <a href="#precios" className="hover:text-white transition-colors">Precios</a>
          </div>
          <a 
            href="https://app.event-pix.com.ar/usuarios" 
            target="_blank"
            rel="noreferrer"
            className="px-6 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-full text-sm font-medium transition-all"
          >
            Iniciar Sesión
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Nuevo Lanzamiento
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-extrabold tracking-tight mb-8 leading-tight">
              Transforma cualquier pantalla en una <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">herramienta de ventas.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              La solución sencilla y poderosa para mostrar tu contenido publicitario en pantallas de manera remota y en tiempo real.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="https://wa.me/5493624547382" target="_blank" rel="noreferrer" className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-orange-600 text-white rounded-full font-bold text-lg transition-all shadow-[0_0_40px_-10px_rgba(255,69,0,0.5)] flex items-center justify-center gap-2">
                Contáctanos <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#como-funciona" className="w-full sm:w-auto px-8 py-4 bg-surface border border-white/10 hover:bg-white/5 text-white rounded-full font-bold text-lg transition-all flex items-center justify-center">
                Descubre Cómo
              </a>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-16 mx-auto max-w-5xl rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-primary/20 aspect-video relative bg-slate-900"
            >
              <img src="/hero.jpg" alt="Display Digital en tu local" className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="solucion" className="py-24 bg-surface border-y border-white/5 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">¿Esta es tu vidriera?</h2>
              
              <div className="rounded-2xl overflow-hidden border border-white/5 mb-8 opacity-70 saturate-0 hover:saturate-100 hover:opacity-100 transition-all duration-500 bg-slate-900">
                  <img src="/problem.jpg" alt="Vidriera desordenada con papeles" className="w-full h-48 object-cover" />
              </div>

              <div className="space-y-6">
                {[
                  "Los carteles de papel pasan desapercibidos.",
                  "Información desordenada o desactualizada.",
                  "Pérdida de oportunidades de venta impulsiva."
                ].map((text, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-red-500"></div>
                    </div>
                    <p className="text-slate-300 text-lg">{text}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-primary/20 to-surface border border-primary/20 rounded-3xl p-8 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-primary/5 backdrop-blur-3xl"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Monitor className="text-primary w-8 h-8" /> 
                  La Solución Digital
                </h3>
                <p className="text-slate-300 mb-8">
                  Conectamos cualquier TV para mostrar contenido profesional, dinámico y atractivo.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {["Promociones", "Video", "Menús", "Ofertas", "Info Institucional", "Clima y Más"].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm font-medium text-white bg-white/5 rounded-lg p-3 border border-white/5">
                      <CheckCircle2 className="text-primary w-4 h-4" /> {item}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="como-funciona" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">¿Cómo funciona?</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Muy simple. Desde cualquier computadora o celular podes actualizar todas tus pantallas en segundos.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Monitor, title: "1. Conectamos", desc: "Enchufamos nuestro dispositivo a cualquier TV." },
              { icon: Wifi, title: "2. A Internet", desc: "El equipo se conecta a tu red WiFi local." },
              { icon: Smartphone, title: "3. Cargas", desc: "Subes tus videos y fotos desde la nube." },
              { icon: RefreshCw, title: "4. Se Actualiza", desc: "La pantalla refleja los cambios al instante." }
            ].map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-surface border border-white/5 rounded-2xl p-8 text-center hover:border-primary/50 transition-colors group"
              >
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform group-hover:bg-primary/20">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="precios" className="py-32 bg-surface border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Propuesta Económica</h2>
            <p className="text-xl text-slate-400">Invierte en la imagen de tu negocio.</p>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-background/80 backdrop-blur-xl border border-primary/30 rounded-3xl p-8 md:p-12 text-center shadow-2xl shadow-primary/10"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
              <div className="text-left">
                <h3 className="text-2xl font-bold mb-2">Plan Comercial</h3>
                <p className="text-slate-400">Equipo en comodato + Licencia Mensual</p>
              </div>
              <div className="text-right">
                <div className="flex items-start justify-end gap-1">
                  <span className="text-3xl font-bold text-primary mt-1">$</span>
                  <span className="text-6xl font-display font-extrabold tracking-tight">30.000</span>
                </div>
                <p className="text-slate-500 text-sm mt-1">por mes / por pantalla</p>
              </div>
            </div>

            <div className="border-t border-white/10 pt-8 mb-10 text-left">
              <div className="grid sm:grid-cols-2 gap-4">
                {["Software de Cartelería Cloud", "Equipo Android TV Box incluido", "Soporte Remoto", "Múltiples Apps (Clima, Dólar)"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                    <span className="text-slate-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-xs text-slate-500 mb-8 max-w-lg mx-auto">
              * Esta propuesta no incluye pantallas. Nuestro sistema se adapta a cualquier pantalla con entrada HDMI. Consúltanos planes para implementar en varias sucursales. El precio no incluye IVA. Sujeto a disponibilidad.
            </p>

            <a href="https://wa.me/5493624547382" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-background hover:bg-slate-200 rounded-full font-bold text-lg transition-all w-full md:w-auto">
              <Clock className="w-5 h-5" /> Convertí tu TV en un vendedor 24hs
            </a>
          </motion.div>
        </div>
      </section>

      {/* Cross Selling Footer Section */}
      <section className="py-20 bg-background border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-4">¿Buscas soluciones interactivas para tu evento?</h2>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
            Además de cartelería digital, somos expertos en entretenimiento para eventos. Conoce nuestro servicio de PhotoBooth, Trivias y Cartelera de Fotos en vivo.
          </p>
          <a href="https://event-pix.com.ar/eventos" className="inline-flex px-6 py-3 border border-white/20 hover:bg-white/5 rounded-full font-medium transition-colors">
            Ver Soluciones para Eventos
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 text-center text-slate-500 text-sm">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} EventPix. Todos los derechos reservados.</p>
          <div className="flex items-center gap-4">
            <a href="https://www.instagram.com/disp.digital/" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
              </svg>
              @disp.digital
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
