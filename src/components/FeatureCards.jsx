import React from "react";
import FeatureOne from "./FeatureOne";
import { IoWallet } from "react-icons/io5";
import { HiHandThumbUp } from "react-icons/hi2";
import FeatureTwo from "./FeatureTwo";
import { IoCallSharp } from "react-icons/io5";
import { BsRocketTakeoffFill } from "react-icons/bs";

const FeatureCards = () => {
  return (
    <div className="mb-24 flex items-center  gap-8">
      <div className="">
        <FeatureOne text={"Ishimizga 100% javob beramiz   "} padding>
          <HiHandThumbUp />
        </FeatureOne>
      </div>
       <div className="flex flex-col gap-10 mt-16">
        <FeatureTwo text={"24/7 Aloqa markazi"}>{<IoCallSharp />}</FeatureTwo>
        <FeatureTwo text={'Tezkor yetkazib berish'}>
          <BsRocketTakeoffFill/>
        </FeatureTwo>
      </div> 
      <div className="">
        <FeatureOne text={"To‘lov usulining sodda va tushunarliligi"}>
          {<IoWallet />}
        </FeatureOne>
      </div>
    </div>
  );
};

export default FeatureCards;
