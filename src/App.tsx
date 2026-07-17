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
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/15 via-background to-background"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column: Text */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-left mt-8 lg:mt-0 text-center lg:text-left"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-extrabold tracking-tight mb-6 leading-[1.1]">
                Tu contenido.<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">En todas tus pantallas.</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
                Administrá y actualizá el contenido de tus pantallas desde cualquier lugar. Más impacto, más ventas, más fácil que nunca.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8">
                <a href="https://wa.me/5493624547382" target="_blank" rel="noreferrer" className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-orange-600 text-white rounded-full font-bold text-lg transition-all shadow-[0_0_30px_-10px_rgba(255,69,0,0.6)] flex items-center justify-center gap-2">
                  Quiero Display Digital <ArrowRight className="w-5 h-5" />
                </a>
              </div>

              {/* Mini Features */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10 text-sm font-medium text-slate-400">
                <div className="flex flex-col items-center lg:items-start gap-2">
                  <RefreshCw className="w-5 h-5 text-primary" />
                  <span className="text-center lg:text-left">Actualizá desde<br/>cualquier lugar</span>
                </div>
                <div className="flex flex-col items-center lg:items-start gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="text-center lg:text-left">Programá tus<br/>contenidos</span>
                </div>
                <div className="flex flex-col items-center lg:items-start gap-2">
                  <Monitor className="w-5 h-5 text-primary" />
                  <span className="text-center lg:text-left">Una o múltiples<br/>pantallas</span>
                </div>
                <div className="flex flex-col items-center lg:items-start gap-2">
                  <Wifi className="w-5 h-5 text-primary" />
                  <span className="text-center lg:text-left">Actualización<br/>inmediata</span>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Visual */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full max-w-2xl mx-auto"
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-primary/30 blur-[100px] rounded-full pointer-events-none"></div>
              
              {/* Fachada floating */}
              <motion.img 
                animate={{ y: [-8, 8, -8] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                src="/fachada.png" 
                alt="Comercio con pantalla digital naranja" 
                className="w-full h-auto object-contain relative z-10 drop-shadow-2xl" 
              />
            </motion.div>
          </div>
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
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {["Promociones", "Video", "Menús", "Ofertas", "Info Institucional", "Clima y Más"].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm font-medium text-white bg-white/5 rounded-lg p-3 border border-white/5">
                      <CheckCircle2 className="text-primary w-4 h-4" /> {item}
                    </div>
                  ))}
                </div>
                
                <img 
                  src="/elementos2.png" 
                  alt="Aplicaciones soportadas: Canva, YouTube, Web" 
                  className="w-full h-auto object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]" 
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="como-funciona" className="py-24 relative overflow-hidden bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Así de <span className="text-primary">simple</span> funciona</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Diagram */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative order-2 lg:order-1"
            >
              <div className="absolute inset-0 bg-primary/10 blur-[80px] rounded-full pointer-events-none"></div>
              <img 
                src="/elementos.png" 
                alt="Flujo de conexión y dispositivos de Display Digital" 
                className="w-full h-auto object-contain relative z-10 drop-shadow-xl" 
              />
            </motion.div>

            {/* Steps text */}
            <div className="space-y-8 order-1 lg:order-2">
              {[
                { 
                  icon: Monitor, 
                  title: "1. Conectá tu pantalla", 
                  desc: "Instalá nuestro dispositivo (TV Box) y conectalo a tu TV por HDMI." 
                },
                { 
                  icon: Smartphone, 
                  title: "2. Elegí qué mostrar", 
                  desc: "Subí imágenes, videos, diseños de Canva, páginas web y más." 
                },
                { 
                  icon: Clock, 
                  title: "3. Publicá y programá", 
                  desc: "Definí cuándo y dónde se mostrará cada contenido fácilmente." 
                },
                { 
                  icon: Wifi, 
                  title: "4. Se ve en tu pantalla", 
                  desc: "Tu contenido aparece al instante, actualizándose por internet." 
                }
              ].map((step, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex gap-6 group"
                >
                  <div className="w-14 h-14 shrink-0 bg-surface border border-white/10 rounded-2xl flex items-center justify-center group-hover:border-primary/50 transition-colors shadow-lg">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white">{step.title}</h3>
                    <p className="text-slate-400 text-sm md:text-base leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

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
