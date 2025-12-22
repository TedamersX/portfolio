import Image from "next/image";

interface Props {
    tag: string;
    image: string;
}

export const TagsLine = ({ tag, image }: Props) => {
    return(
        <div className="h-[5vh] flex flex-row items-center justify-around gap-[1vw] px-[2vw] py-[0.5vw] bg-[#FFF] border border-2 border-[var(--violet-3)] rounded-[1vw]">
            <Image
            className="h-[80%] w-auto object-contain"
                src={image}
                alt={tag}
                width={50}
                height={50} />
            <p>{tag}</p>
        </div>
    )
}