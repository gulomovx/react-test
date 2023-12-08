import React from "react";

const FeatureOne = ({ children, text,padding }) => {
  return (
    <div className="mt-16">
      <div className="border-solid border-[25px] w-[300px] h-auto border-slate-300 inline-block text-center p-6">
        <div className="bg-red-600 rounded-full inline-block p-4 text-white hover:scale-110 duration-300">
          {children}
        </div>
        <div className="text-[28px]">{text} </div>
        <p className={`${padding && 'my-[40px]'} my-4`}>
          Lorem ipsum dolor sit amet consectetur. Suspendisse laoreet
          scelerisque morbi vulputate. Quisque bibendum eget id diam elementum
          fringilla duis.{" "}
        </p>
      </div>
    </div>
  );
};

export default FeatureOne;
