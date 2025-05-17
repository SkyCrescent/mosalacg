'use client'
import Image from "next/image";
import Link from "next/link";
import Pied from "@/components/Pied";
import React, {useEffect, useState} from "react";
import {usePathname, useRouter} from "next/navigation";
import axios from "axios";
import AddActu from '../../../../components/Admin/actualites/AddActu'
import style from "@/styles/Page.css"

export default function page(){
   const apiUrl = process.env.NEXT_PUBLIC_API_URL ;
   const [etat , SetEtat ] = useState(1)
   const [loading2 , SetLoading2 ] = useState(false)
   const [filteredData, setFilteredData] = useState([]); // Initialize with all dat
   const [number , SetNumber] = useState(0)
   const [MyId , SetId] = useState(0)
   const [hoveredItem, setHoveredItem] = useState(null);
   const [modalEvent ,SetEvent ] = useState(false)
   const [openSubMenuId, setOpenSubMenuId] = useState(false);
   const [openSubMenu, setOpenSubMenu] = useState(false);
   const [formDelete , SetDelete] = useState(false)
   const pathname = usePathname();
   const router = useRouter();
   const handleClickButton8 = () => {
      getData()
   };
   function formatDate(apiDate) {
      // Séparer la date en jour, mois et année
      const [day, month, year] = apiDate.split('/').map(Number);

      // Utiliser new Date(year, monthIndex, day) pour construire une date
      const formattedDate = new Date(year, month - 1, day).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });

      return formattedDate;
   }


   const getData = async () => {
      try {
         // Remplacez l'URL par la bonne URL de votre API
         const response = await axios.get(`${apiUrl}/actu/get_allPoste.php`);
         // console.log(response.data && response.data.recu && response.data.recu.length > 0)
         if (response.data && response.data.recu && response.data.recu.length > 0) {
            // Vérifiez que la réponse contient les données attendues
            console.log("la jointure",response.data.recu)
            setFilteredData(response.data.recu)
            SetNumber(response.data.recu.length)
            SetLoading2(true)
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

   const deletData = async (MyId) => {
      // console.log(MyId)
      try {
         const formData = new FormData();
         // Effectuez la requête HTTP en utilisant Axios
         const response = await axios.post(`${apiUrl}/actu/delete_Poste.php?id=${MyId}`, {
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
            className="relative h-[70%] w-full  bg-white   ">

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
                        <li className="hover:text-blue-500 "><Link href="#">Actualites</Link></li>
                        <li className="hover:text-blue-500 " id="barAnime"><Link href="/admin/home/"> Evénement </Link>
                        </li>
                        <li className="hover:text-blue-500 " id="barAnime"><Link
                            href="/admin/home/reservations"> Réservations</Link></li>
                        <li className="hover:text-blue-500 " id="barAnime"><Link
                            href="/admin/home/formation"> Formation</Link></li>


                        <li className="hover:text-blue-500 "><Link href="/admin">Deconnexion</Link></li>

                     </ul>
                  </div>
                  <div
                      className=" md:hidden   relative h-24 w-[100%] mx-auto  flex justify-between items-center text-blue-900 flex-row gap-6">
                     <img
                         src={present.src}
                         alt={`Logo `}
                         width="28"
                         height="28"
                         className=" object-center   "
                         onClick={() => {
                            router.push(`#`);
                         }}
                     />
                     <img
                         src={house.src}
                         alt={`Logo `}
                         width="28"
                         height="28"
                         className=" object-center   "
                         onClick={() => {
                            router.push(`/admin/home/`);
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
                className='relative w-[90%] h-[15%]  mx-auto  '>
               <div className=" relative  justify-center w-[80%] items-start p-2    h-[80%]">
                  <button
                      className="block w-[98%] md:w-[20%] h-10 lg:w-fit bg-blue-500 hover:bg-green-800 text-white transition duration-300 transform hover:scale-105 px-10 py-2 rounded-md font-normal"
                     onClick={() => {
                        SetEvent(true)
                     }}>Nouvelle Publication
                  </button>
               </div>
            </div>

            <div
               className="overflow-y-auto scrollbar-hidden relative z-20 h-[85%]  w-[90%] mx-auto   top-3 md:top-0  ">

               {
                  <div className="">
                     {
                        loading2 ? (
                              <ul>
                                 {filteredData.map((mook) => (
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
                                             className="relative h-auto w-[90%] mx-auto md:w-[100%]  md:mx-auto mt-4  text-center">
                                             <p className="text-xs text-black  md:text-[30px] font-[poppins] relative p-3 h-[100%] w-[90%] md:w-[100%] cursor-default"
                                                style={{wordWrap: 'break-word', lineHeight: '1.5'}}>{mook.contenu}</p>
                                          </div>
                                          {/*<div*/}
                                          {/*   className="">*/}

                                          <div
                                             className={pathname.includes('seeEvents') ? 'hidden' : 'relative h-[50%] w-[100%] md:w-[60%] mx-auto text-center flex justify-between'}>

                                             {/*<button*/}
                                             {/*   className="bg-green-500 text-[14px] text-black h-10 w-48 m-4 rounded hover:bg-green-300   "*/}
                                             {/*   onClick={() => GoToUpdate(`${mook.id}`)}>*/}
                                             {/*   Modifer*/}
                                             {/*</button>*/}
                                             <button
                                                className="bg-red-500 text-[14px] text-black h-10 w-52 mx-auto  m-4 rounded hover:bg-red-400"
                                                onClick={() => {
                                                   SetDelete(true)
                                                   SetId(`${mook.id}`)
                                                }}>
                                                Supprimer la Publication
                                             </button>
                                          </div>
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


         </div>


         <div className=" relative h-[30%] w-full ">


            <Pied/>


         </div>

         {modalEvent ? <AddActu modal={modalEvent} SetModal={SetEvent} handleClickButton8={handleClickButton8}/> : null}
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

                           {/*<button className={`bg-red-500 text-white rounded w-64 h-10 hover:bg-red-400`}*/}
                           {/*        onClick={console.log(MyId)*/}
                           {/*        }>Supprimer*/}
                           {/*</button>*/}

                           <button className={`bg-blue-500 text-white rounded w-64 h-10 hover:bg-blue-400`}
                                   onClick={() => {
                                      SetDelete(false)
                                   }}>Annuler
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
            ) : null
         }

      </>
   )
}