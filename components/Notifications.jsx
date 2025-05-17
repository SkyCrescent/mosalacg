'use client'
import {useEffect, useState} from "react";
import  affiche from '@/public/MASCOTTE 2.jpg'
export default function Notifications({SetNotifications,valueNotification}){
   const [loading , SetLoading ] = useState(false)


   setTimeout(()=>{
      // SetAlldisplay(false)
      SetLoading (true)
      // console.log(structure)
   },80)

   useEffect(()=>{

      console.log(valueNotification)
   },[])


   return(

      <>
         <div
            className={` absolute bottom-6 right-8 z-50  w-80 h-20  transition duration-300 ease-in-out`}
         >
            <div
               className={` relative  flex items-center justify-center h-[100%] w-[100%] bg-white rounded-md border border-green-200 shadow-green-800 p-1 ${loading ? 'scale-x-100 scale-y-100 opacity-100' : 'scale-x-0 scale-y-0 opacity-0'}  transition duration-500    `}>

               <div
                  className="flex flex-col items-center justify-center  relative h-[100%] w-[100%]">
                  <div
                     className="flex items-center justify-center   relative h-[8%] w-[100%]">
                     {/*<span*/}
                     {/*   className="text-xl text-center font-black font-[Gotham] text-blue-900">Renseigner les Informations du document ff </span>*/}


                     <button
                        className="absolute  right-3 -bottom-16 w-[16%] cursor-pointer z-50 hover:underline  rounded-md text-xs p-2 font-black text-indigo-900"
                        onClick={() => {
                           SetLoading(false);
                           SetNotifications(false);
                        }}
                     >OK
                     </button>

                  </div>


                  <div className="relative flex justify-between  h-[92%] w-[100%] ">

                     <div className="relative h-[120%] w-[25%] flex items-center justify-center  ">

                        <img src={affiche.src}
                             alt="Image sélectionnée"
                             className="relative h-[90%] -mt-4  w-[100%] mx-auto  z-40"
                        />
                        {/*   compresse*/}

                     </div>


                     <div className="relative h-[100%] w-[72%] flex items-center justify-center  ">

                       <span className="relative text-[13px] font-semibold font-[Poppins] ">

                         Votre réservation a été effectue avec succès

                          </span>

                     </div>


                  </div>


               </div>
            </div>

         </div>
      </>
   )
}