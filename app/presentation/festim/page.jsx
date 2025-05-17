'use client'
import Image from "next/image";
import Link from "next/link";
import '@/styles/animation.css'
import React, {useEffect, useState} from "react";
import Pied from "@/components/Pied";
import axios from "axios";
import {useRouter} from "next/navigation";
import AddReservation from "@/components/AddReservation";
import AddReservationForFormation from "@/components/AddReservationForFormation";
import Notifications from "@/components/Notifications";
export default function page(){
   const apiUrl = process.env.NEXT_PUBLIC_API_URL ;
   const [number , SetNumber] = useState(0)
   const [number3 , SetNumber3] = useState(0)

   const [loading , SetLoading ] = useState(false)
   const [loading2 , SetLoading2 ] = useState(false)
   const [filteredData, setFilteredData] = useState([]); // Initialize with all dat
   const [filteredData2, setFilteredData2] = useState([]); // Initialize with all dat

   const router = useRouter();
   const [ formattedDate2 ,SetformattedDate] = useState('')
   const [ Reservation, SetReservation ] = useState(false)
   const [NumReservation ,SetnumReservation] = useState(0)

   const [ FormationReservation, SetFormationReservation ] = useState(false)
   const [NumFormation ,SetnumFormation] = useState(0)

   const item = [
      {
         "id": 1,
         "nom": "Olympic Palace Hotel",
         "photo": "logoOlympic.png",

      },
      {
         "id": 2,
         "nom": "Société Nationale des Pétroles du Congo",
         "photo": "Sans titre (2).webp",

      },
      {
         "id": 3,
         "nom": "Direction Générale des Petites et Moyennes Entreprises",
         "photo": "logo-dgpme2.png",

      },
      {
         "id": 4,
         "nom": "Fonds d'implusion de garantie et d'accompagnement",
         "photo": "figa.png",

      },
      {
         "id": 5,
         "nom": "Agence congolaise pour la création des entreprises",
         "photo": "arpce.png",

      },
      {
         "id": 6,
         "nom": "UNI-CONGO",
         "photo": "UNICONGO-ATIBT-MEMBER.png",

      },
      {
         "id": 7,
         "nom": "Agence de dévellopement des Petites et Moyennes Entreprises",
         "photo": "pme.png",

      },
      {
         "id": 8,
         "nom": "Agence congolaise de l'artisanat",
         "photo": "artisanat.png",

      },
   ]
  let number2 =0
   const [ ShowNotifications , SetNotifications] = useState(false)    // constante pour afficher et cacher les notifications
   const [valueNotification, setValueNotification] = useState(false); //constante qui permettra d'actualise la page de workspace
   const updateValueNotifications = (newValue2) => {
      setValueNotification(newValue2);
   };


   const handleClickButton8 = () => {
      SetNotifications(true)
   };

   const [scrollIndex, setScrollIndex] = useState(0);
   const itemWidth = 21; // Adjust this value based on your item width and gap

   useEffect(() => {
      const interval = setInterval(() => {
         setScrollIndex((prevIndex) => (prevIndex + 1) % filteredData.length);
      }, 3000); // Change the delay to suit your needs
      // ca fait bouger les element avec un distance de 21 et une intervalle de 3000 donc 3 secondes
      //le styles fait bouge les image via animate scrool
      return () => clearInterval(interval);
   }, [filteredData.length]);





   const [scrollIndex2, setScrollIndex2] = useState(0);
   const itemWidth2 = 21; // Adjust this value based on your item width and gap

   useEffect(() => {
      const interval2 = setInterval(() => {
         setScrollIndex2((prevIndex) => (prevIndex + 1) % item.length);
      }, 3000); // Change the delay to suit your needs
      // ca fait bouger les element avec un distance de 21 et une intervalle de 3000 donc 3 secondes
      //le styles fait bouge les image via animate scrool
      return () => clearInterval(interval2);
   }, [item.length]);





   const [scrollIndex3, setScrollIndex3] = useState(0);
   const itemWidth3 = 21; // Adjust this value based on your item width and gap

   useEffect(() => {
      const interval3 = setInterval(() => {
         setScrollIndex3((prevIndex) => (prevIndex + 1) % filteredData2.length);
      }, 3000); // Change the delay to suit your needs
      // ca fait bouger les element avec un distance de 21 et une intervalle de 3000 donc 3 secondes
      //le styles fait bouge les image via animate scrool
      return () => clearInterval(interval3);
   }, [filteredData2.length]);




   const getData = async () => {
      try {
         // Remplacez l'URL par la bonne URL de votre API

         const response = await axios.get(`${apiUrl}/evenements/get_allEvent.php`);
         // const response = await axios.get(`${apiUrl}/evenements/get_allEvent.php`);

         console.log(response.data && response.data.recu && response.data.recu.length > 0)
         if (response.data && response.data.recu && response.data.recu.length > 0) {
            // Vérifiez que la réponse contient les données attendues
            console.log("la jointure",response.data.recu)
            setFilteredData(response.data.recu)
            console.log(response.data.recu.length)
            SetNumber(response.data.recu.length)
            number2 = response.data.recu.length
            console.log(number)
            console.log(number2)
            SetLoading(true)
         } else {
            console.log("La réponse de l'API est incorrecte ou ne contient pas de données.",response);
         }
      } catch (error) {
         console.error("Une erreur s'est produite lors de la récupération des données de l'API : ", error);
      }
   };

   const getData3 = async () => {
      try {
         // Remplacez l'URL par la bonne URL de votre API
         const response = await axios.get(`${apiUrl}/formation/get_allFormation.php`);
         // console.log(response.data && response.data.recu && response.data.recu.length > 0)
         if (response.data && response.data.recu && response.data.recu.length > 0) {
            // Vérifiez que la réponse contient les données attendues
            console.log("la jointure",response.data.recu)
            setFilteredData2(response.data.recu)
            SetNumber3(response.data.recu.length)
            SetLoading(true)
         } else {
            console.log("La réponse de l'API est incorrecte ou ne contient pas de données.",response);
         }
      } catch (error) {
         console.error("Une erreur s'est produite lors de la récupération des données de l'API : ", error);
      }
   };

   useEffect(() => {

     const getData2 = async () => {
         try {
            // Remplacez l'URL par la bonne URL de votre API
            const response = await axios.get(`${apiUrl}/evenements/get_allEvent.php`);

            // Assurez-vous que la réponse est au format JSON
            const data = JSON.parse(response.data);
console.log(data)
            // Vérifiez que la réponse contient les données attendues
            if (data && data.recu && Array.isArray(data.recu) && data.recu.length > 0) {
               console.log("la jointure", response);
               setFilteredData(data.recu);
               SetNumber(data.recu.length);
               console.log(number);
               SetLoading(true);
            } else {
               console.log("La réponse de l'API est incorrecte ou ne contient pas de données.", response);
            }
         } catch (error) {
            console.error("Une erreur s'est produite lors de la récupération des données de l'API : ", error);
         }
      };

      getData()
      getData2()
      getData3()

      //  console.log("ddd",MyId)
   }, []);


   function formatDate(apiDate) {
      // Séparer la date en année, mois et jour
      const [year, month, day] = apiDate.split('-').map(Number);

      // Utiliser new Date(year, monthIndex, day) pour construire une date
      const months = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
      const monthName = months[month - 1]; // Les mois commencent à 0 dans Date

      // Formater la date selon le format souhaité
      const formattedDate = `${day} ${monthName} ${year}`;

      return formattedDate;
   }
   const GoToUpdate = async (id,nom,photo) => {
      const encryptedData = btoa(id);
      const encryptedData2 = btoa(nom);


      router.push(`../../seeEvents?utytrcd=${encodeURIComponent(encryptedData)}&utyy=${encodeURIComponent(encryptedData2)} `);

   }


   const GotoAdd = async (nom) =>{
      // const encryptedData3 = btoa(id);
      // router.push(`/presentation/concerned?bal=${encodeURIComponent(encryptedData3)}`);

SetnumReservation(nom)
      SetReservation(true)
   }


   const GotoAdd2 = async (nom) =>{
      // const encryptedData3 = btoa(id);
      // router.push(`/presentation/concerned?bal=${encodeURIComponent(encryptedData3)}`);

      SetnumFormation(nom)
      SetFormationReservation(true)
   }

   const getDate = () => {
      const currentDate = new Date();
      const year = currentDate.getFullYear();
      let month = currentDate.getMonth() + 1;
      let day = currentDate.getDate();

      // Ajouter un zéro devant le mois et le jour si nécessaire pour obtenir le format "YYYY-MM-DD"
      month = month < 10 ? '0' + month : month;
      day = day < 10 ? '0' + day : day;

      const formattedDate = `${year}-${month}-${day}`;
      SetformattedDate(formattedDate);
      console.log(formattedDate);
   };


   useEffect(() => {
      getDate()
      SetLoading2(true)
   }, []);
   useEffect(() => {
      console.log(formattedDate2)
   }, [getDate]);

   return(
      <>

         <div className="relative h-screen w-[100%] bg-white/80 overflow-y-auto  scrollbar-hidden">

            <nav
               className="relative w-[100%] md:w-full h-[8%] md:h-[10%] lg:h-[16%] flex items-center    justify-evenly    text-md  decoration-amber-500 shadow-xl ">
               <div
                  className="hidden  relative w-[30%] md:w-[10%]  lg:w-[30%] h-[100%] lg:flex  md:mx-12 lg:-mx-4">
                  <div className="relative h-[100%] bg-green-900  top-0 w-[4%] md:w-[8%] lg:w-[6%] ">

                  </div>
                  <div
                     className="relative h-[100%]   mx-8 md:mx-6 lg:mx-0  -top-6 md:-top-0 lg:top-0 lg:p-0.5 w-[50%] md:w-[800%] lg:w-[50%] ">
                     <img
                        src={logo2.src}
                        alt={`Logo `}
                        width="1010"
                        height="1040"
                        className=" object-center  relative w-full h-full  "
                     />
                  </div>

               </div>


               <div
                  className=" relative w-[90%] mx-auto  md:w-[100%] lg:w-[80%] flex flex-col font-normal md:font-bold md:mx-1  ">
                  <div className="hidden md:block">
                     <ul
                        className="   lg:px-1 m-8 md:m-3 lg:m-8 flex justify-between items-center text-blue-900 flex-row gap-6 md:gap-6 lg:gap-6 ">
                        <li className="hover:text-blue-500 " id="barAnime"><Link href="/"> Acceuil</Link></li>
                        <li className="hover:text-blue-500 " id="barAnime"><Link href="#">Presentation
                           de l'Edition 2024</Link></li>

                        <li className="hover:text-blue-500"><Link href="/presentation/concept">Concepts
                           developpés</Link></li>
                        <li className="hover:text-blue-500 "><Link href="/presentation/news">Actualités</Link></li>
                        <a href="https://youtube.com/@festimafriquemedia?si=yi5piDJVHjMxckDC"
                           className="hover:text-blue-500 ">Festim Afrique Media</a>

                     </ul>
                  </div>
                  <div
                     className=" md:hidden   relative h-24 w-[100%] mx-auto  flex justify-between items-center text-blue-900 flex-row gap-6">
                     <img
                        src={house.src}
                        alt={`Logo `}
                        width="28"
                        height="28"
                        className=" object-center   "
                        onClick={() => {
                           router.push(`/`);
                        }}
                     />
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
                        src={concept.src}
                        alt={`Logo `}
                        width="28"
                        height="28"
                        className=" object-center   "
                        onClick={() => {
                           router.push(`/presentation/concept`);
                        }}
                     />
                     <img
                        src={contact.src}
                        alt={`Logo `}
                        width="28"
                        height="28"
                        className=" object-center   "
                        onClick={() => {
                           router.push(`/presentation/news`);
                        }}
                     />
                     <img
                        src={youtube.src}
                        alt={`Logo `}
                        width="28"
                        height="28"
                        className=" object-center   "
                        onClick={() => {
                           router.push(`https://youtube.com/@festimafriquemedia?si=yi5piDJVHjMxckDC`);
                        }}
                     />
                  </div>

               </div>

            </nav>


            {/*<div className="relative w-full h-[54%] md:h-[55%] lg:h-[84%]   ">*/}
            {/* */}
            <div
                className="relative    h-auto w-[100%] md:w-[95%] mx-auto   ">

               <div
                   className="relative w-[90%] md:w-[80%] h-auto mx-auto  space-y-1 items-center justify-center">
                  <div
                      className="relative  w-[100%] md:w-[90%] lg:w-[60%] text-center h-12 md:h-12 lg:h-8 mx-auto bg-red-800 md:font-black text-white  flex items-center justify-center mt-9">
                     PRESENTATION DE FESTIM AFRIQUE POOL MALEBO
                  </div>
                  <div
                      className="relative w-[100%] md:w-[90%] lg:w-[50%] h-12 md:h-8 mx-auto bg-red-800 md:font-black text-white  flex items-center justify-center">
                     (BRAZZAVILLE - KINSHASA EDITION 2024)
                  </div>


                  <div
                      className=" text-xs md:text-lg lg:text-xs md:pt-2 lg:mt-0 leading-tight text-center font-[Poppins] relative w-auto mx-auto">Du
                     Mercredi 06 au Samedi 09 Novembre 2024 à Brazzaville en République du Congo
                  </div>

                  <div
                      className=" text-xs md:text-lg lg:text-xs  leading-tight text-center font-[Poppins] relative w-auto  mx-auto">
                     Du
                     Mardi 12 au Mercredi 13 Novembre 2024 à Kinshasa en République Démocratique du Congo
                  </div>
               </div>

               {/*  2e bloc    */}


               <div
                   className="relative -top-6 w-[95%] md:w-[90%] lg:w-[60%] h-56 md:h-[65%] lg:h-80 mx-auto md:-mx-1 lg:mx-auto  mt-10 flex justify-center md:justify-center ">


                  <div className="w-[30%] h-[100%] md:h-[99%]  ">
                     <div className=" w-[80%] md:w-[100%]  h-[50%]  md:h-[70%] ">
                        <img
                            className=" object-center mx-3 md:mx-9 "
                            src={z.src}
                            height={190}
                            width={210}
                            alt="Nfc"
                        />
                     </div>
                     <div
                         className="w-[100%] text-xs md:text-sm h-[50%] md:h-[48%] lg:mx-8  lg:h-[20%] md:space-y-4 lg:space-y-3 flex flex-col">
                        <div
                            className="w-[100%]  md:w-[150%]  lg:w-[200%] lg:-mx-24   text-center font-bold text-xs md:text-2xl lg:text-lg items center h-[50%]  ">
                           Madame la Ministre Jacqueline Lydia MIKOLO
                        </div>

                        <div className="w-[200%] -mx-16  lg:mx-0 lg:w-[100%] italic text-center h-[70%] ">
                           Ministre des Petites de Moyennes Entreprises et de l'Artisanat
                        </div>
                        <div className="relative   w-[230%] lg:w-[200%] italic text-center h-[70%] -mx-20 lg:-mx-24 ">
                           Presidente de la Conférence Internationale sur l'importance de L'Entreprenariat des Jeunes en
                           Afrique de <span className="font-bold">FESTIM AFRIQUE</span>
                        </div>
                     </div>
                  </div>

               </div>


               <div
                   className="relative -top-0 w-[95%] md:w-[90%] lg:w-[90%] h-56 md:h-[65%] lg:h-[50%] mx-auto md:-mx-1 lg:mx-auto  mt-10 flex justify-between md:justify-between ">


                  <div className="w-[30%] h-[100%] md:h-[99%]  ">
                     <div className=" w-[80%] md:w-[100%]  h-[50%]  md:h-[70%] ">
                        <img
                            className=" object-center mx-3 md:mx-9 -skew-x-12"
                            src={g.src}
                            height={190}
                            width={210}
                            alt="Nfc"
                        />
                     </div>
                     <div className="w-[100%] text-xs md:text-sm h-[50%] md:h-[48%] lg:-mx-6  lg:h-[20%] md:space-y-1">
                        <div
                            className="w-[100%] text-center font-bold text-xs md:text-2xl lg:text-lg items center h-[30%] ">
                           Monsieur Serge PEREIRA
                        </div>
                        <div className="w-[100%] italic text-center h-[70%] ">
                           Parrain, President du Conseil Excecutif de <span className="font-bold">FESTIM AFRIQUE</span>
                        </div>
                     </div>
                  </div>


                  <div className="w-[30%] h-[100%] md:h-[99%] ">
                     <div className=" w-[90%] md:w-[100%]  h-[50%]  md:h-[70%]">
                        <img
                            className=" object-center -my-0.5 md:mx-9 skew-x-6"
                            src={a.src}
                            height={240}
                            width={240}
                            alt="Nfc"
                        />
                     </div>
                     <div
                         className="w-[100%] text-xs md:text-sm h-[51%]  md:h-[48%] md:mx-8 lg:mx-0 lg:h-[20%] md:space-y-1">
                        <div
                            className="w-[100%] text-center font-bold text-xs md:text-2xl lg:text-lg items center h-[30%] ">
                           Monsieur Rudy Stephen
                        </div>
                        <div className="w-[100%] italic text-center h-[70%] ">
                           Directeur Generale des PME,1er Vice Président du Comite de Pilotage de <span
                            className="font-bold">FESTIM AFRIQUE</span>
                        </div>
                     </div>
                  </div>


                  <div className="w-[30%] h-[100%] md:h-[99%] ">
                     <div className="w-[90%] md:w-[100%]  h-[50%]  md:h-[70%] ">
                        <img
                            className=" object-center md:mx-14 lg:mx-20 -skew-x-12"
                            src={d.src}
                            height={120}
                            width={235}
                            alt="Nfc"
                        />
                     </div>
                     <div
                         className="w-[100%] text-xs md:text-sm h-[51%] md:h-[48%] lg:mx-6 lg:h-[20%] md:space-y-1 lg:space-y-0">
                        <div
                            className="w-[100%] md:w-[136%] lg:w-[100%] text-center font-bold text-xs md:text-2xl lg:text-lg items center h-[30%]  ">
                           Monsieur Claudio Benedict SAMA KENEGUI
                        </div>
                        <div className="w-[100%] mt-6 md:mt-0 md:mx-8 lg:mx-0   italic text-center h-[70%] ">
                           President International de <span className="font-bold">FESTIM AFRIQUE</span>
                        </div>
                     </div>
                  </div>

                  <div className="hidden md:block w-[30%] h-[50%] md:h-[99%] -mx-12 md:mx-0 -mt-2 lg:-mt-6  ">
                     <img
                         className=" absolute h-[60%] lg:h-[122%] "
                         src={GASSACKYS.src}

                         alt="Nfc"
                     />
                  </div>

               </div>


               <br></br>

               <div className="block md:hidden w-[30%] h-[5%] md:h-[99%] mx-20 md:mx-0 -mt-6 lg:-mt-6  ">
                  <img
                      className=" absolute h-[3%] lg:h-[12%] "
                      src={GASSACKYS.src}

                      alt="Nfc"
                  />
               </div>


               <div className=" mt-64 md:mt-0  relative h-auto">
                  <div
                      className="bg-red-900 bg-no-repeat   bg-cover   opacity-100 h-8 md:h-12 lg:h-8 w-[70%] md:w-[60%] lg:w-[35%] mx-2 rounded-tr-full justify-center">

                     <h1 id="presentation"
                         className="text-sm md:text-lg lg:text-sm py-2 px-2  text-white bg-clip-text  font-semibold my-9 leading-4 uppercase">
                        Contexte et Justification</h1>
                  </div>

                  <br></br>
                  <div
                      className="relative w-[98%] text-sm  leading-tight  text-justify font-[Poppins]  mx-auto h-[9%] lg:flex lg:justify-between  lg:flex-row lg:gap-2">
                     <div className=" relative w-[95%] mx-auto md:w-[100%] lg:w-[50%]  h-[100%] ">
                        <div className="relative h-[50%] w-[100%] flex justify-between items-center gap-1 md:gap-2">
                           <span
                               className="relative h-[100%] w-[3%] md:w-[5%] text-6xl md:text-6xl font-black font-[Times] "> L</span>
                           <span className="relative h-[100%] w-[88%] md:w-[95%] "> ’inscription d'un événement qui vise à promouvoir le tourisme culturel et entrepreneurial
                        Africain à travers la diplomatie, comme le festival d’images d’Afrique <span
                                  className="text-green-600 ">(FESTIM AFRIQUE)</span>, dans
                        un cadre continental et international représente une clé de son succès.</span>
                        </div>
                        <br></br>
                        <span className="relative h-[50%] w-[100%]  ">

                             L’intérêt des participants à
                        l’événement à l'exemple des entreprises qui résident dans la promotion des investissements de biens
                        et services, l’exposition du patrimoine touristique naturel et culturel des communautés africaines
                        et d’ailleurs, la grande publicité de leurs produits et services, la conquête des nouveaux marchés
                        d’écoulement et d’approvisionnement, la formation de nouveaux entrepreneurs, la disponibilité
                        des espaces pour les conférences d’investissement , la disponibilité des espaces de négociation et de
                        conclusion des accords et contrats commerciaux , l’augmentation des ventes dans, pendant et après
                              l’événement etc.Une opportunité de grande taille est d’inscrire <span
                            className="text-green-600 ">FESTIM AFRIQUE</span>, dans le cadre de
                        l’intégration économique de la République du Congo <span
                            className="text-green-600 ">(Brazzaville)</span> et de la République Démocratique
                        du Congo <span className="text-green-600 ">(Kinshasa)</span> dans la Zone de Libre-échange Continentale Africaine <span
                            className="text-green-600 ">(ZLECAF)</span> en sigle. La
                        ZLECAF est une zone de libre-échange créée sur le continent africain qui regroupe un marché
                        commun de l’Afrique orientale et australe, de la Communauté Economique et Monétaire de l’Afrique
                        Centrale <span className="text-green-600 ">(C.E.M.A.C)</span>, de la Communauté Est Africaine et de la Communauté de développement de
                        l’Afrique australe <span className="text-green-600 ">(COMESA-EAC-SADC)</span> comme Zone de Libre-échange Tripartite <span
                            className="text-green-600 ">(ZLET)</span> en sigle
                        et la Communauté économique des États de l’Afrique Centrale <span
                            className="text-green-600 ">(CEEAC)</span>, la Communauté des États de
                        l’Afrique de l’Ouest <span
                            className="text-green-600 ">(CEDEAO)</span>, l’Union du Maghreb Arabe <span
                            className="text-green-600 ">(UMA)</span> sans oublier la Communauté des
                        États sahélo-sahariens <span className="text-green-600 ">(CEN-SAD)</span>.</span>


                     </div>


                     <div className=" relative  w-[95%] mx-auto  md:w-[100%] lg:w-[50%]  h-[100%] ">
                        <div className="relative h-[50%] w-[100%] items-center ">
                           {/*<span className="relative h-[100%] w-[5%] text-6xl font-black font-[Times] "> L</span>*/}
                           <span className="relative h-[100%] w-[100%] "> La ZLECAF possède un patrimoine touristique naturel et culturel,
                        ainsi de plusieurs secteurs d’activités qui offrent d’excellentes opportunités d’entreprendre pour stimuler
                        le développement socioéconomique et améliorer les moyens d’existence des pays africains. Pour y
                        parvenir, deux défis majeurs sont à souligner et lever : (1) la répartition inégale des ressources naturelles
                        et culturelles, (2) la non-reconnaissance de l’histoire et du patrimoine touristique naturel et culturel de
                        nombreuses communautés Africaines.<br></br><br></br></span>
                        </div>
                        <span className="relative h-[50%] w-[100%]  ">


                        FESTIM AFRIQUE est créé et enregistrée en République du Congo, au récépissé <span
                            className="text-green-600 ">N°0398/22/MIDDL/
                        DBZ/SG/DDAT/SR</span>, est un instrument de la diplomatie culturelle et entrepreneurial Africain, mise en
                        place pour accélérer le développement des acteurs de plusieurs secteurs de la vie socioéconomique, il
                        va contribuer à intégrer la diplomatie culturelle et entrepreneurial dans les politiques et programmes
                        de développement des secteurs socioéconomiques nationaux et internationaux, en ciblant plus
                        particulièrement les groupes autochtones défavorisés, la jeunesse, les communautés locales, les
                        ressources naturelles et sites du tourisme culturel à promouvoir et d’entreprendre. <br></br><br></br></span>


                     </div>


                  </div>
                  <div
                      className="relative  w-[95%] mx-auto md:w-[100%]  text-sm   leading-tight  text-justify font-[Poppins]  mx-auto">
                     D’autres raisons militent en faveur de la tenue de deux phases de la première Edition de FESTIM
                     AFRIQUE dans les deux Congo :
                     <br></br> <br></br>

                     <ul className="relative h-[20%]  w-[95%] md:w-[98%] lg:w-[100%] mx-2   list-disc list-inside  ">
                        <li
                            className="text-xs md:text-sm  leading-tight mt-2 text-justify gap-2 font-medium flex items-center font-[Poppins] ">
                           <span className="h-1.5 w-1.5 bg-green-600 rounded-full mr-1"></span>Le souhait de suscitez
                           des vocations inspirantes jusqu’à
                           son amplification internationale
                           et d’offrir aux jeunes des occasions de découverte, d’apprentissage spécifique au métier de
                           l’entreprenariat ;
                        </li>

                        <li
                            className="text-xs md:text-sm  leading-tight mt-2 text-justify gap-2 font-medium flex items-center font-[Poppins] ">
                           <span className="h-1.5 w-1.5 bg-green-600 rounded-full mr-1"></span>Exposition des nouvelles
                           réalités naturelles et
                           culturelles des Communautés africaines jusqu’à présent méconnues ;
                        </li>

                        <li
                            className="text-xs md:text-sm  leading-tight mt-2 text-justify gap-2 font-medium flex items-center font-[Poppins] ">
                           <span className="h-1.5 w-1.5 bg-green-600 rounded-full mr-1"></span>Donner aux jeunes une
                           vraie place de développer l’esprit
                           de l’entreprise centrer sur l’impact
                           et de la prise en compte du patrimoine naturel et culturel dans l’élaboration des politiques
                           et
                           programmes par les pays africains pour leur intégration dans la ZLECAF ;
                        </li>
                        <li
                            className="text-xs md:text-sm  leading-tight mt-2 text-justify gap-2 font-medium flex items-center font-[Poppins] ">
                           <span className="h-1.5 w-1.5 bg-green-600 rounded-full mr-1"></span>L’existence de nouveaux
                           produits et de la technologie
                           inconnus sans oublier la nécessité
                           d’offrir aux opérateurs économiques de la RDC et du Congo Brazzaville un espace grand
                           public pour leur promotion à moindre coût ;
                        </li>
                        <li
                            className="text-xs md:text-sm  leading-tight mt-2 text-justify gap-2 font-medium flex items-center font-[Poppins] ">
                           <span className="h-1.5 w-1.5 bg-green-600 rounded-full mr-1"></span>Une grande opportunité de
                           la ZLET et ses CER partenaires
                           de découvrir le Congo
                           Brazzaville et la République Démocratique du Congo ; des grands marchés de consommateurs
                           respectivement 5 888 444 millions d’habitants (Statistiques de 2022) pour la République
                           du Congo et 105 044 646 habitants pour la République Démocratique du Congo
                           (Statistiques de 2021).
                        </li>

                     </ul>
                  </div>


               </div>

               <br></br>
               <div className="relative  h-auto        ">
                  <div
                      className="bg-red-900 relative bg-no-repeat   bg-cover    h-[50%] md:h-[80%] lg:h-[50%] mx-4 w-[80%] md:w-[80%] lg:w-[20%]  rounded-tr-full justify-center  ">

                     <h1 id="presentation"
                         className="text-[15px]  px-2 py-2 text-white bg-clip-text  font-semibold my-2 leading-4 uppercase">
                        Activite du festival</h1>
                  </div>
                  <ul className="relative h-[20%]  w-[90%] md:w-[97%]  lg:w-[80%] mx-8   list-disc list-inside  ">
                     <li
                         className="text-xs md:text-sm  leading-tight mt-2 text-justify gap-2 font-medium flex items-center font-[Poppins] ">
                        <span className="h-1.5 w-1.5 bg-green-600 rounded-full mr-1"></span>Conférence Internationale
                        sur l'importance de la Diplomatie d'Affaires et L'Entreprenariat
                        des Jeunes.
                     </li>

                     <li
                         className="text-xs md:text-sm  leading-tight mt-2 text-justify gap-2 font-medium flex items-center font-[Poppins] ">
                        <span className="h-1.5 w-1.5 bg-green-600 rounded-full mr-1"></span>Congrès International de
                        Remise des Trophées
                        (FESTIM AFRIQUE AWARD édition 2023-2024).
                     </li>

                     <li
                         className="text-xs md:text-sm  leading-tight mt-2 text-justify gap-2 font-medium flex items-center font-[Poppins] ">
                        <span className="h-1.5 w-1.5 bg-green-600 rounded-full mr-1"></span>Animations Culturelle et
                        Expositions ventes au village continental.
                     </li>

                  </ul>
               </div>

               <br></br>
               <div className="relative  h-auto        ">
                  <div
                      className="bg-red-900 bg-no-repeat   bg-cover    relative  h-[50%] mx-4  w-[80%]  md:h-[80%] lg:w-[25%]  rounded-tr-full justify-center  ">

                     <h1 id="presentation"
                         className="text-[15px]  px-2 py-2 text-white bg-clip-text  font-semibold my-2 leading-4 uppercase">
                        Partenaires sollicites</h1>
                  </div>
                  <ul className="relative h-[20%] w-[60%] md:w-[30%] mx-8   list-disc list-inside  ">
                     <li
                         className="text-xs md:text-sm  leading-tight mt-2 text-justify gap-2 font-medium flex items-center font-[Poppins] ">
                        <span className="h-1.5 w-1.5 bg-green-600 rounded-full mr-1"></span>Gouvernements;
                     </li>
                  </ul>
                  <ul className="relative h-[20%] w-[60%] md:w-[30%] mx-8   list-disc list-inside  ">
                     <li
                         className="text-xs md:text-sm  leading-tight mt-2 text-justify gap-2 font-medium flex items-center font-[Poppins] ">
                        <span className="h-1.5 w-1.5 bg-green-600 rounded-full mr-1"></span>Missions Diplomatiques;
                     </li>
                  </ul>
                  <ul className="relative h-[20%] w-[60%] md:w-[30%] mx-8   list-disc list-inside  ">

                     <li
                         className="text-xs md:text-sm  leading-tight mt-2 text-justify gap-2 font-medium flex items-center font-[Poppins] ">
                        <span className="h-1.5 w-1.5 bg-green-600 rounded-full mr-1"></span>Entreprises;
                     </li>
                     <li
                         className="text-xs md:text-sm  leading-tight mt-2 text-justify gap-2 font-medium flex items-center font-[Poppins] ">
                        <span className="h-1.5 w-1.5 bg-green-600 rounded-full mr-1"></span>Societe Civile.
                     </li>


                  </ul>
               </div>
               <br></br>
               <div className="relative  h-auto        ">
                  <div
                      className="bg-red-900 bg-no-repeat   bg-cover    relative  h-[50%] mx-4 w-[90%]  md:h-[80%] lg:w-[50%]  rounded-tr-full justify-center  ">

                     <h1 id="presentation"
                         className="text-[15px]  px-2 py-2 text-white bg-clip-text  font-semibold my-2 leading-4 uppercase">
                        Presentation de l'initiative festim afrique edition 2024 </h1>
                  </div>
                  <div className="relative h-[20%] w-[88%] mx-8    ">
                     <li
                         className="text-xs md:text-sm  leading-tight mt-2 text-justify gap-2 font-medium flex items-center font-[Poppins] ">
                        {/*<span className="h-1.5 w-1.5 bg-green-600 rounded-full mr-1"></span>*/}

                        FESTIM Afrique 2024 a pour
                        mission de promouvoir les Metiers de la
                        Diplomatie,le Monde des Affaires et de l'Entreprenariat des Jeunes en Afrique .
                     </li>
                  </div>
               </div>

               <br></br>
               <div className="relative  h-auto        ">
                  <div
                      className="bg-red-900 bg-no-repeat   bg-cover   relative  h-[50%] mx-4 w-[95%]  md:h-[80%] lg:w-[58%]  rounded-tr-full justify-center  ">

                     <h1 id="presentation"
                         className="text-[15px]  px-2 py-2 text-white bg-clip-text  font-semibold my-2 leading-tight uppercase">
                        objectifs principal de l'initiative festim afrique pool malebo edition 2024 </h1>
                  </div>
                  <span
                      className="text-xs md:text-sm relative  h-[52%] mx-8  w-[90%]  leading-tight text-left font-medium flex items-center font-[Poppins]">Reunir les leaders et Acteurs de la diplomatie, les Chefs dEntreprises, les Philanthropes,les champions de
                    la conservation et de la protection de l'environnement ,ainsi que les stars du Sport et de la musique  ,mais aussi de la mode à Brazzaville et à Kinshasa pour : </span>
                  <ul className="relative h-[20%] w-[50%] mx-12   list-disc list-inside  ">
                     <li
                         className="text-xs md:text-sm  leading-tight mt-2 text-justify gap-2 font-medium flex items-center font-[Poppins] ">
                        <span className="h-1.5 w-1.5 bg-green-600 rounded-full mr-1"></span>Echanger .
                     </li>
                  </ul>
                  <ul className="relative h-[20%] w-[50%] mx-12   list-disc list-inside ">
                     <li
                         className="text-xs md:text-sm  leading-tight mt-2 text-justify gap-2 font-medium flex items-center font-[Poppins] ">
                        <span className="h-1.5 w-1.5 bg-green-600 rounded-full mr-1"></span>Informer .
                     </li>
                  </ul>
                  <ul className="relative h-[20%] w-[50%] mx-12   list-disc list-inside ">
                     <li
                         className="text-xs md:text-sm  leading-tight mt-2 text-justify gap-2 font-medium flex items-center font-[Poppins] ">
                        <span className="h-1.5 w-1.5 bg-green-600 rounded-full mr-1"></span>Former.
                     </li>
                  </ul>

                  <ul className="relative h-[20%] w-[80%] md:w-[50%] mx-12   list-disc list-inside ">
                     <li
                         className="text-xs md:text-sm  leading-tight mt-2 text-justify gap-2 font-medium flex items-center font-[Poppins] ">
                        <span className="h-1.5 w-1.5 bg-green-600 rounded-full mr-1"></span>Dévelloper les reseaux de
                        partenaires .
                     </li>
                  </ul>
                  <ul className="relative h-[20%] w-[50%] mx-12   list-disc list-inside ">
                     <li
                         className="text-xs md:text-sm  leading-tight mt-2 text-justify gap-2 font-medium flex items-center font-[Poppins] ">
                        <span className="h-1.5 w-1.5 bg-green-600 rounded-full mr-1"></span>Encourager la créativite .
                     </li>
                  </ul>
                  <ul className="relative h-[20%] w-[50%] mx-12   list-disc list-inside ">
                     <li
                         className="text-xs md:text-sm  leading-tight mt-2 text-justify gap-2 font-medium flex items-center font-[Poppins] ">
                        <span className="h-1.5 w-1.5 bg-green-600 rounded-full mr-1"></span>Partager des compétences.
                     </li>
                  </ul>
                  <ul className="relative h-[20%] w-[50%] mx-12   list-disc list-inside ">
                     <li
                         className="text-xs md:text-sm  leading-tight mt-2 text-justify gap-2 font-medium flex items-center font-[Poppins] ">
                        <span className="h-1.5 w-1.5 bg-green-600 rounded-full mr-1"></span>Favoriser l'entreprenariat
                        des jeunes .
                     </li>
                  </ul>
                  <ul className="relative h-[20%] w-[50%] mx-12   list-disc list-inside ">
                     <li
                         className="text-xs md:text-sm  leading-tight mt-2 text-justify gap-2 font-medium flex items-center font-[Poppins] ">
                        <span className="h-1.5 w-1.5 bg-green-600 rounded-full mr-1"></span>Coopérer en affaires .
                     </li>
                  </ul>
                  <ul className="relative h-[20%] w-[80%] md:w-[50%] mx-12   list-disc list-inside ">
                     <li
                         className="text-xs md:text-sm  leading-tight mt-2 text-justify gap-2 font-medium flex items-center font-[Poppins] ">
                        <span className="h-1.5 w-1.5 bg-green-600 rounded-full mr-1"></span>Encourager de nouvel
                        investissement.
                     </li>
                  </ul>
                  <ul className="relative h-[20%] w-[50%] mx-12   list-disc list-inside ">
                     <li
                         className="text-xs md:text-sm  leading-tight mt-2 text-justify gap-2 font-medium flex items-center font-[Poppins] ">
                        <span className="h-1.5 w-1.5 bg-green-600 rounded-full mr-1"></span>Elargir les champs d'action
                        .
                     </li>
                  </ul>

               </div>

               <br></br>
               <div className="relative  h-auto        ">
                  <div
                      className="bg-red-900 bg-no-repeat   bg-cover    relative  h-[50%] mx-4  w-[50%]  rounded-tr-full justify-center  ">

                     <h1 id="presentation"
                         className="text-[15px]  px-2 py-2 text-white bg-clip-text  font-semibold my-2 leading-4 uppercase">
                        Theme </h1>
                  </div>
                  <div className="relative h-[20%] w-[80%] md:w-[50%] mx-8   list-disc list-inside ">
                     {/*<div*/}
                     {/*    className=" text-lg font-extrabold md:text-lg italic  leading-tight mt-2 text-justify gap-2 font-medium flex items-center font-[Poppins] ">*/}
                     {/*   " L'Afrique que nous voulons."*/}
                     {/*</div>*/}

                     <ul className="relative h-[20%] w-[80%] mx-12   list-disc list-inside ">
                        <li
                            className="text-xs md:text-sm  leading-tight mt-2 text-justify gap-2 font-medium flex items-center font-[Poppins] ">
                           <span className="h-1.5 w-1.5 bg-green-600 rounded-full mr-1"></span>L'Afrique que nous
                           voulons.
                        </li>
                     </ul>

                  </div>
               </div>

               <br></br>
               <div className="relative  h-auto        ">
                  <div
                      className="bg-red-900 bg-no-repeat   bg-cover  relative  h-[50%] mx-4 w-[60%] md:w-[50%]  rounded-tr-full justify-center  ">

                     <h1 id="presentation"
                         className="text-[15px]  px-2 py-2 text-white bg-clip-text  font-semibold my-2 leading-4 uppercase">
                        resultats attendus </h1>
                  </div>
                  <ul className="relative h-[20%] w-[80%] md:w-[80%] lg:w-[50%] mx-8   list-disc list-inside  ">
                     <li
                         className="text-xs md:text-sm  leading-tight mt-2 text-justify gap-2 font-medium flex items-center font-[Poppins] ">
                        <span className="h-1.5 w-1.5 bg-green-600 rounded-full mr-1"></span>Promouvoir les
                        compétences .
                     </li>
                  </ul>

                  <ul className="relative h-[20%] w-[80%] md:w-[80%] lg:w-[50%] mx-8   list-disc list-inside  ">
                     <li
                         className="text-xs md:text-sm  leading-tight mt-2 text-justify gap-2 font-medium flex items-center font-[Poppins] ">
                        <span className="h-1.5 w-1.5 bg-green-600 rounded-full mr-1"></span>Financer la création
                        de nouvelles entreprises des Lauréats du Concours édition 2024
                     </li>
                  </ul>


                  <ul className="relative h-[20%] w-[90%] md:w-[90%] lg:w-[100%] mx-8   list-disc list-inside  ">
                     <li
                         className="text-xs md:text-sm  leading-tight mt-2 text-justify gap-2 font-medium flex items-center font-[Poppins] ">
                        <span className="h-1.5 w-1.5 bg-green-600 rounded-full mr-1"></span>Former les Etudiants à
                        l'unniversité
                        SUN MOON de Corée du Sud pour l'opérationalisation de l'initiave 'DE L'ETUDIANT A CHEF
                        D'ENTREPRISE' Promotion
                        DENIS SASSOU N'GUESSO édition 2024;
                     </li>
                  </ul>


                  <ul className="relative h-[20%] w-[80%] md:w-[80%] lg:w-[80%] mx-8   list-disc list-inside  ">
                     <li
                         className="text-xs md:text-sm  leading-tight mt-2 text-justify gap-2 font-medium flex items-center font-[Poppins] ">
                        <span className="h-1.5 w-1.5 bg-green-600 rounded-full mr-1"></span>Faire participer les
                        Etudiants et Entrepreneurs au
                        Forum de l'Entrepreneuriat à Lyon en France en novembre 2024 ;
                     </li>
                  </ul>

                  <ul className="relative h-[20%] w-[80%] md:w-[80%]  lg:w-[50%] mx-8   list-disc list-inside  ">
                     <li
                         className="text-xs md:text-sm  leading-tight mt-2 text-justify gap-2 font-medium flex items-center font-[Poppins] ">
                        <span className="h-1.5 w-1.5 bg-green-600 rounded-full mr-1"></span>Mieux connaitre et
                        comprendre les affaires et
                        son Environnement.
                     </li>
                  </ul>
                  <ul className="relative h-[20%] w-[80%] md:w-[80%]  lg:w-[50%] mx-8   list-disc list-inside  ">
                     <li
                         className="text-xs md:text-sm  leading-tight mt-2 text-justify gap-2 font-medium flex items-center font-[Poppins] ">
                        <span className="h-1.5 w-1.5 bg-green-600 rounded-full mr-1"></span>Dévelloper les capacités
                        d'adaptation .
                     </li>
                  </ul>
                  <ul className="relative h-[20%] w-[80%]  md:w-[80%]  lg:w-[50%] mx-8   list-disc list-inside  ">
                     <li
                         className="text-xs md:text-sm  leading-tight mt-2 text-justify gap-2 font-medium flex items-center font-[Poppins] ">
                        <span className="h-1.5 w-1.5 bg-green-600 rounded-full mr-1"></span>Anticiper un changement de
                        situation en affaires.
                     </li>
                  </ul>
                  <ul className="relative h-[20%] w-[90%]  md:w-[90%]  lg:w-[70%] mx-8   list-disc list-inside  ">
                     <li
                         className="text-xs md:text-sm  leading-tight mt-2 text-justify gap-2 font-medium flex items-center font-[Poppins] ">
                        <span className="h-1.5 w-1.5 bg-green-600 rounded-full mr-1"></span>Vendre et promouvoir des
                        solutions et solutions aupres des
                        nouveaux clients et partenaires.
                     </li>
                  </ul>
                  <ul className="relative h-[20%] w-[75%]  md:w-[80%]  lg:w-[50%] mx-8   list-disc list-inside  ">
                     <li
                         className="text-xs md:text-sm  leading-tight mt-2 text-justify gap-2 font-medium flex items-center font-[Poppins] ">
                        <span className="h-1.5 w-1.5 bg-green-600 rounded-full mr-1"></span>Batir un réseau diversifieé
                        des Jeunes très Efficaces et Entreprenants .
                     </li>
                  </ul>
                  <ul className="relative h-[20%] w-[90%]  md:w-[80%]  lg:w-[50%] mx-8   list-disc list-inside  ">
                     <li
                         className="text-xs md:text-sm  leading-tight mt-2 text-justify gap-2 font-medium flex items-center font-[Poppins] ">
                        <span className="h-1.5 w-1.5 bg-green-600 rounded-full mr-1"></span>Encourager le partage des
                        connaissances ,proumouvoir le réseautage .
                     </li>
                  </ul>
                  <ul className="relative h-[20%] w-[80%]  md:w-[80%]  lg:w-[50%] mx-8   list-disc list-inside  ">
                     <li
                         className="text-xs md:text-sm  leading-tight mt-2 text-justify gap-2 font-medium flex items-center font-[Poppins] ">
                        <span className="h-1.5 w-1.5 bg-green-600 rounded-full mr-1"></span>Inspirer et creer de
                        nouveaux entrepreneurs.
                     </li>
                  </ul>


                  <ul className="relative h-[20%] w-[80%]  md:w-[80%]  lg:w-[50%] mx-8   list-disc list-inside  ">
                     <li
                         className="text-xs md:text-sm  leading-tight mt-2 text-justify gap-2 font-medium flex items-center font-[Poppins] ">
                        <span className="h-1.5 w-1.5 bg-green-600 rounded-full mr-1"></span>Mise en place du Club des
                        Relations Internationales pour les
                        Affaires en Afrique
                     </li>
                  </ul>


               </div>
               <br></br>

               <div className="relative  h-auto       ">
                  <div
                      className="bg-red-900 relative bg-no-repeat   bg-cover   h-[50%] mx-4 w-[60%] md:w-[50%]  rounded-tr-full justify-center  ">

                     <h1 id="presentation"
                         className="text-[15px]  px-2 py-2 text-white bg-clip-text  font-semibold my-2 leading-4 uppercase">
                        Activites preludes </h1>
                  </div>


                  <ul className="relative h-[20%] w-[90%]  md:w-[90%]  lg:w-[80%] mx-8   list-disc list-inside  ">
                     <li
                         className="text-xs md:text-sm  leading-tight mt-2 text-justify gap-2 font-medium flex items-center font-[Poppins] ">
                        <span className="h-1.5 w-1.5 bg-green-600 rounded-full mr-1"></span>Lancement officiel du
                        Festival et soirée de Gala
                        de levée des fonds;
                     </li>
                  </ul>
                  <ul className="relative h-[20%] w-[83%] md:w-[90%]  lg:w-[70%] mx-8   list-disc list-inside  ">
                     <li
                         className="text-xs md:text-sm  leading-tight mt-2 text-justify gap-2 font-medium flex items-center font-[Poppins] ">
                        <span className="h-1.5 w-1.5 bg-green-600 rounded-full mr-1"></span>Visite de travail et
                        participation aux
                        Conférences et formations à Paris,Berlin
                        ,Rome.
                     </li>
                  </ul>
                  <ul className="relative h-[20%] w-[90%] md:w-[50%] mx-8   list-disc list-inside  ">
                     <li
                         className="text-xs md:text-sm  leading-tight mt-2 text-justify gap-2 font-medium flex items-center font-[Poppins] ">
                        <span className="h-1.5 w-1.5 bg-green-600 rounded-full mr-1"></span>Publication de l'évenement .
                     </li>
                  </ul>
                  <ul className="relative h-[20%] w-[80%] md:w-[90%]  lg:w-[50%] mx-8   list-disc list-inside  ">
                     <li
                         className="text-xs md:text-sm  leading-tight mt-2 text-justify gap-2 font-medium flex items-center font-[Poppins] ">
                        <span className="h-1.5 w-1.5 bg-green-600 rounded-full mr-1"></span>Amplification de la campage
                        de Communication .
                     </li>
                  </ul>


               </div>
               <br></br>

               <div className="relative  h-auto       ">
                  <div
                      className="bg-red-900 relative  bg-no-repeat   bg-cover   h-[50%] mx-4 w-[80%] md:w-[50%]  rounded-tr-full justify-center  ">

                     <h1 id="presentation"
                         className="text-[15px]  px-2 py-2 text-white bg-clip-text  font-semibold my-2 leading-4 uppercase">
                        sous activites du festival </h1>
                  </div>
                  <ul className="relative h-[20%] w-[50%] mx-8   list-disc list-inside  ">
                     <li
                         className="text-xs md:text-sm  leading-tight mt-2 text-justify gap-2 font-medium flex items-center font-[Poppins] ">
                        <span className="h-1.5 w-1.5 bg-green-600 rounded-full mr-1"></span>Discours.
                     </li>
                  </ul>

                  <ul className="relative h-[20%] w-[80%] md:w-[50%] mx-8   list-disc list-inside  ">
                     <li
                         className="text-xs md:text-sm  leading-tight mt-2 text-justify gap-2 font-medium flex items-center font-[Poppins] ">
                        <span className="h-1.5 w-1.5 bg-green-600 rounded-full mr-1"></span>Panel des Experts et
                        Conferences débats
                        .
                     </li>
                  </ul>
                  <ul className="relative h-[20%] w-[50%] mx-8   list-disc list-inside  ">
                     <li
                         className="text-xs md:text-sm  leading-tight mt-2 text-justify gap-2 font-medium flex items-center font-[Poppins] ">
                        <span className="h-1.5 w-1.5 bg-green-600 rounded-full mr-1"></span>Ateliers de formation.
                     </li>
                  </ul>
                  <ul className="relative h-[20%] w-[88%] md:w-[90%]  lg:w-[55%] mx-8   list-disc list-inside  ">
                     <li
                         className="text-xs md:text-sm  leading-tight mt-2 text-justify gap-2 font-medium flex items-center font-[Poppins] ">
                        <span className="h-1.5 w-1.5 bg-green-600 rounded-full mr-1"></span>Carnaval,Exposition,Animation,Culturels
                        et Dégustation Gastronomiques inter-états .
                     </li>
                  </ul>
                  <ul className="relative h-[20%] w-[50%] mx-8   list-disc list-inside  ">
                     <li
                         className="text-xs md:text-sm  leading-tight mt-2 text-justify gap-2 font-medium flex items-center font-[Poppins] ">
                        <span className="h-1.5 w-1.5 bg-green-600 rounded-full mr-1"></span>Exposition pays et ventes .
                     </li>
                  </ul>

               </div>
               <br></br>


               <div className="relative  h-auto        ">
                  <div
                      className="bg-red-900 relative bg-no-repeat   bg-cover    h-[50%] mx-4  w-[80%] md:w-[50%]  rounded-tr-full justify-center  ">

                     <h1 id="presentation"
                         className="text-[15px]  px-2 py-2 text-white bg-clip-text  font-semibold my-2 leading-4 uppercase">
                        BUDGET DES ACTIVITES DE BRAZZAVILLE </h1>
                  </div>
                  <ul className="relative h-[20%] w-[80%] md:w-[80%] mx-8   list-disc list-inside  ">
                     <li
                         className="text-xs md:text-sm  leading-tight mt-2 text-justify gap-2 font-medium flex items-center font-[Poppins] ">
                        <span className="h-1.5 w-1.5 bg-green-600 rounded-full mr-1"></span>
                        142 470 540 FCFA.
                     </li>
                  </ul>

               </div>


               <br></br>
               <div className="relative  h-auto        ">
                  <div
                      className="bg-red-900 relative bg-no-repeat   bg-cover    h-[50%] mx-4  w-[80%] md:w-[50%]  rounded-tr-full justify-center  ">

                     <h1 id="presentation"
                         className="text-[15px]  px-2 py-2 text-white bg-clip-text  font-semibold my-2 leading-4 uppercase">
                        BUDGET DES ACTIVITES DE KINSHASA </h1>
                  </div>
                  <ul className="relative h-[20%] w-[80%] md:w-[80%] mx-8   list-disc list-inside   ">
                     <li
                         className="text-xs md:text-sm  leading-tight mt-2 text-justify gap-2  font-medium flex items-center font-[Poppins] ">
                        <span className="h-1.5 w-1.5 bg-green-600 rounded-full mr-1"></span>
                        189 293.82 $
                     </li>
                  </ul>

               </div>


               <br></br>
               <div className="relative  h-auto        ">
                  <div
                      className="bg-red-900 relative  bg-no-repeat   bg-cover   h-[50%] mx-4  w-[80%] md:w-[50%]  rounded-tr-full justify-center  ">

                     <h1 id="presentation"
                         className="text-[15px]  px-2 py-2 text-white bg-clip-text  font-semibold my-2 leading-4 uppercase">
                        officuel invites </h1>
                  </div>

                  <ul className="relative h-[20%] w-[80%] md:w-[50%] mx-8   list-disc list-inside  ">
                     <li
                         className="text-xs md:text-sm  leading-tight mt-2 text-justify gap-2 font-medium flex items-center font-[Poppins] ">
                        <span className="h-1.5 w-1.5 bg-green-600 rounded-full mr-1"></span>Les membres des
                        Gouvernement.
                     </li>
                  </ul>
                  <ul className="relative h-[20%] w-[80%] md:w-[50%] mx-8   list-disc list-inside  ">
                     <li
                         className="text-xs md:text-sm  leading-tight mt-2 text-justify gap-2 font-medium flex items-center font-[Poppins] ">
                        <span className="h-1.5 w-1.5 bg-green-600 rounded-full mr-1"></span>Les Chefs des missions
                        diplomatiques.
                     </li>
                  </ul>
                  <ul className="relative h-[20%] w-[80%] md:w-[90%]  lg:w-[50%] mx-8   list-disc list-inside  ">
                     <li
                         className="text-xs md:text-sm  leading-tight mt-2 text-justify gap-2 font-medium flex items-center font-[Poppins] ">
                        <span className="h-1.5 w-1.5 bg-green-600 rounded-full mr-1"></span>Les representants des
                        institutions
                        internationales.
                     </li>
                  </ul>
                  <ul className="relative h-[20%] w-[50%] mx-8   list-disc list-inside  ">
                     <li
                         className="text-xs md:text-sm  leading-tight mt-2 text-justify gap-2 font-medium flex items-center font-[Poppins] ">
                        <span className="h-1.5 w-1.5 bg-green-600 rounded-full mr-1"></span>Les Chefs d'entreprises.
                     </li>
                  </ul>
                  <ul className="relative h-[20%] w-[50%] mx-8   list-disc list-inside  ">
                     <li
                         className="text-xs md:text-sm  leading-tight mt-2 text-justify gap-2 font-medium flex items-center font-[Poppins] ">
                        <span className="h-1.5 w-1.5 bg-green-600 rounded-full mr-1"></span>La Sociéte Civile .
                     </li>
                  </ul>
               </div>
               <br></br>

               <div className="relative  h-auto        ">
                  <div
                      className="bg-red-900 relative bg-no-repeat   bg-cover    h-[50%] mx-4  w-[80%] md:w-[50%]  rounded-tr-full justify-center  ">

                     <h1 id="presentation"
                         className="text-[15px]  px-2 py-2 text-white bg-clip-text  font-semibold my-2 leading-4 uppercase">
                        participants </h1>
                  </div>
                  <ul className="relative h-[20%] w-[80%] md:w-[50%] mx-8   list-disc list-inside  ">
                     <li
                         className="text-xs md:text-sm  leading-tight mt-2 text-justify gap-2 font-medium flex items-center font-[Poppins] ">
                        <span className="h-1.5 w-1.5 bg-green-600 rounded-full mr-1"></span>Les Officiels et
                        Entrepreneurs.
                     </li>
                  </ul>
                  <ul className="relative h-[20%] w-[80%] md:w-[90%]  lg:w-[50%] mx-8   list-disc list-inside  ">
                     <li
                         className="text-xs md:text-sm  leading-tight mt-2 text-justify gap-2 font-medium flex items-center font-[Poppins] ">
                        <span className="h-1.5 w-1.5 bg-green-600 rounded-full mr-1"></span>Etudiants Universitaire et
                        finaliste des Ecoles Proffessionnels .
                     </li>
                  </ul>
               </div>


               {/*debut*/}


               <div className="relative  mx-auto w-[98%] h-auto space-y-6">
                  <div
                      className="bg-red-900 bg-no-repeat   bg-cover   h-8 w-[55%] md:w-[35%] mx-2 rounded-tr-full justify-center">

                     <h1 id="presentation"
                         className="text-sm py-2 px-2  text-white bg-clip-text  font-semibold my-9 leading-4 uppercase">
                        Histologie</h1>
                  </div>


                  <div
                      className="relative w-[100%] text-sm  leading-tight mt-2 text-justify font-[Poppins]  mx-auto h-auto lg:flex lg:justify-between lg:items-center p-2 lg:flex-row">
                     <div className=" relative w-[100%] md:w-[100%] lg:w-[50%]  h-[80%] ">
                        <div className="relative h-[50%] w-[100%] flex justify-between items-center gap-2">
                           <span className="relative h-[100%] w-[5%] text-6xl font-black font-[Times] "> L</span>
                           <span className="relative h-[100%] w-[88%] "> ’inscription d'un événement qui vise à promouvoir le tourisme culturel, le monde des Affaires
                  et l'Entrepreuneuriat des Jeunes en Afrique à travers la diplomatie, comme le festival
                  d’images d’Afrique (<span className=" text-green-600 font-semibold ">FESTIM AFRIQUE</span>).</span>
                        </div>

                        <span className="relative h-[50%] w-[100%]  ">

                            Dans un cadre continental et international représente une clé de son
                     succès. L’intérêt des participants à l’événement à l'exemple des Diplomates, les Chefs
                     d'entreprises
                     résident dans la promotion des investissements de biens et services, l’exposition du
               patrimoine
               touristique naturel ainsi que culturel des communautés africaines et d’ailleurs, la grande
               publicité de
               leurs produits et services, la conquête des nouveaux marchés d’écoulement et
               d’approvisionnement, la
               formation et la production de nouveaux entrepreneurs, la disponibilité des espaces pour les
               conférences
               d’investissement , la disponibilité des espaces de négociation et de conclusion des accords
               et
               contrats
               commerciaux , l’augmentation des ventes dans, pendant et après l’événement etc. Une
               opportunité
               de
               grande taille d’inscrire <span
                            className="font-semibold text-green-600  shadow-black">FESTIM AFRIQUE </span> ,
               dans le cadre de l’intégration économique de la République
               du Congo (Brazzaville) et de la République Démocratique du Congo (Kinshasa) dans la Zone de
               Libre échange Continentale Africaine ( <span
                            className="font-semibold text-green-600  shadow-black"> ZLECAF</span> ) en sigle.
               </span>

                     </div>


                     <span className="relative h-[50%] w-[48%] text-sm  leading-tight mt-2 text-justify font-[Poppins]">
                     Comme vous
               le
               savez la ZLECAF est une zone de
               libre-échange créée sur le continent africain qui regroupe un marché commun de l’Afrique
               orientale
               et australe, de la Communauté Economique et Monétaire de l’Afrique Centrale (<span
                         className="font-semibold text-green-600  shadow-blac">C.E.M.A.C</span>), de la
               Communauté Est Africaine et de la Communauté de développement de l’Afrique australe (<span
                         className="font-semibold text-green-600  shadow-blac">COMESA EAC-SADC</span>) comme Zone de
               Libre-échange Tripartite (<span
                         className="font-semibold text-green-600  shadow-blac">ZLET</span>)
               en sigle et la Communauté économique
               des États de l’Afrique Centrale (<span
                         className="font-semibold text-green-600  shadow-blac">CEEAC</span>), la Communauté des États
               de
               l’Afrique de l’Ouest (<span className="font-semibold text-green-600  shadow-blac"></span>CEDEAO),
               l’Union du Maghreb Arabe (UMA) sans oublier la Communauté des États sahélo-sahariens (<span
                         className="font-semibold text-green-600  shadow-blac">CENSAD</span>). La ZLECAF possède un
               patrimoine touristique économique naturel et culturel, ainsi de plusieurs
               secteurs d’activités qui offrent d’excellentes opportunités d’entreprendre pour stimuler le
               développement
               socioéconomique et améliorer les moyens d’existence des pays africains et de lutter contre le
               chômage
               des Jeunes en Afrique. Pour y parvenir, deux défis majeurs sont à souligner et lever : <span
                         className="font-semibold text-green-600  shadow-blac">(1)</span> la répartition
               inégale des ressources naturelles et culturelles, <span
                         className="font-semibold text-green-600  shadow-blac">(2)</span> la non-reconnaissance de
               l’histoire et du patrimoine
               économique touristique naturel et culturel de nombreuses communautés Africaines.


                 </span>

                  </div>

               </div>

               <br></br>

               <div className="relative  mx-auto w-[98%] h-[54%] w-[98%]">
                  <div
                      className="bg-red-900 bg-no-repeat   bg-cover   h-12 md:h-10 lg:h-8 w-[90%] md:w-[90%] lg:w-[45%] mx-2 rounded-tr-full justify-center">

                     <h1 id="presentation"
                         className="text-sm py-2 px-2  text-white bg-clip-text  font-semibold my-9 leading-4 uppercase">
                        SITES OU LIEUX DES ACTIVITÉS DE FESTIM AFRIQUE SOLLICITÉS</h1>
                  </div>


                  <div
                      className="relative w-[100%]  text-sm mt-3 md:mt-12 lg:mt-24  leading-tight  text-justify font-[Poppins]  mx-auto h-auto md:flex md:justify-between md:items-center  md:flex-row">
                     <div className=" relative w-[90%] md:w-[50%]  h-[20%] ">
                        <div className="relative h-[50%]  w-[100%] md:w-[96%] lg:w-[100%] ">
                        <span
                            className="relative h-[100%] w-[70%] md:w-[10%] lg:w-[70%] text-xl md:text-2xl lg:text-4xl  font-[Times] "> Hôtel
                        Olympic Palace à Brazzaville et le Musé National de la RDC à Kinshasa.</span>
                           {/*      */}
                           {/*      <span className="relative h-[100%] w-[95%] "> ’inscription d'un événement qui vise à promouvoir le tourisme culturel, le monde des Affaires*/}
                           {/*et l'Entrepreuneuriat des Jeunes en Afrique à travers la diplomatie, comme le festival*/}
                           {/*d’images d’Afrique (<span className=" text-green-600 font-semibold ">FESTIM AFRIQUE</span>).</span>*/}
                        </div>
                        <br></br>
                        <span
                            className="relative h-[50%] w-[100%] text-xs md:text-[13px] lg:text-lg py-6 leading-tight mt-2 text-justify font-[Poppins] ">
                        Sont les sites retenus pour le Le Festival d’Images
                        d’Afrique <br></br>(FESTIM AFRIQUE POOL MALEBO Brazzaville-Kinshasa).<br></br> <br></br>

               </span>

                     </div>


                     <div className="relative h-[50%] w-[99%] md:w-[48%] flex items-center justify-center">
                        <div
                            className="md:absolute -top-40 md:-top-32 left-0 w-full h-auto flex items-center justify-center transition-opacity duration-500"
                        >
                           <img
                               className="object-cover rounded-xl"
                               src={ImageSrc.src}
                               height={800}
                               width={600}
                               alt="Nfc"
                           />
                        </div>
                        {/*<div*/}
                        {/*   className="absolute -top-44 left-0 w-full h-auto flex items-center justify-center transition-opacity duration-500"*/}
                        {/*   styles={{opacity: move ? 0 : 1}}>*/}
                        {/*   <img*/}
                        {/*      className="object-cover rounded-xl"*/}
                        {/*      src={imageSrc3.src}*/}
                        {/*      height={800}*/}
                        {/*      width={600}*/}
                        {/*      alt="Nfc"*/}
                        {/*   />*/}
                        {/*</div>*/}
                     </div>


                  </div>

               </div>

               <br></br>
               {/*ddddddddddddddddddddddddddddddddd*/}


               <div className="relative  h-auto  ">
                  <div className="relative h-[70%] mx-4 leading-4   ">
                     <div
                         className="bg-red-900 bg-no-repeat   bg-cover  ] relative w-[92%] md:w-[68%] lg:w-[38%] rounded-tr-full justify-center">

                        <h1 id="presentation"
                            className="text-sm py-2 px-2  text-white bg-clip-text  font-semibold my-9 leading-4 uppercase">
                           Evenements organisées par festim afrrique</h1>
                     </div>


                     <div className="  w-auto text-xs lg:text-lg gap-3 md:flex md:items-center md:justify-center">
                     <span className=" "> Le festival
                        d’images d’Afrique (<span className=" text-green-600 font-semibold ">FESTIM AFRIQUE</span>) compte
                     </span>
                        <span className="text-xl md:text-3xl text-red-800 font-semibold"> {number}</span>
                        <span className=" "> évenements organisées
                     </span>
                     </div>
                  </div>
                  {/*<div className="relative w-full  h-[70%] md:h-[100%]  mt-10  ">*/}

                  {/*</div>*/}


                  <div className="relative h-[30%] md:h-[10%] lg:h-[30%] w-auto   overflow-x-hidden">


                     <div
                         className="relative w-[90%]  md:w-auto mx-auto  flex flex-row  gap-4 p-4 mb-3 animate-scroll-step "
                         style={{transform: `translateX(-${scrollIndex * itemWidth}rem)`}}

                     >
                        {loading && (

                            <div className="flex flex-row space-x-4">
                               {filteredData.map((item, index) => (
                                   <div key={index}
                                        className="relative w-72 md:w-80 cursor-pointer bg-gray-100 hover:bg-gray-100/85 rounded-xl hover:shadow-2xl transition duration-300"
                                       // onClick={() => {
                                       //    GoToUpdate(item.id, item.nom)
                                       // }}
                                   >
                                      <div className="h-64 w-full">
                                         <img src={`/${item.photo}`} alt={`Media ${item.id}`}
                                              className="relative h-[99%] w-[100%] rounded-tr-xl "

                                         />
                                      </div>
                                      <div className="p-2">
                                         <div className="font-semibold text-xl text-black">{item.nom}</div>


                                         <span>
                     {(() => {
                        const format = new Date(formattedDate2);
                        const date1 = new Date(item.date_debut);
                        const date2 = new Date(item.date_fin);

                        if (format.getTime() < date1.getTime()) {
                           return (

                               <div>
                                  <p>Evenement à venir,</p>
                                  <button
                                      className="bg-black text-white rounded-md p-2 text-xs transition duration-300 transform hover:scale-105"
                                      onClick={() => {
                                         GotoAdd(item.nom)
                                      }}
                                  >Me
                                     Reserver une place
                                  </button>
                               </div>


                           )

                        } else if (format.getTime() === date1.getTime()) {
                           return (

                               <div>
                                  <p>Evenement en cours,</p>
                                  <button
                                      className="bg-black text-white rounded-md p-2 text-xs transition duration-300 transform hover:scale-105"
                                      onClick={() => {
                                         GotoAdd(item.nom)
                                      }}
                                  >Me
                                     Reserver une place
                                  </button>
                               </div>


                           )

                        } else if (format.getTime() > date1.getTime() && format.getTime() < date2.getTime()) {
                           return (

                               <div>
                                  <p>Evenement en cours,</p>
                                  <button
                                      className="bg-black text-white rounded-md p-2 text-xs transition duration-300 transform hover:scale-105"
                                      onClick={() => {
                                         GotoAdd(item.nom)
                                      }}
                                  >Me
                                     Reserver une place
                                  </button>
                               </div>


                           )
                        } else if (format.getTime() === date2.getTime()) {
                           return (

                               <div>
                                  <p>Evenement en cours,</p>
                                  <button
                                      className="bg-black text-white rounded-md p-2 text-xs transition duration-300 transform hover:scale-105"
                                      onClick={() => {
                                         GotoAdd(item.nom)
                                      }}
                                  >Me
                                     Reserver une place
                                  </button>
                               </div>


                           )
                        } else if (format.getTime() > date2.getTime()) {
                           return "Evenement deja passe";
                        } else {
                           return null;
                        }

                     })()}
                  </span>
                                         <div className="font-normal text-sm">
                                            <span
                                                className="font-[gotham]">{formatDate(item.date_debut)}</span> au <span
                                             className="font-[gotham]">{formatDate(item.date_fin)}</span>
                                         </div>
                                         <div className="font-normal text-sm">Sous le thème de :<span
                                             className="font-[gotham] text-[#04f32c]">{item.concept_devellope}</span>
                                         </div>

                                      </div>
                                   </div>
                               ))}
                            </div>
                        )}
                     </div>

                  </div>


               </div>
               <br></br>
               {/*dddddddddddddddddddddddd*/}

               <div className="relative  h-auto  ">
                  <div className="relative h-[70%] mx-4 leading-4   ">
                     <div
                         className="bg-red-900 bg-no-repeat   bg-cover   relative w-[92%] md:w-[68%] lg:w-[38%] rounded-tr-full justify-center">

                        <h1 id="presentation"
                            className="text-sm py-2 px-2  text-white bg-clip-text  font-semibold my-9 leading-4 uppercase">
                          Formation organisées par festim afrrique</h1>
                     </div>


                     <div className="  w-auto text-xs lg:text-lg gap-3 md:flex md:items-center md:justify-center">
                     <span className=" "> Le festival
                        d’images d’Afrique (<span className=" text-green-600 font-semibold ">FESTIM AFRIQUE</span>) compte a ce jour
                     </span>
                        <span className="text-xl md:text-3xl text-red-800 font-semibold"> {number3}</span>
                        <span className=" "> formation effectuées sous sa tutelle
                     </span>
                     </div>
                  </div>
                  <div className="relative h-[30%] md:h-[10%] lg:h-[35%] w-auto   overflow-x-hidden">


                     <div
                         className="relative w-[90%]  md:w-auto mx-auto  flex flex-row  gap-4 p-4 mb-3 animate-scroll-step "
                         style={{transform: `translateX(-${scrollIndex3 * itemWidth3}rem)`}}

                     >
                        {loading && (

                            <div className="flex flex-row space-x-4">
                               {filteredData2.map((item, index) => (
                                   <div key={index}
                                        className="relative w-72 md:w-80 cursor-pointer bg-gray-100 hover:bg-gray-100/85 rounded-xl hover:shadow-2xl transition duration-300"
                                   >
                                      <div className="h-64 w-full">
                                         <img src={`/${item.media}`} alt={`Media ${item.id}`}
                                              className="relative h-[100%] w-[100%] rounded-tr-xl "

                                         />
                                      </div>
                                      <div className="p-2 ">
                                         <div className="font-semibold text-xl text-black">{item.nom}</div>


                                         <span>
                     {(() => {
                        const format = new Date(formattedDate2);
                        const date1 = new Date(item.date_debut);
                        const date2 = new Date(item.date_fin);

                        if (format.getTime() < date1.getTime()) {
                           return (

                               <div>
                                  <p>Formation à venir</p>
                                  <button
                                      className="bg-black text-white rounded-md p-2 text-xs transition duration-300 transform hover:scale-105"
                                      onClick={() => {
                                         GotoAdd2(item.nom)
                                      }}
                                  >Participer a la formation
                                  </button>
                               </div>


                           )

                        } else if (format.getTime() === date1.getTime()) {
                           return (

                               <div>
                                  <p>Formation en cours</p>
                                  <button
                                      className="bg-black text-white rounded-md p-2 text-xs transition duration-300 transform hover:scale-105"
                                      onClick={() => {
                                         GotoAdd2(item.nom)
                                      }}
                                  >Participer a la formation
                                  </button>
                               </div>


                           )

                        } else if (format.getTime() > date1.getTime() && format.getTime() < date2.getTime()) {
                           return (

                               <div>
                                  <p>Formation en cours</p>
                                  <button
                                      className="bg-black text-white rounded-md p-2 text-xs transition duration-300 transform hover:scale-105"
                                      onClick={() => {
                                         GotoAdd2(item.nom)
                                      }}
                                  >Participer a la formation
                                  </button>
                               </div>


                           )
                        } else if (format.getTime() === date2.getTime()) {
                           return (

                               <div>
                                  <p>Formation en cours</p>
                                  <button
                                      className="bg-black text-white rounded-md p-2 text-xs transition duration-300 transform hover:scale-105"
                                      onClick={() => {
                                         GotoAdd2(item.nom)
                                      }}
                                  >Participer a la formation
                                  </button>
                               </div>


                           )
                        } else if (format.getTime() > date2.getTime()) {
                           return "Formation deja cloturé";
                        } else {
                           return null;
                        }

                     })()}
                  </span>
                                         <div className="font-normal text-sm">
                                            <span
                                                className="font-[gotham]">Du {formatDate(item.date_debut)}</span> au <span
                                             className="font-[gotham]">{formatDate(item.date_fin)}</span>
                                         </div>
                                         <div className="font-normal text-sm">Facturé a :<span
                                             className="font-[gotham] text-[#04f32c]"> {item.Prix_formation} FCFA</span>
                                         </div>

                                      </div>
                                   </div>
                               ))}
                            </div>
                        )}
                     </div>

                  </div>


               </div>

               <br></br>
               <div className="relative  h-auto  ">
                  <div className="relative h-[70%] mx-4 leading-4   ">
                     <div
                         className="bg-red-900 bg-no-repeat   bg-cover   relative w-[88%] md:w-[58%] lg:w-[38%] rounded-tr-full justify-center">

                        <h1 id="presentation"
                            className="text-sm py-2 px-2  text-white bg-clip-text  font-semibold my-9 leading-4 uppercase">
                           partenaires de festim afrique</h1>
                     </div>


                     <div className="  w-auto text-lg gap-3 flex items-center justify-center">
                     <span className=" "> Les partenaires connus de (<span className=" text-green-600 font-semibold ">FESTIM AFRIQUE</span>) sont :
                     </span>
                        {/*<span className="text-3xl text-red-800 font-semibold">{number}</span>*/}
                        {/*<span className=" "> évenements organisées*/}
                        {/*</span>*/}
                     </div>
                  </div>
                  {/*<div className="relative w-full  h-[70%] md:h-[100%]  mt-10  ">*/}

                  {/*</div>*/}


                  <div className="relative h-[15%] md:h-[10%] lg:h-[15%] w-full overflow-x-hidden  ">
                     <div
                         className="relative w-[90%] md:w-[98%] mx-auto  flex flex-row  gap-4 p-4 mb-3 animate-scroll-step "
                         style={{transform: `translateX(-${scrollIndex2 * itemWidth2}rem)`}}
                     >
                        {loading2 && (
                            <div className="flex flex-row space-x-4">
                               {item.map((item, index) => (
                                   <div key={index}
                                        className="relative w-72 md:w-96  cursor-pointer bg-gray-100 border border-gray-200 hover:bg-gray-100/85 rounded-xl hover:shadow-2xl transition duration-300"
                                       // onClick={() => {
                                       //    GoToUpdate(item.id, item.nom)
                                       // }}
                                   >
                                      <div className="h-80 w-full flex items-center  justify-center">
                                         <img src={`/${item.photo}`} alt={`Media ${item.id}`}
                                              className="object-center   "

                                         />
                                      < /div>
                                      <div className="p-2 text-center">
                                         <div className="font-semibold text-xl text-black">{item.nom}</div>

                                      </div>
                                   </div>
                               ))}
                            </div>
                        )}
                     </div>
                  </div>


               </div>
               <br></br>

               {/*fin*/}


               <div className="relative  h-auto    ">
                  <div
                      className="bg-red-900 relative bg-no-repeat   bg-cover  h-[50%] mx-4  w-[50%] md:w-[60%] lg:w-[50%]  rounded-tr-full justify-center  ">

                     <h1 id="presentation"
                         className="text-[15px]  px-2 py-2 text-white bg-clip-text  font-semibold my-2 leading-4 uppercase">
                        beneficiare </h1>
                  </div>
                  <ul className="relative h-[20%] w-[89%] md:w-[95%] lg:w-[55%] mx-8   list-disc list-inside  ">
                     <li
                         className="text-xs md:text-sm  leading-tight mt-2 text-justify gap-2 font-medium flex items-center font-[Poppins] ">
                        <span className="h-1.5 w-1.5 bg-green-600 rounded-full mr-1"></span>Les entrepreneurs ,les
                        Etudiants Universitaires
                        et finaliste des écoles professionelles.
                     </li>
                  </ul>
               </div>

               <br></br>
               <div className="relative  h-auto   ">


                  <div
                      className="bg-red-900 relative bg-no-repeat   bg-cover  ] h-[5%] mx-4  w-[90%] md:w-[80%] lg:w-[46%]  rounded-tr-full justify-center  ">

                     <h1 id="presentation"
                         className="text-[15px]  px-2 py-2 text-white bg-clip-text  font-semibold my-2 leading-4 uppercase">
                        guide pratique des activités preludes et festival 2024 </h1>
                  </div>


                  <div className="w-[100%]  h-[100%]">
                     <img
                         className=" object-cover"
                         src={e.src}
                         height={950}
                         width={950}
                         alt="Nfc"
                     />
                  </div>
               </div>


            </div>

            <br></br>

            <div className="fixed bottom-6 right-8 w-8 z-50">
               {/* Contenu de la bulle */}
               <div className="bg-blue-500 text-white p-2 rounded-full shadow-lg">
                  <img
                      src={discours.src}
                      alt={`Logo `}
                      width="5"
                      height="8"
                      className=" object-center  relative w-full h-full  "
                  />
               </div>
            </div>


            <div>
               <Pied/>
            </div>

         </div>


         {
            Reservation ? (<AddReservation NumReservation={NumReservation} SetReservation={SetReservation}
                                           handleClickButton8={handleClickButton8}/>) : null
         }

         {
            FormationReservation ? ( <AddReservationForFormation  NumFormation={NumFormation} SetFormationReservation={SetFormationReservation} handleClickButton8={handleClickButton8} />) : null
         }

         {
            ShowNotifications ? (
                < Notifications SetNotifications={SetNotifications} valueNotification={valueNotification}/>) : null
         }

      </>
   )
}