"use client"
import { useState, useEffect } from "react";
import React from "react"
import Image from "next/image";
import picture from "@/public/picture.png";
import axios from "axios";
export default  function seePublication ({modal,SetModal,id}){
   const apiUrl = process.env.NEXT_PUBLIC_API_URL ;
   const [recu,setrecu] = useState([])
   const [filteredData, setFilteredData] = useState([]); // Initialize with all dat
   const [filteredData2, setFilteredData2] = useState([]); // Initialize with all dat
   const [Errors, SetErrors] = useState({})
   const [Myid , SetId] = useState(0)
   const [isSubmit, SetIsSubmit] = useState(false)
   const [selectedFile2, setSelectedFile2] = useState(null);
   const [selectedFile, setSelectedFile] = useState(true);
   const [values, setValues] = useState({
      poste: "",
      media: "",
      typemedia: "",
      eventId: id
   });
   const input1 = [
      {
         id: 1,
         name: "poste",
         type: "textarae",
         placeholder: "Contenu",
         value: values.poste,
         label: "Contenu du concerned",
         className: "text-large w-[90%] text-gray-700 border rounded-[10px] border-gray-300 py-2 px-4 h-[100%] focus:outline-none focus:border-blue-500",
         error: values.poste  === "" ?  'Veuillez signifier le contenu du post' : null
      }
   ]
   const handleFileChange = (event) => {
      const fileInput = event.target;
      const selectedFile = fileInput.files[0];

      if (selectedFile) {
         setSelectedFile(selectedFile);
         setValues((prevValues) => ({
            ...prevValues,
            media: selectedFile,
            typemedia: selectedFile.type,
         }));
         console.log(fileInput.files[0])
         console.log("fichier sélectionné frr", selectedFile.name);
         console.log("fichier sélectionné frr", selectedFile.type);
         setSelectedFile2(selectedFile.type)
         // Vous pouvez effectuer d'autres opérations avec le fichier si nécessaire
      } else {
         setSelectedFile(null);
         setValues((prevValues) => ({
            ...prevValues,
            media: "", // Réinitialise la valeur media s'il n'y a pas de fichier sélectionné
            typemedia: "",
         }));
         console.log("Aucun fichier sélectionné");
      }
   };
   const handleChange = (e) => {
      const { name, value } = e.target ;
      let cleanedAddress = '';
      //cleanedAddress = value.replace(/[^a-zA-Z\s]/g, '');
      cleanedAddress = value.replace(/[^\w\s]/gi, '');
      cleanedAddress = cleanedAddress.replace(/\b\w/g, char => char.toUpperCase());
      // Mettre à jour l'état avec l'adresse nettoyée
      setValues({ ...values, [name]: cleanedAddress });

      console.log(values)
      // met a jour pour les texte
      // faire ca avec label
   };
   const handleSummit=()=>{
      SetIsSubmit(true)
      console.log(values)
      const hasErrors = Object.values(Errors).some((error) => error);
      if (!hasErrors) {
         // S'il n'y a pas d'erreur, appelez addData

         console.log(values)
         updateData();
      }
   }



   const updateData = async (id) => {
      try {
         // Vérifiez que tous les champs requis sont remplis
         //console.log(values)
         if (values.poste && values.media ) {
            const formData = new FormData();
            formData.append('id', Myid);
            formData.append('contenu', values.poste);
            const response = await axios.post(`${apiUrl}/Poste/updatePoste.php?id=${Myid}`, formData, {
               headers: {
                  'Content-Type': 'multipart/form-data',
               },
            });

            console.log("Truc ajouté avec succès ", response);

         }
         // Reset form fields after successful submission
         setValues({
            poste: "",
            media :"",
            typemedia: "",
            eventId :""
         });
         // getData2()
         SetModal(false)
      } catch (error) {
         console.error(error);
         // setLoading(false);
      }
   };


   const comeBack = () =>{

      SetModal(false)
      setValues({
         poste: "",
         media :"",
         typemedia:"",
         eventId :""
      });

   }
   const VerifUrl = async () =>{
      try {
         // Remplacez l'URL par la bonne URL de votre API
         const response =  await axios.get(`${apiUrl}/Poste/get_byId2.php?id=${id}`);
         console.log("ccH",response.data.recu)
         setrecu (response.data.recu)
         if (response.data.recu[0].photo) {
            const file = new File([response.data.recu[0].photo], response.data.recu[0].photo);
            setSelectedFile(file);
            setValues(prevValues => ({
               ...prevValues,
               media: file,
            }));
         }

         SetId(id)
         setValues({
            poste: response.data.recu[0].contenu ,
           // visible: response.data.recu[0].visible , // Assurez-vous que le champ 'visible' est correctement mis à jour
           media: response.data.recu[0].photo , // Assurez-vous que le champ 'media' est correctement mis à jour
            typemedia:response.data.recu[0].typemedia
         });
      } catch (error) {
         console.error("Une erreur s'est produite lors de la récupération des données de l'API : ", error);
      }
   }
   useEffect(() => {
      VerifUrl();
   }, []);
      return (
      <>

         <div className="fixed top-0 left-0 z-50 bg-black/70 w-screen h-screen overflow-y-auto">
            <div className="w-full relative flex justify-center mt-12  h-[70%] ">
               <div
                  className={`flex-row relative w-[50%]  rounded-xl shadow-xl bg-gradient-to-r from-green-300 to-green-500 p-2 `}>
                  <div className="flex justify-between  w-[100%] h-[75%] ">

                     <div className="relative w-[35%] h-[90%]  mt-9  ">
                        <div className="flex-col  items-center justify-center relative w-[100%] h-[100%]  ">
                           <div className="relative  w-[100%]  h-[100%]">



                              {selectedFile  && (
                                 values.typemedia.includes('image') ? (
                                    <img
                                       src={`/${values.media}`}
                                       alt={`Media ${values.id}`}
                                       className="relative h-[100%]   w-[100%] mx-auto"
                                    />
                                 ) : values.typemedia.includes('video') ? (
                                    <video
                                       src={`/${values.media}`}
                                       controls
                                       onMouseEnter={(event) => { event.target.play(); }}
                                       onMouseLeave={(event) => { event.target.pause(); }}
                                       alt={`Video ${values.id}`}
                                       className="relative h-[100%]  w-[100%] mx-auto"
                                    ></video>
                                 ) : null

                              )}
                           </div>
                           {/*{isSubmit && !values.media ? (*/}
                           {/*   <div className="text-[70%] text-red-600 text-center">Veuillez sélectionner un fichier pour*/}
                           {/*      ce concerned</div>*/}
                           {/*) : null}*/}
                        </div>

                     </div>
                     <div className="flex items-center justify-center w-[65%]  h-[100%] mx-auto    ">
                        <div className="w-[100%]  h-[70%] ">
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
                                                rows="8"
                                                cols="50"
                                                value={values.poste}
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

