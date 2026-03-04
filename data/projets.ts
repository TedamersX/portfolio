export interface Projet {
    id: number;
    title: string;
    description: string;
    tags: string[];
    link: string;
    github: string;
    image: string;
}

export const projets: Projet[] = [
    {
        id: 1,
        title: "Site Association PREV'N'EURE",
        description: "Site vitrine pour l'association PREV'N'EURE, mettant en avant leurs actions de prévention et de sensibilisation.",
        tags: ["Next.js", "Tailwind CSS", "TypeScript"],
        link: "https://prevneure.fr",
        github: "https://github.com",
        image: "/projets/prevneure.png",
    },
    {
        id: 2,
        title: "The Last Wall",
        description: "Jeu de carte en 3D inspiré de Balatro et Inscription, réalisé à l'ocassion d'une Game Jam.",
        tags: ["Unity", "C#", "Blender", "Substance Painter 3D", "Affinity"],
        link: "https://tedamersx.itch.io/the-last-wall",
        github: "https://github.com",
        image: "/projets/thelastwall.png",
    },
];