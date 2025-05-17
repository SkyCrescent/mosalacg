import Link from "next/link"
import Image from "next/image"
import afrique from '../public/111 - Copie2.png'
import whar from '../public/whatsapp_127px.png'
import inst from'../public/instagram_127px.png'
import fb from '../public/facebook_127px2.png'
import  affiche from '../public/AFFICHE FESTTM AFRIQUE 2024copie2.png'
import  affiche2 from '../public/LOGO.png'

import {usePathname, useRouter} from 'next/navigation'
//import f from '../../app/home/historic'
export default function Barre() {
   const router = useRouter();

   return (
      <>
         <div
            className="z-30  bg-no-repeat   bg-cover    h-72 flex justify-evenly items-center ">
            <div
               className="absolute bg-gradient-to-t from-black/80 via-black/100 to-black/100 z-20 h-72 w-full opacity-85 ">


            </div>
           <div className=" relative h-[100%] w-full z-30 ">
              <div className=" relative h-[90%] w-full flex justify-between ">
                 <div className=" flex flex-col relative w-[40%] h-[80%]   ">
                    <img
                       className="my-6"
                       src={affiche.src}
                       height={500}
                       width={500}
                       alt="Nfc"
                    />
                    {/*<h1 className="text-white text-xl w-full">Diplomatie,Affaires et Entreprenariat des Jeunes </h1>*/}


                 </div>


                 <div className=" flex flex-col relative w-[30%] h-[80%]   space-y-2 mt-6 ">
                    <div className="flex flex-row items-center  relative w-[100%]  h-16">
                       <img
                          className="my-6"
                          src={affiche2.src}
                          height={80}
                          width={80}
                          alt="Nfc"
                       />
                       <h1 className="font-black text-2xl text-green-600">
                          FESTIM AFRIQUE</h1>
                    </div>
                    <h1 className="text-white text-lg w-full -mx-6 text-center ">Diplomatie,Affaires et Entreprenariat des Jeunes </h1>


                 </div>


                 <div className=" relative mt-6 w-[30%] h-[80%] z-30 ">
                    <div className="flex flex-col  w-[30%] h-[90%]   space-y-2 p-4">
                       <h1 className="font-black text-2xl text-red-600">
                          Contact</h1>
                       <div className="  space-y-2 w-96 h-48 flex flex-col justify-center">

                          <div className="relative w-full h-[70%] space-y-4 p-2 ">
                             <div className="flex items-center gap-3">
                                <img
                                   className=" w-8 h-8  "
                                   src={whar.src}
                                   height={60}
                                   width={50}
                                   alt="Nfc"/>
                                <h1 className="text-lg text-white  ">
                                   +33 012924 1804 487
                                </h1>

                             </div>

                             <a className="flex items-center gap-3">
                                <img
                                   className="-mx-1 w-10 h-10  "
                                   src={inst.src}
                                   height={60}
                                   width={40}
                                   alt="Nfc"/>
                                <h1 className=" text-xs text-white  my-0.5 mx-2 cursor-pointer">
                                   blanditdeugia@gmail.com
                                </h1>
                             </a>

                             <a className="flex items-center gap-3">
                                <img
                                   className="-mx-1 w-10 h-10  "
                                   src={fb.src}
                                   height={60}
                                   width={40}
                                   alt="Nfc"/>
                                <h1 className=" text-xs text-white  my-0.5 mx-2 cursor-pointer">
                                   blanditdeugia@gmail.com
                                </h1>
                             </a>
                          </div>
                          <div className="relative h-[40%] w-full flex justify-evenly space-x-3 ">
                             <div className="">
                                {/*<img*/}
                                {/*   className="  h-12 w-12  cursor-pointer"*/}
                                {/*   src={Tele.src}*/}
                                {/*   height={80}*/}
                                {/*   width={85}*/}
                                {/*   alt="Nfc"*/}
                                {/*/>*/}
                             </div>
                             <div className="">
                                {/*<img*/}
                                {/*   className="  h-12 w-12  cursor-pointer"*/}
                                {/*   src={Face.src}*/}
                                {/*   height={50}*/}
                                {/*   width={55}*/}
                                {/*   alt="Nfc"*/}
                                {/*/>*/}
                             </div>
                             <div className="">
                                {/*<img*/}
                                {/*   className="  h-12 w-12  cursor-pointer"*/}
                                {/*   src={What.src}*/}
                                {/*   height={50}*/}
                                {/*   width={55}*/}
                                {/*   alt="Nfc"*/}
                                {/*/>*/}
                             </div>
                             <div className="">
                                {/*<img*/}
                                {/*   className="  h-12 w-12  cursor-pointer"*/}
                                {/*   src={Insta.src}*/}
                                {/*   height={50}*/}
                                {/*   width={55}*/}
                                {/*   alt="Nfc"*/}
                                {/*/>*/}
                             </div>
                          </div>

                       </div>
                    </div>

                 </div>
              </div>


              <div className="relative h-[10%] w-full z-30 flex items-center justify-center">
                 <h1 className="text-sm text-white font-[Popins] text-center ">@ Copyright 2024 FESTIM Afrique All
                    Rights Reserved.</h1>
              </div>


           </div>


         </div>

      </>


   )
}