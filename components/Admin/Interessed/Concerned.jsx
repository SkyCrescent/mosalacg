"use client"
import Image from 'next/image';
import { useState, useEffect } from "react";
import React from "react";
import {useRouter} from "next/navigation";
import axios from "axios";

export default function Concerned({id}){
   const apiUrl = process.env.NEXT_PUBLIC_API_URL ;
   const router = useRouter();
   const [loading , SetLoading ] = useState(false)
   const [filteredData, setFilteredData] = useState([]); // Initialize with all data
   const [filteredData2, setFilteredData2] = useState([]); // Initialize with all data
   const [Tosearch , Setsearch] = useState("")
   const [MyId , SetId] = useState(0)
   const [options , SetOptions] = useState(null)
   const [ formPost , SetPost ] = useState(false)
   const [formSchool , SetSchool] = useState(false)
   const [formDelete , SetDelete] = useState(false)




   const getData2 = async () => {
      try {
         // Remplacez l'URL par la bonne URL de votre API
         const response = await axios.get(`${apiUrl}/Concerned/get_byId.php?id=${id}`)
         // console.log(response.data && response.data.recu && response.data.recu.length > 0)
         if (response.data && response.data.recu && response.data.recu.length > 0) {
            // Vérifiez que la réponse contient les données attendues
            console.log("ici",response.data.recu)
            setFilteredData2(response.data.recu)
            SetLoading(true)

         } else {
            console.log("La réponse de l'API est incorrecte ou ne contient pas de données.",response);
         }
      } catch (error) {
         console.error("Une erreur s'est produite lors de la récupération des données de l'API : ", error);
      }
   };
   useEffect(() => {
      getData2()
        console.log("ddd",id)
   }, []);


   const deletData = async (MyId) => {
      // console.log(MyId)
      try {
         const formData = new FormData();
         // Effectuez la requête HTTP en utilisant Axios
         const response = await axios.post(`${apiUrl}/School/delete_school.php?id=${MyId}`, {
            headers: {
               'Content-Type': 'multipart/form-data',
            },
         });

         //console.log("Truc ajouté avec succès ", response);

         const response2 = await axios.post(`${apiUrl}/Study/deleteBySchool.php?id=${MyId}`, {
            headers: {
               'Content-Type': 'multipart/form-data',
            },
         });
         SetDelete(false)
         getData()
         // console.log("Truc ajouté avec succès ", response2);

      } catch (error) {
         console.error(error);
      }
   };
   return(
      <>

         <div className="relative w-[100%] h-[100%]">
            {/*<MyImage/>*/}

            <div className="overflow-y-auto scrollbar-hidden relative h-[100%]  w-[100%]   ">
               <div className="relative top-3 h-auto content-container overflow-hidden ">
                  <div className="w-full shadow-lg ">
                     <div className="grid grid-cols-12 text-xs p-2 md:p-4  bg-blue-500 md:uppercase">
                        <h2 className="text-white font-[Poppins] col-span-1">Photo</h2>
                        <h2 className="text-white font-[Poppins] col-span-1 ">Nom</h2>
                        <h2 className="text-white font-[Poppins] col-span-2 ">Prenom</h2>
                        <h2 className="text-white font-[Poppins] col-span-2">Adresse</h2>
                        <h2 className="text-white font-[Poppins] col-span-2">Contact</h2>
                        <h2 className="text-white font-[Poppins] col-span-2">Ville</h2>
                        <h2 className="text-white font-[Poppins] col-span-2">Mail</h2>


                     </div>
                     {
                        loading
                           ? (
                              filteredData2.map((subItem, subIndex) => (
                                 <div
                                    className={subIndex % 2 === 0 ? 'bg-transparent border-b border-blue-400  cursor-pointer font-medium text-black hover:bg-gray-100 ' : 'bg-transparent text-black border-b border-blue-400 font-medium cursor-pointer hover:bg-gray-100'}>
                                    <li key={subIndex}
                                        className={`border-b border-blue-400 py-3 px-2 md:px-3  grid grid-cols-12 
                                  ${subIndex % 2 === 0 ? "bg-transparent" : "bg-transparent"} text-black  md:font-[Poppins] cursor-pointer items-center hover:bg-gray-200 `
                                        }
                                       // onMouseEnter={() => SetOptions(subIndex)}
                                       // onMouseLeave={() => SetOptions(null)}
                                    >
                                       <a className="relative w-36 h-16 md:h-12 "> <img src={`/${subItem.photo}`}
                                                                                        alt={`Media ${subItem.id}`}
                                                                                        className="relative h-[100%] w-[40%] md:w-[40%] rounded-full   "/>
                                       </a>
                                       <a className="col-span-1 md:h-8">{subItem.nom}</a>
                                       <a className="col-span-2 mx-1 md:h-8 ">{subItem.prenom}</a>
                                       <a className="col-span-2 md:-mx-8 h-8">{subItem.adresse}</a>
                                       <a className="col-span-2 md:-mx-8h-8">{subItem.contact}</a>
                                       <a className="col-span-2 md:-mx-6 h-8">{subItem.ville}</a>
                                       <a className="col-span-2 md:-mx-8 h-8">{subItem.email}</a>
                                       {/*/!*<a className="col-span-2 md:mx-4 h-8">{subItem.adresse}</a>*!/*/}

                                       {/*<a className="col-span-2 md:mx-4 h-8">{subItem.adresse}</a>*/}
                                       {/*<a className="col-span-2 md:mx-4 h-8">{subItem.adresse}</a>*/}

                                    </li>

                                    {/* Ajoutez d'autres informations ici si nécessaire */}
                                 </div>
                              ))
                           )
                           : (
                              <div className="flex items-center justify-center p-12 bg-transparent text-xl">
                                 <div
                                    className="w-12 h-12 border-t-2 border-blue-500 border-solid rounded-full animate-spin mx-auto"></div>
                              </div>
                           )
                     }
                  </div>

               </div>
            </div>


         </div>
         {
            formDelete ? (
               <div className="fixed top-0 left-0 z-50 bg-black/70 w-screen h-screen overflow-y-auto">
                  <div className="w-full flex justify-center my-52 md:my-96 lg:my-52">
                     <div className={`flex relative w-[80%] flex items-center justify-center md:w-[90%] lg:w-[30%] bg-sky-100 shadow rounded-lg p-6 `}>
                        <div className="flex flex-col items-center justify-center mx-10  space-y-6">
                           <div className="flex flex-col items-center justify-center">
                              <h2 className={`w-[124%] text-center`}>Vous allez supprimer cette ecole </h2>
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