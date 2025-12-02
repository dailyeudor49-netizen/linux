'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Truck, Phone, Clock, ShieldCheck, ArrowRight } from 'lucide-react';

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white">

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://hellawater.com/wp-content/uploads/2025/01/blue-water-1024x576.webp')] bg-cover bg-center blur-[8px] opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/50 to-slate-900"></div>

        <div className="relative z-10 container mx-auto px-4 py-16 lg:py-24">
          <div className="max-w-2xl mx-auto text-center">

            {/* Success Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
              className="mb-8"
            >
              <div className="w-24 h-24 mx-auto bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(16,185,129,0.5)]">
                <CheckCircle2 className="w-14 h-14 text-white" />
              </div>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-3xl lg:text-5xl font-bold mb-4"
            >
              Ordine Confermato!
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-xl text-slate-300 mb-8"
            >
              Grazie per aver scelto <span className="text-emerald-400 font-bold">HydroLux 3.0</span>
            </motion.p>

            {/* Order Summary Box */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 lg:p-8 mb-8"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
                <span className="text-slate-300">Prodotto</span>
                <span className="font-bold">HydroLux 3.0 + Doccetta</span>
              </div>
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
                <span className="text-slate-300">Totale</span>
                <div className="text-right">
                  <span className="text-slate-400 line-through text-sm mr-2">€149,00</span>
                  <span className="text-2xl font-bold text-emerald-400">€89,90</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-300">Pagamento</span>
                <span className="font-bold text-yellow-400">Alla Consegna</span>
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* What Happens Next */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">

          <h2 className="text-2xl lg:text-3xl font-bold text-center mb-12">
            Cosa succede ora?
          </h2>

          <div className="space-y-6">
            {/* Step 1 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="flex gap-4 items-start"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shrink-0 shadow-lg">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Ti chiamiamo entro 24 ore</h3>
                <p className="text-slate-400">Un nostro operatore ti contatterà per confermare l'ordine e l'indirizzo di spedizione.</p>
              </div>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9 }}
              className="flex gap-4 items-start"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center shrink-0 shadow-lg">
                <Truck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Spedizione in 24/48h</h3>
                <p className="text-slate-400">Il tuo HydroLux 3.0 viene spedito con corriere espresso. Riceverai il tracking via SMS.</p>
              </div>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.0 }}
              className="flex gap-4 items-start"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center shrink-0 shadow-lg">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Installi in 3 minuti</h3>
                <p className="text-slate-400">Nessun idraulico necessario. Basta avvitare al posto del vecchio rubinetto e collegare alla corrente.</p>
              </div>
            </motion.div>
          </div>

          {/* Guarantee Box */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="mt-12 bg-gradient-to-r from-emerald-900/50 to-teal-900/50 border border-emerald-500/30 rounded-2xl p-6 lg:p-8"
          >
            <div className="flex items-center gap-4 mb-4">
              <ShieldCheck className="w-10 h-10 text-emerald-400" />
              <h3 className="text-xl font-bold">Le nostre garanzie</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>Garanzia 5 anni</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>30 giorni reso gratuito</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>Assistenza dedicata</span>
              </div>
            </div>
          </motion.div>

          {/* Support CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="mt-12 text-center"
          >
            <p className="text-slate-400 mb-4">Hai domande sul tuo ordine?</p>
            <a
              href="tel:+390123456789"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 px-6 py-3 rounded-xl transition-all cursor-pointer"
            >
              <Phone className="w-5 h-5" />
              <span>Chiamaci: 01onal23 456 789</span>
            </a>
          </motion.div>

        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8">
        <div className="container mx-auto px-4 text-center text-slate-500 text-sm">
          <p>&copy; 2025 HydroLux 3.0 - Tutti i diritti riservati</p>
        </div>
      </footer>

    </div>
  );
}
