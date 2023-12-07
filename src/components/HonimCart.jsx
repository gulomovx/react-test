import React from 'react'
import { FaStar } from "react-icons/fa";

const HonimCart = ({ img }) => {
    
  return (
      <div>
          <div className="relative">
              <img src={img} alt="" className='transition duration-300 ease-in-out hover:scale-110' />
              <span className="bg-red-600 text-white rounded-2xl flex items-center justify-center absolute w-16 top-2 left-60">
                  <FaStar color='yellow'/>
                  4.95</span>
              <p className="text-slate-500">AYOLLAR UCHUN</p>
              <h1 className="text-slate-500">Kastyum Turi</h1>
              <p className="text-slate-500">ID XXX</p>
          </div>
    </div>
  )
}

export default HonimCart