'use client';
import Link from 'next/link';
import { Github, Linkedin, Mail, Terminal } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-app-muted/10 bg-app-bg">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl mb-4">
              <Terminal className="text-app-primary" size={24} />
              <span>MonPortfolio</span>
            </Link>
            <p className="text-app-muted text-sm max-w-sm">
              Développeur Full-stack spécialisé dans la création d&apos;expériences numériques modernes, performantes et centrées sur l&apos;utilisateur.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-sm uppercase tracking-widest">Plan du site</h4>
            <ul className="space-y-2 text-sm text-app-muted">
              <li><Link href="/projets" className="hover:text-app-primary transition-colors">Projets</Link></li>
              <li><Link href="/about" className="hover:text-app-primary transition-colors">À propos</Link></li>
              <li><Link href="/stacks" className="hover:text-app-primary transition-colors">Mes Stacks</Link></li>
              <li><Link href="/contact" className="hover:text-app-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-sm uppercase tracking-widest">Suivez-moi</h4>
            <div className="flex gap-4">
              <Link href="https://github.com" className="p-2 rounded-full bg-app-muted/5 hover:bg-app-primary/10 hover:text-app-primary transition-all">
                <Github size={20} />
              </Link>
              <Link href="https://linkedin.com" className="p-2 rounded-full bg-app-muted/5 hover:bg-app-primary/10 hover:text-app-primary transition-all">
                <Linkedin size={20} />
              </Link>
              <Link href="mailto:votre@mail.com" className="p-2 rounded-full bg-app-muted/5 hover:bg-app-primary/10 hover:text-app-primary transition-all">
                <Mail size={20} />
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-app-muted/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-app-muted">
          <p>© {currentYear} MonPortfolio. Tous droits réservés.</p>
          <p>Bâti avec <span className="text-app-primary">Next.js</span> & <span className="text-app-primary">Tailwind CSS</span></p>
        </div>
      </div>
    </footer>
  );
}