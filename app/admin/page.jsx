"use client"
import Image from 'next/image';
import { useState , useEffect} from "react";
// import  inputz from "@/components/input";
import axios from  'axios'
import {useRouter} from "next/navigation";

export default function page() {
   const apiUrl = process.env.NEXT_PUBLIC_API_URL ;
   const [filteredData, setFilteredData] = useState([]); // Initialize with all data
   const [isSubmit,SetIsSubmit] = useState(false)
   const router = useRouter();
   const [icon, setIcon] = useState({
      4: "blind",
      5: "blind"
   });
   const [Errors,SetErrors] = useState({})
   const [values, setValues] = useState({
      password:"",
   });
   const input = [
      { id: 4, name: "password",type: icon[4] === "blind" ? "password" : "text",value: values.password  , placeholder: "password", label: "Entrez le mot de Passe", className: "text-large relative w-[100%] text-gray-700 border rounded-[10px] border-gray-300 py-2 px-4 h-12 focus:outline-none focus:border-blue-500",
         error:values.password ?  /[^\w\d]+/.test(values.password) ? 'Ce champ ne doit pas contenir de caractères spéciaux' :  values.password !== filteredData ? 'Mot de Passe Incorrect' :null :'Saisissez votre Mot de Passe ', img: `/icons/${icon[4] || "blind"}.png` }
   ]
   const showChar = (id) => {
      setIcon(prevState => ({
         ...prevState,
         [id]: prevState[id] === "blind" ? "Eye" : "blind",

      }));
   };



   const getData = async () => {
      try {
         // Remplacez l'URL par la bonne URL de votre API
         const response = await axios.get(`${apiUrl}/get_mdp.php`);
         // console.log(response.data && response.data.recu && response.data.recu.length > 0)
         if (response.data && response.data.recu && response.data.recu.length > 0) {
            // Vérifiez que la réponse contient les données attendues
            console.log(response.data.recu[0].contenu)
            setFilteredData(response.data.recu[0].contenu)

         } else {
            console.log("La réponse de l'API est incorrecte ou ne contient pas de données.",response);
         }
      } catch (error) {
         console.error("Une erreur s'est produite lors de la récupération des données de l'API : ", error);
      }
   };
   useEffect(() => {
      getData()
   }, []);


   const handleChange = (e) => {
      const { name, value } = e.target ;
      let cleanedAddress = '';
      cleanedAddress = value.replace(/[^\w\s]/gi, '');
      //cleanedAddress = cleanedAddress.replace(/\b\w/g, char => char.toUpperCase());

      setValues({...values, [name] : cleanedAddress})
      console.log(values)
      // faire ca avec label
   };
   const handleSummit = () => {
      SetIsSubmit(true);
      console.log(values);
      console.log(filteredData)
      const hasErrors = Object.values(Errors).some((error) => error);
      if (!hasErrors) {
         // S'il n'y a pas d'erreur, vérifiez si le mot de passe est correct
         if (values.password === filteredData) {
            // Si le mot de passe est correct, redirigez vers "/admin/home"
            router.push(`/admin/home`);
         } else {
            // Si le mot de passe est incorrect, ne rien faire
            // console.log("Mot de passe incorrect");
         }
      }
   };


   return(
      <>
         <section className=" z-20 opacity-100 relative  h-screen w-screen">
            <div className="bg-gradient-to-t from-white via-black/40 to-black/5 z-30 h-screen opacity-80 " ></div>


            {/*<div className="fixed w-[700px] h-[700px] 2xl:w-[900px] 2xl:h-[900px] bg-white rounded-full -left-[110px] -top-[118px] 2xl:-left-[170px] 2xl:-top-[170px]"></div>*/}

            <div className="absolute top-20 mx-3 md:mx-4  w-[95%]  md:w-[98%]  flex flex-col items-center justify-center lg:flex-row z-10  gap-1">
               <div className="lg:h-[70vh]  flex flex-col gap-4  lg:w-[45%] py-3  mx-auto">
                  <div className="relative mx-auto md:-mx-12 h-[75%] w-[100%] ">
                     <img
                        className="object-contain"
                        src="/AFFICHE FESTTM AFRIQUE 2024copie2.png"
                        fill
                        alt="Nfc"
                     />
                  </div>
                  <div className='relative text-black text-center font-bold text-4xl w-[100%] md:w-[100%] lg:w-[80%]  '>
                     Bienvenu au &nbsp;
                     <span className="text-green-500">FESTIVAL D'IMAGES D' </span>
                     <span className="text-black">Afrique</span>
                  </div>

               </div>

               <div  className="bg-white w-full flex-1 h-full max-w-2xl rounded-xl shadow-lg py-16 mt-12  ">
                  {/*onSubmit={handleSubmit}*/}
                  <div className="flex flex-col lg:flex-row items-center relative h-full">
                     <div className="relative w-[100%]  h-[100%] px-4 md:px-8 lg:px-12  " >
                        <h2 className="text-center  col-span-12 text-black text-[20px] uppercase font-semibold mb-4">Connecter vous</h2>

                        {input.map((inputs) => (
                           <div className="rounded-md h-12 mx-auto" key={inputs.id}>
                              <label className="text-[12px] font-semibold h-1 text-black ">{inputs.label}</label>
                              <div className="relative">
                                 <input
                                    placeholder={inputs.placeholder}
                                    type={inputs.type}
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
                        <div className="w-full px-6 lg:px-0 flex items-center justify-center mt-12">
                           <button className="w-full lg:w-fit bg-green-600 hover:bg-green-800 text-white transition duration-300 transform hover:scale-105 px-28 py-4 rounded-md font-semibold" onClick={()=>{handleSummit()}}>Connexion</button>
                        </div>

                     </div>

                  </div>

               </div>

            </div>

         </section>

      </>
   )

}