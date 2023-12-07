import React from "react";
import icon1 from "../assets/hamkor1.svg";
import icon2 from "../assets/hamkor2.svg";
const Hamkorlar = () => {
  return (
    <div className="bg-slate-200">
      <div className="max-w-[1345px] mx-auto  ">
        <h1 className="text-[76px]">HAMKORLARIMIZ</h1>
        <div className="flex gap-28 mt-4 pb-8 ">
          <img src={icon1} alt="" />
          <img src={icon2} alt="" />

          <img src={icon1} alt="" />
          <img src={icon2} alt="" />

          <img src={icon1} alt="" />
          <img src={icon2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hamkorlar;
