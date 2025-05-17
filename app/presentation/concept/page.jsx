'use client'
import Image from "next/image";
import Link from "next/link";
import React, {useState} from "react";
import Pied from "@/components/Pied";
import {useRouter} from "next/navigation";


export default function page() {

   const [openSubMenuId, setOpenSubMenuId] = useState(false);
   const [openSubMenu, setOpenSubMenu] = useState(false);
   const router = useRouter();


   return(


      <>

         <div className="relative h-screen w-[100%] bg-white/80    overflow-y-auto  scrollbar-hidden"
         >

            <nav
               className="relative w-[100%] md:w-full h-[8%] md:h-[10%] lg:h-[16%] flex items-center    justify-evenly    text-md  decoration-amber-500 shadow-xl ">
               <div
                  className="hidden  relative w-[30%] md:w-[10%]  lg:w-[30%] h-[100%] lg:flex  md:mx-12 lg:-mx-4">
                  <div className="relative h-[100%] bg-green-900  top-0 w-[4%] md:w-[8%] lg:w-[6%] ">

                  </div>
                  <div
                     className="relative h-[100%]   mx-8 md:mx-6 lg:mx-0  -top-6 md:-top-0 lg:top-0 lg:p-0.5 w-[50%] md:w-[800%] lg:w-[50%] ">
                     <img
                        src={logo2.src}
                        alt={`Logo `}
                        width="1010"
                        height="1040"
                        className=" object-center  relative w-full h-full  "
                     />
                  </div>

               </div>


               <div
                  className=" relative w-[90%] mx-auto  md:w-[100%] lg:w-[80%] flex flex-col font-normal md:font-bold md:mx-1  ">
                  <div className="hidden md:block">
                     <ul
                        className="   lg:px-1 m-8 md:m-3 lg:m-8 flex justify-between items-center text-blue-900 flex-row gap-6 md:gap-6 lg:gap-6 ">
                        <li className="hover:text-blue-500 " id="barAnime"><Link href="/"> Acceuil</Link></li>
                        <li className="hover:text-blue-500 " id="barAnime"><Link href="/presentation/festim">Presentation
                           de l'Edition 2024</Link></li>

                        <li className="hover:text-blue-500"><Link href="#">Concepts
                           developpés</Link></li>
                        <li className="hover:text-blue-500 "><Link href="/presentation/news">Actualités</Link></li>
                        <a href="https://youtube.com/@festimafriquemedia?si=yi5piDJVHjMxckDC"
                           className="hover:text-blue-500 ">Festim Afrique Media</a>

                     </ul>
                  </div>
                  <div
                     className=" md:hidden   relative h-24 w-[100%] mx-auto  flex justify-between items-center text-blue-900 flex-row gap-6">
                     <img
                        src={house.src}
                        alt={`Logo `}
                        width="28"
                        height="28"
                        className=" object-center   "
                        onClick={() => {
                           router.push(`/`);
                        }}
                     />
                     <img
                        src={present.src}
                        alt={`Logo `}
                        width="28"
                        height="28"
                        className=" object-center   "
                        onClick={() => {
                           router.push(`/presentation/festim`);
                        }}
                     />
                     <img
                        src={concept.src}
                        alt={`Logo `}
                        width="28"
                        height="28"
                        className=" object-center   "
                        onClick={() => {
                           router.push(`#`);
                        }}
                     />
                     <img
                        src={contact.src}
                        alt={`Logo `}
                        width="28"
                        height="28"
                        className=" object-center   "
                        onClick={() => {
                           router.push(`/presentation/news`);
                        }}
                     />
                     <img
                        src={youtube.src}
                        alt={`Logo `}
                        width="28"
                        height="28"
                        className=" object-center   "
                        onClick={() => {
                           router.push(`https://youtube.com/@festimafriquemedia?si=yi5piDJVHjMxckDC`);
                        }}
                     />
                  </div>

               </div>


               {/*<div className="absolute right-2">*/}

               {/*   <li className="hover:text-blue-500 "><Link href="/presentation/news">Festim Afrqiue Media</Link></li>*/}
               {/*  */}
               {/*<Image*/}
               {/*   src={youtube.src}*/}
               {/*   alt={`Logo `}*/}
               {/*   width="28"*/}
               {/*   height="28"*/}
               {/*   className=" object-center   "*/}
               {/*   onClick={() => {*/}
               {/*      router.push(`# `);*/}
               {/*   }}*/}
               {/*/>*/}
               {/*</div>*/}

            </nav>


            <div className="relative w-full h-[84%] ">
               <div
                  className="relative w-[95%] md:w-[80%] h-auto mx-auto  space-y-1 items-center justify-center">
                  <div
                     className="relative w-[100%] md:w-[90%] lg:w-[60%] h-12 md:h-10  mx-auto bg-red-700 font-black text-white text-center flex items-center justify-center mt-9">
                     CONCEPTS DEVELLOPES POUR L'EDITION 2024
                  </div>
                  <div
                     className="hidden md:block relative  w-[100%] md:w-[100%] lg:w-[80%] h-16 md:h-8 mx-auto bg-red-700 md:font-black text-white text-center md:flex md:items-center md:justify-center">
                     DIPLOMATIE D’AFFAIRES
                  </div>

                  <div
                     className="hidden md:block relative  w-[100%] md:w-[100%] lg:w-[80%] text-center h-16 md:h-8 mx-auto bg-red-700 md:font-black text-white  md:flex md:items-center md:justify-center">
                     L’ENTREPRENEURIAT DES JEUNES EN AFRIQUE
                  </div>
               </div>

               {/*  2e bloc    */}
               <div className="relative h-auto  w-[90%] mx-auto md:mx-6 mt-28 space-y-12   ">
                  <div className="relative  h-auto   ">
                     <div
                        className="bg-red-900 relative bg-cover    h-[80%] mx-4 w-[93%] md:w-[50%]  rounded-tr-full justify-center  ">

                        <h1 id="presentation"
                            className="text-[23px]  px-2 py-2 text-white bg-clip-text  font-semibold my-2 leading-4 uppercase">
                           DIPLOMATIE D’AFFAIRES</h1>
                     </div>


                     <div
                        className="relative w-[100%] text-sm  leading-tight mt-2 text-justify font-[Poppins]  mx-auto h-auto lg:flex lg:justify-between lg:items-center lg:p-2 flex-row">
                        <div className=" relative w-[100%] md:w-[100%] lg:w-[50%]  h-[80%] ">
                           <div className="relative h-[50%] w-[100%] flex justify-between items-center gap-2">
                              <span className="relative h-[100%] w-[5%] text-6xl font-black font-[Times] "> L</span>
                              <span className="relative h-[80%] w-[88%] md:w-[95%] "> a diplomatie d’affaires s’inspire de celle des États. Elle se comprend comme la conception, la représentation
                        et la négociation d’intérêts privés à l’étranger. Elle est conçue comme une véritable fonction stratégique.

                              </span>
                           </div>

                           <span className="relative h-[50%] w-[100%]  ">Elle permet la conduite de négociations avec des partenaires similaires ayant les mêmes objectifs ou une
                        puissance étrangère (pays).
                        Elle intervient dans les négociations internationales, que celles-ci concernent des
                        brevets des marchés, des contrats ou bien encore des fusions-acquisitions. Elle sert aussi à garantir ou à forger
                        de nouvelles chaînes d’approvisionnement.   Pour cela, la diplomatie d’affaires nécessite une fine connaissance des structures institutionnelles, politiques,
                        administratives et économiques du pays concerné. Elle permet ainsi de maitriser ses particularités et de
                        comprendre l’étiquette des affaires comme la culture du marché sur lequel la négociation se déroule. Elle permet
                        enfin d’appréhender des différences culturelles au sein d’un même pays. Grâce au diagnostic institutionnel et
                        stratégique, la diplomatie d’affaires se charge de l’identification des grandes tendances et des points spécifiques,
                        tels que les lois, la réglementation et la conformité.    Elle recourt pour cela à de la veille, de l’analyse d’options
                        et de recommandations sur la stratégie et les relations internationales de l’entreprise. La diplomatie d’affaire
                        constitue un atout maître pour une négociation réussie dans un cadre étranger.           </span>

                        </div>


                        <span
                           className="relative h-[50%] w-[48%] text-sm  leading-tight mt-2 text-justify font-[Poppins]">
                         FESTIM AFRIQUE vous offre
                        une expérience profonde d’apprendre et d’acquérir des compétences en négociation dans un cadre international
                        et de leurs interactions. FESTIM AFRIQUE à travers plusieurs intervenants en qualité d’experts vous apporte
                        également une réelle connaissance des modalités particulières d’investissement selon les territoires à travers
                        leurs ambassades partout dans le Monde.
                           <br></br><br></br>
                          <span className="font-bold text-[16px]"> Accéder à des réseaux internationaux A TRAVERS FESTIM AFRIQUE.</span>
                           <br></br><br></br>
                      La diplomatie d’affaires permet de disposer de contacts opérationnels et réactifs dans la conduite d’une opération
                     stratégique. Elle permet de sécuriser les échanges avec les interlocuteurs étrangers. La diplomatie d’affaires a
                     pour objectif de garantir l’accès rapide à un solide réseau international de décideurs publics et privés de haut
                     niveau. Elle met ainsi à disposition immédiate de ses bénéficiaires des réseaux et compétences construits sur la
                     durée. Lors d’une opération, elle est un véritable accélérateur de contacts et un puissant facilitateur de projets.


                 </span>


                     </div>
                     {/*VOUS ETES UNE ENTREPRISE AMBITIEUSE, FESTIM AFRIQUE vous donne l’opportunité de*/}
                     {/*S’orienter dans un environnement international des marchés*/}

                  </div>


                  <div className="relative  h-auto   ">


                     <div
                        className="bg-red-900 relative bg-cover   h-[90%] md:h-[80%] md:mx-4 p-1 md:p-0  w-[100%]  md:w-[100%] lg:w-[60%]  rounded-tr-full justify-center  ">

                        <h1 id="presentation"
                            className="text-[18px] md:text-[23px]  px-2 md:py-2 text-white bg-clip-text  font-semibold md:my-3 leading-4 uppercase">
                           L’ENTREPRENEURIAT DES JEUNES EN AFRIQUE</h1>
                     </div>


                     <div
                        className="relative w-[100%] text-sm  leading-tight mt-2 text-justify font-[Poppins]  mx-auto h-auto lg:flex lg:justify-between lg:items-center p-2 flex-row">
                        <div className=" relative w-[100%] md:w-[100%] lg:w-[50%]  h-[80%] ">
                           <div className="relative h-[50%] w-[100%] flex justify-between md:items-center gap-2">
                              <span
                                 className="relative h-[50%] md:h-[100%] w-[5%] text-6xl font-black font-[Times] -mt-1 "> L</span>
                              <span className="relative h-[80%] w-[88%] md:w-[95%] "> a jeunesse africaine en forte croissance constitue un atout prometteur pour le développement du
                                    continent. L’objectif de FESTIM AFRIQUE est de leur permettre d’atteindre leur plein potentiel de
                                    production et prendre en main leur développement grâce à des emplois décents et productifs à travers
                                    l’entreprenariat dans plusieurs secteurs de la vie économique africaine.

                              </span>
                           </div>
                           <br></br>
                           <span className="relative h-[50%] w-[100%]  ">Les jeunes que nous avons rencontrés ont pu partager avec nous leurs aspirations, y compris leurs volontés
                              d’accroître leurs participations et leurs influences en Afrique, en tant qu’acteurs impliqués et engagés, de
                              disposer d’opportunités et de ressources, afin de devenir des citoyens pleinement actifs et contribuer ainsi, au
                              développement socioéconomique de leurs pays respectifs.

                              <br></br><br></br>


                              FESTIM ARIQUE profitant pleinement d’un contexte ou la République du Congo à travers son Président de
                              la République, Son Excellence Denis SASSOU N’GUESSO, venait de déclarer 2024, année de la jeunesse
                              en République du Congo. De telles aspirations, ne leurs sont pas uniques, mais sont plutôt partagées par bon
                              nombre de jeunes en quête de stabilité et d’autonomie, non seulement en République du Congo mais aussi à
                              travers tout le continent africain.

                              <br></br><br></br>

                              A ce titre, Selon le Fonds des Nations Unies pour la population (FNUAP), l’Afrique compte plus de 200 millions
                              de jeunes âgés de 15 à 24 ans, et ce chiffre devrait augmenter considérablement au cours des prochaines
                              décennies en raison des taux de fécondité élevés du continent. Le nombre croissant de jeunes en Afrique dans
                              le contexte de crise et d’incertitude comme celui que nous vivons aujourd’hui, conduit à une pression sans
                              précédent sur les ressources et les services sociaux, ainsi que sur la demande en matière d’emploi.

                              <br></br><br></br>

                              Le Rapport d’enquête mondiale publié en 2020 par le Bureau international du travail (BIT) souligne bien que
                              la pandémie a « fait de lourds dégâts chez les jeunes en détruisant leurs emplois et en compromettant leurs
                              perspectives de carrière ». Il s’avère que les jeunes des pays à faible revenu sont les plus exposés à la perte de
                              productivité et à la contraction des revenus qui en résulte, la crise affectant en outre les jeunes hommes et
                              jeunes femmes de manière inégale.

                              <br></br><br></br>

                                 L’action en faveur de la jeunesse dépasse certes la participation au monde du travail et la productivité, mais
                              ces notions n’en demeurent pas moins incontournables car selon les études de la Banque mondiale, le taux de
                              chômage et de sous-emploi élevé est un facteur majeur de pauvreté chez les jeunes.


                              <br></br>






                           </span>

                        </div>


                        <span
                           className="relative h-[50%] w-[48%] text-sm  leading-tight mt-2 text-justify font-[Poppins]">

                             Une étude de l’Organisation Mondiale du Travail démontre que, les pays qui forment des jeunes et des
                              travailleurs qualifiés, en bonne santé et productifs sont plus susceptibles d’atteindre une prospérité partagée,
                              une stabilité politique et un bien-être social généralisé.
                              <br></br><br></br>

                         Pour relever ce défi et permettre à l’Afrique de libérer son dividende démographique, et ainsi promouvoir
                        un développement durable, nous sommes parfaitement d’avis que l’entrepreneuriat constitue une piste de
                        solution à la crise de l’emploi des jeunes et un soulagement pour les pouvoirs publics. Cette option s’inscrit
                        en droite ligne du quatrième Objectif de développement durable des Nations Unies (ODD4.4) qui vise, d’ici à
                        2030, à augmenter considérablement le nombre de jeunes et d’adultes disposant des compétences, notamment
                        techniques et professionnelles, nécessaires à l’emploi, à l’obtention d’un travail décent et à l’entrepreneuriat.
                           <br></br><br></br>
                          A cet effet, à travers FESTIM AFRIQUE et ses partenaires, mettront à la disposition de la jeunesse africaines
                        les techniques et atouts transformateur de l’entrepreneuriat, ainsi que le rôle de l’État et celui du secteur privé
                        pour permettre aux jeunes de devenir eux-mêmes des acteurs et créateurs d’emplois en Afrique.
                           <br></br><br></br>
                           Avec FESTIM AFRIQUE des solutions innovantes apparaissent prometteuses, et sollicite le soutien des
                        Gouvernements, des Missions Diplomatiques, des entreprises et de la société civile qui tirent parti de l’économie
                        numérique, des changements technologiques, de la réforme des systèmes d’éducation et de formation, de la
                        mise en place de nouveaux réseaux d’accélérateurs et d’incubateurs pour le développement des startups, ou
                        encore des emprunts obligataires dans le cadre du partenariat avec la diaspora.
                            <br></br><br></br>
                           Ces formidables opportunités, toutes aussi variées les unes que les autres, démontrent bien qu’il n’existe pas de
                           solution unique pour stimuler l’entrepreneuriat des jeunes en Afrique. Les décideurs devront nous favoriser
                           afin de nous permettre de réussir cette activité d’intérêt commun adaptée au contexte non seulement national
                           mais aussi international, qui a travers FESTIM AFRIQUE leurs permettront d’encadrer et d’accompagner
                           efficacement les jeunes dans leurs quêtes de l’auto-prise en charge.




                 </span>


                     </div>
                     {/*VOUS ETES UNE ENTREPRISE AMBITIEUSE, FESTIM AFRIQUE vous donne l’opportunité de*/}
                     {/*S’orienter dans un environnement international des marchés*/}

                  </div>
               </div>


               <div
                  className="relative w-[98%] md:w-[80%] lg:w-[90%] h-auto p-6 lg:p-1 mx-auto  space-y-1 items-center justify-center">
                  <div
                     className="relative w-[100%] md:w-[90%] lg:w-[99%]  h-12 md:h-10 lg:h-16  mx-auto bg-green-700 font-black text-white text-center flex items-center justify-center mt-9">
                     CANEVA PRINCIPAL DES THEMES POUR LES PANELS SUR L’ENTREPRENEURIAT DES JEUNES EN AFRIQUE DE FESTIM
                     AFRIQUE
                  </div>
               </div>


               <div className="relative h-auto  w-[90%] mx-auto md:mx-6 mt-20 space-y-12   ">


                  <div className="relative  h-auto   ">
                     <div
                        className="bg-red-900 relative bg-cover  h-[88%] md:h-[90%] mx-4 w-[93%] md:w-[80%] lg:w-[65%]  rounded-tr-full justify-center  ">

                        <h1 id="presentation"
                            className="text-[17px] md:text-[20px]  px-2 py-2 text-white bg-clip-text  font-semibold my-2 leading-4 uppercase">
                           L’ENTREPRENEURIAT DES JEUNES EN AFRIQUE :</h1>
                     </div>


                     <ul className="relative h-[20%] w-[80%] md:w-[80%] lg:w-[50%] mx-8   list-disc list-inside  ">
                        <li
                           className="text-xs md:text-sm  leading-tight mt-2 text-justify gap-2 font-medium flex items-center font-[Poppins] ">
                           <span className="h-1.5 w-1.5 bg-green-600 rounded-full mr-1"></span>Perspectives sur l'emploi des jeunes en Afrique ;
                        </li>
                     </ul>
                     <ul className="relative h-[20%] w-[90%] md:w-[98%] lg:w-[65%] mx-8   list-disc list-inside  ">
                        <li
                           className="text-xs md:text-sm  leading-tight mt-2 text-justify gap-2 font-medium flex items-center font-[Poppins] ">
                           <span className="h-1.5 w-1.5 bg-green-600 rounded-full mr-1"></span>L’entrepreneuriat comme
                           piste de solution pour reveler les défis de L’emploi des jeunes en Afrique ;
                        </li>
                     </ul>
                     <ul className="relative h-[20%] w-[90%] md:w-[90%]  lg:w-[50%] mx-8   list-disc list-inside  ">
                        <li
                           className="text-xs md:text-sm  leading-tight mt-2 text-justify gap-2 font-medium flex items-center font-[Poppins] ">
                           <span className="h-1.5 w-1.5 bg-green-600 rounded-full mr-1"></span>LES PME porteuses
                           d'espoir pour tirer les jeunes vers l'entrepreneuriat;
                        </li>
                     </ul>
                     <ul className="relative h-[20%] w-[90%] md:w-[80%] lg:w-[50%] mx-8   list-disc list-inside  ">
                        <li
                           className="text-xs md:text-sm  leading-tight mt-2 text-justify gap-2 font-medium flex items-center font-[Poppins] ">
                           <span className="h-1.5 w-1.5 bg-green-600 rounded-full mr-1"></span>Quel role pour l'état et
                           les banques multilatérales de développement;
                        </li>
                     </ul>
                     <ul className="relative h-[20%] w-[90%] md:w-[90%] lg:w-[65%] mx-8   list-disc list-inside  ">
                        <li
                           className="text-xs md:text-sm  leading-tight mt-2 text-justify gap-2 font-medium flex items-center font-[Poppins] ">
                           <span className="h-1.5 w-1.5 bg-green-600 rounded-full mr-1"></span>Automatiser le secteur privé
                           pour un meilleur dialogue politique avec le secteur public.
                        </li>
                     </ul>
                  </div>

                  {/*2e*/}


                  <div className="relative  h-auto   ">
                     <div
                        className="bg-red-900 relative bg-cover   h-[88%] md:h-16 lg:h-10 mx-4 w-[93%] md:w-[98%] lg:w-[88%]  rounded-tr-full justify-center  ">

                        <h1 id="presentation"
                            className="text-[17px] md:text-[17px] lg:text-[20px]  px-2 py-3 text-white bg-clip-text  font-semibold my-2 leading-4 uppercase">
                           DU BESOIN DE LEVER LES CONTRAINTES DE L’ENTREPRENEURIAT DES
                           JEUNES EN AFRIQUE :</h1>
                     </div>


                     <ul className="relative h-[20%] w-[80%] md:w-[80%] lg:w-[50%] mx-8   list-disc list-inside  ">
                        <li
                           className="text-xs md:text-sm  leading-tight mt-2 text-justify gap-2 font-medium flex items-center font-[Poppins] ">
                           <span className="h-1.5 w-1.5 bg-green-600 rounded-full mr-1"></span>Les contraintes liées au
                           développement des PME ;
                        </li>
                     </ul>
                     <ul className="relative h-[20%] w-[90%] md:w-[80%] lg:w-[50%] mx-8   list-disc list-inside  ">
                        <li
                           className="text-xs md:text-sm  leading-tight mt-2 text-justify gap-2 font-medium flex items-center font-[Poppins] ">
                           <span className="h-1.5 w-1.5 bg-green-600 rounded-full mr-1"></span>Quelles pistes pour lever
                           les contraintes des PME.
                        </li>
                     </ul>


                  </div>


                  {/*3e*/}
                  <div className="relative  h-auto   ">
                     <div
                        className="bg-red-900 relative bg-cover   h-[88%] md:h-12 lg:h-10 mx-4 w-[100%] md:w-[98%] lg:w-[88%]  rounded-tr-full justify-center  ">

                        <h1 id="presentation"
                            className="text-[17px] md:text-[17px] lg:text-[20px]  px-2 py-2 text-white bg-clip-text  font-semibold my-2 leading-4 uppercase">
                           DES SOLUTIONS INNOVANTES POUR STIMULER L’ENTREPRENEURIAT DES
                           JEUNES EN AFRIQUE :</h1>
                     </div>


                     <ul className="relative h-[20%] w-[80%] md:w-[90%] mx-8   list-disc list-inside  ">
                        <li
                           className="text-xs md:text-sm  leading-tight mt-2 text-justify gap-2 font-medium flex items-center font-[Poppins] ">
                           <span className="h-1.5 w-1.5 bg-green-600 rounded-full mr-1"></span>Perspectives sur l'emploi
                           des jeunes en Afrique ;
                        </li>
                     </ul>
                     <ul className="relative h-[20%] w-[90%] md:w-[98%]  lg::w-[90%] mx-8   list-disc list-inside  ">
                        <li
                           className="text-xs md:text-sm  leading-tight mt-2 text-justify gap-2 font-medium flex items-center font-[Poppins] ">
                           <span className="h-1.5 w-1.5 bg-green-600 rounded-full mr-1"></span>Tirer parti des nouvelles
                           technologies, du numériques et des outils d’intelligence artificielle pour développer les
                           compétences et le savoir-faire entrepreneurial;
                        </li>
                     </ul>
                     <ul className="relative h-[20%] w-[90%] md:w-[90%]  lg:w-[80%] mx-8   list-disc list-inside  ">
                        <li
                           className="text-xs md:text-sm  leading-tight mt-2 text-justify gap-2 font-medium flex items-center font-[Poppins] ">
                           <span className="h-1.5 w-1.5 bg-green-600 rounded-full mr-1"></span>Exploiter les opportunités offertes
                           par l'économie orange et traditionnelle;
                        </li>
                     </ul>
                     <ul className="relative h-[20%] w-[90%] md:w-[80%] lg:w-[50%] mx-8   list-disc list-inside  ">
                        <li
                           className="text-xs md:text-sm  leading-tight mt-2 text-justify gap-2 font-medium flex items-center font-[Poppins] ">
                           <span className="h-1.5 w-1.5 bg-green-600 rounded-full mr-1"></span>Investir dans l'industrie des startups
                           africaines ;
                        </li>
                     </ul>
                     <ul className="relative h-[20%] w-[90%] md:w-[80%] lg:w-[50%] mx-8   list-disc list-inside  ">
                        <li
                           className="text-xs md:text-sm  leading-tight mt-2 text-justify gap-2 font-medium flex items-center font-[Poppins] ">
                           <span className="h-1.5 w-1.5 bg-green-600 rounded-full mr-1"></span>Faciliter l'accès au
                           fiancement ;
                        </li>
                     </ul>
                     <ul className="relative h-[20%] w-[90%] md:w-[90%] lg:w-[80%] mx-8   list-disc list-inside  ">
                        <li
                           className="text-xs md:text-sm  leading-tight mt-2 text-justify gap-2 font-medium flex items-center font-[Poppins] ">
                           <span className="h-1.5 w-1.5 bg-green-600 rounded-full mr-1"></span>Catalyser les ressources
                           de la DIASPORA Africaine : épargne, réseaux et talents.
                        </li>
                     </ul>
                  </div>


               </div>
               <div className="fixed bottom-6 right-8 w-8 z-50">
                  {/* Contenu de la bulle */}
                  <div className="bg-blue-500 text-white p-2 rounded-full shadow-lg">
                     <img
                        src={discours.src}
                        alt={`Logo `}
                        width="15"
                        height="20"
                        className=" object-center  relative w-full h-full  "
                     />
                  </div>
               </div>

               <br></br><br></br>
               <div>
                  <Pied/>
               </div>
            </div>

         </div>


      </>
   )

}