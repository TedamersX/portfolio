import { Metadata } from 'next';
import About from '@/components/About';

export const metadata: Metadata = {
  title: 'À propos | Mon Portfolio',
  description: 'Découvrez mon parcours, mes valeurs et ma passion pour le développement web.',
};

export default function AboutPage() {
  return (
    <About />
  );
}