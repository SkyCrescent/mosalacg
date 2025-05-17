"use client"
import React, {useEffect} from 'react';
import { usePathname, useRouter  } from "next/navigation";
import {useState} from "react";
import Style from "@/styles/Page.css"
import Image from "next/image";
import Pied from '../../../components/Pied';
import axios from "axios";
import Link from "next/link";

export default function page(){
   const apiUrl = process.env.NEXT_PUBLIC_API_URL ;
   const [etat , SetEtat ] = useState(1)
   const [loading , SetLoading ] = useState(false)
   const [filteredData, setFilteredData] = useState([]); // Initialize with all dat
   const [number , SetNumber] = useState(0)
   const [hoveredItem, setHoveredItem] = useState(null);
   const [MyId , SetId] = useState(0)
   const [modalEvent ,SetEvent ] = useState(false)
   const [openSubMenuId, setOpenSubMenuId] = useState(false);
   const [openSubMenu, setOpenSubMenu] = useState(false);
   const [formDelete , SetDelete] = useState(false)
   const pathname = usePathname();

   const router = useRouter();


   const getData = async () => {
      try {
         // Remplacez l'URL par la bonne URL de votre API
         const response = await axios.get(`${apiUrl}/evenements/get_allEvent.php`);
         // console.log(response.data && response.data.recu && response.data.recu.length > 0)
         if (response.data && response.data.recu && response.data.recu.length > 0) {
            // Vérifiez que la réponse contient les données attendues
            console.log("la jointure",response.data.recu)
            setFilteredData(response.data.recu)
            SetNumber(response.data.recu.length)
            SetLoading(true)
         } else {
            console.log("La réponse de l'API est incorrecte ou ne contient pas de données.",response);
         }
      } catch (error) {
         console.error("Une erreur s'est produite lors de la récupération des données de l'API : ", error);
      }
   };
   useEffect(() => {
      getData()
      //  console.log("ddd",MyId)
   }, []);

   const handleItemHover = (item) => {
      setHoveredItem(item);
   };

   const comeBack2= () =>{

      // SetLoading2(false)
   }

   const GoToUpdate = async (id,nom) => {
      const encryptedData = btoa(id);
      const encryptedData2 = btoa(nom);

      router.push(`../../admin/home/handle?utytrcd=${encodeURIComponent(encryptedData)}&utyy=${encodeURIComponent(encryptedData2)}`);


  router.push(``)

   }


   const deletData = async (MyId) => {
      // console.log(MyId)
      try {
         const formData = new FormData();
         // Effectuez la requête HTTP en utilisant Axios
         const response = await axios.post(`${apiUrl}/evenements/delete_Event.php?id=${MyId}`, {
            headers: {
               'Content-Type': 'multipart/form-data',
            },
         });
         SetDelete(false)
         getData()
         console.log("Truc ajouté avec succès ", response);
      } catch (error) {
         console.error(error);
      }

   };


   return(
      <>

         <div
            className="relative h-screen  bg-white   ">

            <nav
               className="relative w-[100%] md:w-full h-[8%] md:h-[10%] lg:h-[16%] flex items-center    justify-evenly    text-md  decoration-amber-500 shadow-xl ">
               <div
                  className="hidden  relative w-[30%] md:w-[10%] lg:w-[30%] h-[100%] lg:flex items-center md:mx-12 lg:mx-6">
                  <div className="relative h-[100%] bg-green-900 -mx-14 top-0 w-[4%] md:w-[8%] lg:w-[13%] ">

                  </div>
                  <div
                     className="relative h-[100%] mx-8 md:mx-6 lg:mx-12 -top-6 md:-top-0 lg:-top-2 w-[50%] md:w-[800%] lg:w-[50%] ">
                     <img
                        src={logo.src}
                        alt={`Logo `}
                        width="190"
                        height="190"
                        className=" object-center   "
                     />
                  </div>

               </div>

               <div
                  className=" relative w-[90%] mx-auto  md:w-[100%] lg:w-[80%] flex flex-col font-normal md:font-bold md:mx-1  ">
                  <div className="hidden md:block">
                     <ul
                         className="   lg:px-1 m-8 md:m-3 lg:m-8 flex justify-between items-center text-blue-900 flex-row gap-6 md:gap-6 lg:gap-6 ">
                        <li className="hover:text-blue-500 "><Link href="/admin/home/actu">Actualites</Link></li>
                        <li className="hover:text-blue-500 " id="barAnime"><Link href="#"> Evénement </Link></li>
                        <li className="hover:text-blue-500 " id="barAnime"><Link
                            href="/admin/home/reservations"> Réservations</Link></li>

                        <li className="hover:text-blue-500 " id="barAnime"><Link
                            href="/admin/home/formation"> Formation</Link></li>

                        <li className="hover:text-blue-500 "><Link href="/admin">Deconnexion</Link></li>

                     </ul>
                  </div>
                  <div
                      className=" md:hidden   relative h-24 w-[100%] mx-auto  flex justify-between items-center p-6 text-blue-900  gap-6">
                     <img
                         src={present.src}
                         alt={`Logo `}
                         width="28"
                         height="28"
                         className=" object-center   "
                         onClick={() => {
                            router.push(`/admin/home/actu`);
                         }}
                     />
                     <img
                         src={house.src}
                         alt={`Logo `}
                         width="28"
                         height="28"
                         className=" object-center   "
                         onClick={() => {
                            router.push(`#`);
                         }}
                     />
                     <img
                         src={concept.src}
                         alt={`Logo `}
                         width="28"
                         height="28"
                         className=" object-center   "
                         onClick={() => {
                            router.push(`/admin/home/reservations`);
                         }}
                     />
                     <img
                         src={plannig.src}
                         alt={`Logo `}
                         width="28"
                         height="28"
                         className=" object-center   "
                         onClick={() => {
                            router.push(`/admin/home/formation`);
                         }}
                     />




                     <img
                         src={off.src}
                         alt={`Logo `}
                         width="28"
                         height="28"
                         className=" object-center   "
                         onClick={() => {
                            router.push(`/admin`);
                         }}
                     />

                  </div>

               </div>


            </nav>


            <div
                className="relative flex flex-row w-[100%] h-[80%] cursor-default overflow-y-auto  scrollbar-hidden ">
               <div className="relative w-full  h-[70%] md:h-[100%] mt-2  ">


                  <div
                      className={pathname.includes('admin/home') ? 'relative w-[100%] h-[15%] md:h-[10%] flex items-center justify-center' : 'hidden'}>
                     <div className=" relative md:left-40 lg:left-96 justify-center w-[100%]  md:w-[60%]  lg:w-[80%] flex items-center h-[80%] md:h-[50%]">
                        <button
                           className={pathname.includes('home/events/seeEvents') ? 'hidden' : "block relative w-[80%] md:w-[80%] lg:w-[20%] h-[100%] md:h-10 lg:w-fit bg-blue-500 hover:bg-green-800 text-white transition duration-300 transform hover:scale-105 px-10 py-2 rounded-md font-normal"}
                           onClick={() => {
                              SetEvent(true)
                           }}>Nouvelle Evenements
                        </button>
                     </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 relative w-[100%] h-6 gap-4 p-4 mb-3 ">

                     {loading && (
                        filteredData.map((item, index) => (
                           <div
                              key={index}
                              className="relative  rounded-t-xl h-96 cursor-pointer bg-gray-100/40 hover:bg-gray-100/85 rounded-b-xl transform hover:scale-x-105 hover:scale-y-105 decoration-sky-500 hover:shadow-2xl transition duration-300 "
                              onMouseEnter={() => handleItemHover(item)}
                              onMouseLeave={() => {
                                 handleItemHover(null);
                                // comeBack2();
                              }}
                              onClick={() => {
                                 GoToUpdate(item.id, item.nom)
                              }}
                           >
                              <img src={`/${item.photo}`} alt={`Media ${item.id}`}
                                   className="relative w-full h-[70%]  rounded-t-xl "/>
                              {/*<div className="text-sm mt-2">{item.nom}</div>*/}
                              <div className="h-[30%] w-[100%] space-y-1 rounded-b-lg  overflow-hidden">
                                 <div className="h-[30%] w-[100%] items-center justify-center overflow-hidden ">
                                    <div
                                       className="font-[poppins] text-3xl text-black font-semibold overflow-hidden">{item.nom}</div>
                                 </div>
                                 <div
                                    className="text-xs h-[30%] md:h-[15%]  text-gray-800 font-[Poppins] font-semibold ">
                                    <button
                                       className={pathname.includes('home/events/seeEvents') ? 'hidden' : "block relative w-[80%] mx-2 md:w-[80%] lg:w-[80%] h-[100%] md:h-10  bg-red-500 hover:bg-red-500 text-white transition duration-300 transform hover:scale-105 px-10 py-2 rounded-md font-normal"}
                                       onClick={() => {
                                          SetDelete(true)
                                          SetId(`${item.id}`)
                                       }}>Supprimer l'evenement
                                    </button>

                                 </div>
                              </div>
                           </div>
                        ))
                     )}
                  </div>


               </div>


            </div>


            <div className="  ">


               <Pied/>


            </div>

         </div>
         {modalEvent ? <AddEvent modal={modalEvent} SetModal={SetEvent}/> : null}

         {
            formDelete ? (
               <div className="fixed top-0 left-0 z-50 bg-black/70 w-screen h-screen overflow-y-auto">
                  <div className="w-full flex justify-center my-52">
                     <div className={`flex relative w-[30%] bg-sky-100 shadow rounded-lg p-6 `}>
                        <div className="flex flex-col items-center justify-center mx-10  space-y-6">
                           <div className="flex flex-col items-center justify-center">
                              <h2 className={`w-[124%] `}>Vous allez supprimer cette enregistrement </h2>
                              <h2>en ete vous sure </h2>
                           </div>
                           <button className={`bg-red-500 text-white rounded w-64 h-10 hover:bg-red-400`} onClick={()=>{deletData(MyId)}}>Supprimer</button>
                           <button className={`bg-blue-500 text-white rounded w-64 h-10 hover:bg-blue-400`} onClick={()=>{SetDelete(false)}} >Annuler</button>
                        </div>
                     </div>
                  </div>
               </div>
            ) : null
         }
      </>
   )
}