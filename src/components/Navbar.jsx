import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import logo from "../assets/LoGO.svg";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="max-w-[1345px] mx-auto">
      <div className="flex justify-between items-center text-white">
        {/* logo */}
        <img src={logo} alt="" />
        {/* navlinks */}
        <ul className="flex items-center gap-16 font-small">
          <li>home</li>
          <li>abot</li>

          <li>contact</li>
          <li>blog</li>
        </ul>
        {/* input logo */}
        <div className="flex  items-center gap-4">
          {/* input */}
          <div className="flex items-center gap-2 py-2 px-4 bg-white">
            <IoSearchOutline color="#B6B6B6" size={20} />
            <input
              className="outline-none font-small border-none w-[214px] h-full text-slate-800"
              type="text"
              placeholder="Qidirish"
            />
          </div>
          {/* icons */}
          <div className="flex items-center text-white gap-2">
            <FaRegUser size={25} />
            <IoCartOutline size={25} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
