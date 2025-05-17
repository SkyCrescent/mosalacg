"use client"
import Image from 'next/image';
import React, {useEffect, useState} from "react";
import {useRouter} from "next/navigation";

import Link from "next/link";
import '@/styles/Page.css'

export default function page(){
   const router = useRouter();
    const [focus6 , SetFocus] = useState(false)
    const [values, setValues] = useState({
        service : "Evenements"
    });
    const input3 = [


        {
            id: 2,
            name: "service",
            type: "select",
            placeholder: "sexe",
           // value: values.genre,
            label: "Votre Genre",
            className:
                "text-[9px] md:text-[15px] relative h-[75%] w-[90%] cursor-pointer text-black border  border-gray-400 bg-transparent py-2 px-4 rounded-[5px] focus:outline-none hover:border-green-600 focus:border-green-600 ",

            options: [
                { value: 0, text: "" },
                { value: "1", text: "Formation"},
                { value: "2", text: "Evenements" },
            ],
          //  error: values.genre === "" ? 'Veuillez indiquer le nom de votre école' : null
        }
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        let formattedValue = '';
        let cleanedValue = '';
        let cleanedAddress = '';
        setValues({ ...values, [name]: value });
        console.log(values)
    };

    useEffect(() => {
        console.log("recteur",values);
        // console.log(study1);
    }, [()=>{handleChange()}]);



    return(
      <>

          <div className="relative w-[100%] h-auto bg-white">
              <nav
                  className="relative w-[100%] md:w-full h-[8%] md:h-[10%] lg:h-[16%] flex items-center    justify-evenly    text-md  decoration-amber-500 shadow-xl ">
                  <div
                      className="hidden  relative w-[30%] md:w-[10%] lg:w-[30%] h-[100%] lg:flex items-center md:mx-12 lg:mx-6">
                      <div className="relative h-[100%] bg-green-900 -mx-14 top-0 w-[4%] md:w-[8%] lg:w-[13%] ">

                      </div>
                      <div
                          className="relative h-[100%] mx-8 md:mx-6 lg:mx-12 -top-6 md:-top-0 lg:-top-2 w-[50%] md:w-[800%] lg:w-[50%] ">
                          <img
                              src={logo.src}
                              alt={`Logo `}
                              width="190"
                              height="190"
                              className=" object-center   "
                          />
                      </div>

                  </div>

                  <div
                      className=" relative w-[90%] mx-auto  md:w-[100%] lg:w-[80%] flex flex-col font-normal md:font-bold md:mx-1  ">
                      <div className="hidden md:block">
                          <ul
                              className="   lg:px-1 m-8 md:m-3 lg:m-8 flex justify-between items-center text-blue-900 flex-row gap-6 md:gap-6 lg:gap-6 ">
                              <li className="hover:text-blue-500 "><Link href="/admin/home/actu">Actualites</Link></li>
                              <li className="hover:text-blue-500 " id="barAnime"><Link
                                  href="/admin/home/"> Evénement </Link>
                              </li>
                              <li className="hover:text-blue-500 " id="barAnime"><Link
                                  href="/admin/home/reservations"> Réservations</Link></li>

                              <li className="hover:text-blue-500 " id="barAnime"><Link
                                  href="/admin/home/formation"> Formation</Link></li>


                              <li className="hover:text-blue-500 "><Link href="/admin">Deconnexion</Link></li>

                          </ul>
                      </div>
                      <div
                          className=" md:hidden   relative h-24 w-[100%] mx-auto  flex justify-between items-center text-blue-900 flex-row gap-6">
                          <img
                              src={present.src}
                              alt={`Logo `}
                              width="28"
                              height="28"
                              className=" object-center   "
                              onClick={() => {
                                  router.push(`/admin/home/actu`);
                              }}
                          />
                          <img
                              src={house.src}
                              alt={`Logo `}
                              width="28"
                              height="28"
                              className=" object-center   "
                              onClick={() => {
                                  router.push(`/admin/home/`);
                              }}
                          />
                          <img
                              src={concept.src}
                              alt={`Logo `}
                              width="28"
                              height="28"
                              className=" object-center   "
                              onClick={() => {
                                  router.push(`#`);
                              }}
                          />

                          <img
                              src={plannig.src}
                              alt={`Logo `}
                              width="28"
                              height="28"
                              className=" object-center   "
                              onClick={() => {
                                  router.push(`/admin/home/formation`);
                              }}
                          />

                          <img
                              src={off.src}
                              alt={`Logo `}
                              width="28"
                              height="28"
                              className=" object-center   "
                              onClick={() => {
                                  router.push(`/admin`);
                              }}
                          />

                      </div>

                  </div>


              </nav>


              <div
                  className="absolute   top-36 right-2 z-10 w-[50%] md:w-[20%]     h-auto  items-center justify-center  ">
                  {input3.map((item) => (
                      <div key={item.id}
                           className="items-center relative h-[40%] lg:h-[50%] w-[100%]  ">



                                  <div className=" relative h-[50%] w-[100%] cursor-pointer  ">
                                      <select
                                          key={item.id}
                                          onFocus={() => SetFocus(true)}
                                          onBlur={() => SetFocus(false)}
                                          className={
                                              "text-[9px] md:text-[15px] relative h-[75%] w-[90%]  text-black border  border-gray-400 bg-transparent py-2 px-4 rounded-[5px] focus:outline-none hover:border-sky-500 focus:border-sky-500"
                                              }
                                          name={item.name}
                                          onChange={handleChange /* Remplacez cela par votre logique */}
                                          value={values.service}
                                      >

                                          {input3[0].options.map((option) => (
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
                                      <span
                                          className={(focus6 || values.service) ? "absolute left-3 p-1 w-auto top-6 px-1 text-xs font-black text-blue-900 -translate-y-9 duration-300" : "absolute tracking-wide pointer-events-none duration-300 left-0 top-2 px-2 text-sky-700"}>
                               Choisissez
                                </span>

                                  </div>



                      </div>
                  ))}
              </div>


              <div
                  className="relative w-[100%] h-[54%] border border-l-0  border-r-0 border-b-0   border-gray-500 bg-white">

                  {

                      values.service === 'Formation' ?
                          <ManageFormation/>
                          :  values.service === 'Evenements' ? <ManageEvent/>
                              : <ManageEvent/>

                  }

              </div>

          </div>

      </>
    )
}