import React from "react";

const FeatureTwo = ({ children, text }) => {
  return (
    <div>
      <div className="border-solid border-slate-300 border-[25px] flex gap-4  justify-center p-6">
        <div className="bg-red-600 rounded-full h-12  p-4 text-white ">
          {children}
        </div>
        <div className="">
          <p className="text-[25px]">

          {text}
          </p>
          <p className="">
            Lorem ipsum dolor sit amet consectetur. Suspendisse laoreet
            scelerisque morbi vulputate. Quisque bibendum eget id diam elementum
            fringilla duis.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeatureTwo;
