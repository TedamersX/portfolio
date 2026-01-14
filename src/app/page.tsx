import { RedirectButton } from "../components/RedirectButton";
import { TagsLine } from "../components/TagsLine";
import { LatestProjects } from "../components/LatestProjects";

import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="w-[86vw] ml-[7vw] md:w-[85vw] md:ml-[0vw] h-[90vh] bg-[var(--violet-1)] rounded-b-[15vw] flex">
        <div className="h-full w-[55%] flex flex-col justify-center items-center">
          <div className="h-[20vh] w-full flex justify-center items-end">
            <p className="mx-[1vw] text-2xl font-bold">LV.0</p>
            <div className="h-[2vh] w-[50%] mr-[2vw] rounded-2xl bg-[#FFF]">
              <div className="w-[40%] h-full bg-[var(--violet-2)] rounded-2xl border border-[2px] border-[var(--violet-3)]"></div>
            </div>
          </div>
          <Image
            className="h-[70vh] w-[80%] object-contain"
            src="/images/png/mii/Bonjour.png"
            alt="Tédy CROZAT"
            width={1205}
            height={1205}
          />
        </div>
        <div className="h-full flex flex-col justify-center">
          <div className="my-[3vh]">
            <h4 className="text-8xl font-black">Tédy</h4>
            <h4 className="text-5xl">CROZAT</h4>
          </div>
          <div className="my-[3vh]">
            <h3 className="text-4xl font-bold">Développeur Web</h3>
            <h3 className="text-4xl">Backend | Frontend | Fullstack</h3>
          </div>
          <div className="flex items-center justify-start gap-[2vw] my-[3vh]">
            <RedirectButton
              description="GitHub"
              image="github"
              url="https://github.com"
              color = "var(--violet-3)"
            />
            <RedirectButton
              description="Appel"
              image="tel"
              url="tel:+330768466335"
              color="var(--violet-3)"
            />
            <RedirectButton
              description="Instagram"
              image="message"
              url="mailto:crozat.tedy@gmail.com"
              color="var(--violet-3)"
            />
          </div>
        </div>
      </section>
      <div className="h-[10vh] flex items-center justify-center">
        <Image 
          src="/images/gif/arrow_down.gif"
          alt="Arrow down"
          width={50}
          height={50}
        />
      </div>
      <section>
        <p>QUI SUIS-JE ?</p>
        <article>
          <p>
            Je m'appelle Tédy CROZAT, je suis en troisième et dernière année de Bachelor Universitaire Technologique Métiers du Multimédia et de l'Internet (BUT MMI). 
            Dans les grandes lignes, j'ai appris à programmer des sites web ainsi que créer l'identité graphique d'une entreprise, avec cela s'accompagne les bases du marketing et une initiation à la création de jeux vidéo. 
            Au delà de mon parcours scolaire, je suis une personne qui a toujours aimé sociabiliser, communiquer et apprendre comment l'humain évolue de l'enfance à la vie d'adulte. 
            Ce trait de caractère m'a pousser à passer un Brevet d'Aptitude aux Fonctions d'Animateur (BAFA) et par la suite, m'investir dans le domaine de l'animation à travers divers organismes (Moov'Action, Anim'Elbeuf, l'Interco Normandie). 
            Et afin de continuer dans ce domaine, j'ai commencé à m'investir en tant que trésorier d'une association dans le domaine de l'animation et de la prévention (PREV'N'EURE) et pour accompagné ceci, 
            j'ai pour projet de passer un Brevet Professionnel de la Jeunesse, de l'Éducation Populaire et du Sport (BPJEPS). 
            A travers l'animation, j'ai appris 3 choses : Écouter, Innover et Aider. Ces compétences me serve à présent dans mon parcours scolaire notamment dans les projets de groupe, mais aussi dans la vie quotidienne.
            Aujourd'hui, je commence à me lancer dans la vie professionnel, en lançant mon auto-entreprise et proposer de créer des sites web pour les organismes dans le besoin. Ce choix de me mettre en auto-entreprise est dicté par mon voeux de pouvoir continuer à faire de l'animation au sein de l'association dans laquelle je m'investi. 
          </p>
        </article>
        <p>Centres d&apos;intérêts</p>
        <div className="flex flex-row gap-[0.5vw] flex-wrap">
          <TagsLine
            tag="Apprendre"
            image="/images/svg/livres.svg"
          />
          <TagsLine
            tag="Jeux Vidéo"
            image="/images/svg/manette.svg"
          />
          <TagsLine
            tag="Musique"
            image="/images/svg/musique.svg"
          />
          <TagsLine
            tag="Café"
            image="/images/svg/tasse.svg"
          />
          <TagsLine
            tag="Handball"
            image="/images/svg/handball.svg"
          />
          <TagsLine
            tag="Modélisation 3D"
            image="/images/svg/cube.svg"
          />
          <TagsLine
            tag="Animation"
            image="/images/svg/cube.svg"
          />
        </div>
      </section>
      <section>
        <p>PROJETS RECENTS</p>
        <LatestProjects/>
      </section>
      <section>
        <p>MES DIPLÔMES | CERTIFICATIONS</p>
        <div>
          <article>

          </article>
          <article>

          </article>
          <article>
            
          </article>
        </div>
      </section>
    </main>
  )};