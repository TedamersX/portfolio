'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { RefreshCcw, AlertTriangle, Home } from 'lucide-react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Détails de l\'erreur :', error);
  }, [error]);

  return (
    <div className="min-h-[calc(100vh-64px)] flex flex-col items-center justify-center px-4 text-center">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="text-orange-500 mb-8 p-6 bg-orange-500/10 rounded-full"
      >
        <AlertTriangle size={64} />
      </motion.div>

      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        Quelque chose ne va pas...
      </h1>
      
      <p className="text-app-muted max-w-md mx-auto mb-10 text-lg">
        Une erreur inattendue est survenue. Ne vous inquiétez pas, ce n&apos;est probablement pas votre faute !
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        <button
          onClick={() => reset()}
          className="flex items-center gap-2 bg-app-primary text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform active:scale-95 shadow-lg shadow-app-primary/20"
        >
          <RefreshCcw size={20} />
          Réessayer
        </button>

        <Link 
          href="/"
          className="flex items-center gap-2 bg-app-muted/10 border border-app-muted/20 px-8 py-4 rounded-full font-bold hover:bg-app-muted/20 transition-colors"
        >
          <Home size={20} />
          Retour à l&apos;accueil
        </Link>
      </div>

      {error.digest && (
        <p className="mt-12 text-xs text-app-muted opacity-50">
          ID de l&apos;erreur : {error.digest}
        </p>
      )}
    </div>
  );
}