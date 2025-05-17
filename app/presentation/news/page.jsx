'use client'
import React, {useEffect} from 'react';
import {useState} from "react";

import Image from "next/image";
import logo from "@/public/AFFICHE FESTTM AFRIQUE 2024copie2.png";
import Link from "next/link";
import house from "@/public/icons/home_127px.png";
import present from "@/public/icons/layout_127px.png";
import concept from "@/public/icons/term_127px.png";
import contact from "@/public/icons/news_127px.png";
// import React from "react";
import Pied from "../../../components/Pied"
import axios from "axios";
import {useRouter} from "next/navigation";
import a from "@/public/Sans titre-1.png";
import youtube from "@/public/play_button_127px.png";
import logo2 from "@/public/AFFICHE FESTTM AFRIQUE 2024copie23.png";
import discours from "@/public/icons/discourse_127px.png";
export default function page() {
   const apiUrl = process.env.NEXT_PUBLIC_API_URL ;
   const [loading , SetLoading ] = useState(false)
   const [loading2 , SetLoading2 ] = useState(false)
   const [modalUpdate ,SetModalUpdate ] = useState(false)
   const [filteredData, setFilteredData] = useState([]); // Initialize with all dat
   const [filteredData2, setFilteredData2] = useState([]); // Initialize with all dat
   const router = useRouter();

   useEffect(() => {

      getData2()
      //  console.log("ddd",MyId)
   }, []);
   const getData2 = async () => {
      try {
         // Remplacez l'URL par la bonne URL de votre API
         const response = await axios.get(`${apiUrl}/actu/get_allPoste.php`);
         // console.log(response.data && response.data.recu && response.data.recu.length > 0)
         if (response.data && response.data.recu && response.data.recu.length > 0) {
            // Vérifiez que la réponse contient les données attendues
            console.log("la jointure",response.data.recu)
            setFilteredData2(response.data.recu)
            SetLoading2(true)
         } else {
            console.log("La réponse de l'API est incorrecte ou ne contient pas de données.",response);
         }
      } catch (error) {
         console.error("Une erreur s'est produite lors de la récupération des données de l'API : ", error);
      }
   };

   function formatDate(apiDate) {
      // Séparer la date en jour, mois et année
      const [day, month, year] = apiDate.split('/').map(Number);

      // Utiliser new Date(year, monthIndex, day) pour construire une date
      const formattedDate = new Date(year, month - 1, day).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });

      return formattedDate;
   }




   return(


      <>

         <div className="relative h-screen w-[100%] md:w-[100%] bg-white/80 overflow-y-auto scrollbar-hidden   "
         >
            {/*md:overflow-y-auto  scrollbar-hidden*/}
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

                        <li className="hover:text-blue-500"><Link href="/presentation/concept">Concepts
                           developpés</Link></li>
                        <li className="hover:text-blue-500 "><Link href="#">Actualités</Link></li>
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
                           router.push(`/presentation/concept`);
                        }}
                     />
                     <img
                        src={contact.src}
                        alt={`Logo `}
                        width="28"
                        height="28"
                        className=" object-center   "
                        onClick={() => {
                           router.push(`#`);
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

            <div className=" ">
               <div
                  className="overflow-y-auto scrollbar-hidden relative z-20 h-[95%]  w-[90%] mx-auto   top-3 md:top-0  ">

                  {
                     <div>
                        {
                           loading2 ? (
                                 <ul>
                                    {filteredData2.map((mook) => (
                                       <li key={mook.id}>

                                          <div className=" relative space-y-4 h-[100%]  w-[100%] md:w-[70%] mx-auto mb-9">
                                             <div
                                                className="relative h-[10%] w-[100%] md:w-[100%]  flex justify-between m-2 items-center mx-auto ">
                                                <div
                                                   className="text-[16px] md:text-[32px] lg:text-[25px] font-[gotham] font-bold text-[#072c42] cursor-default">FESTIM
                                                   Afrique
                                                </div>
                                                <div
                                                   className="text-[13px] md:text-[18px] lg:text-[13px] font-medium  text-[#072c42] cursor-default ">Publie
                                                   le
                                                   <span
                                                      className=" font-[poppins] font-bold italic text-black">   {formatDate(mook.dat)}</span>
                                                </div>
                                             </div>

                                             <div className="relative h-[50%] w-[100%] mx-auto ">
                                                {/*<img src={`data:image/png;base64,${mook.photo}`} alt={`Media ${mook.id}`} className="relative h-[30%] w-[90%] mx-auto  " />*/}

                                                {mook.typeMedia.includes('image') ? (
                                                   <img
                                                      src={`/${mook.photo}`}
                                                      alt={`Media ${mook.id}`}
                                                      className="relative h-[40%] w-[100%] mx-auto"
                                                   />
                                                ) : mook.typeMedia.includes('video') ? (
                                                   <video
                                                      src={`/${mook.photo}`}
                                                      controls
                                                      onMouseEnter={(event) => {
                                                         event.target.play();
                                                      }}
                                                      onMouseLeave={(event) => {
                                                         event.target.pause();
                                                      }}
                                                      alt={`Video ${mook.id}`}
                                                      className="relative h-[100%] w-[80%] mx-auto"
                                                   ></video>
                                                ) : null}
                                             </div>
                                             <div
                                                className="relative h-auto w-[90%] mx-auto md:w-[100%] md:mx-auto mt-4  text-center">
                                                <p className="text-xs text-black  md:text-[30px] font-[poppins] relative p-3 h-[100%] w-[90%] md:w-[100%] cursor-default"
                                                   style={{wordWrap: 'break-word', lineHeight: '1.0'}}>{mook.contenu}</p>
                                             </div>
                                             {/*<div*/}
                                             {/*   className="">*/}

                                             {/*<div*/}
                                             {/*   className={pathname.includes('seeEvents') ? 'hidden' : 'relative h-[50%] w-[100%] md:w-[60%] mx-auto text-center flex justify-between'}>*/}

                                             {/*   <button*/}
                                             {/*      className="bg-green-500 text-[14px] text-black h-10 w-48 m-4 rounded hover:bg-green-300   "*/}
                                             {/*      onClick={() => GoToUpdate(`${mook.id}`)}>*/}
                                             {/*      Modifer*/}
                                             {/*   </button>*/}
                                             {/*   <button*/}
                                             {/*      className="bg-red-500 text-[14px] text-black h-10 w-52  m-4 rounded hover:bg-red-400"*/}
                                             {/*      onClick={() => {*/}
                                             {/*         SetDelete(true)*/}
                                             {/*         SetId(`${mook.id}`)*/}
                                             {/*      }}>*/}
                                             {/*      Supprimer la Publication*/}
                                             {/*   </button>*/}
                                             {/*</div>*/}
                                          </div>
                                          {/* Vous pouvez ajuster la balise img en fonction du format de votre media */}
                                       </li>
                                    ))}
                                 </ul>)
                              : (
                                 <div className="flex items-center justify-center p-12  text-xl">
                                    <div
                                       className="w-20 h-20 border-t-2 border-red-500 border-solid rounded-full animate-spin mx-auto"></div>
                                 </div>
                              )
                        }
                     </div>
                  }

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

            </div>
            <br></br>
            <br></br>
            <Pied/>

            {/*<p>Telecharger mon <a href="http://localhost:3000/dd/CHRIST ALOUNA.docx">mon livre</a></p>*/}
            {/*<embed src="http://localhost:3000/dd/CHRIST ALOUNA.docx"  type="application/pdf" width="100%" height="500px"/>*/}


            {/*<iframe src="http://localhost:3000/ddd.pdf" className="border border-sky-700"*/}
            {/*        width="100%" height="100%"></iframe>*/}


            {/*<div className="relative  mx-auto w-[98%] h-auto space-y-6">*/}
            {/*   <div className="bg-red-900 h-8 w-[35%] mx-2 rounded-tr-full justify-center">*/}

            {/*      <h1 id="presentation"*/}
            {/*          className="text-sm py-2 px-2  text-white bg-clip-text  font-semibold my-9 leading-4 uppercase">*/}
            {/*         Histologie</h1>*/}
            {/*   </div>*/}


         </div>


      </>
   )
}