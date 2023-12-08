import React from 'react'
import { useState } from 'react';
import { MdOutlineCancelPresentation } from "react-icons/md";

const Warning = () => {
  const [hide, setHide] = useState(true)
  const handleHide = () => {
    setHide(false)
  }
  return (
    <>
      {hide ? (
        <div className='w-full h-10 bg-blue-950 font-small'>
        <div className="text-white ml-auto max-w-4xl h-full flex items-center justify-between      ">
        <p className="text-white ">Diqqat sayt <span className='font-bold'>TEST REJIMIDA</span> ishlamoqda!!!</p>
            
        <MdOutlineCancelPresentation onClick={()=>handleHide()} size={20} className='text-end relative cursor-pointer'/>
        </div>
        
    </div>
      ):''}
      
    </>
      
  )
}

export default Warning