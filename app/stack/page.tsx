import StackCard from '@/components/StackCard';
import { stackCategories } from '@/data/stacks';

export const metadata = {
  title: 'Stack Technique | Mon Portfolio',
  description: 'Langages, frameworks et outils créatifs que j\'utilise au quotidien.',
};

export default function StacksPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <header className="mb-16">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
          Mon <span className="text-app-primary">Arsenal</span> technique.
        </h1>
        <p className="text-app-muted max-w-2xl text-lg">
          Polyvalent par nature, je jongle entre le développement web, la logique applicative et la création 3D pour bâtir des projets complets.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {stackCategories.map((cat, index) => (
          <StackCard key={cat.title} category={cat} index={index} />
        ))}
      </div>
    </div>
  );
}