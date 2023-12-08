import React from 'react'
import { FaRegUser } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import logo from "../assets/LoGO.svg";

const Navigation = () => {
  return (
    <div className="navbar text-white font-small">
  <div className="navbar-start">
    <div className="dropdown ">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu text-slate-800 menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-ba rounded-box w-52">
        <li><a>Saqlash</a></li>
        <li className=''>
          <a>Parent</a>
          <ul className="p-2 text-slate-400 font-small">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
              <img src={logo} alt="" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-[16px]">
      <li>
        <details>
          <summary>Katalog</summary>
          <ul className="p-2 text-slate-900 w-56">
            <li><a>Erkaklar kostyumlari</a></li>
            <li><a>Ayollar kostyumlari</a></li>
            <li><a>Maxsus buyurtma </a></li>
            {/* <li><a>Submenu 2</a></li> */}
          </ul>
        </details>
                  </li>
      <li><a>Saqlash</a></li>
                  
      <li><a>Yetkazib berish</a></li>
      <li><a>Biz haqimizda</a></li>
    </ul>
  </div>
  <div className="navbar-end gap-4">
              <div className="flex items-center gap-2 py-2 px-4 bg-white">
            <IoSearchOutline color="#B6B6B6" size={20} />
            <input
              className="outline-none font-small border-none w-[214px] h-full text-slate-800"
              type="text"
              placeholder="Qidirish"
            />
          </div>
              <FaRegUser size={25} />
            <IoCartOutline size={25} />
  </div>
</div>
  )
}

export default Navigation