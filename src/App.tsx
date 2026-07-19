import { motion } from 'framer-motion';
import { ArrowRight, Monitor, Smartphone, Cloud, PlayCircle, Settings, CheckCircle2, ShoppingCart, Image as ImageIcon, LayoutGrid, Clock, Globe } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-[#0B0F19] text-white font-sans selection:bg-primary/30">
      
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-[#0B0F19]/90 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-orange-600 rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
              <PlayCircle className="text-white w-6 h-6" />
            </div>
            <span className="font-display font-bold text-2xl tracking-tight">Display Digital<span className="text-primary">.</span></span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#que-es" className="hover:text-white transition-colors">¿Qué es?</a>
            <a href="#como-funciona" className="hover:text-white transition-colors">Cómo Funciona</a>
            <a href="#plataforma" className="hover:text-white transition-colors">Plataforma</a>
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

      {/* 1. HERO PRINCIPAL */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-[#0B0F19] to-[#0B0F19]"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left order-2 lg:order-1"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold tracking-tight mb-6 leading-[1.1]">
                Tu pantalla puede hacer <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">mucho más</span> que mostrar contenido.
              </h1>
              <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
                Display Digital convierte las pantallas de tu negocio en un canal digital para mostrar promociones, productos, videos y contenido, todo administrado desde una sola plataforma.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a href="https://wa.me/5493624547382" target="_blank" rel="noreferrer" className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-orange-600 text-white rounded-full font-bold text-lg transition-all shadow-[0_0_30px_-10px_rgba(255,69,0,0.6)] flex items-center justify-center gap-2">
                  Quiero conocer Display Digital <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full mx-auto order-1 lg:order-2 max-w-lg lg:max-w-none"
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-primary/20 blur-[80px] rounded-full pointer-events-none"></div>
              <img 
                src="/visual-hero.PNG" 
                alt="Display Digital en tu comercio" 
                className="w-full h-auto object-contain relative z-10 drop-shadow-2xl rounded-2xl" 
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. SECCIÓN: ¿QUÉ ES DISPLAY DIGITAL? */}
      <section id="que-es" className="py-24 bg-[#0F1423] border-b border-white/5 relative">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">¿Qué es Display Digital?</h2>
            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed font-light">
              Display Digital te permite controlar lo que aparece en las pantallas de tu negocio desde una plataforma centralizada. Podés mostrar promociones, productos, videos, imágenes, información y contenido web, y actualizarlo cuando quieras.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3. SECCIÓN: CÓMO FUNCIONA */}
      <section id="como-funciona" className="py-24 relative overflow-hidden bg-[#0B0F19]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Cómo funciona en <span className="text-primary">3 pasos</span></h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                num: "01",
                title: "CONECTÁ", 
                desc: "Conectá tu pantalla mediante el EDD — Equipo Display Digital.",
                icon: Settings
              },
              { 
                num: "02",
                title: "ADMINISTRÁ", 
                desc: "Elegí y organizá el contenido desde la plataforma Display Digital.",
                icon: Smartphone
              },
              { 
                num: "03",
                title: "MOSTRÁ", 
                desc: "Tu contenido se reproduce en la pantalla de tu negocio y puede actualizarse remotamente.",
                icon: Monitor
              }
            ].map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-gradient-to-br from-[#0F1423] to-[#0B0F19] p-8 rounded-3xl border border-white/5 hover:border-primary/30 transition-all text-center relative overflow-hidden group"
              >
                <div className="text-6xl font-black text-white/5 absolute top-4 right-4 group-hover:text-primary/10 transition-colors">{step.num}</div>
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary">
                  <step.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{step.num} — {step.title}</h3>
                <p className="text-slate-400 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SECCIÓN: TODO DESDE UN SOLO LUGAR */}
      <section id="plataforma" className="py-24 relative bg-[#0F1423] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative order-2 lg:order-1"
            >
              <div className="absolute inset-0 bg-primary/10 blur-[60px] rounded-full pointer-events-none"></div>
              <img 
                src="/visual-plataforma.PNG" 
                alt="Panel de control de Display Digital" 
                className="w-full h-auto object-contain relative z-10 rounded-2xl drop-shadow-2xl border border-white/10" 
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-center lg:text-left order-1 lg:order-2"
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Una plataforma. <span className="text-primary">Todas tus pantallas.</span></h2>
              <p className="text-xl text-slate-300 leading-relaxed font-light mb-8">
                Administrá una o varias pantallas desde un solo lugar. Organizá contenido, actualizá promociones y mantené el control de tu comunicación digital.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. SECCIÓN: ¿QUÉ PODÉS MOSTRAR? */}
      <section className="py-24 relative overflow-hidden bg-[#0B0F19]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">¿Qué podés mostrar?</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: ShoppingCart, title: "Promociones y ofertas", desc: "Destacá tus mejores precios y aumentá ventas impulsivas." },
              { icon: LayoutGrid, title: "Productos y servicios", desc: "Exhibí tu catálogo completo con fotos de alta calidad." },
              { icon: ImageIcon, title: "Imágenes y videos", desc: "Creá impacto visual con contenido multimedia dinámico." },
              { icon: Globe, title: "Menús digitales", desc: "Ideal para gastronomía. Actualizá precios al instante." },
              { icon: Cloud, title: "Contenido web", desc: "Integrá redes sociales, noticias o tu propia página web." },
              { icon: Clock, title: "Horarios e información", desc: "Comunica horarios de atención y datos útiles a tus clientes." }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#0F1423] border border-white/5 hover:border-primary/30 p-8 rounded-2xl flex flex-col gap-4 transition-colors"
              >
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-xl text-white">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. SECCIÓN: ADAPTADO A TU NEGOCIO */}
      <section className="py-24 relative bg-[#0F1423] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-center lg:text-left"
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Adaptado a tu negocio</h2>
              <p className="text-xl text-slate-300 leading-relaxed font-light mb-8">
                Cada negocio tiene algo diferente para comunicar. Display Digital se adapta a tu forma de trabajar y a lo que querés mostrar.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                {["Restaurantes", "Tiendas", "Gimnasios", "Hoteles", "Farmacias", "Supermercados", "Empresas"].map((tag, i) => (
                  <span key={i} className="px-4 py-2 bg-[#0B0F19] rounded-full border border-white/10 text-sm font-medium text-slate-300 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" /> {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
            >
              <img 
                src="/visual-comercios.PNG" 
                alt="Pantallas en diversos negocios" 
                className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity" 
              />
            </motion.div>

          </div>
        </div>
      </section>

      {/* 7. SECCIÓN: ADMINISTRACIÓN REMOTA */}
      <section className="py-24 relative bg-[#0B0F19]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative order-2 lg:order-1"
            >
              <div className="absolute inset-0 bg-primary/5 blur-[50px] rounded-full pointer-events-none"></div>
              <img 
                src="/visual-features.PNG" 
                alt="Administración remota desde celular y computadora" 
                className="w-full max-w-md mx-auto lg:max-w-none h-auto object-contain relative z-10 drop-shadow-xl" 
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-center lg:text-left order-1 lg:order-2"
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Actualizá tu contenido desde cualquier lugar</h2>
              <p className="text-xl text-slate-300 leading-relaxed font-light mb-6">
                ¿Cambió una promoción? ¿Querés comunicar una nueva oferta?
              </p>
              <p className="text-lg text-slate-400 leading-relaxed">
                Modificá tu contenido desde la plataforma y mantené tus pantallas actualizadas sin tener que estar frente a ellas. Todo de forma inalámbrica y segura a través de internet.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 8. SECCIÓN: UNA SOLUCIÓN SIMPLE PARA TU NEGOCIO */}
      <section className="py-24 relative bg-primary text-white border-y border-white/10 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('/visual-hero.PNG')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-extrabold mb-6">Menos carteles impresos. <br/>Más posibilidades de comunicar.</h2>
            <p className="text-xl md:text-2xl font-light text-white/90 leading-relaxed">
              Llevá la imagen de tu negocio al futuro. Olvidate de los pendrives y de imprimir promociones temporales. Cambiá tu comunicación de forma rápida, profesional y totalmente flexible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 9. SECCIÓN FINAL DE CONVERSIÓN */}
      <section className="py-32 bg-[#0B0F19] relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-display font-extrabold mb-8 leading-tight">
              Dale una nueva forma de comunicar a tu negocio.
            </h2>
            <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
              Convertí tu pantalla en un canal digital para mostrar lo que tu negocio tiene para ofrecer.
            </p>

            <a href="https://wa.me/5493624547382" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-primary hover:bg-orange-600 text-white rounded-full font-bold text-xl transition-all shadow-[0_0_40px_-10px_rgba(255,69,0,0.6)] hover:shadow-[0_0_60px_-10px_rgba(255,69,0,0.8)] hover:scale-105">
              Consultar por Display Digital <ArrowRight className="w-6 h-6" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Cross Selling Footer Section */}
      <section className="py-20 bg-[#0F1423] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-4 text-white">¿Buscas soluciones interactivas para tu evento?</h2>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
            Además de cartelería digital para comercios, somos expertos en entretenimiento para eventos. Conoce nuestro servicio de PhotoBooth, Trivias y Cartelera de Fotos en vivo.
          </p>
          <a href="https://event-pix.com.ar/eventos" className="inline-flex px-8 py-3 border border-primary/50 text-white hover:bg-primary hover:border-primary rounded-full font-bold transition-all">
            Conocer EventPix para Eventos
          </a>
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
