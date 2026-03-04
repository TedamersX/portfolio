'use client';

//if (true) throw new Error("Test d'erreur 500");

import { motion } from 'framer-motion';
import { ArrowRight, FileText } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
    return (
        <section className='relative min-h-[calc(100vh-64px)] flex flex-col items-center justify-center overflow-hidden px-4'>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-app-primary/10 blur-[120px] rounded-full -z-10" />

            <div className="flex-grow flex flex-col items-center justify-center text-center max-w-4xl w-full">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-app-primary/30 bg-app-primary/5 text-app-primary text-sm font-medium mb-6"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-app-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-app-primary"></span>
                    </span>
                    Disponible pour de nouveaux projets
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6"
                >
                    Développeur <span className="text-app-primary">Web</span> et <span className="text-app-primary">Unity</span>
                </motion.h1>

                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-lg md:text-xl text-app-muted max-w-2xl mx-auto mb-10"
                >
                    Je transforme vos idées en applications web ou jeux immersifs afin dans faire une réalité.
                    Pour que tout le monde puisse en profiter, l&apos;optimisation et l&apos;accessibilité sont de rigueur !
                </motion.p>

                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex flex-wrap justify-center gap-4"
                >
                    <Link href="/projects" className="flex items-center gap-2 bg-app-primary text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform active:scale-95 shadow-lg shadow-app-primary/20">
                        Voir mes projets
                        <ArrowRight size={20} />
                    </Link>
                    
                    <Link href="/cv.pdf" target="_blank" className="flex items-center gap-2 bg-app-bg border border-app-muted/30 px-8 py-4 rounded-full font-bold hover:bg-app-muted/5 transition-colors">
                        <FileText size={20} />
                        Mon CV
                    </Link>
                </motion.div>
            </div>
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="my-12 flex flex-col items-center gap-2"
            >
                <span className="text-app-muted text-xs uppercase tracking-widest font-medium">
                    Scroll
                </span>
                <div className="w-[26px] h-[42px] border-2 border-app-muted/30 rounded-full flex justify-center p-1.5">
                    <motion.div 
                    animate={{ 
                        y: [0, 12, 0],
                    }}
                    transition={{ 
                        duration: 1.5, 
                        repeat: Infinity, 
                        ease: "easeInOut" 
                    }}
                    className="w-1.5 h-1.5 bg-app-primary rounded-full"
                    />
                </div>
            </motion.div>
        </section>
    )
}