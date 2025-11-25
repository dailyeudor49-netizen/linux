'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function HeroDemo() {
  const [showDemo, setShowDemo] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    if (showDemo) {
      const timer = setInterval(() => {
        setCurrentTime(new Date());
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [showDemo]);

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('it-IT', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('it-IT', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  const cameras = [
    { id: 1, name: 'CAM 01 - Ingresso', status: 'secure', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80' },
    { id: 2, name: 'CAM 02 - Giardino', status: 'secure', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&q=80' },
    { id: 3, name: 'CAM 03 - Garage', status: 'alert', image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=400&q=80' },
    { id: 4, name: 'CAM 04 - Cortile', status: 'secure', image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=400&q=80' },
  ];

  if (showDemo) {
    return (
      <div className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl bg-gray-900">
        <div className="grid grid-cols-2 grid-rows-2 h-full gap-1 p-1 bg-gray-800">
          {cameras.map((camera) => (
            <div key={camera.id} className="relative overflow-hidden rounded-lg">
              <Image
                src={camera.image}
                alt={camera.name}
                fill
                className={`object-cover ${camera.status === 'alert' ? 'brightness-110' : 'brightness-90'}`}
              />
              {/* Overlay scuro per effetto telecamera */}
              <div className="absolute inset-0 bg-black/30"></div>

              {/* Scanline effect */}
              <div className="absolute inset-0 pointer-events-none opacity-20 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,0,0,0.3)_2px,rgba(0,0,0,0.3)_4px)]"></div>

              {/* Header con data/ora e nome camera */}
              <div className="absolute top-0 left-0 right-0 p-2 bg-gradient-to-b from-black/70 to-transparent">
                <div className="flex justify-between items-start text-white text-xs font-mono">
                  <span className="bg-black/50 px-2 py-1 rounded">{camera.name}</span>
                  <div className="text-right bg-black/50 px-2 py-1 rounded">
                    <div>{formatDate(currentTime)}</div>
                    <div className="text-emerald-400">{formatTime(currentTime)}</div>
                  </div>
                </div>
              </div>

              {/* Status badge */}
              <div className="absolute bottom-2 left-2 right-2">
                {camera.status === 'secure' ? (
                  <div className="flex items-center gap-2 bg-emerald-500/90 text-white px-3 py-1.5 rounded-lg text-sm font-semibold">
                    <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                    SICURO
                  </div>
                ) : (
                  <div className="flex items-center gap-2 bg-red-500/90 text-white px-3 py-1.5 rounded-lg text-sm font-semibold animate-pulse">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                    ALLERTA MOVIMENTO
                  </div>
                )}
              </div>

              {/* REC indicator */}
              <div className="absolute top-2 right-2 flex items-center gap-1 text-red-500 text-xs font-mono">
                <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                REC
              </div>
            </div>
          ))}
        </div>

        {/* Pulsante per tornare indietro */}
        <button
          onClick={() => setShowDemo(false)}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 px-6 py-3 bg-white/90 backdrop-blur-sm text-gray-800 font-semibold rounded-xl hover:bg-white transition-all shadow-lg flex items-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Chiudi Demo
        </button>
      </div>
    );
  }

  return (
    <div className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl group">
      <Image
        src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
        alt="Modern smart home interior"
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        priority
      />

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

      {/* Pulsante Demo */}
      <button
        onClick={() => setShowDemo(true)}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-xl transition-all shadow-lg shadow-emerald-500/40 hover:shadow-xl hover:shadow-emerald-500/50 transform hover:-translate-y-1 flex items-center gap-3"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
        Visualizza DEMO App
      </button>
    </div>
  );
}
