import React from "react";
import bg from "../assets/header-bg.svg";
import Navbar from "./Navbar";
import HeaderCard from "./HeaderCard";
import headerImg from "../assets/Rectangle 3@2x.svg";
import header1 from '../assets/header-cart1.svg'
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

const Header = () => {
  return (
    <div
      className="w-full object-cover"
      style={{
        background: `url(${bg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="py-8 max-w-[1345px] mx-auto">
        <Navbar />
        <div className="flex justify-between items-center  pt-[100px]">
          {/* biznes forum va... */}
          <div className="  text-white w-[945px]">
            <p className="text-[16px]">
              TURKIYA USLUBIDA AYNAN SIZ UCHUN KASTYUMLAR
            </p>
            <h1 className="text-[76px]">BIZNES FORUM VA MAXSUS TADBIRLAR UCHUN</h1>
          </div>
          {/* header img component */}
          <div className="relative mt-52">
            <HeaderCard
              img={headerImg}
              id="Id 3000"
              text={"Kostyum turi va ishlab chiqaruvchi"}
            />
            <HeaderCard
              reverse
              img={header1}
              id="Id 3000"
              text={"Kostyum turi va ishlab chiqaruvchi"}
            />
          </div>
        </div>
        {/* batafsil button */}
      </div>
        <p className="text-white flex justify-center items-center text-center gap-2 text-[16px] py-4">BATAFSIL KO’RISH <span className="animate-bounce cursor-pointer">
        <MdKeyboardDoubleArrowDown size={25}/>
        </span></p>
    </div>
  );
};

export default Header;
