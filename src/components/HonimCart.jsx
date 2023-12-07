import React from 'react'
import { FaStar } from "react-icons/fa";

const HonimCart = ({ img }) => {
    
  return (
      <div>
          <div className="transition duration-300 hover:scale-105">
        <img src={img} alt="" className='' />
        <div className="z-10">

              <span className="bg-red-600 text-white rounded-2xl flex items-center justify-center relative w-16 bottom-[410px] left-60">
                  <FaStar color='yellow'/>
                  4.95</span>
              <p className="text-slate-500">AYOLLAR UCHUN</p>
              <h1 className="text-slate-900 text-[28px]">Kastyum Turi</h1>
          <p className="text-slate-500">ID XXX</p>
        </div>
          
          </div>
    </div>
  )
}

export default HonimCart