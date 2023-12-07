import React from 'react'
import { MdOutlineCancelPresentation } from "react-icons/md";

const Warning = () => {
  return (
      <div className='w-full h-10 bg-blue-950 flex justify-end items-center'>
          <div className="text-end w-full  absolute top-2 text-white flex my-auto  items-center justify-between  ">
          <p className="text-white text-center">Diqqat sayt <span className='font-bold'>TEST REJIMIDA</span> ishlamoqda</p>
              
          <MdOutlineCancelPresentation className='text-end relative '/>
          </div>
          
    </div>
  )
}

export default Warning