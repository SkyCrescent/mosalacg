'use client'
import React, {useEffect, useState} from "react";
import Image from "next/image";
import picture from "@/public/picture.png";
import close from '@/public/icons/multiply.png'
import axios from "axios";
import logo from "@/public/113.png";


export default function AddReservationForFormation({NumFormation ,SetFormationReservation,handleClickButton8}){
   const apiUrl = process.env.NEXT_PUBLIC_API_URL ;
   const [Errors,SetErrors] = useState({})
   const [isSubmit,SetIsSubmit] = useState(false)
   const [selectedFile, setSelectedFile] = useState(null);
   const [finish, setFinish] = useState(false);
   const [imposeMail ,setimposeMail] = useState(false);
   const [selectedImage1 , SetselectedImage1] = useState(false)
   const [loading , SetLoading] = useState(false )
   const [Focus ,SetFocus ] = useState(false)
   const [values, setValues] = useState({
      nom: "",
      prenom:"",
      phone:"",
      adresse : "",
      ville:"",
      email:"",
      media:"",
      nomEvents:NumFormation,
      pays:"",
      genre:"",
      proffession : "",
      fonction:""

   });
   const input1 = [
      {
         id: 1,
         name: "nom",
         type: "text",
         placeholder: "Nom",
         value: values.nom,
         label: "Votre Nom ",

         className:
            "text-[9px] md:text-[15px] relative h-[75%] w-[90%]  text-black border  border-gray-400 bg-transparent py-2 px-4 rounded-[5px] focus:outline-none hover:border-green-600 focus:border-green-600",

         error: values.nom === "" ? 'Veuillez indiquer le nom de votre école' : null
      },
      {
         id: 2,
         name: "prenom",
         type: "text",
         placeholder: "Prenom ",
         value: values.prenom,
         label: "Votre Prenom",
         className:
            "text-[9px] md:text-[15px] relative h-[75%] w-[90%]  text-black border  border-gray-400 bg-transparent py-2 px-4 rounded-[5px] focus:outline-none hover:border-green-600 focus:border-green-600",
         error: values.prenom === "" ? 'Veuillez indiquer l\'adresse de votre école' : null
      },
      {
         id: 3,
         name: "phone",
         value: values.phone,
         type: "text",
         placeholder: "Contact",
         label: "Vos contact",
         className:
            "text-[9px] md:text-[15px] relative h-[75%] w-[90%]  text-black border  border-gray-400 bg-transparent py-2 px-4 rounded-[5px] focus:outline-none hover:border-green-600 focus:border-green-600 ",
         error: values.phone === "" ? 'Veuillez renseigner votre numéro de téléphone' : null
      },
      {
         id: 4,
         name: "adresse",
         type: "text",
         placeholder: "adresse",
         value: values.adresse,
         label: "Votre adresse",
         className:
             "text-[9px] md:text-[15px] relative h-[75%] w-[90%]  text-black border  border-gray-400 bg-transparent py-2 px-4 rounded-[5px] focus:outline-none hover:border-green-600 focus:border-green-600 ",
         error: values.adresse === "" ? 'Veuillez indiquer le nom de votre école' : null
      }
      ,
      {
         id: 5,
         name: "ville",
         type: "text",
         placeholder: "ville ",
         value: values.ville,
         label: "Votre ville de residence",
         className:
             "text-[9px] md:text-[15px] relative h-[75%] w-[90%]  text-black border  border-gray-400 bg-transparent py-2 px-4 rounded-[5px] focus:outline-none hover:border-green-600 focus:border-green-600 ",
         error: values.ville === "" ? 'Veuillez indiquer votre prénom' : null
      } ,
      {
         id: 6,
         name: "email",
         type: "text",
         placeholder: "mail",
         value: values.email,
         label: "Votre adresse Mail",
         className:
             "text-[9px] md:text-[15px] relative h-[75%] w-[90%]  text-black border  border-gray-400 bg-transparent py-2 px-4 rounded-[5px] focus:outline-none hover:border-green-600 focus:border-green-600 ",
         error: values.email === "" ? 'Veuillez indiquer votre prénom' : null
      },
      {
         id: 7,
         name: "fonction",
         type: "text",
         placeholder: "Fonction",
         value: values.fonction,
         label: "Votre Fonction",
         className:
             "text-[9px] md:text-[15px] relative h-[75%] w-[90%]  text-black border  border-gray-400 bg-transparent py-2 px-4 rounded-[5px] focus:outline-none hover:border-green-600 focus:border-green-600 ",
         error: values.fonction === "" ? 'Veuillez indiquer votre prénom' : null
      }




   ];
   const input3 = [

      {
         id: 1,
         name: "pays",
         type: "text",
         placeholder: "Pays ",
         value: values.pays,
         label: "Votre Pays de résidence",
         className:
             "text-[9px] md:text-[15px] relative h-[75%] w-[90%]  text-black border  border-gray-400 bg-transparent py-2 px-4 rounded-[5px] focus:outline-none hover:border-green-600 focus:border-green-600 ",

         error: values.pays === "" ? 'Veuillez indiquer votre prénom' : null
      } ,

      {
         id: 2,
         name: "genre",
         type: "select",
         placeholder: "sexe",
         value: values.genre,
         label: "Votre Genre",
         className:
             "text-[9px] md:text-[15px] relative h-[75%] w-[90%] cursor-pointer text-black border  border-gray-400 bg-transparent py-2 px-4 rounded-[5px] focus:outline-none hover:border-green-600 focus:border-green-600 ",

         options: [
            { value: 0, text: "" },
            { value: "Masculin", text: "Masculin"},
            { value: "Feminin", text: "Féminin" },
         ],
         error: values.genre === "" ? 'Veuillez indiquer le nom de votre école' : null
      },
      {
         id: 3,
         name: "proffession",
         type: "text",
         placeholder: "Proffesion",
         value: values.proffession,
         label: "Votre Proffesion",
         className:
             "text-[9px] md:text-[15px] relative h-[75%] w-[90%]  text-black border  border-gray-400 bg-transparent py-2 px-4 rounded-[5px] focus:outline-none hover:border-green-600 focus:border-green-600 ",

         error: values.proffession === "" ? 'Veuillez indiquer votre prénom' : null
      }
   ];

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
            SetselectedImage1(true);
            console.log("Fichier sélectionné :", selectedFile1.name);

            try {
               const formData = new FormData();
               formData.append('file', selectedFile1);
               // Envoi de la requête POST avec Axios vers le serveur
               const response = await axios.post('/../../pages/api/', formData, {
                  headers: {
                     'Content-Type': 'multipart/form-data'
                  }
               });
               console.log('File uploaded successfully:', response.data);
               // Mise à jour de la valeur media avec le chemin du fichier
               setValues((prevValues) => ({
                  ...prevValues,
                  media: `media/concerned/${selectedFile1.name}`,
               }));
               //setSelectedFile2(selectedFile1.type)
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
         }));
         SetselectedImage1(false);
         console.log("Aucun fichier sélectionné");
      }
   };
   //Les champs
   const handleChange = (e) => {
      const { name, value } = e.target;
      let formattedValue = '';
      let cleanedValue = '';
      let cleanedAddress = '';
      if (name === 'phone') {
         if (value === '') {
            // Si le champ est vide, réinitialiser les valeurs
            setValues({ ...values, [name]: '' });
         } else {
            // Supprimer tous les caractères non numériques
            const cleaned = value.replace(/\D/g, '');
            // Ajouter les deux premiers chiffres (06)
            formattedValue += cleaned.substring(0, 2) + '/';
            // Ajouter le groupe de trois chiffres suivant (650)
            formattedValue += cleaned.substring(2, 5) + '/';
            // Ajouter les deux derniers chiffres (07)
            formattedValue += cleaned.substring(5, 7) + '/';
            // Ajouter les deux derniers chiffres (97)
            formattedValue += cleaned.substring(7, 9);
            // Mettre à jour l'état avec la valeur formatée
            setValues({ ...values, [name]: formattedValue });
         }
      }else if (name === 'adresse') {

         // Supprimer les caractères spéciaux pour l'adresse
         cleanedAddress = value.replace(/[^\w\s]/gi, '');
         cleanedAddress = value.replace(/\b\w/g, char => char.toUpperCase());
         // Mettre à jour l'état avec l'adresse nettoyée
         setValues({ ...values, [name]: cleanedAddress });
      }else if (name === 'nom'  ) {
         // Supprimer les caractères spéciaux sauf les espaces et les tirets pour le nom de l'école
         cleanedValue = value.replace(/[^a-zA-Z\s-]/g, '');
         cleanedValue = cleanedValue.replace(/\b\w/g, char => char.toUpperCase());

         // Mettre à jour l'état avec le nom de l'école nettoyé
         setValues({ ...values, [name]: cleanedValue });
      }else if (name === 'prenom'  ) {
         // Supprimer les caractères spéciaux sauf les espaces et les tirets pour le nom de l'école
         cleanedValue = value.replace(/[^a-zA-Z\s-]/g, '');
         cleanedValue = cleanedValue.replace(/\b\w/g, char => char.toUpperCase());

         // Mettre à jour l'état avec le nom de l'école nettoyé
         setValues({ ...values, [name]: cleanedValue });
      }

      else if (name === 'pays'  ) {
         // Supprimer les caractères spéciaux sauf les espaces et les tirets pour le nom de l'école
         cleanedValue = value.replace(/[^a-zA-Z\s-]/g, '');
         cleanedValue = cleanedValue.replace(/\b\w/g, char => char.toUpperCase());

         // Mettre à jour l'état avec le nom de l'école nettoyé
         setValues({ ...values, [name]: cleanedValue });
      }


      else if (name === 'proffession'  ) {
         // Supprimer les caractères spéciaux sauf les espaces et les tirets pour le nom de l'école
         cleanedValue = value.replace(/[^a-zA-Z\s-]/g, '');
         // cleanedValue = cleanedValue.replace(/\b\w/g, char => char.toUpperCase());

         // Mettre à jour l'état avec le nom de l'école nettoyé
         setValues({ ...values, [name]: cleanedValue });
      }


      else if (name === 'fonction'  ) {
         // Supprimer les caractères spéciaux sauf les espaces et les tirets pour le nom de l'école
         cleanedValue = value.replace(/[^a-zA-Z\s-]/g, '');
         // cleanedValue = cleanedValue.replace(/\b\w/g, char => char.toUpperCase());

         // Mettre à jour l'état avec le nom de l'école nettoyé
         setValues({ ...values, [name]: cleanedValue });
      }
      else {
         // Pour les autres champs, mettre à jour simplement la valeur sans formatage
         setValues({ ...values, [name]: value });
      }
   };

   const handleChange2 = (e) => {
      const { name, value } = e.target;
      let formattedValue = '';
      let cleanedValue = '';
      let cleanedAddress = '';

      if (name === 'adresse') {

         // Supprimer les caractères spéciaux pour l'adresse
         cleanedAddress = value.replace(/[^\w\s]/gi, '');
         cleanedAddress = cleanedAddress.replace(/\b\w/g, char => char.toUpperCase());
         // Mettre à jour l'état avec l'adresse nettoyée
         setValues({ ...values, [name]: cleanedAddress });
      }else if (name === 'ville'  ) {
         // Supprimer les caractères spéciaux sauf les espaces et les tirets pour le nom de l'école
         cleanedValue = value.replace(/[^a-zA-Z\s-]/g, '');
         //cleanedValue = cleanedValue.replace(/\b\w/g, char => char.toUpperCase());

         // Mettre à jour l'état avec le nom de l'école nettoyé
         setValues({ ...values, [name]: cleanedValue });
      }else if (name === 'email'  ) {
         // Supprimer les caractères spéciaux pour l'adresse
        // cleanedAddress = value.replace(/[^\w\s]/gi, '');
         cleanedAddress = value.replace(/[^\w@.\-]/g, '');
         // Mettre à jour l'état avec l'email nettoyé
         setValues({ ...values, [name]: cleanedAddress });
      } else {
         // Pour les autres champs, mettre à jour simplement la valeur sans formatage
         setValues({ ...values, [name]: value });

      }
   };

   //Les champs de l'eleve 1

   useEffect(() => {
      console.log("recteur",values);
      // console.log(study1);
   }, [()=>{handleChange()}]);


   const addData = async () => {

      try {
         // Vérifiez que tous les champs requis sont remplis
         if (values.nom && values.adresse && values.phone && values.media) {
            const formData = new FormData();
            formData.append('nom', values.nom);
            formData.append('prenom', values.prenom);
            formData.append('contact', values.phone);
            formData.append('adresse', values.adresse);
            formData.append('ville', values.ville);
            formData.append('email', values.email);
            formData.append('photo', values.media);
            formData.append('id_formation', values.nomEvents);
            formData.append('pays', values.pays);
            formData.append('genre', values.genre);
            formData.append('profession', values.proffession);
            formData.append('fonction', values.fonction);
            const response = await axios.post(`${apiUrl}/Concerned/add_interesseFormation.php`, formData, {
               headers: {
                  'Content-Type': 'multipart/form-data',
               },
            });
            setFinish(true)
            console.log("Truc ajouté avec succès ", response);
            handleClickButton8()
            SetFormationReservation(false)

            setValues({
               nom: "",
               prenom:"",
               phone:"",
               adresse : "",
               ville:"",
               email:"",
               media:"",
               nomEvents:"",
               pays:"",
               genre:"",
               proffession : "",
               fonction:""

            });
         }
         // Reset form fields after successful submission

      } catch (error) {
         console.error(error);
      }
   };


   const handleSummit = () => {
      SetIsSubmit(true);
      const valuesNotEmpty = Object.values(values).every(value => value !== "");

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/ ;
      //verification de la presence de @ et dun nom de domainde valide
       //   if (values.email &&  !values.email.includes("@")) {
        if (values.email && ! emailRegex.test(values.email)){
               setimposeMail(true)

               console.log("Veuillez .");
            } else if (valuesNotEmpty) {
           setimposeMail(false)
                     addData();
            } else {
           setimposeMail(false)
               console.log("Veuillez remplir tous les champs avant de soumettre le formulaire.");
            }
   };


   setTimeout(()=>{
      // SetAlldisplay(false)
      SetLoading (true)
   },80)

   useEffect(() => {
      console.log(NumFormation)
   }, []);

   return(


      <>


         <div
            className={`fixed top-0 left-0 z-30 bg-black/70 w-screen h-screen overflow-y-auto transition duration-300 ease-in-out`}

         >
            <div className="w-full h-[83%]  flex justify-center my-8 md:my-96 lg:my-10">
               <div
                  className={` relative  flex justify-evenly h-[100%] w-[98%] md:w-[80%] bg-white border border-black/70  shadow   ${loading ? 'scale-x-100 scale-y-100 opacity-100' : 'scale-x-0 scale-y-0 opacity-0'}  transition duration-500    `}>

                  <div
                     className=" absolute -right-2 top-2 h-[4%] md:h-[11%] w-[8%] md:w-[6%] items-center justify-center ">
                     <img
                        src={close.src}
                        alt="Image sélectionnée"
                        className="relative h-[60%] cursor-pointer mx-auto w-[60%] z-40"
                        onClick={() => {
                           SetFormationReservation(false)
                        }}
                     />
                  </div>


                  <div
                      className="flex  m-1  justify-between  md:top-0   rounded-md   mx-auto w-[80%] md:w-[100%] h-[99%]    ">


                        <img
                            src={logo.src}
                            alt={`Logo `}
                            width="190"
                            height="190"
                            className="  relative  h-[100%] w-[3%] rounded "
                        />

                     {/*Partie ecrit et bouton*/}
                     <div
                         className="relative h-[100%] w-[30%] hidden md:block  z-20  font-bold text-2xl  flex  uppercase">
                        <div
                            className="   relative items-center justify-center h-[70%] w-[100%]  flex-col md:flex-row top-16 -left-4 cursor-default  ">
                           <div
                               className="relative h-auto w-[100%]  font-[Gotham] uppercase  text-lg md:text-3xl lg:text-5xl  text-blue-500 ">

                              <span className="text-black lg:text-[55px]  font-[Poppins] "> Formulaire</span>
                              <br></br>
                              <span className="text-green-500 lg:text-[50px]">de </span>
                              <br></br>
                              <span className="text-green-700  lg:text-[40px]">reservation</span>
                              <br></br>
                              <br></br>

                              <span
                                  className="absolute font-extralight  normal-case  w-[200%] text-black lg:text-[13px]">Remplissez s'il vous plait toute les informations demandée afin  </span>

                              <span
                                  className="relative font-extralight -top-1 normal-case  w-[200%] text-black lg:text-[13px]">de vous reserver un place a cette évenement .</span>
                           </div>
                        </div>


                        <div
                            className="relative w-[100%] h-[20%] md:h-[30%] flex-col  text-sm items-center -left-4 -top-24 flex md:justify-evenly ">
                        <button
                               className="relative  md:w-[90%] lg:w-[80%] h-[80%] md:h-[60%] lg:h-[30%] bg-sky-700 hover:bg-green-800 text-white text-center transition duration-300 transform hover:scale-105 px-4 py-2 rounded-md font-normal"
                               onClick={handleSummit}>
                              Confirmer ma reservation
                           </button>





                           {
                              imposeMail ? (<span className='text-red-600'>Ce mail n'est pas conforme</span>)  : null
                           }

                        </div>


                     </div>


                     {/*debut du formulaire*/}

                     <div
                         className="md:w-[62%] h-[100%] p-4 flex justify-between    items-center   ">

                        <div
                            className=" w-[50%] md:w-[55%]    h-[100%] flex-row  space-y-20    ">

                           <div
                               className=" w-[50%] md:w-[100%] h-[40%]  flex items-center justify-center  ">
                              <div className="flex-col  items-center justify-center relative w-[105%] h-[110%]  ">
                                 <label
                                     htmlFor="imageInput"
                                     className={isSubmit && !selectedImage1 ?
                                         "relative w-[100%] md:w-[30%] lg:w-[80%] h-[98%] md:h-[70%] lg:h-[108%] mx-auto md:mt-8 lg:mt-3 top bg-transparent border border-red-500 hover:border-red-500 rounded-full flex items-center justify-center cursor-pointer group"
                                 :
                                         "relative w-[100%] md:w-[30%] lg:w-[80%] h-[98%] md:h-[70%] lg:h-[108%] mx-auto md:mt-8 lg:mt-3 top bg-transparent border border-black/40 hover:border-green-600 rounded-full flex items-center justify-center cursor-pointer group"}

                                 >
                                    <input
                                        type="file"
                                        id="imageInput"
                                        name="file"
                                        accept=".jpg, .jpeg, .png"
                                        className="sr-only"
                                        onChange={handleFileChange}

                                    />
                                    <div
                                        className={selectedFile ? "hidden" : "relative h-[100%] inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"}>
                                       <Image
                                           src={picture.src}
                                           alt={`Logo `}
                                           width="600"
                                           height="600"
                                           className="object-contain object-center w-8 h-8 text-gray-600  "
                                       />
                                       <div
                                           className="text-black text-xs font-normal rounded text-center opacity-100 z-10"> Importer
                                          votre photo
                                       </div>
                                    </div>
                                    {selectedFile && (
                                        <img
                                            src={URL.createObjectURL(selectedFile)}
                                            alt="Image sélectionnée"
                                            className="relative h-[100%]  w-[100%]  rounded-full   z-40"
                                        />
                                    )}
                                 </label>

                              </div>
                           </div>

                           <div
                               className="relative   top-3 w-[50%] md:w-[100%]     h-[45%] flex-row items-center justify-center  -space-y-11 ">
                              {input3.map((item) => (
                                  <div key={item.id}
                                       className="items-center relative h-[40%] lg:h-[50%] w-[100%]  ">

                                     {item.type === 'select' ? (

                                             <div className=" relative h-[50%] w-[100%] cursor-pointer  ">


                                                <select
                                                    key={item.id}
                                                    onFocus={() => SetFocus(true)}
                                                    onBlur={() => SetFocus(false)}
                                                    className={isSubmit && item.error ?
                                                        "text-[9px] md:text-[15px] relative h-[75%] w-[90%]  text-black border  border-red-500 bg-transparent py-2 px-4 rounded-[5px] focus:outline-none hover:border-sky-500 focus:border-sky-500"
                                                       : item.className}
                                                    name={item.name}
                                                    onChange={handleChange /* Remplacez cela par votre logique */}
                                                    value={values.genre || ""}
                                                >

                                                   {input3[1].options.map((option) => (
                                                       <option
                                                           key={option.value}
                                                           value={option.text}
                                                       >
                                                          <div className="flex items-center text-center mx-auto">
                                                             {option.text}
                                                          </div>
                                                       </option>
                                                   ))}

                                                </select>
                                                <label
                                                    className={(Focus || values.nom || values.prenom || values.phone || values.adresse || values.ville || values.email || values.media || values.pays || values.genre || values.proffession || values.fonction) ? "absolute left-1   top-7 text-[9px] md:text-[13px]   font-extralight  h-[30%] w-[90%] text-green-800 -translate-y-12 duration-300" : "absolute tracking-wide  pointer-events-none duration-300 left-0 top-3    px-6   text-[9px] md:text-[14px]     h-[30%] w-[100%] text-black "}>
                                                   {item.label}
                                                </label>

                                             </div>
                                         ) :
                                         (
                                             <div className="rounded-md  mx-auto relative h-[90%] w-[100%]"
                                                  key={item.id}>
                                                <div className=" relative h-[58%] w-[100%]   ">
                                                   <input
                                                       name={item.name}
                                                       onFocus={() => SetFocus(true)}
                                                       onBlur={() => SetFocus(false)}
                                                       className={isSubmit && item.error ?
                                                           "text-[9px] md:text-[15px] relative h-[75%] w-[90%]  text-black border  border-red-500 bg-transparent py-2 px-4 rounded-[5px] focus:outline-none hover:border-sky-500 focus:border-sky-500"
                                                          : item.className}
                                                       type={item.type}
                                                       onChange={(e) => handleChange(e)}
                                                       value={item.value}
                                                   />
                                                   <label
                                                       className={(Focus || values.nom || values.prenom || values.phone || values.adresse || values.ville || values.email || values.media || values.pays || values.genre || values.proffession || values.fonction) ? "absolute left-1   top-7 text-[9px] md:text-[13px]   font-extralight  h-[30%] w-[90%] text-green-800 -translate-y-12 duration-300" : "absolute tracking-wide  pointer-events-none duration-300 left-0 top-3    px-6   text-[9px] md:text-[14px]     h-[30%] w-[100%] text-black "}>
                                                      {item.label}
                                                   </label>
                                                </div>
                                                <div>
                                                </div>
                                             </div>
                                         )}
                                  </div>
                              ))}
                           </div>


                        </div>


                        <div
                            className="relative top-3 w-[50%] md:w-[55%]   h-[100%] flex-row items-center justify-center  -space-y-12 ">


                           {input1.map((item) => (
                               <div key={item.id} className="items-center relative h-[40%] lg:h-[23%] w-[100%]  ">
                                  {
                                     <div className="rounded-md  mx-auto relative h-[90%] w-[100%]" key={item.id}>

                                        <div className=" relative h-[60%] w-[100%]   ">
                                           <input
                                               // placeholder={item.placeholder}
                                               name={item.name}
                                               onFocus={() => SetFocus(true)}
                                               onBlur={() => SetFocus(false)}
                                               className={isSubmit && item.error ?    "text-[9px] md:text-[15px] relative h-[75%] w-[90%]  text-black border  border-red-500 bg-transparent py-2 px-4 rounded-[5px] focus:outline-none hover:border-sky-500 focus:border-sky-500"

                                                  : item.className}
                                               type={item.type}
                                               onChange={(e) => handleChange(e)}
                                               value={item.value}
                                           />

                                           <label
                                               className={(Focus || values.nom || values.prenom || values.phone || values.adresse || values.ville || values.email || values.media || values.pays || values.genre || values.proffession || values.fonction) ?

                                                   "absolute left-1   top-7 text-[9px] md:text-[13px]   font-extralight  h-[30%] w-[90%] text-green-800 -translate-y-12 duration-300" : "absolute tracking-wide  pointer-events-none duration-300 left-0 top-3    px-6   text-[9px] md:text-[14px]     h-[30%] w-[100%] text-black "}>

                                              {item.label}
                                           </label>

                                        </div>
                                        <div>
                                        </div>

                                     </div>
                                  }
                               </div>
                           ))}


                        </div>


                     </div>


                     <div
                         className="relative block md:hidden w-[100%] h-[20%] md:h-[30%] text-sm items-center left-10 -top-10 flex md:justify-evenly ">
                        <button
                            className="relative  md:w-[90%] lg:w-[80%] h-[40%] md:h-[60%] lg:h-[30%] bg-sky-700 hover:bg-green-800 text-white text-center transition duration-300 transform hover:scale-105 px-4 py-2 rounded-md font-normal"
                            onClick={handleSummit}>
                           Confirmer ma reservation
                        </button>


                     </div>


                  </div>


               </div>

            </div>

         </div>


      </>
   )
}