"use client"
import { useState, useEffect } from "react";
import React from "react";
import axios from 'axios';
import Image from "next/image";
import picture from "../../../public/picture.png";
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
      poste: "",
      media :"",
      typemedia:"",
      eventId :id
   });

   const currentDate = new Date();
   const formattedDate = currentDate.toLocaleDateString(); //obtiens la date systeme
   const getData2 = async () => {
      try {
         // Remplacez l'URL par la bonne URL de votre API
         const response = await axios.get(`${apiUrl}/Poste/get_allPoste.php`);
         // console.log(response.data && response.data.recu && response.data.recu.length > 0)
         if (response.data && response.data.recu && response.data.recu.length > 0) {
            // Vérifiez que la réponse contient les données attendues
            console.log("la jointure",response.data.recu)
            setFilteredData(response.data.recu)
         } else {
            console.log("La réponse de l'API est incorrecte ou ne contient pas de données.",response);
         }
      } catch (error) {
         console.error("Une erreur s'est produite lors de la récupération des données de l'API : ", error);
      }
   };
   const input1 = [
      { id: 1, name: "poste", type: "textarae", placeholder: "Contenu",value: values.poste   ,label: "Contenu de la publication", className: "text-large w-[90%] text-gray-700 border rounded-[10px] border-gray-300 py-2 px-4 h-[100%] focus:outline-none focus:border-blue-500",
         error:  values.poste === ""? 'Veuillez signifier le contenu du post' : null
      }
   ]

   const handleFileChange = async (event) => {
      const fileInput = event.target;
      const selectedFile1 = fileInput.files[0];

      if (selectedFile1) {
         // Vérifier si le fichier est une image en vérifiant l'extension
         const allowedExtensions = ["jpg", "jpeg", "png", "gif","mp4","mkv","3gp","MP4"];
         const fileNameParts = selectedFile1.name.split(".");
         const fileExtension = fileNameParts[fileNameParts.length - 1].toLowerCase();

         if (allowedExtensions.includes(fileExtension)) {
            // Si c'est une image, mettre à jour les valeurs avec le fichier sélectionné
            setSelectedFile(selectedFile1);
            console.log("Fichier sélectionné :", selectedFile1.name);

            try {
               const formData = new FormData();
               formData.append('file', selectedFile1);
               // Envoi de la requête POST avec Axios vers le serveur
               const response = await axios.post('../../pages/api/publication', formData, {
                  headers: {
                     'Content-Type': 'multipart/form-data'
                  }
               });
               console.log('File uploaded successfully:', response.data);
               // Mise à jour de la valeur media avec le chemin du fichier
               setValues((prevValues) => ({
                  ...prevValues,
                  media: `media/publication/${selectedFile1.name}`,
                  typemedia: selectedFile1.type,
               }));
               setSelectedFile2(selectedFile1.type)
            } catch (error) {
               console.error('Error uploading file:', error);
            }
         } else {
            // Si ce n'est pas une image, ne rien faire
            console.log("Le fichier sélectionné n'est pas une image");
         }
      } else {
         // Si aucun fichier n'est sélectionné, réinitialiser les valeurs
         setSelectedFile(null);
         setValues((prevValues) => ({
            ...prevValues,
            media: "", // Réinitialise la valeur media s'il n'y a pas de fichier sélectionné
            typemedia:""
         }));
         console.log("Aucun fichier sélectionné");
      }
   };



   const handleFileChange2 = (event) => {
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
   const handleChange2 = async (e) => {
      const { value } = e.target;

      // Update the eventName in the values state
      setValues({
         ...values,
         eventName: value,
      });

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
   useEffect(() => {
     console.log(values)
   }, [handleFileChange]);

   useEffect(() => {
      //recup
      console.log(values)
   }, [handleChange2]);


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
         if (values.poste && values.media ) {
            const formData = new FormData();
            formData.append('photo', values.media);
            formData.append('dat', formattedDate);
            formData.append('contenu', values.poste);
            formData.append('id_evenement', values.eventId);
            formData.append('typeMedia', values.typemedia);
            const response = await axios.post(`${apiUrl}/Poste/add_publication.php`, formData, {
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
         getData2()
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
                        <div className="flex justify-evenly mt-6 w-[90%] h-[75%] mx-auto  items-center">

                           <div className="relative w-[35%] h-[90%]  mt-9  ">
                              <div className="flex-col  items-center justify-center relative w-[100%] h-[100%]  ">
                                 <label
                                    htmlFor="imageInput"
                                    className="relative w-[100%] h-[90%] bg-transparent border border-sky-600 flex items-center justify-center cursor-pointer group"

                                 >
                                    <input
                                       type="file"
                                       id="imageInput"
                                       name="file"
                                       accept=".jpg, .jpeg, .png ,video/*"
                                       className="sr-only"
                                       onChange={handleFileChange}

                                    />
                                    <div className={selectedFile ? "hidden" :"relative h-[100%] inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"}>
                                       <Image
                                          src={picture.src}
                                          alt={`Logo `}
                                          width="600"
                                          height="600"
                                          className="object-contain object-center w-8 h-8 text-gray-600  "
                                       />
                                       <div className="text-gray-400 text-center opacity-100 z-10"> Importer le media </div>
                                    </div>
                                    {selectedFile  && (
                                       selectedFile2 === "video/mp4"  ?
                                          <video
                                             src={URL.createObjectURL(selectedFile)}
                                             controls
                                             onMouseEnter={(event) => { event.target.play(); }}
                                             onMouseLeave={(event) => { event.target.pause(); }}
                                             alt="Vidéo sélectionnée"
                                             className="relative h-[100%]  w-[100%]   z-40"
                                          ></video>  :
                                          <img
                                             src={URL.createObjectURL(selectedFile)}
                                             alt="Image sélectionnée"
                                             className="relative h-[100%]  w-[100%]  z-40"
                                          />
                                    )}
                                 </label>
                                 { isSubmit && !values.media ? (
                                    <div className="text-[70%] text-red-600 text-center">Veuillez sélectionner un fichier pour ce poste</div>
                                 ) : null}
                              </div>

                           </div>
                           <div className="flex items-center justify-center w-[70%]  h-[100%] mx-auto    ">
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