"use client"
import { useState, useEffect } from "react";
import { usePathname, useRouter  } from "next/navigation";
import Pied from "../../Pied"
import React from "react";
import AddPublication from "@/components/Admin/Publication/AddPublication"
import SeePublication from "@/components/Admin/Publication/SeePublication"
import axios from "axios";
import calendar from "@/public/calendar.png"
import Image from "next/image";
import Style from "@/styles/Page.css"
import Pied2 from "@/components/Pied2";

export default function Publication({id , nom}) {
   const apiUrl = process.env.NEXT_PUBLIC_API_URL ;
   const [modalEvent ,SetEvent ] = useState(false)
   const [loading , SetLoading ] = useState(false)
   const [loading2 , SetLoading2 ] = useState(false)
   const [modalUpdate ,SetModalUpdate ] = useState(false)
   const [filteredData, setFilteredData] = useState([]); // Initialize with all dat
   const [filteredData2, setFilteredData2] = useState([]); // Initialize with all dat

   const [options , SetOptions] = useState(null)
   const [color , SetCouleur] = useState(null)
   const [hoveredItem, setHoveredItem] = useState(null);
   const [seePublication, setSeePublication] = useState(1);
   const [MyId , SetId] = useState(0)
   const [MyName , SetName] = useState("")
   const [formDelete , SetDelete] = useState(false)
   const pathname = usePathname();


   useEffect(() => {

      getData2()
      //  console.log("ddd",MyId)
   }, []);


   const deletData = async (MyId) => {
       console.log(MyId)
      try {
         const formData = new FormData();
         // Effectuez la requête HTTP en utilisant Axios
         const response = await axios.post(`${apiUrl}/Poste/delete_Poste.php?id=${MyId}`, {
            headers: {
               'Content-Type': 'multipart/form-data',
            },
         });
         SetDelete(false)
         console.log("Truc ajouté avec succès ", response);
      } catch (error) {
         console.error(error);
      }
   };

   const handleItemHover = (item) => {
      setHoveredItem(item);
   };
   const GoToUpdate = (id) =>{
      SetModalUpdate(true)
      SetId(id)
   }

   const getData2 = async () => {
      try {
         // Remplacez l'URL par la bonne URL de votre API
         const response = await axios.get(`${apiUrl}/Poste/get_byId.php?id=${id}`);
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
         <div className={pathname.includes('admin/home') ? 'relative w-[100%] h-[10%]  flex items-center' : 'hidden'}>
            <div className=" relative left-96 justify-center w-[80%]  flex items-center    h-[50%]">
               <button
                  className={pathname.includes('home/events/seeEvents') ? 'hidden' : "block w-[20%] h-10 lg:w-fit bg-blue-500 hover:bg-green-800 text-white transition duration-300 transform hover:scale-105 px-10 py-2 rounded-md font-normal"}
                  onClick={() => {
                     SetEvent(true)
                  }}>Nouvelle Publication
               </button>
            </div>
         </div>
         <div className=" ">
                <div className="overflow-y-auto scrollbar-hidden relative z-20 h-[95%]  w-[90%] mx-auto   top-3 md:top-0  ">

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
                                             className="text-[16px] md:text-[32px] lg:text-[25px] font-[gotham] font-bold text-[#072c42] cursor-default">{nom}
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

                                          {mook.typemedia.includes('image') ? (
                                             <img
                                                src={`/${mook.photo}`}
                                                alt={`Media ${mook.id}`}
                                                className="relative h-[40%] w-[100%] mx-auto"
                                             />
                                          ) : mook.typemedia.includes('video') ? (
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
                                             style={{wordWrap: 'break-word'}}>{mook.contenu}</p>
                                       </div>
                                       {/*<div*/}
                                       {/*   className="">*/}

                                       <div
                                          className={pathname.includes('seeEvents') ? 'hidden' : 'relative h-[50%] w-[100%] md:w-[60%] mx-auto text-center flex justify-between'}>

                                          <button
                                             className="bg-green-500 text-[14px] text-black h-10 w-48 m-4 rounded hover:bg-green-300   "
                                             onClick={() => GoToUpdate(`${mook.id}`)}>
                                             Modifer
                                          </button>
                                          <button
                                             className="bg-red-500 text-[14px] text-black h-10 w-52  m-4 rounded hover:bg-red-400"
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

            <div className="relative w-[100%] ">
            <Pied/>
         </div>
         </div>
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
                           <button className={`bg-red-500 text-white rounded w-64 h-10 hover:bg-red-400`}
                                   onClick={() => {
                                      deletData(MyId)
                                   }}>Supprimer
                           </button>
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
         {modalEvent ? <AddPublication modal={modalEvent} SetModal={SetEvent} id={id}/> : null}

         {modalUpdate ? <SeePublication modal={modalUpdate} SetModal={SetModalUpdate} id={MyId}/> : null}

      </>
   )
}