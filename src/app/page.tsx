import { RedirectButton } from "../components/RedirectButton";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="w-[85vw] h-[90vh] bg-[var(--violet-1)] rounded-br-[15vw] flex">
        <div className="h-full w-[55%] flex flex-col justify-center items-center">
          <div className="h-1/4"></div>
          <Image
            className="h-[80%] w-[80%] object-contain"
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
              image="/images/svg/github.svg"
              url="https://github.com"
            />
            <RedirectButton
              description="LinkedIn"
              image="/images/icons/linkedin.png"
              url="https://www.linkedin.com"
            />
            <RedirectButton
              description="Instagram"
              image="/components/icons/twitter.png"
              url="https://twitter.com"
            />
          </div>
        </div>
      </div>
      <div className="h-[10vh] flex items-center justify-center">
        <Image 
          src="/images/svg/arrow-down.svg"
          alt="Arrow down"
          width={50}
          height={50}
        />
      </div>
    </main>
  );
}
