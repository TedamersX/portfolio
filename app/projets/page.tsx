import { projets } from '@/data/projets';
import ProjectList from '@/components/ProjectList';

export const metadata = {
  title: 'Mes Projets',
  description: 'Découvrez mes dernières réalisations web.',
};

export default function ProjectsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Mes <span className="text-app-primary">Projets</span>
        </h1>
        <p className="text-app-muted max-w-3xl">
          La liste de mes projets personnels et professionnels. Chaque travaux est une opportunité d&apos;apprentissage et de découverte de nouvelles technologies.
        </p>
      </div>

      <div>
        <ProjectList initialProjects={projets} />
      </div>
    </div>
  );
}