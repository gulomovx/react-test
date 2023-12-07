import React from "react";
import { useState } from "react";

const HeaderCard = ({ img, id, text, reverse }) => {
  const [rotate, setRotate] = useState(false);
  return (
    <div className="bg-slate-100 mt-4 ">
      <div className={`flex items-center gap-4 ${reverse && "flex-row-reverse"}`}>
        <img src={img} alt="" />
        <div className="">
          <h1 className="text-2xl">{text}</h1>
          <h1 className="text-2xl my-4">{id}</h1>
          <a href="/" className=" underline">
            KO'RISH
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeaderCard;
