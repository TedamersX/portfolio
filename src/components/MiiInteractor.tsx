"use client";

import { useEffect } from "react";

export const MiiInteractor = () => {
    const miiImg = ["content.png", "Blaze.png", "Chokbar.png", "Colere.png", "Soulage.png"]

    const miiMessages = [
        "Bienvenue sur mon portfolio !",
        "N'hésite pas à explorer mes projets.",
        "Contacte-moi si tu as des questions !",
        "Attends ! Ne pars pas tout de suite !",
        "Ouf, tu es revenu !"
    ]

    useEffect(() => {
        const textElement = document.getElementById("mii-message");
        const imgElement = document.getElementById("mii-image") as HTMLImageElement;

        let messageTimer: NodeJS.Timeout;
        let typingInterval: NodeJS.Timeout;

        const typingEffect = (element: HTMLElement, text: string, speed: number=30) =>{
            clearInterval(typingInterval);
            element.innerHTML = "";
            let i = 0;

            typingInterval = setInterval(() => {
                if(i < text.length){
                    element.innerHTML += text.charAt(i);
                    i++;
                }
                else{
                    clearInterval(typingInterval);
                }
            }, speed);
        }
    
        const handleMouseOut = (e: MouseEvent) => {
            const target = e.relatedTarget as Node | null;
            
            if (!target) {
                if (e.clientY <= 10 && textElement && imgElement) {
                    typingEffect(textElement, miiMessages[3]);
                    imgElement.src = `/images/png/mii/${miiImg[3]}`;

                    document.addEventListener("mouseover", handleMouseOver);

                }
            }
        };
    
        const handleMouseOver = () => {
            console.log("Mouse over detected");
            if (textElement && imgElement) {
                typingEffect(textElement, miiMessages[4]);
                imgElement.src = `/images/png/mii/${miiImg[4]}`;

                document.removeEventListener("mouseover", handleMouseOver);

                clearTimeout(messageTimer);
                messageTimer = setTimeout(() => {
                    if(textElement && imgElement) {
                        typingEffect(textElement, miiMessages[1]);
                        imgElement.src = `/images/png/mii/${miiImg[0]}`;
                    }
                }, 10000);
            }
        };
    
        document.addEventListener("mouseout", handleMouseOut);
    
        return () => {
            document.removeEventListener("mouseout", handleMouseOut);
            document.removeEventListener("mouseover", handleMouseOver);
            clearTimeout(messageTimer);
        };
    }, []);

    return(
        <aside className="fixed right-[1vw] top-1/2 w-[20vw] h-[12vh]">
            <div className="w-full flex flex-row justify-around">
                <div className="w-[80%] relative top-[-5vh] h-full">
                    <article className="w-full h-full py-[2vh] flex items-center justify-center bg-[var(--violet-3)] rounded-3xl">
                        <p id="mii-message" className="text-white font-bold text-center px-[1vw]">Va te faire enculer Adrien</p>
                    </article>
                    <svg
                        viewBox="0 0 62 23"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-[20%] float-right fill-[var(--violet-3)]"
                    >
                        <path d="M31.441,-0c0.456,9.697 14.127,16.977 29.786,22.267c-26.541,-3.322 -47.429,-11.408 -61.227,-22.2l31.441,-0.067Z"/>
                    </svg>
                </div>
                <img
                    id="mii-image"
                    className="w-[20%] object-contain"
                    src={`/images/png/mii/${miiImg[0]}`}
                    alt="Mii Interactor"
                />
            </div>
        </aside>
    )
}