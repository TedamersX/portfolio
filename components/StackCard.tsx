'use client';
import { motion } from 'framer-motion';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function StackCard({ category, index }: { category: any, index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="p-8 rounded-3xl bg-app-muted/5 border border-app-muted/10 hover:border-app-primary/30 transition-colors duration-300 flex flex-col h-full"
    >
      <h3 className="text-2xl font-bold mb-2 text-app-text">{category.title}</h3>
      <p className="text-app-muted text-sm mb-8 leading-relaxed">
        {category.description}
      </p>

      <div className="flex flex-wrap gap-2 mt-auto">
        {category.skills.map((skill: string) => (
          <motion.span 
            key={skill}
            whileHover={{ scale: 1.05, borderColor: 'var(--primary-color)' }}
            className="px-4 py-2 rounded-xl bg-app-bg border border-app-muted/20 text-xs font-bold uppercase tracking-wider text-app-text transition-colors"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}