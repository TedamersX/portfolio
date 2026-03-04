'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home, ArrowLeft, Ghost } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[calc(100vh-64px)] flex flex-col items-center justify-center px-4 text-center">
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, -5, 0]
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="text-app-primary mb-8"
      >
        <Ghost size={120} strokeWidth={1.5} />
      </motion.div>

      <motion.h1 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-8xl md:text-9xl font-black text-app-primary/20 mb-4"
      >
        404
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Oups ! Cette page s&apos;est volatilisée.
        </h2>
        <p className="text-app-muted max-w-md mx-auto mb-10">
          Il semble que le lien que vous avez suivi soit cassé ou que la page ait été déplacée vers une autre dimension.
        </p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="flex flex-wrap justify-center gap-4"
      >
        <Link 
          href="/" 
          className="flex items-center gap-2 bg-app-primary text-white px-6 py-3 rounded-full font-bold hover:scale-105 transition-transform active:scale-95"
        >
          <Home size={20} />
          Retour à l&apos;accueil
        </Link>
        
        <button 
          onClick={() => window.history.back()}
          className="flex items-center gap-2 bg-app-muted/10 border border-app-muted/20 px-6 py-3 rounded-full font-bold hover:bg-app-muted/20 transition-colors"
        >
          <ArrowLeft size={20} />
          Page précédente
        </button>
      </motion.div>
    </div>
  );
}