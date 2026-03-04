'use client';

import React, {useState} from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Terminal, Folder, User, Cpu, Send, Github, Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import CastButton from './CastButton';

const navLinks = [
    { name: 'Projets', href: '/projets', icon: Folder },
    { name: 'À Propos', href: '/about', icon: User },
    { name: 'Stack', href: '/stack', icon: Cpu },
];

export default function Navbar() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className='sticky top-0 z-50 w-full border-b border-app-border bg-app-bg backdrop-blur-md'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex items-center justify-between h-16'>

                    <Link href="/" className='flex items-center gap-2 font-bold text-xl'>
                        <Terminal className='text-app-primary' />
                        <span>Tédy.C</span>
                    </Link>

                    <div className='hidden md:flex items-center gap-8'>
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link key={link.href} href={link.href} className='relative group flex items-center gap-1 text-sm font-medium transition-colors hover:text-app-primary'>
                                    <link.icon size={18} />
                                    {link.name}
                                    {isActive && (
                                        <motion.div
                                            initial={{ scaleX: 0 }}
                                            animate={{ scaleX: 1 }}
                                            className="absolute -bottom-[24px] left-0 right-0 h-0.5 bg-app-primary"
                                        />
                                    )}
                                </Link>
                            )
                        })}
                    </div>

                    <div className="hidden md:flex items-center gap-4">
                        <CastButton />
                        <ThemeToggle />
                        <Link href="https://github.com/TedamersX" target="_blank">
                            <Github size={20} className="hover:text-app-primary transition-colors" />
                        </Link>
                        <Link href="/contact" className='flex items-center gap-2 bg-app-primary text-app-text px-4 py-2 rounded-full text-sm font-medium hover:bg-app-primary/80 transition-transform active:scale-95'>
                            <Send size={16} />
                            Me Contacter
                        </Link>
                    </div>

                    <div className='md:hidden flex items-center gap-4'>
                        <CastButton />
                        <ThemeToggle />
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </div>
            </div>

            {isMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden bg-white dark:bg-black border-b border-white/10 px-4 pt-2 pb-6 flex flex-col gap-4"
                >
                    {navLinks.map((link) => (
                        <Link key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)} className="flex items-center gap-2 text-lg">
                            <link.icon size={20} />
                            {link.name}
                        </Link>
                    ))}
                    <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="bg-app-primary text-white p-3 rounded-xl text-center">
                        Me Contacter
                    </Link>
                </motion.div>
            )}
        </nav>
    );
}