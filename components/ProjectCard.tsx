'use client';

import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Projet } from '@/data/projets';

export default function ProjectCard({ project, index }: { project: Projet, index: number }) {

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1}}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{
        scale: 1.02,
        transition: {duration: 0.3, ease: "easeOut"}
      }}
      className="group relative bg-app-bg border border-app-muted/20 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-app-primary/10 hover:scale-105 shadow-sm transition-shadow duration-300"
    >
      <div className="h-48 bg-app-muted/10 overflow-hidden relative">
        <Image
            src={project.image}
            alt={project.title}
            fill={true}
            className="object-contain group-hover:scale-110 transition-transform duration-300"
            priority={true}
        />
      </div>

      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map(tag => (
            <span key={tag} className="text-[10px] uppercase tracking-widest font-bold px-2 py-1 rounded-md bg-app-primary/10 text-app-primary">
              {tag}
            </span>
          ))}
        </div>
        
        <h3 className="text-xl font-bold mb-2 group-hover:text-app-primary transition-colors">
          {project.title}
        </h3>
        
        <p className="text-app-muted text-sm mb-6 line-clamp-2">
          {project.description}
        </p>

        <div className="flex items-center gap-4">
          <Link href={project.link} target="_blank" className="flex items-center gap-1 text-sm font-bold hover:underline">
            <ExternalLink size={16} /> Live Demo
          </Link>
          <Link href={project.github} target="_blank" className="flex items-center gap-1 text-sm font-bold hover:underline">
            <Github size={16} /> Code
          </Link>
        </div>
      </div>
    </motion.div>
  );
}