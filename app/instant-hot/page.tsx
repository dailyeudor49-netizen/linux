'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Zap, Droplets, Thermometer, Wrench, ArrowRight, CheckCircle2, Star, RefreshCw, Leaf, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Marco Z.',
    source: 'Google',
    rating: 5,
    text: 'Acqua calda subito, senza aspettare. Prima perdevo litri d\'acqua aspettando che arrivasse calda dalla caldaia in garage. Adesso apro e via. Ottimo acquisto.',
    gender: 'M'
  },
  {
    name: 'Giulia B.',
    source: 'Trustpilot',
    rating: 5,
    text: 'Ho la pelle molto delicata e l\'acqua del rubinetto mi seccava le mani. Da quando lo uso sento davvero la differenza, le mani restano morbide anche dopo tanti lavaggi.',
    gender: 'F'
  },
  {
    name: 'Alessandro P.',
    source: 'Amazon',
    rating: 5,
    text: 'Montato in 5 minuti, funziona perfettamente. Il display è comodissimo per vedere la temperatura. E in bolletta non ho notato aumenti, consuma pochissimo.',
    gender: 'M'
  },
  {
    name: 'Francesca M.',
    source: 'Facebook',
    rating: 4,
    text: 'Bello esteticamente e funziona bene. L\'unica cosa è che ci ho messo un po\' a capire come regolare il pH, ma poi è facilissimo. Lo consiglio!',
    gender: 'F'
  },
  {
    name: 'Roberto L.',
    source: 'Feedaty',
    rating: 5,
    text: 'Finalmente posso lavare le verdure con acqua calda senza aspettare mezz\'ora. E lo snodo a 360° è comodissimo per le pentole grandi. Soldi ben spesi.',
    gender: 'M'
  },
  {
    name: 'Sara T.',
    source: 'Google',
    rating: 5,
    text: 'Lo uso da 2 mesi e sono contentissima. L\'acqua esce calda istantaneamente e la pelle delle mani è molto meno secca di prima. Il design poi è bellissimo.',
    gender: 'F'
  },
  {
    name: 'Davide C.',
    source: 'Trustpilot',
    rating: 5,
    text: 'Ero scettico sul montaggio fai-da-te, ma è stato semplicissimo. Si avvita al posto del vecchio rubinetto e in 3 minuti era già funzionante. Top!',
    gender: 'M'
  },
  {
    name: 'Valentina G.',
    source: 'Amazon',
    rating: 5,
    text: 'Regalo perfetto per i miei genitori anziani. Non devono più aspettare l\'acqua calda e il display grande si legge benissimo. Sono felicissimi!',
    gender: 'F'
  },
  {
    name: 'Luca F.',
    source: 'Google',
    rating: 5,
    text: 'Qualità costruttiva ottima, si vede che è acciaio vero. Dopo 4 mesi è ancora perfetto, niente calcare e niente ruggine. Lo ricomprerei subito.',
    gender: 'M'
  },
  {
    name: 'Chiara D.',
    source: 'Feedaty',
    rating: 5,
    text: 'Cercavo qualcosa per non sprecare più acqua aspettando che si scaldasse. Questo rubinetto è la soluzione perfetta. E costa molto meno di quello che pensavo!',
    gender: 'F'
  }
];

const TestimonialsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleManualNav = (callback: () => void) => {
    setAutoPlay(false);
    callback();
  };

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => {
      nextTestimonial();
    }, 5000);
    return () => clearInterval(timer);
  }, [autoPlay]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0
    })
  };

  return (
    <section id="testimonianze" className="py-10 md:py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-8 md:px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Cosa Dicono i Nostri Clienti
          </h2>
          <div className="flex items-center justify-center gap-2">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 md:w-6 md:h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-base md:text-lg font-bold text-slate-900">4.8</span>
            <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
            <span className="text-base md:text-lg text-gray-600">2.847 recensioni</span>
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-2xl bg-white shadow-xl p-6 md:p-10 min-h-[280px]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center text-center will-change-transform"
              >
                <Quote className="w-10 h-10 text-teal-600 mb-4 opacity-50" />
                <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
                  "{testimonials[currentIndex].text}"
                </p>
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${i < testimonials[currentIndex].rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
                <p className="font-bold text-slate-900">{testimonials[currentIndex].name}</p>
                <p className="text-sm text-gray-500 mt-1 italic">Tramite <span className="font-bold">{testimonials[currentIndex].source}</span></p>
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            onClick={() => handleManualNav(prevTestimonial)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-teal-600 transition-colors cursor-pointer"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={() => handleManualNav(nextTestimonial)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-teal-600 transition-colors cursor-pointer"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setAutoPlay(false);
                setDirection(i > currentIndex ? 1 : -1);
                setCurrentIndex(i);
              }}
              className={`w-2 h-2 rounded-full transition-all cursor-pointer ${i === currentIndex ? 'bg-teal-600 w-6' : 'bg-gray-300'}`}
            />
          ))}
        </div>

        <p className="text-center text-slate-500 text-sm mt-8">
          Puoi leggere altre recensioni su Google, Facebook e altre piattaforme che permettano di parlare di noi.
        </p>
      </div>
    </section>
  );
};

