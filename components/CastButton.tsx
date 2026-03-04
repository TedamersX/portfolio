'use client';
import { Tv } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CastButton() {
  const handleCast = async () => {
    if (typeof window !== 'undefined' && 'PresentationRequest' in window) {
      try {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const request = new (window as any).PresentationRequest(['/']);
        await request.start();
      } catch (err) {
        console.error("Cast annulé ou non supporté :", err);
      }
    } else {
      alert("Le cast de page web n'est pas supporté sur ce navigateur (utilisez Chrome ou Edge).");
    }
  };

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={handleCast}
      className="p-2 rounded-xl bg-app-muted/5 border border-app-muted/10 text-app-muted hover:text-app-primary hover:border-app-primary/30 transition-colors"
      aria-label="Diffuser sur une TV"
      title="Diffuser sur une TV"
    >
      <Tv size={20} />
    </motion.button>
  );
}