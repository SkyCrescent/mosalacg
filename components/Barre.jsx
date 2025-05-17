"use client"
import React, {useEffect} from 'react';
import {useState} from "react";
import  logo from '../public/MASCOTTE 2.jpg'
import  logo1 from '../public/Sans titre2.png'
import arrow from "../public/arrow.png"
import Image from "next/image";
import Link from "next/link";

export default function Barre(){
   const [openSubMenuId, setOpenSubMenuId] = useState(false);
   const [openSubMenu, setOpenSubMenu] = useState(false);





   return(


      <>
         <nav
            className=" w-full h-24 flex items-center    justify-between p-0.5   text-md  decoration-amber-500 shadow-xl ">
            <div className="relative w-[30%] h-[100%] flex items-center  mx-6">
               <div className="relative h-[100%] bg-green-900 -mx-6 top-0 w-[4%]">
                  {/*<Image*/}
                  {/*   src={logo1.src}*/}
                  {/*   alt={`Logo `}*/}
                  {/*   width="122"*/}
                  {/*   height="150"*/}
                  {/*   className=" object-center relative h-[100%] w-[100%]  "*/}
                  {/*/>*/}
               </div>
               <div className="relative h-[100%] mx-2  w-[50%]">
                  <Image
                     src={logo.src}
                     alt={`Logo `}
                     width="190"
                     height="190"
                     className=" object-center   "
                  />
               </div>

            </div>

            <div className="flex flex-col  font-bold mx-3 ">
               <ul className="   px-4 m-8 flex justify-content items-center text-blue-900 flex-row gap-12 ">
                  <li className="hover:text-blue-500 " id="barAnime"><Link href="#"> Acceuil</Link></li>

                  <li className="active-h relative flex justify-between items-center  hover:text-blue-500">
                     <div className="flex items-center space-x-2 ">
                        <Link href="/">Presentation</Link>
                        <Image
                           onClick={() => setOpenSubMenuId(!openSubMenuId)}
                           src={arrow.src}
                           alt="fff"
                           width={15}
                           height={15}
                           className={`${openSubMenuId ? 'rotate-180' : ''} cursor-pointer transition-transform duration-300`}
                        />
                     </div>
                     <div
                        className={`absolute rounded-md -mx-3 flex flex-col top-6 space-y-3 border border-black w-auto cursor-pointer transition-all duration-300 ${openSubMenuId ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[-6px]'}`}>
                        <ul className="px-4 py-2">
                           <li className="hover:text-blue-500"><Link href="/">Evenements</Link></li>
                           <li className="hover:text-blue-500"><Link href="/">Evenements</Link></li>
                        </ul>
                     </div>
                  </li>


                  <li className="hover:text-blue-500"><Link href="/">Evenements</Link></li>
                  {/*<li className="hover:text-blue-500 " id="barAnime"><Link href="#"> A propos</Link></li>*/}

                  <li className="hover:text-blue-500 "><Link href="/">Partenaires</Link></li>

                  {/*<li className="hover:text-blue-500 " id="barAnime"><Link href="#"> Reviews</Link></li>*/}

                  <li className="hover:text-blue-500 "><Link href="/">Contacts</Link></li>
               </ul>
            </div>

         </nav>


      </>
   )
}