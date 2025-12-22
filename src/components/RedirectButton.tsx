import Link from "next/link";
import Image from "next/image";

import { Message } from "./icons/Message";
import { Github } from "./icons/Github";
import { Tel } from "./icons/Tel";

const IconMap = {
    message: Message,
    github: Github,
    tel: Tel,
};

interface Props {
    description: string;
    image: keyof typeof IconMap;
    url: string;
    color?: string;
}

export const RedirectButton = ({ description, image, url, color} :Props) => {

    const IconComponent = IconMap[image];

    return (
        <div className="relative top-[-0.5vw] hover:top-0 rounded-[100%] bg-[#FFF] w-[5vw] h-[5vw] flex items-center justify-center shadow-[0px_0.5vw_0px_rgba(0,0,0,0.25)] hover:shadow-none">
            <Link
                className="w-full h-full flex items-center justify-center"
                href={url}
                target="_blank"
                rel="noopener noreferrer"
            >
                {IconComponent ? (
                    <IconComponent color={`${color}`} h="55%" w="65%"/>
                ) : (
                    <span>?</span>
                )}
            </Link>
        </div>       
    );
}