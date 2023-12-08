import React from 'react'
import HonimCart from './HonimCart'
import img1 from '../assets/manImg.png'
import img2 from '../assets/manImg1.png'
import img3 from '../assets/manImg2.png'
import img4 from '../assets/manImg3.png'
import { GoArrowRight } from "react-icons/go";

const Erkaklar = () => {
  return (
      <div>
          <div className="mt-16">
        <h1 className="text-[76px] text-slate-800 ">ERKAKLAR UCHUN MAXSUS TAKLIF</h1>
        <div className="flex items-center gap-4 mt-8">

        <HonimCart img={img1} text='Erkaklar uchun'/>
        <HonimCart img={img2} text='Erkaklar uchun'/>
        <HonimCart img={img3} text='Erkaklar uchun'/>
        <HonimCart img={img4} text='Erkaklar uchun'/>
        </div>
        <button className='px-6 py-4 group hover:shadow-md hover:shadow-red-500 duration-300 bg-red-600 text-white flex items-center gap-2 mt-6'>
          BATAFSIL
           <GoArrowRight size={20} className='group-hover:translate-x-1 transition'/>
        </button>
          </div>
    </div>
  )
}

export default Erkaklar