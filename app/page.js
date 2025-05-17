"use client"
import '@/styles/animation.css'
import React, {useEffect} from 'react';
import {useState} from "react";

import Pied from "../components/Pied"
import NavBar from "@/components/NavBar";
import Image from 'next/image'
import {useRouter} from "next/navigation";
import Style from "@/styles/bubble.css"
export default function Home() {
    const item = [
        {
            "id": 1,
            "nom": "Nous mettons a votre disposition des ordinateurs de bureaux,des PC a des prix défiants toute concurences de marque : hp,DELL,Acer ... ",
            "photo": "media/img/burautique.jpg",
            "details" : ""

        },
        {
            "id": 2,
            "nom": "Des pneus,volants et articles automoniles sont egalement disponibles sur notre boutiques.Qu'importe le modele vous serez servi",
             "photo": "media/img/auto.png",
            "details" : ""

        },
        {
            "id": 3,
            "nom": "Des chaussures classiques de toute tailles pour hommes sont disponibles,a des prix défiant toute concurrence ...",
            "photo": "media/img/chaussure-cuir-homme-bout-fleuri.jpg",
            "details" : ""

        },
        {
            "id": 4,
            "nom": "Pour vos séances de sport,des marques comme : Nike,Adidas sont mises en vente sur le site ....",
            "photo": "media/img/do7193-007__chaussure-jordan-one-take-4-pour-homme-do7193-007_01_2.jpg",
            "details" : ""

        },
        {
            "id": 5,
            "nom": "Des pulls,chemises,pantalons :homme/femme sont également pret pour votre plaisir",
            "photo": "media/img/ensemble-2-pieces-veste-pantalon-noir2.jpg",
            "details" : ""
        },
        {
            "id": 6,
            "nom": "MOSALA CG vous propose une large gamme d'équipement sportif :ballons,sifflet ....",
           "photo": "media/img/Equipement-sportif-m.jpg",
            "details" : "",

        },
        {
            "id": 7,
            "nom": "Les dernieres marques de smartphones sont egalement mise en vente :Wikoo,Techno,Samsung ....",
             "photo": "media/img/Galaxy-S9-920x613.jpg",
            "details" : ""      },
        {
            "id": 8,
            "nom": "Vos enfants aussi trouveront des jouets a leur guise ...",
            "photo": "media/img/jouet.JPG",
            "details" : "",

        }, {
            "id": 9,
            "nom": "Et bien d'autre",
            "photo": "media/img/more-106.PNG",
            "details" : "",

        },
    ]

    const [loading2 , SetLoading2 ] = useState(false)

    const [isSubmit,SetIsSubmit] = useState(false)
    const [scrollIndex2, setScrollIndex2] = useState(0);
    const itemWidth2 = 18; // Adjust this value based on your item width and gap

    useEffect(() => {
        const interval2 = setInterval(() => {
            setScrollIndex2((prevIndex) => (prevIndex + 1) % item.length);
        }, 2000); // Change the delay to suit your needs
        // ca fait bouger les element avec un distance de 21 et une intervalle de 3000 donc 3 secondes
        //le styles fait bouge les image via animate scrool
        return () => clearInterval(interval2);
    }, [item.length]);



    const [focus , SetFocus] = useState(false)
    const [values, setValues] = useState({
        username: "",
        password: "",
        date:""
    });
    const input = [
        { id: 1, name: "username", type: "text", placeholder: "Nom",value: values.username   ,label: "Entrez votre Username", className: `text-xl w-[90%] text-gray-700 bg-white/75 border rounded-lg border-gray-300 py-2 px-10 h-14 focus:outline-none focus:border-blue-500 `,
            img: `media/icons/search_filled_127px.png`,
        }
    ]

    const handleChange = (e) => {
        const { name, value } = e.target;

        // Expression régulière pour lettres avec accents et chiffres
        const regex = /^[\p{L}\p{N}\s'-]*$/u;

        // Teste si la nouvelle valeur est autorisée
        if (regex.test(value)) {
            setValues({ ...values, [name]: value });
            console.log(values);
        }
    };
    useEffect(() => {

        SetLoading2(true)
    }, []);


    return (


      <>
          <div className="relative min-h-screen bg-white">
              <div className="absolute inset-0 bg-gradient-to-l from-blue-500/30 to-transparent z-10"/>

              {/* Navbar visible en haut */}
              <div className="relative z-30">
                  <NavBar/>
              </div>

              {/* Section contenant l’image réduite et centrée */}
              <div className="flex items-start justify-center py-10">
                  <div className="relative w-[90vw] h-[60vh] rounded-3xl overflow-hidden shadow-lg">
                      <div
                          className="absolute z-40 text-white    mx-6 my-16 gap-y-1 font-[Segoe UI] font-semibold flex flex-col ">
                          <span className="text-white text-3xl font-bold">Bienvenu sur</span>
                          <span className=" mt-2 text-[65px] text-blue-900">La principale plateforme e-commerce de
                           <span className="mt-6 text-7xl font-[Poppins] text-violet-800"> MOSALA CG</span>

                          </span>
                          <span className="text-white text-xl font-bold">+ de 600 Produits disponibles dans plusieurs catégories</span>


                          <div
                              className="absolute z-20 w-[50%] h-[60%] p-2 mx-[580px] my-[108px]  flex flex-col items-center justify-center space-y-4">

                              {input.map((inputs) => (
                                  <div
                                      className="rounded-md h-24 w-full  mx-auto flex flex-col items-center justify-center"
                                      key={inputs.id}>
                                      <div className="absolute w-full  ">
                                          <input
                                              onFocus={() => SetFocus(true)}
                                              onBlur={() => SetFocus(false)}
                                              type={inputs.type}
                                              name={inputs.name}
                                              className={inputs.className}
                                              onChange={(e) => handleChange(e)}
                                              value={inputs.value}
                                              defaultValue={inputs.defaultValue}
                                          />
                                          {inputs.img ? (
                                              <img src={inputs.img} alt=""
                                                   className="absolute right-20 top-[26%] cursor-pointer   transition duration-300 transform hover:scale-125"
                                                   width={30}
                                                   height={30} onClick={() => showChar(inputs.id)}/>
                                          ) : null}
                                          <span
                                              className={(focus || values.username) ? "absolute left-3 p-1  w-auto top-4 text-lg font-bold text-black -translate-y-12 duration-300" : "absolute tracking-wide  pointer-events-none duration-300 left-0 top-4 px-10 text-sky-900"}>
                    {inputs.label}
                          </span>


                                      </div>
                                      <div>
                                          {/*{ Errors[inputs.name]  ? (<> <div className="text-[75%] text-red-600"> {inputs.error} </div> </> ): null  }*/}
                                          {isSubmit && inputs.error ? (
                                              <div className=" text-[70%] text-red-600">{inputs.error}</div>
                                          ) : null}
                                      </div>


                                  </div>

                              ))}

                          </div>


                      </div>

                      {/* Image de fond */}
                      <Image
                          src="/media/A-548.JPG"
                          alt="Fond"
                          layout="fill"
                          objectFit="cover"
                          className="z-0"
                          priority
                      />


                      {/* Dégradé horizontal (transparent -> noir) */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/80 z-10"/>

                      {/* Contenu par-dessus si nécessaire */}


                  </div>
              </div>

              <br></br>

              <div className="relative h-auto  w-full overflow-hidden z-20">

                  <div
                      className="relative w-[90%] md:w-full  mx-auto   flex flex-row  gap-6 p-4 mb-2 animate-scroll-step   "
                      style={{transform: `translateX(-${scrollIndex2 * itemWidth2}rem)`}}
                  >
                      {loading2 && (
                          <div className="flex flex-row space-x-4">
                              {item.map((item, index) => {
                                  const isSpecial = item.id === 9; // ✅ Cible l'article avec l'ID 9

                                  return (
                                      <div
                                          key={index}
                                          className="relative w-72 md:w-80 cursor-pointer bg-transparent rounded-lg border border-blue-300"
                                      >
                                          <div className="flex flex-col h-80 w-full items-center justify-center">
                                              <img
                                                  src={`/${item.photo}`}
                                                  alt={`Media ${item.id}`}
                                                  className="relative object-center h-auto w-[90%] rounded-lg"
                                              />
                                          </div>

                                          <div className="p-2 text-center mb-3">
                                              <div className="font-normal text-sm text-blue-900 hover:underline">
                                                  {item.nom}
                                              </div>

                                              <br/>

                                              {isSpecial ? (
                                                  // ✅ Rendu personnalisé pour ID 9
                                                  <button
                                                      className="flex flex-row items-center mx-auto justify-center gap-2 bg-green-600 text-xs text-white px-5 py-3 rounded-lg hover:bg-green-800 transition duration-300 transform hover:scale-105"
                                                  >
                                                      <img
                                                          src="/media/icons/View More_127px.png"
                                                          alt="Spécial"
                                                          className="relative h-4 w-4 -mt-1"
                                                      />
                                                      Ouvrir nos catalogue
                                                  </button>
                                              ) : (
                                                  // 🌐 Rendu standard pour les autres
                                                  <button
                                                      className="flex flex-row items-center mx-auto justify-center gap-2 bg-[rgb(170,102,199)] text-xs text-white px-5 py-3 rounded-lg hover:bg-purple-900 transition duration-300 transform hover:scale-105"
                                                  >
                                                      <img
                                                          src="/media/icons/shopping_bag_filled_127px.png"
                                                          alt="Fond"
                                                          className="relative h-4 w-4 -mt-1"
                                                      />
                                                      Consulter ce catalogue
                                                  </button>
                                              )}
                                          </div>
                                      </div>
                                  );
                              })}
                          </div>

                      )}
                  </div>


              </div>

              <br></br>
              <div className="relative  bg-[url('../public/media/istockphoto-508319912-612x6121.jpg')] h-60 bottom-0">

                  <Pied/>
              </div>

          </div>

      </>
    )
}
