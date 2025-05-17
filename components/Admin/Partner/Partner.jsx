"use client"
import { useState, useEffect } from "react";
import React from "react";
import AddPartener from "@/components/Admin/Partner/AddPartener";
import { usePathname, useRouter  } from "next/navigation";
//06 433 82 89 daniel rue lague steven stat telecom
import axios from "axios";
export default function Partner({id}){
   const apiUrl = process.env.NEXT_PUBLIC_API_URL ;
   const [modalEvent ,SetEvent ] = useState(false)
   const [filteredData, setFilteredData] = useState([]); // Initialize with all dat
   const [loading , SetLoading ] = useState(false)
   const [options , SetOptions] = useState(null)
   const [formDelete , SetDelete] = useState(false)
   const [MyId , SetId] = useState(0)
   const pathname = usePathname();

   const getData = async () => {
      try {
         // Remplacez l'URL par la bonne URL de votre API
         const response = await axios.get(`${apiUrl}/partners/get_byId.php?id=${id}`);
         // console.log(response.data && response.data.recu && response.data.recu.length > 0)
         if (response.data && response.data.recu && response.data.recu.length > 0) {
            // Vérifiez que la réponse contient les données attendues
            console.log("la jointure",response.data.recu)
            setFilteredData(response.data.recu)
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

   const deletData = async (MyId) => {
      // console.log(MyId)
      try {
         const formData = new FormData();
         // Effectuez la requête HTTP en utilisant Axios
         const response = await axios.post(`${apiUrl}/partners/delete_Partners.php?id=${MyId}`, {
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
         <div className={ pathname.includes('seeEvents') ? 'hidden' : 'relative w-[100%] h-[15%] top-3 ' }>

         {/*<div className="relative w-[100%] h-[15%] top-0 ">*/}
            <div className=" relative left-[50%] justify-center w-[50%]  flex items-center    h-[50%]">
               <button className="w-[20%] h-10 lg:w-fit bg-blue-500 hover:bg-green-800 text-white transition duration-300 transform hover:scale-105 px-10 py-2 rounded-md font-normal" onClick={()=>{SetEvent(true)}}>Nouveau Partenaires</button>

            </div>
         </div>
         <div className="relative w-[100%] h-[95%]  content-container overflow-hidden">

            <div className="grid grid-cols-3  relative w-[100%] h-[100%]   overflow-y-auto scrollbar-hidden z-50 ">

               {
                  loading
                     ? (
                        filteredData.map((subItem, subIndex) => (

                           <div key={subItem.key} className={` w-[70%] h-[70%]   mx-auto`}
                                onMouseEnter={() => SetOptions(subIndex)}
                                onMouseLeave={() => SetOptions(null)}

                           >

                              <div className=" h-[70%] w-[100%]  ">
                                 <img src={`/${subItem.photo}`} alt={`Media ${subItem.id}`} className="relative h-[100%] w-[100%]    " />
                              </div>

                              <div className=" h-[30%] w-[100%]  ">
                                 <div className=" h-[70%] w-[100%]  ">
                                    <div className="font-semibold "><span className="font-bold font-[gotham] text-2xl">{subItem.Nom}</span></div>
                                    <div className="font-semibold "> Se basant dans :<span className="font-bold font-[gotham] text-2xl">{subItem.domaine}</span></div>
                                 </div>
                                 <div className=" h-[30%] w-[100%]  ">
                                    <div className="font-normal text-[13px] text-gray-800">Contactable au Numéro <span className=" font-[gotham] ">{subItem.contact}</span> </div>

                                    <div
                                       className={pathname.includes('seeEvents') ? 'hidden' : 'block'}>

                                       {options === subIndex ? (
                                          <div className="flex items-center justify-center w-[100%]  h-8">
                                             <button
                                                className="bg-red-500 cursor-pointer text-white rounded  w-[70%] h-[90%] hover:bg-red-800 transition duration-300 transform hover:scale-105"
                                                onClick={() => {
                                                   SetId(`${subItem.id}`)
                                                   SetDelete(true)
                                                }}> Retirer ce Partenaire
                                             </button>

                                          </div>
                                       ) : null
                                       }</div>
                                 </div>
                              </div>

                           </div>
                        ))
                     )
                     : (
                        <div className="flex items-center justify-center  relative w-[100%] mx-96 bg-transparent text-xl">
                           <div className="w-32 h-32 border-t-4 border-blue-500 border-solid rounded-full animate-spin mx-auto"></div>
                        </div>
                     )
               }







            </div>



         </div>


         {modalEvent ? <AddPartener  id={id}   modal={modalEvent} SetModal={SetEvent} /> : null}

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