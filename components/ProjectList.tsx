'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search } from 'lucide-react';
import ProjectCard from './ProjectCard';
import { Projet } from '@/data/projets';

export default function ProjectList({ initialProjects }: { initialProjects: Projet[] }) {
  const [query, setQuery] = useState("");

  const filteredProjects = initialProjects.filter((project) => {
    const searchTerm = query.toLowerCase();
    return (
      project.title.toLowerCase().includes(searchTerm) ||
      project.tags.some(tag => tag.toLowerCase().includes(searchTerm))
    );
  });

  return (
    <>
      <div className="relative flex items-start justify-center w-full md:w-96 mb-12 group">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-app-muted group-focus-within:text-app-primary transition-colors" size={20} />
        <input 
          type="text"
          placeholder="Filtrer par nom ou techno..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full pl-12 pr-4 py-4 rounded-2xl bg-app-muted/5 border border-app-muted/10 focus:border-app-primary outline-none transition-all shadow-sm"
        />
      </div>

      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode='popLayout'>
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </AnimatePresence>
      </motion.div>

      {filteredProjects.length === 0 && (
        <div className="py-20 text-center text-app-muted">
          Aucun projet trouvé pour &quot;{query}&quot;
        </div>
      )}
    </>
  );
}