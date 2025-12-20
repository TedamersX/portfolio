import Link from "next/link";
import Image from "next/image";
import {Home} from "./icons/Home";
import {Doc} from "./icons/Doc";

export const Header = () => {
    return(
        <header className="fixed top-[2vh] w-full h-[10vh] flex items-center justify-end">
            <nav className="w-[25vw] h-full mr-[5vw]">
                <ul className="flex items-center justify-evenly h-full">
                    <li className="h-[8vh] w-[12vw] bg-[var(--violet-3)] rounded-[2.5vh] flex items-center justify-center hover:bg-[#CC0000] transition-colors duration-300">
                        <Link
                            className="w-full h-full flex items-center justify-center text-white font-bold text-xl uppercase"
                            href="/"
                        >
                            MES PROJETS
                        </Link>
                    </li>
                    <li className="w-[8vh] h-[8vh] bg-[var(--violet-3)] rounded-[2.5vh] flex items-center justify-center hover:bg-[#CC0000] transition-colors duration-300">
                        <Link
                            className="w-full h-full flex items-center justify-center text-white font-bold uppercase"
                            href="/"
                        >
                            <Home color="#FFF" w="60%" h="60%"/>
                        </Link>
                    </li>
                    <li className="w-[8vh] h-[8vh] bg-[var(--violet-3)] rounded-[2.5vh] flex items-center justify-center hover:bg-[#CC0000] transition-colors duration-300">
                        <Link
                            className="w-full h-full flex items-center justify-center text-white font-bold uppercase"
                            href="/docs/CV/CV_Tedy_CROZAT_Developpeur.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Doc color="#FFF" w="60%" h="60%"/>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}