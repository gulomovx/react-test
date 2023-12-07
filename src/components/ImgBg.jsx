import React from "react";
import bg1 from "../assets/imgbg1.png";
import bg2 from "../assets/imgbg2.png";
import bg3 from "../assets/imgbg3.png";
const ImgBg = () => {
  return (
    <div className="mt-16 w-full">
      <div className="flex  gap-8">
        <div className="flex flex-col gap-8 w-[50%] ">
          <div
            className="w-full  backdrop-brightness-50 	 object-cover flex  p-16"
            style={{
              background: `url(${bg1})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <h1 className="text-[48px] my-[30px] text-white z-10 brightness-110    ">
              AYOLLAR UCHUN
            </h1>
          </div>
          <div
            className="w-full bg backdrop-brightness-50	 object-cover flex  p-16"
            style={{
              background: `url(${bg2})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <h1 className="text-[48px] my-[30px] text-white    ">
              ERKAKLAR UCHUN
            </h1>
          </div>
        </div>
        <div
          className="w-[50%] bg backdrop-brightness-1	 object-cover flex items-center  p-16"
          style={{
            background: `url(${bg3})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <h1 className="text-[48px] my-[30px] text-white    ">
            MAXSUS BUYURTMA
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ImgBg;
