'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, CheckCircle, Lock, Smartphone, Clock, Star, Zap, Award, Phone, Camera, Bell, Users, ArrowRight, ChevronDown, Download, Settings, Radar, Battery, Circle, Wifi, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Marco R.',
    source: 'Trustpilot',
    rating: 5,
    text: 'Installato in 10 minuti, funziona da dio. L\'app è semplicissima e le notifiche arrivano subito. Consigliatissimo!',
    gender: 'M'
  },
  {
    name: 'Giulia T.',
    source: 'Facebook',
    rating: 5,
    text: 'Finalmente dormo tranquilla! Abito da sola e avevo sempre paura. Ora se qualcuno si avvicina alla porta mi arriva subito la notifica con la foto. Top!',
    gender: 'F'
  },
  {
    name: 'Alessandro P.',
    source: 'Google',
    rating: 5,
    text: 'Rapporto qualità prezzo incredibile. Ho confrontato con altri sistemi da 500€+ e questo fa le stesse cose. Niente abbonamenti poi è un plus enorme.',
    gender: 'M'
  },
  {
    name: 'Francesca M.',
    source: 'Trustpilot',
    rating: 4,
    text: 'Bello e facile da usare. Unica cosa, avrei voluto più sensori nella confezione, ma tanto si possono comprare a parte e costano pochissimo. Per il prezzo va benissimo!',
    gender: 'F'
  },
  {
    name: 'Roberto C.',
    source: 'Feedaty',
    rating: 5,
    text: 'Mi hanno provato a entrare in casa 2 anni fa. Mai più senza allarme. Questo sistema è perfetto, la sirena è fortissima e l\'app funziona benissimo anche da lontano.',
    gender: 'M'
  },
  {
    name: 'Sara L.',
    source: 'Google',
    rating: 5,
    text: 'Lo uso da 3 mesi, zero problemi. Le telecamere sono piccole ma la qualità video è ottima, anche di notte!',
    gender: 'F'
  },
  {
    name: 'Davide B.',
    source: 'Facebook',
    rating: 5,
    text: 'Scettico all\'inizio, ora non posso farne a meno. La cosa che mi piace di più è che si disattiva automaticamente quando arrivo a casa.',
    gender: 'M'
  },
  {
    name: 'Valentina G.',
    source: 'Feedaty',
    rating: 5,
    text: 'Ho preso questo per la casa al mare. Installazione facilissima, lo controllo tutto dall\'app quando sono a casa in città. Ottimo acquisto!',
    gender: 'F'
  },
  {
    name: 'Luca F.',
    source: 'Google',
    rating: 5,
    text: 'Ottimo prodotto, fa quello che deve fare. L\'assistenza mi ha risposto subito quando avevo un dubbio sulla configurazione.',
    gender: 'M'
  },
  {
    name: 'Chiara D.',
    source: 'Trustpilot',
    rating: 5,
    text: 'I miei genitori anziani vivono soli e volevo stare tranquilla. Ora posso vedere cosa succede in casa loro in qualsiasi momento. Li ho convinti a prenderlo ed è stata la decisione migliore!',
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
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a2744] mb-4">
            Cosa Dicono i Nostri Clienti
          </h2>
          <div className="flex items-center justify-center gap-2">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 md:w-6 md:h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-base md:text-lg font-bold text-[#1a2744]">4.9</span>
            <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
            <span className="text-base md:text-lg text-gray-600">8.254 recensioni</span>
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
                className="flex flex-col items-center text-center"
              >
                <Quote className="w-10 h-10 text-blue-600 mb-4 opacity-50" />
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
                <p className="font-bold text-[#1a2744]">{testimonials[currentIndex].name}</p>
                <p className="text-sm text-gray-500 mt-1 italic">Tramite <span className="font-bold">{testimonials[currentIndex].source}</span></p>
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            onClick={() => handleManualNav(prevTestimonial)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-blue-600 transition-colors cursor-pointer"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={() => handleManualNav(nextTestimonial)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-blue-600 transition-colors cursor-pointer"
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
              className={`w-2 h-2 rounded-full transition-all cursor-pointer ${i === currentIndex ? 'bg-blue-600 w-6' : 'bg-gray-300'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const InstallationGuide = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const steps = [
    {
      step: 1,
      title: 'Installa telecamere e sensori',
      desc: 'Le telecamere e i sensori possono essere installati in diversi modi: con ventose, colla adesiva, viti oppure semplicemente appoggiati su una superficie. Scegli il metodo più adatto alla tua casa e posizionali nei punti strategici.',
      image: '/images/secure/conf1.jpg',
      imageAlt: 'Installazione telecamere e sensori'
    },
    {
      step: 2,
      title: 'Scarica l\'app e inserisci il codice',
      desc: 'Scarica l\'app gratuita dal tuo store (App Store o Google Play) e inserisci il codice univoco fornito insieme al prodotto. Lo trovi stampato sulla scatola e sul libretto di istruzioni incluso nella confezione.',
      image: '/images/secure/conf2.jpg',
      imageAlt: 'Download app e inserimento codice'
    },
    {
      step: 3,
      title: 'Configura emergenze e disattivazione',
      desc: 'Imposta i numeri di emergenza da chiamare in caso di allarme e scegli come disattivare il sistema: automaticamente quando il tuo telefono viene rilevato nelle vicinanze, oppure inserendo un codice sulla centralina all\'ingresso di casa.',
      image: '/images/secure/conf3.jpg',
      imageAlt: 'Configurazione sistema di sicurezza'
    }
  ];

  const toggleStep = (stepIndex: number) => {
    setActiveStep(activeStep === stepIndex ? null : stepIndex);
  };

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a2744] mb-4">
            Guida all'Installazione
          </h2>
          <p className="text-xl text-gray-600">3 semplici passaggi per proteggere la tua casa in 5 minuti</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Steps accordion */}
          <div className="space-y-4">
            {steps.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <button
                  onClick={() => toggleStep(index)}
                  className={`w-full text-left rounded-xl p-6 transition-all cursor-pointer ${
                    activeStep === index
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-gray-50 hover:bg-gray-100 text-[#1a2744]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 min-w-12 min-h-12 rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0 ${
                        activeStep === index ? 'bg-white text-blue-600' : 'bg-blue-600 text-white'
                      }`}>
                        {item.step}
                      </div>
                      <h3 className="text-xl font-bold">{item.title}</h3>
                    </div>
                    <ChevronDown
                      className={`transition-transform ${activeStep === index ? 'rotate-180' : ''}`}
                      size={24}
                    />
                  </div>

                  <motion.div
                    initial={false}
                    animate={{
                      height: activeStep === index ? 'auto' : 0,
                      opacity: activeStep === index ? 1 : 0,
                      marginTop: activeStep === index ? 16 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className={`text-base leading-relaxed ${
                      activeStep === index ? 'text-blue-100' : 'text-gray-600'
                    }`}>
                      {item.desc}
                    </p>
                    {/* Immagine dentro il box su mobile */}
                    <div className="md:hidden mt-4 relative aspect-square rounded-xl overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.imageAlt}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </motion.div>
                </button>
              </motion.div>
            ))}
          </div>

          {/* Image section - su mobile mostra sempre conf0, su desktop cambia */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:sticky md:top-8"
          >
            {/* Mobile: sempre conf0 */}
            <div className="md:hidden relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/secure/conf0.png"
                alt="Guida installazione sistema di sicurezza"
                fill
                className="object-cover"
              />
            </div>
            {/* Desktop: cambia in base allo step */}
            <div className="hidden md:block relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={activeStep !== null ? steps[activeStep].image : '/images/secure/conf0.png'}
                alt={activeStep !== null ? steps[activeStep].imageAlt : 'Guida installazione sistema di sicurezza'}
                fill
                className="object-cover transition-all duration-500"
              />
              {activeStep !== null && (
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              )}
              {activeStep !== null && (
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4">
                    <p className="font-bold text-[#1a2744]">Step {steps[activeStep].step}</p>
                    <p className="text-sm text-gray-600">{steps[activeStep].title}</p>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>

        <div className="text-center mt-12">
          <button
            onClick={scrollToOrderForm}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-12 rounded-full text-lg transition-all uppercase shadow-lg cursor-pointer"
          >
            Inizia Subito
          </button>
        </div>
      </div>
    </section>
  );
};

const LeadForm = ({ variant = 'hero' }: { variant?: 'hero' | 'inline' }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && localStorage.getItem('lead_submitted')) {
      setIsSubmitted(true);
    }
  }, []);

  useEffect(() => {
    const handleOpenForm = () => {
      setShowForm(true);
    };
    window.addEventListener('openOrderForm', handleOpenForm);
    return () => window.removeEventListener('openOrderForm', handleOpenForm);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      if (typeof window !== 'undefined') {
        localStorage.setItem('lead_submitted', 'true');
      }
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white p-8 rounded-2xl shadow-lg text-center border-2 border-blue-500"
      >
        <div className="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle size={32} />
        </div>
        <h3 className="text-2xl font-bold text-[#1a2744] mb-2">Preventivo Richiesto!</h3>
        <p className="text-gray-600">Ti ricontatteremo entro 60 secondi per il tuo preventivo personalizzato gratuito.</p>
      </motion.div>
    );
  }

  const isHero = variant === 'hero';

  return (
    <motion.div
      id="order-form"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{
        opacity: 1,
        scale: 1
      }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden"
    >
      {/* Immagine sempre in alto */}
      <div className="relative">
        <Image
          src="/images/secure/princ.png"
          alt="Sistema di sicurezza"
          width={800}
          height={450}
          quality={100}
          priority
          className="w-full h-auto object-contain"
        />

        {isHero && (
          <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
            Offerta fino al 23/12/2025
          </div>
        )}
      </div>

      <div className="p-6 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800">
        <span className="inline-block bg-black text-white text-xs font-bold px-3 py-1 rounded-full uppercase mb-2">
          Black Friday
        </span>
        <h3 className="text-2xl font-bold text-white mb-2">
          Proteggi la tua Casa
        </h3>
        <div className="flex items-center gap-3 mb-2">
          <p className="text-3xl font-extrabold text-white">69,90€</p>
          <p className="text-lg text-blue-200 line-through">233,00€</p>
          <span className="bg-yellow-400 text-[#1a2744] text-xs font-bold px-2 py-1 rounded">-70%</span>
        </div>
        <div className="space-y-1 mb-4">
          <p className="text-blue-100 text-sm flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-green-400" /> Pagamento in Contanti alla Consegna
          </p>
          <p className="text-blue-100 text-sm flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-green-400" /> Spedizione Rapida Gratuita
          </p>
          <p className="text-blue-100 text-sm flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-green-400" /> 30 Giorni di Reso
          </p>
          <p className="text-blue-100 text-sm flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-green-400" /> 2 Anni di Garanzia
          </p>
        </div>
        <button
          onClick={() => setShowForm(!showForm)}
          className="w-full bg-white hover:bg-gray-100 text-blue-600 font-bold py-4 rounded-lg transition-all flex items-center justify-center gap-2 shadow-lg cursor-pointer"
        >
          {showForm ? 'CHIUDI' : 'ORDINA ORA - PAGHI ALLA CONSEGNA'}
        </button>
      </div>

      {/* Form che si espande sotto */}
      <motion.div
        initial={false}
        animate={{
          height: showForm ? 'auto' : 0,
          opacity: showForm ? 1 : 0
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <div className={`${isHero ? 'p-8' : 'p-6'} bg-white`}>
          <div className="mb-6 text-center">
            <h3 className={`${isHero ? 'text-2xl' : 'text-xl'} font-bold text-[#1a2744] mb-1`}>
              Ordina Ora
            </h3>
            <p className="text-gray-600">Paghi in Contanti alla Consegna</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <input
                required
                type="text"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-[#1a2744] placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-sm"
                placeholder="Nome e Cognome"
              />
            </div>
            <div>
              <input
                required
                type="text"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-[#1a2744] placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-sm"
                placeholder="Indirizzo per la spedizione"
              />
            </div>
            <div>
              <input
                required
                type="tel"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-[#1a2744] placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-sm"
                placeholder="Numero di Telefono"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-lg transition-all disabled:opacity-50 flex items-center justify-center gap-2 text-base shadow-xl cursor-pointer"
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Invio...
                </>
              ) : (
                <>
                  PROCEDI CON L'ORDINE
                </>
              )}
            </button>
          </form>

          <div className="mt-3 flex items-center justify-center gap-2 text-xs text-gray-400">
            <Lock size={10} />
            <span>Dati protetti SSL</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const scrollToOrderForm = () => {
  window.dispatchEvent(new Event('openOrderForm'));
  setTimeout(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, 100);
};

export default function SecurityLandingPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <main className="min-h-screen bg-white font-inter text-[#1a2744] overflow-x-hidden">

      {/* Sticky Order Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-r from-green-600 to-green-700 shadow-2xl rounded-t-2xl">
        <div className="max-w-7xl mx-auto w-full px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 md:gap-3">
            <p className="text-white font-bold text-xl md:text-2xl">69,90€</p>
            <p className="text-green-200 text-sm md:text-sm line-through">233,00€</p>
            <span className="bg-yellow-400 text-[#1a2744] text-xs font-bold px-2 md:px-2 py-0.5 rounded">-70%</span>
          </div>
          <button
            onClick={scrollToOrderForm}
            className="bg-white hover:bg-gray-100 text-green-700 font-bold py-3 px-5 md:px-6 rounded-full text-sm md:text-base shadow-lg transition-all cursor-pointer whitespace-nowrap"
          >
            Ordina Ora
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 py-10 md:py-20">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Form Hero - prima su mobile */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="order-first lg:order-last"
            >
              <LeadForm variant="hero" />
            </motion.div>

            <div className="order-last lg:order-first">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 bg-yellow-400 text-[#1a2744] px-3 py-1.5 rounded-full text-xs md:text-sm font-bold mb-4 md:mb-6">
                  <Zap className="fill-current" size={14} />
                  BeSecure Pro
                </div>

                <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 leading-tight text-[#1a2744]">
                  Non aspettare che sia <span className="text-blue-600">troppo tardi</span>: Proteggi chi ami oggi stesso
                </h1>

                <a
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('testimonianze')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 mb-4 md:mb-6 hover:opacity-80 transition-opacity cursor-pointer">
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-sm md:text-base font-bold text-[#1a2744]">4.9</span>
                  <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                  <span className="text-sm md:text-base text-gray-600">8.254 recensioni</span>
                </a>

                <p className="text-base md:text-lg lg:text-xl text-gray-700 mb-6 md:mb-8 leading-relaxed">
                  5 microtelecamere HD, sensori, rilevatori di fumo, chiamata automatica alle forze dell'ordine, allarme assordante e notifiche istantanee sul tuo cellulare. Tutto senza abbonamenti mensili.
                </p>

                <div className="space-y-2 mb-4 md:mb-6">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="text-green-500" size={18} />
                    <span className="text-sm md:text-base text-gray-700">Allarme sonoro assordante + notifica</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="text-green-500" size={18} />
                    <span className="text-sm md:text-base text-gray-700">Non si attiva con animali domestici</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="text-green-500" size={18} />
                    <span className="text-sm md:text-base text-gray-700">Videocamere in tempo reale con audio</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="text-green-500" size={18} />
                    <span className="text-sm md:text-base text-gray-700">Rilevatore di fumo per incendi</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 mb-6 md:mb-8">
                  <div className="flex items-center gap-2 bg-blue-50 px-3 py-2 rounded-lg border border-blue-200">
                    <CheckCircle className="text-blue-600" size={18} />
                    <span className="text-xs md:text-sm font-medium text-[#1a2744]">Zero abbonamenti mensili</span>
                  </div>
                  <div className="flex items-center gap-2 bg-blue-50 px-3 py-2 rounded-lg border border-blue-200">
                    <CheckCircle className="text-blue-600" size={18} />
                    <span className="text-xs md:text-sm font-medium text-[#1a2744]">Installazione in 5 minuti</span>
                  </div>
                </div>

                </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a2744] mb-3 md:mb-4">
              Cosa succede quando un estraneo entra in casa tua?
            </h2>
            <p className="text-base md:text-xl text-gray-600">3 livelli di protezione automatica che si attivano istantaneamente</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                step: '1',
                title: 'Allarme Assordante + Luci',
                desc: 'La <strong>sirena da 110dB</strong> si attiva insieme a luci stroboscopiche visibili da centinaia di metri. I ladri scappano immediatamente perché sanno di essere stati scoperti. La maggior parte abbandona il tentativo entro <strong>7 secondi</strong>.',
                image: '/images/secure/cosa_succede1.jpg',
                imageAlt: 'Allarme sonoro e visivo'
              },
              {
                step: '2',
                title: 'Notifica Istantanea',
                desc: 'Ricevi una <strong>chiamata automatica sul cellulare</strong> con le immagini live dalle 5 microcamere. Puoi vedere esattamente cosa sta succedendo in casa tua, ovunque tu sia. Nessun ritardo, nessuna attesa.',
                image: '/images/secure/cosa_succede2.jpg',
                imageAlt: 'Notifica sul cellulare'
              },
              {
                step: '3',
                title: 'Chiamata alle Autorità',
                desc: 'Il sistema <strong>chiama automaticamente le forze dell\'ordine</strong> e invia loro le registrazioni video. Non devi fare nulla. Mentre tu sei al sicuro, l\'aiuto è già in arrivo per proteggere la tua casa e i tuoi cari.',
                image: '/images/secure/cosa_succede3.jpg',
                imageAlt: 'Intervento forze dell\'ordine'
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: isMobile ? 0.15 : 0.6 }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.4, ease: "easeOut" }}
                className="flex flex-col bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="relative w-full">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    width={800}
                    height={600}
                    className="w-full h-auto object-contain"
                  />
                  <div className="absolute top-4 left-4 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold shadow-lg">
                    {item.step}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl md:text-2xl font-bold text-[#1a2744] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: item.desc }} />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8 md:mt-16">
            <div className="inline-block bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg md:rounded-xl px-4 py-3 md:px-6 md:py-4 shadow-lg">
              <p className="font-bold text-xs md:text-sm mb-1">⚠️ I ladri abbandonano il tentativo in media dopo</p>
              <p className="text-2xl md:text-3xl lg:text-4xl font-extrabold">7 secondi</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a2744] mb-4">
              Il Sistema Completo
            </h2>
            <p className="text-lg md:text-xl text-gray-600">Telecamere, sensori di movimento, rilevatori di fumo, allarmi e chiamate automatiche.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {[
              {
                icon: <Lock />,
                title: 'Smartlock',
                desc: 'Serratura intelligente con controllo remoto. Apri e chiudi la porta dal tuo smartphone ovunque tu sia.',
                image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=400&q=80'
              },
              {
                icon: <Camera />,
                title: 'Telecamere HD',
                desc: 'Videosorveglianza ad alta risoluzione con visione notturna. Guarda cosa succede in tempo reale.',
                image: 'https://img.joomcdn.net/811f1d4330e279c0ae4aae1b93aed28278c714cf_original.jpeg'
              },
              {
                icon: <Radar />,
                title: 'Sensori di Movimento',
                desc: 'Rilevamento intelligente con fotocamera integrata. Distingue persone da animali domestici.',
                image: 'https://www.sevenitalia.it/data_files/product/PG8934.jpg'
              },
              {
                icon: <Phone />,
                title: 'Chiamata Automatica',
                desc: 'In caso di intrusione, il sistema chiama automaticamente le forze dell\'ordine.',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTBY0jitNFt6lvBJXK174yUyu0QBUBCj0EzA&s'
              },
              {
                icon: <Smartphone />,
                title: 'App Mobile',
                desc: 'Controllo totale dal tuo smartphone. Attiva, disattiva e monitora in tempo reale.',
                image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&q=80'
              },
              {
                icon: <Wifi />,
                title: 'Sirena 110dB',
                desc: 'Sirena ad alta intensità per scoraggiare i malintenzionati. Funziona anche senza corrente.',
                image: 'https://www.lookathome.it/media/catalog/product/cache/1/thumbnail/585x585/9df78eab33525d08d6e5fb8d27136e95/l/k/lkm1_1_1.jpg'
              },
              {
                icon: <Users />,
                title: 'Sensori Porta/Finestra',
                desc: 'Protezione perimetrale completa. Rileva aperture non autorizzate istantaneamente.',
                image: 'https://i0.wp.com/www.blogbisacchi.it/wp-content/uploads/2023/10/sensore-allarme-wireless.png?resize=300%2C293&ssl=1'
              },
              {
                icon: <div className="relative w-6 h-6"><Circle className="absolute inset-0 w-6 h-6" /><Circle className="absolute inset-1.5 w-3 h-3" /></div>,
                title: 'Rilevatore di Fumo',
                desc: 'Rileva fumo e incendi in tempo reale. Chiama automaticamente i pompieri.',
                image: 'https://www.elettronsicurezza.it/wp-content/uploads/2019/10/Rivelazione-Incendi-Fumo-400x400.jpg'
              }
            ].map((device, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.15, ease: "easeOut" }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all group"
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={device.image}
                    alt={device.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white">
                    {device.icon}
                  </div>
                </div>
                <div className="p-3 md:p-6">
                  <h3 className="text-base md:text-xl font-bold text-[#1a2744] mb-2">{device.title}</h3>
                  <p className="text-gray-600 text-sm">{device.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={scrollToOrderForm}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-12 rounded-full text-lg transition-all uppercase shadow-lg cursor-pointer"
            >
              Ordina adesso
            </button>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a2744] mb-6">
              Cosa Include la Promozione
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Nessun abbonamento mensile. Zero costi nascosti. Paghi una volta sola.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-5xl mx-auto"
          >
            <div className="relative rounded-2xl p-4 md:p-12 shadow-xl border-2 border-blue-200 overflow-hidden">
              <div className="absolute inset-0">
                <Image
                  src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1200&q=80"
                  alt="Casa moderna protetta"
                  fill
                  className="object-cover opacity-50"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-blue-50/80"></div>
              </div>
              <div className="relative grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-6 mb-8">
                {[
                  { icon: <Camera />, title: '5 Microcamere HD', desc: 'Nascoste ovunque in casa. Videosorveglianza 24/7 con registrazione continua' },
                  { icon: <Radar />, title: '10 Sensori di Movimento', desc: 'Rilevano intrusi ma ignorano animali domestici. Zero falsi allarmi' },
                  { icon: <div className="relative w-6 h-6"><Circle className="absolute inset-0 w-6 h-6" /><Circle className="absolute inset-1.5 w-3 h-3" /></div>, title: '5 Rilevatori di Fumo', desc: 'Rilevano incendi e chiamano automaticamente i pompieri.' },
                  { icon: <Smartphone />, title: 'Notifiche Istantanee', desc: 'Vedi tutto sul tuo cellulare in tempo reale, ovunque tu sia' },
                  { icon: <Phone />, title: 'Chiamata Automatica', desc: 'Il sistema allerta le forze dell\'ordine senza che tu debba fare nulla' },
                  { icon: <Battery />, title: 'Batterie e SIM Incluse', desc: 'Funziona anche senza corrente e senza WiFi. Sempre operativo.' },
                  { icon: <Lock />, title: 'Disattivazione Smart', desc: 'Si disattiva automaticamente quando rileva il tuo telefono o con codice' },
                  { icon: <CheckCircle />, title: 'Zero Abbonamenti', desc: 'Paghi solo una volta. Nessun costo mensile nascosto.' }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex flex-col md:flex-row items-start text-left bg-white rounded-xl p-4 md:gap-4 shadow-md"
                  >
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white mb-3 md:mb-0 flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-[#1a2744] mb-1 text-sm md:text-base">{item.title}</h3>
                      <p className="text-sm md:text-sm text-gray-600">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="relative text-center">
                <button
                  onClick={scrollToOrderForm}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-12 rounded-full text-lg transition-all uppercase shadow-lg cursor-pointer"
                >
                  Richiedi la promozione oggi stesso
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <InstallationGuide />

      {/* Order Steps */}
      <section className="py-12 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 w-full">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-2xl md:text-3xl font-bold text-white text-center mb-10"
          >
            Come Ordinare
          </motion.h2>
          <div className="grid grid-cols-[1fr_0.3fr_1fr_0.3fr_1fr] md:grid-cols-5 items-center gap-1 md:gap-4">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="flex flex-col items-center text-center group cursor-pointer"
            >
              <div className="w-10 h-10 md:w-14 md:h-14 bg-white text-[#1a2744] rounded-full flex items-center justify-center text-lg md:text-xl font-bold mb-2 md:mb-3 transition-transform duration-300 group-hover:scale-125">
                1
              </div>
              <p className="text-white font-medium text-xs md:text-sm">Inserisci i dati<br />di spedizione</p>
            </motion.div>
            <div className="h-0.5 bg-white/30 self-center"></div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="flex flex-col items-center text-center group cursor-pointer"
            >
              <div className="w-10 h-10 md:w-14 md:h-14 bg-white text-[#1a2744] rounded-full flex items-center justify-center text-lg md:text-xl font-bold mb-2 md:mb-3 transition-transform duration-300 group-hover:scale-125">
                2
              </div>
              <p className="text-white font-medium text-xs md:text-sm">Paga in contanti<br />alla consegna</p>
            </motion.div>
            <div className="h-0.5 bg-white/30 self-center"></div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="flex flex-col items-center text-center group cursor-pointer"
            >
              <div className="w-10 h-10 md:w-14 md:h-14 bg-white text-[#1a2744] rounded-full flex items-center justify-center text-lg md:text-xl font-bold mb-2 md:mb-3 transition-transform duration-300 group-hover:scale-125">
                3
              </div>
              <p className="text-white font-medium text-xs md:text-sm">Installa in<br />5 minuti</p>
            </motion.div>
          </div>
          <div className="text-center mt-10">
            <button
              onClick={scrollToOrderForm}
              className="bg-white hover:bg-gray-100 text-gray-900 font-bold py-4 px-12 rounded-full text-lg transition-all uppercase shadow-lg cursor-pointer"
            >
              Ordina Ora
            </button>
          </div>
        </div>
      </section>

      <TestimonialsSlider />

    </main>
  );
}
