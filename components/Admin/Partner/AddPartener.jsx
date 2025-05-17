"use client"
import { useState, useEffect } from "react";
import React from "react";
import Image from "next/image";
import picture from "@/public/picture.png";
import axios from "axios";
//import f from  '../../../app/pages/api/partenaires'
export  default function AddPartener({id,modal, SetModal}){
   const apiUrl = process.env.NEXT_PUBLIC_API_URL ;
   const [phoneNumber, setPhoneNumber] = useState('');
   const [isSubmit,SetIsSubmit] = useState(false)
   const [selectedFile2, setSelectedFile2] = useState(null);
   const [selectedFile, setSelectedFile] = useState(null);
   const [filteredData, setFilteredData] = useState([]); // Initialize with all dat
   const [Errors,SetErrors] = useState({})
   const [values, setValues] = useState({
      nom:"",
      domaine: "",
      contact : "",
      media :"",
      id_evenement:id
   });
   const input = [
      { id: 1, name: "nom", type: "text", placeholder: "Nom",value: values.nom   ,label: "Nom de Votre Partenaire", className: "text-large w-[90%] text-gray-700 border rounded-[10px] border-gray-300 py-2 px-4 h-[50%] focus:outline-none focus:border-blue-500",
         error:  values.nom === ""?  'Veuillez signifier le contenu du post' :null
      },
      { id: 2, name: "domaine", type: "text", placeholder: "Domaine",value: values.domaine   ,label: "Domaine d'activite", className: "text-large w-[100%] text-gray-700 border rounded-[10px] border-gray-300 py-2 px-4 h-[100%] focus:outline-none focus:border-blue-500",
         error:  values.domaine === ""?  'Veuillez signifier le contenu du post':null
      },
      { id: 3, name: "contact", type: "text", placeholder: "Contact",value: values.contact ,label: "Contact", className: "text-large w-[100%] text-gray-700 border rounded-[10px] border-gray-300 py-2 px-4 h-[100%] focus:outline-none focus:border-blue-500",
         error:  values.contact === ""? 'Veuillez signifier le contenu du post' : null
// : /[\d]+/.test( values.contact)?"Ce champs ne doit pas contenir des chiffre "
      }
   ]

   const addData = async () => {
      try {
         // Vérifiez que tous les champs requis sont remplis
         if (values.nom && values.domaine && values.contact && values.media ) {
            const formData = new FormData();
            formData.append('Nom', values.nom);
            formData.append('domaine', values.domaine); // Assurez-vous que le champ fichier a le bon nom
            formData.append('photo', values.media); // Assurez-vous que le champ fichier a le bon nom
            formData.append('contact', values.contact); // Assurez-vous que le champ fichier a le bon nom
            formData.append('id_evenement', id); // Assurez-vous que le champ fichier a le bon nom


            // Effectuez la requête HTTP en utilisant Axios
            const response = await axios.post(`${apiUrl}/partners/add_Partners.php`, formData, {
               headers: {
                  'Content-Type': 'multipart/form-data',
               },
            });
            console.log("Truc ajouté avec succès ", response);
            comeBack()
         }


      } catch (error) {
         console.error(error);
         // setLoading(false);
      }
   };



   const getData2 = async () => {
      try {
         // Remplacez l'URL par la bonne URL de votre API
         const response = await axios.get(`${apiUrl}/partners/get_allPartners.php`);
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
   const handleSummit = async () => {
      SetIsSubmit(true);
      const valuesNotEmpty = Object.values(values).every(value => value !== "");
      if (valuesNotEmpty) {
       addData()

      } else {
         console.log("Veuillez remplir tous les champs avant de soumettre le formulaire.");
         // Ajoutez ici la logique pour afficher un message d'erreur ou une notification à l'utilisateur.
      }
   };

   const comeBack = () =>{
      // SetPost(false)
      // setSelectedFile(null)
      SetModal(false)
      getData2()
      setValues({
         nom:"",
         domaine: "",
         contact : "",
         media :"",
         id_evenement:""
      });

   }


   const handleFileChange = async (event) => {
      const fileInput = event.target;
      const selectedFile1 = fileInput.files[0];

      if (selectedFile1) {
         // Vérifier si le fichier est une image en vérifiant l'extension
         const allowedExtensions = ["jpg", "jpeg", "png", "gif"];
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
               const response = await axios.post(' /../../pages/api/partenaires/', formData, {
                  headers: {
                     'Content-Type': 'multipart/form-data'
                  }
               });
               console.log('File uploaded successfully:', response.data);
               // Mise à jour de la valeur media avec le chemin du fichier
               setValues((prevValues) => ({
                  ...prevValues,
                  media: `media/partenaires/${selectedFile1.name}`,
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




   const handleChange = (e) => {
      const { name, value } = e.target ;
      let cleanedValue = '';
      let inputVal = e.target.value;
      let formattedPhoneNumber = '';
      let cleanedAddress = '';
      if (name === 'nom'){
         let formattedValue = '';

// Supprimer les caractères spéciaux sauf les espaces et les tirets pour le nom de l'école
         //cleanedValue = value.replace(/[^a-zA-Z\s]/g, '');
          cleanedValue = value.replace(/[^\w\s]/gi, '');

          //cleanedValue = cleanedValue.replace(/\b\w/g, char => char.toUpperCase());

         // Mettre à jour l'état avec le nom de l'école nettoyé
         setValues({...values, nom: cleanedValue});
      } else if (name === 'domaine') {
         // Supprimer les caractères spéciaux pour l'adresse
         // cleanedValue = value.replace(/[^a-zA-Z\s]/g, '');
         cleanedValue = value.replace(/[^\w\s]/gi, '');

         //cleanedValue = cleanedValue.replace(/\b\w/g, char => char.toUpperCase());
         // Mettre à jour l'état avec l'adresse nettoyée
         setValues({ ...values, domaine: cleanedValue });
      } else if (name === 'contact'){

         if (inputVal === '') {
            // Si le champ est vide, réinitialiser les valeurs
            setPhoneNumber('');
            setValues({...values, num: ''});
         } else {
            // Supprimer tous les caractères non numériques
            const cleaned = inputVal.replace(/\D/g, '');
            // Ajouter les deux premiers chiffres (06)
            formattedPhoneNumber += cleaned.substring(0, 2);
// Ajouter un espace
            formattedPhoneNumber += ' ';
            // Ajouter le groupe de trois chiffres suivant (650)
            formattedPhoneNumber += cleaned.substring(2, 5);
            // Ajouter un espace
            formattedPhoneNumber += ' ';
            // Ajouter les deux derniers chiffres (07)
            formattedPhoneNumber += cleaned.substring(5, 7);
            // Ajouter un espace
            formattedPhoneNumber += ' ';
            // Ajouter les deux derniers chiffres (97)
            formattedPhoneNumber += cleaned.substring(7, 9);
            setPhoneNumber(formattedPhoneNumber);
            // Mettre à jour l'état avec la valeur formatée dans le champ "num"
            setValues({...values, contact: formattedPhoneNumber});
            console.log(values)
         }
      }

      // met a jour pour les texte
      // faire ca avec label
   };
   useEffect(() => {
      console.log(values);
   }, []);

   useEffect(() => {
      console.log(values);
   }, [values]);
   return(
      <>
         <div className="fixed top-0 left-0 z-50 bg-black/70 flex items-center justify-center w-screen h-screen overflow-y-auto">
            <div className="flex flex-col   rounded-xl shadow-xl bg-gray-200 border border-sky-600 mx-auto p-6 h-[95%] w-[88%] md:w-[58%] md:h-[95%] lg:w-[35%]  ">
               {/*//le pc c a partir de md par defaut c le phone*/}
               <div className=" h-[10%] w-[90%]  flex items-center justify-center mx-auto">
                  <h1 className="text-black text-center  font-[arial] font-semibold text-[20px]">Veuillez Enregistrer les Informations de votre nouveau Partenaires</h1>
               </div>
               <div className=" flex-row items-center h-[80%] w-[100%] mx-auto  justify-center  ">
                     <div className="w-[80%] h-[40%] flex-col  items-center justify-center relative mx-auto  ">

                           <label
                               htmlFor="imageInput"
                               className="relative w-[100%] h-[100%]  bg-transparent border border-white flex items-center justify-center cursor-pointer group"

                           >
                              <input
                                  type="file"
                                  id="imageInput"
                                  name="file"
                                  accept=".jpg, .jpeg, .png "
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
                                 <div className="text-white text-center opacity-100 z-10"> Importer le media </div>
                              </div>
                              {selectedFile  ? (

                                      <img
                                          src={URL.createObjectURL(selectedFile)}
                                          alt="Image sélectionnée"
                                          className="relative h-[100%]  w-[100%]   z-40"
                                      />

                              ) : null}
                           </label>
                           { isSubmit && !values.media ? (
                               <div className="text-[70%] text-red-600 text-center">Veuillez sélectionner un fichier pour ce poste</div>
                           ) : null}


                     </div>
                        <div className="w-[100%] h-[60%] flex flex-col   mx-auto  items-center justify-center ">
                           {input.map((inputs) => (
                               <div className="rounded-md h-[60%] mx-auto  m-2 " key={inputs.id}>
                                  <label className="text-[12px] font-semibold h-[10%] text-black ">{inputs.label}</label>
                                  <div className="relative">
                                     <input
                                         placeholder={inputs.placeholder}
                                         type={inputs.type}
                                         min={inputs.minDate}
                                         max={inputs.maxDate}
                                         name={inputs.name}
                                         className={inputs.className}
                                         onChange={(e) => handleChange(e)}
                                         value={inputs.value}
                                         defaultValue = {inputs.defaultValue}
                                     />
                                     {inputs.img ? (
                                         <img src={inputs.img} alt="" className="absolute right-3 top-[22%] cursor-pointer" width={20} height={20} onClick={() => showChar(inputs.id)} />
                                     ) : null}
                                  </div>
                                  <div>
                                     {/*{ Errors[inputs.name]  ? (<> <div className="text-[75%] text-red-600"> {inputs.error} </div> </> ): null  }*/}
                                     { isSubmit && inputs.error ? (
                                         <div className="text-[70%] text-red-600">{inputs.error}</div>
                                     ) : null}
                                  </div>

                               </div>

                           ))}
                        </div>

               </div>
               <div className=" flex justify-center items-center gap-8  h-[10%] w-[100%]  ">
                  <button className="w-[20%] h-[70%] lg:w-fit bg-blue-500 hover:bg-blue-800 text-white text-center transition duration-300 transform hover:scale-105 px-5 md:px-10 py-1 rounded-md font-normal" onClick={handleSummit}>Enregistrer</button>
                  <button className="w-[20%] h-[70%] lg:w-fit bg-red-500 hover:bg-red-800 text-white transition duration-300 transform hover:scale-105 px-10 py-2 rounded-md font-normal" onClick={comeBack}>Annuler</button>
               </div>
            </div>

         </div>
      </>
   )
}