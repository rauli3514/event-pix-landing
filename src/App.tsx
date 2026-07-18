import { motion } from 'framer-motion';
import { ArrowRight, Monitor, Smartphone, RefreshCw, Cloud, ShieldCheck, PlayCircle, Settings, Store, CheckCircle2 } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-[#0B0F19] text-white font-sans selection:bg-primary/30">
      
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-[#0B0F19]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-orange-600 rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
              <PlayCircle className="text-white w-6 h-6" />
            </div>
            <span className="font-display font-bold text-2xl tracking-tight">Display Digital<span className="text-primary">.</span></span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#como-funciona" className="hover:text-white transition-colors">Cómo Funciona</a>
            <a href="#plataforma" className="hover:text-white transition-colors">Plataforma</a>
            <a href="#precios" className="hover:text-white transition-colors">Planes</a>
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

      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/15 via-[#0B0F19] to-[#0B0F19]"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-extrabold tracking-tight mb-6 leading-[1.1]">
                Convertí cualquier pantalla en un <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">canal digital</span> para tu negocio.
              </h1>
              <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
                Administrá y actualizá el contenido de tus pantallas desde cualquier lugar con nuestro Equipo Display Digital (EDD). Más impacto, más ventas.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8">
                <a href="https://wa.me/5493624547382" target="_blank" rel="noreferrer" className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-orange-600 text-white rounded-full font-bold text-lg transition-all shadow-[0_0_30px_-10px_rgba(255,69,0,0.6)] flex items-center justify-center gap-2">
                  Consultar por Display Digital <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full mx-auto"
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/20 blur-[100px] rounded-full pointer-events-none"></div>
              <img 
                src="/visual-hero.PNG" 
                alt="Display Digital Hero" 
                className="w-full h-auto object-contain relative z-10 drop-shadow-2xl rounded-2xl" 
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Cómo Funciona */}
      <section id="como-funciona" className="py-24 relative overflow-hidden bg-[#0F1423]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">¿Cómo <span className="text-primary">funciona</span>?</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 order-2 lg:order-1">
              {[
                { 
                  icon: Settings, 
                  title: "1. Conectás tu EDD a la pantalla", 
                  desc: "Instalamos el Equipo Display Digital en tu comercio y lo conectamos a cualquier TV o monitor." 
                },
                { 
                  icon: Smartphone, 
                  title: "2. Administrás tu contenido", 
                  desc: "Ingresás a la plataforma de Display Digital desde tu celular o computadora y elegís qué mostrar." 
                },
                { 
                  icon: Monitor, 
                  title: "3. Se muestra y actualiza", 
                  desc: "Tu contenido se sincroniza al instante y comienza a reproducirse en tu negocio de forma automática." 
                }
              ].map((step, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex gap-6 group bg-white/5 p-6 rounded-2xl border border-white/5 hover:border-primary/30 transition-all"
                >
                  <div className="w-14 h-14 shrink-0 bg-[#0B0F19] rounded-xl flex items-center justify-center shadow-lg">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white">{step.title}</h3>
                    <p className="text-slate-400 text-sm md:text-base leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative order-1 lg:order-2"
            >
              <img 
                src="/visual-features.PNG" 
                alt="Flujo de funcionamiento" 
                className="w-full h-auto object-contain relative z-10 drop-shadow-2xl rounded-2xl border border-white/10" 
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Controlá todo desde un solo lugar */}
      <section id="plataforma" className="py-24 relative bg-[#0B0F19]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Una plataforma. <span className="text-primary">Todas tus pantallas.</span></h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Controlá el contenido de una o múltiples sucursales desde un único panel centralizado.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-primary/10 blur-[100px] rounded-full pointer-events-none"></div>
            <img 
              src="/visual-plataforma.PNG" 
              alt="Panel de control centralizado" 
              className="w-full h-auto object-contain relative z-10 rounded-2xl drop-shadow-2xl border border-white/5" 
            />
          </motion.div>
        </div>
      </section>

      {/* 4. Todo el contenido que podés mostrar */}
      <section className="py-24 relative overflow-hidden bg-[#0F1423] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Todo el contenido que podés mostrar</h2>
            <p className="text-slate-400">Potenciá tus ventas con contenido dinámico y atractivo.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              "Promociones", "Imágenes y Videos", "Menús Digitales", "Páginas Web", 
              "Redes Sociales", "Horarios", "Información Comercial", "Clima y Noticias"
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-[#0B0F19] border border-white/5 hover:border-primary/30 p-6 rounded-2xl text-center flex flex-col items-center gap-4 transition-colors group"
              >
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                </div>
                <span className="font-medium text-sm md:text-base text-slate-200">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Adaptado a tu negocio */}
      <section className="py-24 relative bg-[#0B0F19]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Una solución para <span className="text-primary">cada negocio</span></h2>
            <div className="flex flex-wrap justify-center gap-3 md:gap-6 text-sm font-medium text-slate-400">
              <span className="px-4 py-2 bg-white/5 rounded-full border border-white/5">Restaurantes</span>
              <span className="px-4 py-2 bg-white/5 rounded-full border border-white/5">Tiendas</span>
              <span className="px-4 py-2 bg-white/5 rounded-full border border-white/5">Farmacias</span>
              <span className="px-4 py-2 bg-white/5 rounded-full border border-white/5">Gimnasios</span>
              <span className="px-4 py-2 bg-white/5 rounded-full border border-white/5">Hoteles</span>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
          >
            <img 
              src="/visual-comercios.PNG" 
              alt="Ejemplos de negocios" 
              className="w-full h-auto object-cover" 
            />
          </motion.div>
        </div>
      </section>

      {/* 6. Administración Remota & 7. Confiabilidad */}
      <section className="py-24 relative bg-[#0F1423] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#0B0F19] to-[#0F1423] p-10 rounded-3xl border border-white/5 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-[50px]"></div>
              <Cloud className="w-10 h-10 text-primary mb-6 relative z-10" />
              <h3 className="text-2xl font-bold mb-4 relative z-10">Actualizá tu contenido desde cualquier lugar</h3>
              <p className="text-slate-400 leading-relaxed relative z-10">
                Ya no necesitás estar físicamente frente a la pantalla ni usar pendrives. Con el Equipo Display Digital, tu contenido viaja por la nube directamente a tu negocio.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#0B0F19] to-[#0F1423] p-10 rounded-3xl border border-white/5 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/20 blur-[50px]"></div>
              <ShieldCheck className="w-10 h-10 text-emerald-400 mb-6 relative z-10" />
              <h3 className="text-2xl font-bold mb-4 relative z-10">Confiabilidad profesional</h3>
              <p className="text-slate-400 leading-relaxed relative z-10">
                Diseñada para funcionar de forma continua. Tu contenido se mantiene disponible y reproduciéndose incluso ante problemas temporales de conexión, garantizando que tu pantalla nunca quede en negro.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 8. Cierre y Conversión */}
      <section id="precios" className="py-32 bg-[#0B0F19] border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-display font-extrabold mb-8 leading-tight">
              ¿Querés llevar tu negocio al <span className="text-primary">siguiente nivel</span>?
            </h2>
            <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
              Convertí tu pantalla en una herramienta de comunicación y ventas hoy mismo.
            </p>

            <a href="https://wa.me/5493624547382" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-primary hover:bg-orange-600 text-white rounded-full font-bold text-xl transition-all shadow-[0_0_40px_-10px_rgba(255,69,0,0.6)] hover:shadow-[0_0_60px_-10px_rgba(255,69,0,0.8)] hover:scale-105">
              Quiero Display Digital <ArrowRight className="w-6 h-6" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 text-center text-slate-500 text-sm bg-[#0B0F19]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Display Digital. Todos los derechos reservados.</p>
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