export default function LandingPage() {
  const [formOpen, setFormOpen] = useState(false);
  const [showSticky, setShowSticky] = useState(true);
  const router = useRouter();

  const openForm = () => {
    // Seleziona il box giusto in base alla larghezza dello schermo
    const isMobile = window.innerWidth < 1024;
    const element = document.getElementById(isMobile ? 'order-form-mobile' : 'order-form');

    if (element) {
      // Calcola la distanza da scrollare
      const elementRect = element.getBoundingClientRect();
      const distance = Math.abs(elementRect.top);

      // Scrolla al box
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });

      // Timeout proporzionale alla distanza (minimo 400ms, massimo 1500ms)
      const timeout = Math.min(Math.max(distance * 0.5, 400), 1500);

      setTimeout(() => {
        setFormOpen(true);
      }, timeout);
    } else {
      setFormOpen(true);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/instant-hot/thank-you');
  };

  const scrollToReviews = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('testimonianze')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Hide sticky CTA when at bottom of page
  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const clientHeight = window.innerHeight;
      const isAtBottom = scrollTop + clientHeight >= scrollHeight - 200;
      setShowSticky(!isAtBottom);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-blue-600 selection:text-white">

      {/* --- HERO SECTION --- */}
      <header className="relative overflow-hidden bg-white pb-10 lg:pb-0">
        <div className="absolute inset-0 bg-[url('https://lh3.googleusercontent.com/proxy/9r8IQAITiiVc7KPxWCQKahMU2N9x4kDCRGl_IWOoykp5ZHNORYeohNOZrlMu5WVmdqzcn82xl8K53mCczyV4Pj2b5g-6_cmv9YEtUGBV_JlUj56zIp9mTxqRuEC1l3NCpkCdCXzQjhk7ey6GitU_Rw')] bg-cover bg-center z-0 blur-[8px]"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-teal-900 z-[1] opacity-80"></div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500 rounded-full blur-[120px] opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-teal-500 rounded-full blur-[100px] opacity-20"></div>
        <div className="absolute top-1/2 left-1/3 w-[300px] h-[300px] bg-cyan-500 rounded-full blur-[80px] opacity-10"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-green-600 rounded-full blur-[90px] opacity-10"></div>

        <div className="relative z-10 container mx-auto px-4 py-12 lg:py-24 flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-16">
          <div className="lg:w-1/2 text-white space-y-6">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full text-sm font-bold tracking-wide text-blue-100 uppercase shadow-lg">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" /> Best Seller Novembre 2025
            </div>
            <h1 className="text-4xl lg:text-7xl font-extrabold leading-tight tracking-tight">
              <span className="text-2xl lg:text-4xl text-yellow-400">HydroLux 3.0</span><br />
              Acqua <span className="text-cyan-400">pura</span> e <span className="text-orange-500">calda</span><br />
              in un secondo.
            </h1>
            <a onClick={scrollToReviews} className="flex items-center gap-2 hover:opacity-80 transition-opacity cursor-pointer group">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    whileTap={{ scale: 1.4, rotate: 20 }}
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Star className="w-4 h-4 lg:w-5 lg:h-5 fill-yellow-400 text-yellow-400 group-hover:drop-shadow-[0_0_8px_rgba(250,204,21,0.8)] transition-all" />
                  </motion.div>
                ))}
              </div>
              <span className="text-sm lg:text-base font-bold text-white">4.8</span>
              <span className="text-sm lg:text-base text-slate-300">• 2.847 recensioni</span>
            </a>
            <p className="text-lg lg:text-2xl text-slate-300 max-w-lg leading-relaxed">
              <strong>Purifica</strong> e <strong>riscalda</strong> l'acqua in un <strong>istante</strong>, con <strong>pH regolabile</strong> per la propria pelle.<br />
              <strong>Nessun costo mensile.</strong>
            </p>

            <ul className="space-y-3 text-slate-200">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>Acqua <strong>calda</strong> istantanea, <strong>senza gas</strong></span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span><strong>Solo 0,10€ al giorno</strong> di corrente in bolletta</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span><strong>Purifica</strong> l'acqua e la adatta al <strong>pH</strong> della pelle</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span><strong>Rubinetto incluso</strong> ruotabile di <strong>360°</strong></span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span><strong>Display LED</strong> con regolazione temperatura e pH</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>Si monta in <strong>3 minuti</strong>, senza idraulico</span>
              </li>
            </ul>
            
          </div>

          <div className="lg:w-1/2 relative w-full">
            {/* Immagine Hero Prodotto */}
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 aspect-square group">
                <div className="absolute inset-0 bg-[url('/images/instant-hot/hero1.png')] bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"></div>
                
                {/* Overlay Informativi */}
                <div className="absolute top-3 right-3 lg:top-6 lg:right-6 bg-black/25 backdrop-blur-[2px] text-white p-3 rounded-xl border border-white/10 shadow-lg">
                   <div className="text-xs text-gray-300 uppercase font-bold">Temperatura</div>
                   <div className="text-2xl font-mono font-bold text-yellow-400 flex items-center gap-1">
                     45<span className="text-sm">°C</span> <Zap className="w-4 h-4 text-yellow-400 fill-current animate-pulse"/>
                   </div>
                </div>

                <div className="absolute bottom-3 left-3 lg:bottom-6 lg:left-6 w-[200px] h-[200px] bg-orange-500 blur-[60px] z-[1] rounded-full opacity-60"></div>
                <div className="absolute bottom-3 left-3 lg:bottom-6 lg:left-6 bg-white/50 backdrop-blur-[2px] p-4 rounded-xl shadow-xl max-w-[200px] z-[2]">
                    <div className="flex items-center gap-2 mb-1">
                        <Droplets className="w-5 h-5 text-blue-600 fill-blue-600" />
                        <span className="font-bold text-slate-900 text-sm">pH Bilanciato</span>
                    </div>
                    <div className="text-xs text-slate-600 leading-tight">Protezione attiva per la pelle delle mani.</div>
                </div>
            </div>
            {/* Glow effect */}
            <div className="absolute -inset-4 bg-cyan-500/30 blur-3xl -z-10 rounded-full"></div>

            {/* Box Ultimi Pezzi + Form - DESKTOP */}
            <div id="order-form" className="mt-4 hidden lg:block">
              <motion.div
                layout
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl overflow-hidden"
              >
                <AnimatePresence mode="wait">
                  {!formOpen ? (
                    <motion.div
                      key="closed"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="px-6 py-4"
                    >
                      <div className="flex items-center justify-center gap-2 text-white font-bold mb-3">
                        <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                        Ultimi 7 pezzi disponibili
                      </div>
                      <div className="flex items-center justify-center gap-3 mb-3">
                        <span className="text-slate-400 line-through text-lg">€149,00</span>
                        <span className="text-3xl font-bold text-white">€89,90</span>
                        <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">-40%</span>
                      </div>
                      <div className="flex items-center justify-center gap-2 sm:gap-4 text-slate-300 text-sm mb-4">
                        <span>Pagamento alla consegna</span>
                        <span className="text-slate-500">•</span>
                        <span>Spedizione gratuita 24/48h</span>
                        <span className="text-slate-500">•</span>
                        <span>30 giorni di reso</span>
                      </div>
                      <button
                        onClick={openForm}
                        className="cursor-pointer w-full bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-300 hover:to-orange-400 text-slate-900 font-bold py-4 px-6 rounded-xl shadow-[0_0_25px_rgba(251,191,36,0.4)] transition-all hover:scale-[1.03] flex flex-col items-center justify-center gap-0 animate-soft-pulse"
                      >
                        <span className="flex items-center gap-2 text-xl">Ordina Ora <ArrowRight className="w-5 h-5" /></span>
                        <span className="text-sm font-medium opacity-80">Paghi alla Consegna</span>
                      </button>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="open"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="px-6 py-4"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2 text-white font-bold">
                          <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                          Ultimi 7 pezzi disponibili
                        </div>
                        <button
                          onClick={() => setFormOpen(false)}
                          className="cursor-pointer text-white/60 hover:text-white transition-colors text-sm"
                        >
                          Chiudi
                        </button>
                      </div>
                      <div className="flex items-center justify-center gap-3 mb-3">
                        <span className="text-slate-400 line-through text-lg">€149,00</span>
                        <span className="text-3xl font-bold text-white">€89,90</span>
                        <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">-40%</span>
                      </div>
                      <div className="flex items-center justify-center gap-2 sm:gap-4 text-slate-300 text-sm mb-4">
                        <span>Pagamento alla consegna</span>
                        <span className="text-slate-500">•</span>
                        <span>Spedizione gratuita 24/48h</span>
                        <span className="text-slate-500">•</span>
                        <span>30 giorni di reso</span>
                      </div>
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                          <label className="block text-white text-sm font-medium mb-1">Nome e Cognome</label>
                          <input
                            type="text"
                            placeholder="Mario Rossi"
                            required
                            className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:border-yellow-400 transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-white text-sm font-medium mb-1">Numero di Telefono</label>
                          <input
                            type="tel"
                            placeholder="+39 333 1234567"
                            required
                            className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:border-yellow-400 transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-white text-sm font-medium mb-1">Indirizzo di Spedizione</label>
                          <input
                            type="text"
                            placeholder="Via Roma 1, 00100 Roma"
                            required
                            className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:border-yellow-400 transition-colors"
                          />
                        </div>
                        <button
                          type="submit"
                          className="cursor-pointer w-full bg-gradient-to-r from-green-800 via-green-600 to-emerald-500 hover:from-green-700 hover:via-green-500 hover:to-emerald-400 text-white font-bold py-4 px-6 rounded-xl shadow-[0_0_20px_rgba(22,163,74,0.4)] transition-all hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(22,163,74,0.6)] flex flex-col items-center justify-center gap-0 animate-soft-pulse"
                        >
                          <span className="flex items-center gap-2 text-xl">Conferma Ordine <ArrowRight className="w-5 h-5" /></span>
                          <span className="text-sm font-medium opacity-90">Paghi alla Consegna</span>
                        </button>
                      </form>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Box Ultimi Pezzi + Form - MOBILE (in fondo alla hero) */}
        <div id="order-form-mobile" className="lg:hidden relative z-10 container mx-auto px-4 pb-8">
          <motion.div
            layout
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl overflow-hidden"
          >
            <AnimatePresence mode="wait">
              {!formOpen ? (
                <motion.div
                  key="closed"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="px-6 py-4"
                >
                  <div className="flex items-center justify-center gap-2 text-white font-bold mb-3">
                    <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                    Ultimi 7 pezzi disponibili
                  </div>
                  <div className="flex items-center justify-center gap-3 mb-3">
                    <span className="text-slate-400 line-through text-lg">€149,00</span>
                    <span className="text-3xl font-bold text-white">€89,90</span>
                    <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">-40%</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-slate-300 text-sm mb-4">
                    <span>Pagamento alla consegna</span>
                    <span className="text-slate-500">•</span>
                    <span>Spedizione gratuita 24/48h</span>
                    <span className="text-slate-500">•</span>
                    <span>30 giorni di reso</span>
                  </div>
                  <button
                    onClick={openForm}
                    className="cursor-pointer w-full bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-300 hover:to-orange-400 text-slate-900 font-bold py-4 px-6 rounded-xl shadow-[0_0_25px_rgba(251,191,36,0.4)] transition-all hover:scale-[1.03] flex flex-col items-center justify-center gap-0 animate-soft-pulse"
                  >
                    <span className="flex items-center gap-2 text-xl">Ordina Ora <ArrowRight className="w-5 h-5" /></span>
                    <span className="text-sm font-medium opacity-80">Paghi alla Consegna</span>
                  </button>
                </motion.div>
              ) : (
                <motion.div
                  key="open"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="px-6 py-4"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2 text-white font-bold">
                      <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                      Ultimi 7 pezzi disponibili
                    </div>
                    <button
                      onClick={() => setFormOpen(false)}
                      className="cursor-pointer text-white/60 hover:text-white transition-colors text-sm"
                    >
                      Chiudi
                    </button>
                  </div>
                  <div className="flex items-center justify-center gap-3 mb-3">
                    <span className="text-slate-400 line-through text-lg">€149,00</span>
                    <span className="text-3xl font-bold text-white">€89,90</span>
                    <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">-40%</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-slate-300 text-sm mb-4">
                    <span>Pagamento alla consegna</span>
                    <span className="text-slate-500">•</span>
                    <span>Spedizione gratuita 24/48h</span>
                    <span className="text-slate-500">•</span>
                    <span>30 giorni di reso</span>
                  </div>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-white text-sm font-medium mb-1">Nome e Cognome</label>
                      <input
                        type="text"
                        placeholder="Mario Rossi"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:border-yellow-400 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-white text-sm font-medium mb-1">Numero di Telefono</label>
                      <input
                        type="tel"
                        placeholder="+39 333 1234567"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:border-yellow-400 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-white text-sm font-medium mb-1">Indirizzo di Spedizione</label>
                      <input
                        type="text"
                        placeholder="Via Roma 1, 00100 Roma"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:border-yellow-400 transition-colors"
                      />
                    </div>
                    <button
                      type="submit"
                      className="cursor-pointer w-full bg-gradient-to-r from-green-800 via-green-600 to-emerald-500 hover:from-green-700 hover:via-green-500 hover:to-emerald-400 text-white font-bold py-4 px-6 rounded-xl shadow-[0_0_20px_rgba(22,163,74,0.4)] transition-all hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(22,163,74,0.6)] flex flex-col items-center justify-center gap-0 animate-soft-pulse"
                    >
                      <span className="flex items-center gap-2 text-xl">Conferma Ordine <ArrowRight className="w-5 h-5" /></span>
                      <span className="text-sm font-medium opacity-90">Paghi alla Consegna</span>
                    </button>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </header>

      {/* --- TRUST BAR (Allineata a sinistra su Mobile) --- */}
      <div className="bg-white border-b border-slate-200 shadow-sm relative z-20">
        <div className="container mx-auto px-4 py-6">
            <div className="grid grid-cols-2 sm:flex sm:flex-row sm:flex-wrap sm:justify-center gap-4 sm:gap-10">
                
                <TrustBadge 
                    icon={<ShieldCheck className="w-6 h-6 text-blue-700" />} 
                    title="Certificato CE" 
                    sub="SICUREZZA EUROPEA"
                />
                <TrustBadge 
                    icon={<RefreshCw className="w-6 h-6 text-slate-600" />} 
                    title="Acciaio Inox 316" 
                    sub="GRADO CHIRURGICO"
                />
                <TrustBadge 
                    icon={<Droplets className="w-6 h-6 text-cyan-500" />} 
                    title="Tecnologia pH+" 
                    sub="DERMO-PROTETTIVA"
                />
                <TrustBadge 
                    icon={<Leaf className="w-6 h-6 text-green-600" />} 
                    title="Eco Energy A+++" 
                    sub="RISPARMIO GARANTITO"
                />

            </div>
        </div>
      </div>

      {/* --- FEATURES GRID (2 COLS MOBILE) --- */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Eccellenza Tecnica.</h2>
            <p className="text-slate-600 text-lg">
              Abbiamo unito il design italiano alla tecnologia termica di precisione.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8">
            <ImgFeatureCard
              img="/images/instant-hot/6x1.jpg"
              title="Caldo Istantaneo"
              desc="Acqua calda in soli 3 secondi. Basta aspettare che arrivi dalla caldaia: apri il rubinetto e l'acqua è già pronta."
            />
            <ImgFeatureCard
              img="/images/instant-hot/6x2.jpg"
              title="Pelle di Seta"
              desc="Il sistema di ionizzazione neutralizza il calcare e bilancia il pH. Le tue mani restano morbide anche dopo tanti lavaggi."
            />
            <ImgFeatureCard
              img="/images/instant-hot/6x3.jpg"
              title="Display Control"
              desc="Il display LED ti mostra temperatura e pH in tempo reale. Regoli tutto con un tocco, senza sorprese."
            />
            <ImgFeatureCard
              img="/images/instant-hot/6x4.jpg"
              title="Montaggio Easy"
              desc="Lo monti da solo in 3 minuti, senza idraulico e senza attrezzi speciali. Si avvita al posto del tuo vecchio rubinetto."
            />
            <ImgFeatureCard
              img="/images/instant-hot/6x5.jpg"
              title="Inox Eterno"
              desc="Acciaio inox di alta qualità con finitura cromata multistrato. Resiste alla ruggine e resta lucido per anni."
            />
            <ImgFeatureCard
              img="/images/instant-hot/6x6.jpg"
              title="Doccetta Inclusa"
              desc="Si installa sia in cucina che in doccia. Nel prezzo è inclusa una doccetta per avere acqua calda istantanea ovunque."
            />
          </div>
        </div>
      </section>

    

{/* --- THE "EXAGGERATED" SCIENCE SECTION --- */}
      <section className="relative py-20 lg:py-32 bg-slate-900 text-white overflow-hidden">
        
        {/* 1. IMMAGINE DI SFONDO (Visibile e Fixed) */}
        <div 
            className="absolute inset-0 z-0 bg-cover bg-center bg-fixed bg-no-repeat"
            style={{ 
                backgroundImage: "url('https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?auto=format&fit=crop&q=80')",
                opacity: 0.4 /* Aumentata opacità per vederla bene */
            }}
        ></div>

        {/* 2. OVERLAY SFUMATO (Per leggere il testo sopra la foto) */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-slate-900/90 via-slate-900/60 to-slate-900/90"></div>

        {/* 3. CONTENUTO */}
        <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
                <h3 className="text-yellow-500 font-bold uppercase tracking-widest mb-2 shadow-black drop-shadow-md">Tecnologia Skin-Care</h3>
                <h2 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight">La tua pelle merita un'acqua migliore.</h2>
                <p className="text-gray-200 text-lg mb-6 leading-relaxed font-medium">
                    L'acqua del rubinetto spesso contiene micro-particelle e calcare che seccano l'epidermide.  
                    <strong> HydroLux 3.0</strong> integra una camera di vorticazione che abbatte la durezza dell'acqua proprio mentre la riscalda.
                </p>
                <ul className="space-y-4">
                    <li className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold shadow-lg shadow-blue-600/50 shrink-0">1</div>
                        <span className="text-gray-100 font-medium">Elimina il 99% del cloro residuo al contatto termico.</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold shadow-lg shadow-blue-600/50 shrink-0">2</div>
                        <span className="text-gray-100 font-medium">pH bilanciato per prevenire arrossamenti e secchezza.</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold shadow-lg shadow-blue-600/50 shrink-0">3</div>
                        <span className="text-gray-100 font-medium">Ideale per pelli sensibili e per il lavaggio di alimenti freschi.</span>
                    </li>
                </ul>
            </div>
            
            <div className="lg:w-1/2 w-full bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 shadow-2xl">
                <div className="text-center">
                    <p className="text-sm uppercase tracking-widest mb-2 text-gray-300">Risparmio Stimato</p>
                    <div className="text-5xl lg:text-6xl font-bold text-green-400 mb-2 drop-shadow-lg">-60%</div>
                    <p className="text-lg text-white font-medium">Sulla bolletta del gas</p>
                    <div className="mt-6 text-xs text-gray-300 italic border-t border-white/10 pt-4">
                        *Dato basato su test comparativi con boiler tradizionali a gas in abitazioni di grandezza media.
                    </div>
                </div>
            </div>
        </div>
      </section>



      <TestimonialsSlider />

      {/* --- CTA FINAL --- */}
      <section className="py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://hellawater.com/wp-content/uploads/2025/01/blue-water-1024x576.webp')] bg-cover bg-center z-0 blur-[8px]"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-teal-900 z-[1] opacity-80"></div>
        <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 max-w-5xl mx-auto">
                <div className="text-center lg:text-left lg:w-1/2">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Pronto a cambiare il tuo rubinetto?</h2>
                    <p className="text-lg text-slate-300 max-w-xl">
                        Acqua calda istantanea, purificata e con pH bilanciato. Inizia oggi a risparmiare tempo, acqua e gas.
                    </p>
                </div>

                <div className="bg-white/10 backdrop-blur-md p-8 md:p-10 rounded-2xl shadow-xl border border-white/20 lg:w-1/2 max-w-md mx-auto lg:mx-0">
                    <div className="flex flex-col items-center gap-3 mb-6">
                        <div className="flex items-center gap-3">
                          <span className="text-slate-400 line-through text-xl">€149,00</span>
                          <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">-40%</span>
                        </div>
                        <div className="text-5xl md:text-6xl font-bold text-white tracking-tight">€89,90</div>
                    </div>

                    <div className="flex items-center justify-center gap-2 sm:gap-6 text-slate-300 text-sm mb-4">
                        <span>Spedizione gratuita 24/48h</span>
                        <span className="text-slate-500">•</span>
                        <span>30 giorni di reso</span>
                    </div>

                    <button onClick={openForm} className="cursor-pointer w-full bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-300 hover:to-orange-400 text-slate-900 font-bold py-5 px-6 rounded-xl text-xl shadow-[0_0_25px_rgba(251,191,36,0.4)] transition-all hover:scale-[1.02] flex flex-col items-center justify-center gap-0 animate-soft-pulse">
                        <span className="flex items-center gap-2">Ordina Ora <ArrowRight className="w-5 h-5" /></span>
                        <span className="text-sm font-medium opacity-80">Paghi alla Consegna</span>
                    </button>
                </div>
            </div>
        </div>
      </section>

      {/* --- STICKY CTA --- */}
      <AnimatePresence>
        {showSticky && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-4 left-4 right-4 z-50"
          >
            <div className="max-w-5xl mx-auto bg-gradient-to-r from-slate-900 via-teal-900 to-slate-900 border border-teal-500/30 shadow-[0_4px_30px_rgba(0,0,0,0.4)] backdrop-blur-md rounded-2xl">
              <div className="px-4 py-3 flex items-center justify-between gap-4">
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <span className="text-slate-400 line-through text-base sm:text-lg">€149</span>
                    <span className="text-xl sm:text-2xl font-bold text-white">€89,90</span>
                    <span className="bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full animate-pulse">-40%</span>
                  </div>
                  <div className="flex flex-col text-xs sm:text-sm text-slate-300">
                    <span>Spedizione gratuita 24/48h</span>
                    <span>Pagamento alla consegna</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <button onClick={openForm} className="cursor-pointer bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-300 hover:to-orange-400 text-slate-900 font-bold py-4 px-6 sm:px-10 lg:px-14 rounded-xl shadow-lg shadow-orange-500/30 transition-all hover:scale-105 flex items-center justify-center gap-2 text-base sm:text-lg lg:text-xl animate-soft-pulse">
                    <span>Ordina Ora</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}

// --- COMPONENTI ---

function TrustBadge({ icon, title, sub }: { icon: React.ReactNode; title: string; sub: string }) {
    return (
        <div className="flex items-center gap-3 group w-full sm:w-auto">
            <div className="bg-slate-50 p-2 rounded-lg border border-slate-200 group-hover:border-blue-200 group-hover:bg-blue-50 transition-colors shadow-sm shrink-0">
                {icon}
            </div>
            <div className="flex flex-col text-left">
                <span className="font-bold text-slate-900 text-sm md:text-base leading-tight">{title}</span>
                <span className="text-[10px] md:text-xs text-slate-500 font-bold uppercase tracking-wide">{sub}</span>
            </div>
        </div>
    )
}

function ImgFeatureCard({ img, title, desc }: { img: string; title: string; desc: string }) {
    return (
        <div className="bg-white rounded-xl overflow-hidden shadow hover:shadow-xl transition-all duration-300 border border-slate-100 group">
            {/* Image Container - Aspect Ratio 3:2 */}
            <div className="aspect-[3/2] overflow-hidden relative">
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors z-10"></div>
                <img
                    src={img}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
            </div>
            {/* Content */}
            <div className="p-3 sm:p-6">
                <h3 className="text-base sm:text-xl font-bold text-slate-900 mb-1">{title}</h3>
                <p className="text-sm sm:text-base text-slate-600 leading-snug">{desc}</p>
            </div>
        </div>
    )
}

