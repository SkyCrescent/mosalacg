import Image from "next/image"
import Link from "next/link";
import AddUser from "@/components/AddUser";
export default function page(){



    return(
        <>
            <section
                className="relative min-h-screen flex items-center justify-center bg-white md:p-4 p-2 overflow-x-hidden">
                {/* Dégradé de fond */}
                <div className="absolute inset-0 bg-gradient-to-l from-blue-500/30 to-transparent z-10"/>

                {/* CERCLE BLEU RÉDUIT */}
                <div
                    className="fixed w-[400px] h-[400px] md:w-[500px] md:h-[500px] bg-gradient-to-r from-transparent to-blue-800 rounded-full -left-[60px] -top-[60px] md:-left-[80px] md:-top-[80px] z-0"></div>

                {/* CONTENU À L'INTÉRIEUR DU CERCLE */}
                <div className="absolute top-0 left-0 z-10 mt-16 ml-16 md:mt-10 md:ml-10">
                    <div
                        className="flex flex-col gap-3 items-center justify-center w-[260px] md:w-[300px] text-center text-white">
                        {/* Logo */}
                        <div className="h-[140px] w-[140px] relative">
                            <Image
                                className="object-contain"
                                src="/media/MOSALA CG LOGO FOND 2024.png"
                                fill
                                alt="Nfc"
                            />
                        </div>

                        {/* Titre */}
                        <h1 className="text-white font-bold text-2xl md:text-3xl leading-tight">
                            Bienvenu sur <span className="text-violet-900">MOSALA CG</span>
                        </h1>

                        {/* Description */}
                        <p className="text-xs md:text-sm leading-snug">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed eveniet, aspernatur ipsam
                            quaerat magni asperiores.
                        </p>


                    </div>

                </div>


               <AddUser/>
            </section>

        </>
    )
}