import Link from "next/link";
import Image from "next/image";

interface Props {
    description: string;
    image: string;
    url: string;
}

export const RedirectButton = ({ description, image, url} :Props) => {
    return (
        <div className="relative top-[-0.5vw] hover:top-0 rounded-[100%] bg-[#FFF] w-[5vw] h-[5vw] flex items-center justify-center shadow-[0px_0.5vw_0px_rgba(0,0,0,0.25)] hover:shadow-none">
            <Link
                className="w-full h-full flex items-center justify-center"
                href={url}
                target="_blank"
                rel="noopener noreferrer"
            >
                <Image
                    className="w-[65%] h-[65%]"
                    src={image}
                    alt={description}
                    width={50}
                    height={50}
                />
            </Link>
        </div>       
    );
}