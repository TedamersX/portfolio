'use client';

import { Code2, GraduationCap, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
    return (
        <div className="max-w-4xl mx-auto px-4 py-20">
        <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="mb-20"
        >
            <h1 className="text-4xl md:text-6xl font-extrabold mb-8">
            Un peu plus sur <span className="text-app-primary">moi</span>.
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-app-text space-y-4">
                <p className="text-lg leading-relaxed">
                Salut ! Moi c&apos;est <span className="font-bold text-app-primary">Tédy CROZAT</span>. Ma passion pour le développement a commencé au lycée, quand j&apos;ai réalisé que je pouvais transformer mes idées en réalité via des lignes de code.
                </p>
                <p className="text-app-muted">
                Aujourd&apos;hui, je me concentre sur la création d&apos;<span className="font-bold text-app-primary">Applications Web</span> à l&apos;aide de technologies modernes comme Next.js principalement ou encore d&apos;outils interactif comme des <span className="font-bold text-app-primary">Jeux Vidéo</span>. J&apos;aime l&apos;équilibre entre la logique complexe du back-end et la gestion visuelle du front-end, c&apos;est pour cela que je me définirai comme polyvalent et adaptable.
                </p>
            </div>
            <div className="relative aspect-square rounded-2xl bg-app-muted/10 border border-app-muted/20 overflow-hidden group">
                <Image
                    src="/images/profile.jpeg"
                    alt="Photo de profil de Tédy CROZAT"
                    fill={true}
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
            </div>
            </div>
        </motion.section>

        <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20"
        >
            <div className="p-6 rounded-2xl bg-app-muted/5 border border-app-muted/10">
            <Code2 className="text-app-primary mb-4" />
            <h3 className="font-bold mb-2">Code Propre</h3>
            <p className="text-sm text-app-muted">Je privilégie la lisibilité et la maintenabilité. La machine lis le code, mais l&apos;humain aussi.</p>
            </div>
            <div className="p-6 rounded-2xl bg-app-muted/5 border border-app-muted/10">
            <Sparkles className="text-app-primary mb-4" />
            <h3 className="font-bold mb-2">L&apos;Utilisateur Avant Tout</h3>
            <p className="text-sm text-app-muted">L&apos;esthétique est importante, mais l&apos;accessibilité et la performance le sont tout autant afin que tout le monde ai accès à ce que je crée.</p>
            </div>
            <div className="p-6 rounded-2xl bg-app-muted/5 border border-app-muted/10">
            <GraduationCap className="text-app-primary mb-4" />
            <h3 className="font-bold mb-2">Apprentissage</h3>
            <p className="text-sm text-app-muted">Le web évolue vite, très vite ! Ainsi que les envies et besoins des utilisateurs. Je m&apos;efforce alors de rester toujours à jour sur les technologies que j&apos;utilise mais aussi d&apos;en apprendre de nouvelles.</p>
            </div>
        </motion.section>

        <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="border-t border-app-muted/10 pt-20"
        >
            <div className="flex items-center gap-3 mb-8">
            <h2 className="text-2xl font-bold">En dehors du développement</h2>
            </div>
            <p className="text-app-muted leading-relaxed italic">
            Quand je ne suis pas devant VS Code à écrire des lignes à n&apos;en pas finir, je consacre mon temps à d&apos;autres passions comme le <span className="font-bold text-app-primary">Jeu Vidéo</span>, la <span className="font-bold text-app-primary">Lecture</span> ou encore le <span className="font-bold text-app-primary">Sport</span>. Il m&apos;arrive aussi de jouer une double vie d&apos;<span className="font-bold text-app-primary">Animateur</span> auprès de groupe de jeunes, je participe donc activement à la vie d&apos;une association dont je suis le trésorier. Tout cela fait de moi, je pense, une personne sociale, curieuse, à l&apos;écoute et souriante.
            </p>
        </motion.section>

        <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="pt-20">
            <div className="flex items-center gap-3 mb-8">
            <h2 className="text-2xl font-bold">Un avis sur l&apos;<span className="font-bold text-app-primary">Intelligence Artificielle</span> pour le développement ?</h2>
            </div>
            <p className="text-app-muted leading-relaxed italic">
            L&apos;Intelligence Artificielle est une technologie fascinante et qui est amenée à révolutionner de nombreux domaines, cependant celle-ci est concidérer comme une menace pour les métiers du numérique, c&apos;est pourquoi je pense que l&apos;IA doit être utilisée afin de se rendre compte de ses lacunes et chercher à les combler tout en comprenant les modifications qu&apos;elle a apporte au code qu&apos;on lui a donnée, et non pas pour remplacer les développeurs.
            </p>
        </motion.section>
        </div>
    )
}