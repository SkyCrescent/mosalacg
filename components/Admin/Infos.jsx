"use client"
import { useState, useEffect } from "react";
import React from "react";
import axios from 'axios';
import Image from "next/image";
//import picture from "../../../public/picture.png";
//import f from '../../pages/api/publication'
export default function AddPublication({modal,SetModal,id}) {
   const apiUrl = process.env.NEXT_PUBLIC_API_URL ;
   const [filteredData, setFilteredData] = useState([]); // Initialize with all dat
   const [filteredData2, setFilteredData2] = useState([]); // Initialize with all dat
   const [Errors,SetErrors] = useState({})
   const [isSubmit,SetIsSubmit] = useState(false)
   const [selectedFile2, setSelectedFile2] = useState(null);
   const [selectedFile, setSelectedFile] = useState(null);
   const [values, setValues] = useState({
      paragraphe :"",
      contenu:"",
      id_evenement :id
   });

   // const currentDate = new Date();
   // const formattedDate = currentDate.toLocaleDateString(); //obtiens la date systeme

   const input1 = [
      { id: 1, name: "paragraphe", type: "textarae", placeholder: "Contenu de  l\'entete",value: values.paragraphe   ,label: "Contenu de l'entete", className: "text-large w-[90%] text-gray-700 border rounded-[10px] border-gray-300 py-2 px-4 h-[100%] focus:outline-none focus:border-blue-500",
         error:  values.paragraphe === ""? 'Veuillez signifier de l\'entete' : null
      }
   ]
   const input2 = [
      { id: 1, name: "contenu", type: "textarae", placeholder: "Contenu du Paragraphe ",value: values.contenu   ,label: "Contenu du Paragraphe", className: "text-large w-[90%] text-gray-700 border rounded-[10px] border-gray-300 py-2 px-4 h-[100%] focus:outline-none focus:border-blue-500",
         error:  values.contenu === ""? 'Veuillez signifier le contenu du  Paragraphe' : null
      }
   ]





   const comeBack = () =>{

      SetModal(false)
      setValues({
         paragraphe :"",
         contenu:"",
         id_evenement :""
      });

   }

   const handleChange2 = (e) => {
      const { name, value } = e.target ;
      let cleanedAddress = '';
      //cleanedAddress = value.replace(/[^a-zA-Z\s]/g, '');
      cleanedAddress = value.replace(/[^\w\s]/gi, '');
     // cleanedAddress = value.replace(/\b\w/g, char => char.toUpperCase());
      // Mettre à jour l'état avec l'adresse nettoyée
      setValues({ ...values, [name]: cleanedAddress });

      console.log(values)
      // met a jour pour les texte
      // faire ca avec label
   };



   const handleChange = (e) => {
      const { name, value } = e.target ;
      let cleanedAddress = '';
      //cleanedAddress = value.replace(/[^a-zA-Z\s]/g, '');
      cleanedAddress = value.replace(/[^\w\s]/gi, '');
      //cleanedAddress = value.replace(/\b\w/g, char => char.toUpperCase());
      // Mettre à jour l'état avec l'adresse nettoyée
      setValues({ ...values, [name]: cleanedAddress });

      console.log(values)
      // met a jour pour les texte
      // faire ca avec label
   };


   // useEffect(() => {
   //    //recup
   //    console.log(values)
   // }, [handleChange2]);


   const handleSummit=()=>{

      SetIsSubmit(true);

      const valuesNotEmpty = Object.values(values).every(value => value !== "");

      if (valuesNotEmpty ) {
         addData();
      } else {
         console.log("Veuillez remplir tous les champs avant de soumettre le formulaire.");
         // Ajoutez ici la logique pour afficher un message d'erreur ou une notification à l'utilisateur.
      }


      //
   }

   const addData = async () => {
      try {
         // Vérifiez que tous les champs requis sont remplis
         console.log(values)
         if (values.contenu && values.id_evenement &&values.paragraphe) {
            const formData = new FormData();
            formData.append('contenu', values.contenu);
            formData.append('id_evenement', values.id_evenement);
            formData.append('paragraphe', values.paragraphe);
            const response = await axios.post(`${apiUrl}/infos/add_info.php`, formData, {
               headers: {
                  'Content-Type': 'multipart/form-data',
               },
            });

            console.log("Truc ajouté avec succès ", response);

         }
         // Reset form fields after successful submission
         setValues({
            paragraphe :"",
            contenu:"",
            id_evenement :''
         });
         // getData2()
         SetModal(false)
      } catch (error) {
         console.error(error);
         // setLoading(false);
      }
   };

   return(
      <>

         <div className="fixed top-0 left-0 z-50 bg-black/70 w-screen h-screen overflow-y-auto">
            <div className="w-full relative flex justify-center mt-12  h-[70%] ">
               <div className={`flex-row relative w-[65%]  rounded-xl shadow-xl bg-gray-200 border border-blue-500 p-2 `}>
                  <div className=" mt-6 w-[90%] h-[75%] mx-auto  items-center justify-center">

                     <div className="relative w-[80%] h-[30%] mx-auto mt-2  ">
                        <div className="flex-col  items-center justify-center relative w-[100%] h-[100%]  ">
                           <div className="w-[100%]  h-[85%] ">
                              {input1.map((item) => (
                                 <div key={item.id} className="items-center w-full relative h-[90%]    ">
                                    <div className="rounded-md h-[100%] w-[100%] mx-auto relative left-2  "
                                         key={item.id}>
                                       <label
                                          className="text-[14px] font-semibold h-1 text-black ">{item.label}</label>
                                       <div className="relative w-[100%] h-[100%] pt-2 ">
                                             <textarea
                                                placeholder={item.placeholder}
                                                name={item.name}
                                                className={item.className}
                                                rows="2"
                                                cols="50"
                                                value={values.paragraphe}
                                                onChange={(e) => handleChange2(e)}
                                             />

                                       </div>
                                       <div>
                                          {/*{ Errors[inputs.name]  ? (<> <div className="text-[75%] text-red-600"> {inputs.error} </div> </> ): null  }*/}
                                          {isSubmit && item.error ? (
                                             <div className="text-[70%] text-red-600">{item.error}</div>
                                          ) : null}
                                       </div>

                                    </div>
                                 </div>
                              ))}
                           </div>
                           {isSubmit && !values.media ? (
                              <div className="text-[70%] text-red-600 text-center">Veuillez sélectionner un fichier pour
                                 ce poste</div>
                           ) : null}
                        </div>

                     </div>

                     <div className="flex items-center justify-center w-[80%]  h-[50%] mx-auto    ">
                        <div className="w-[100%]  h-[85%] ">
                           {input2.map((item) => (
                              <div key={item.id} className="items-center w-full relative h-[90%]    ">
                                 <div className="rounded-md h-[100%] w-[100%] mx-auto relative left-2  "
                                      key={item.id}>
                                    <label
                                       className="text-[14px] font-semibold h-1 text-black ">{item.label}</label>
                                    <div className="relative w-[100%] h-[100%] pt-2 ">
                                             <textarea
                                                placeholder={item.placeholder}
                                                name={item.name}
                                                className={item.className}
                                                rows="8"
                                                cols="50"
                                                value={values.contenu}
                                                onChange={(e) => handleChange(e)}
                                             />

                                    </div>
                                    <div>
                                       {/*{ Errors[inputs.name]  ? (<> <div className="text-[75%] text-red-600"> {inputs.error} </div> </> ): null  }*/}
                                       {isSubmit && item.error ? (
                                          <div className="text-[70%] text-red-600">{item.error}</div>
                                       ) : null}
                                    </div>

                                 </div>
                              </div>
                           ))}
                        </div>
                     </div>
                  </div>
                  <div className=" flex justify-center items-center gap-8 mt-6  h-[15%] w-[100%] ">
                     <button
                        className="w-[20%] h-[70%] lg:w-fit bg-blue-500 hover:bg-blue-800 text-white text-center transition duration-300 transform hover:scale-105 px-5 md:px-10 py-1 rounded-md font-normal"
                        onClick={handleSummit}>Publier
                     </button>
                     <button
                        className="w-[20%] h-[70%] lg:w-fit bg-red-500 hover:bg-red-800 text-white transition duration-300 transform hover:scale-105 px-10 py-2 rounded-md font-normal"
                        onClick={comeBack}>Annuler
                     </button>
                  </div>
               </div>


            </div>
         </div>






      </>
   )
}