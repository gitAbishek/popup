import React from "react";
import { ImCross } from "react-icons/im";
import { GrCircleInformation } from "react-icons/gr";

const LiquidityCart = () => {
  return (
    <div className="flex flex-col rounded-lg w-[250px] h-[310px] bg-orange-200 p-4">
      <p className="text-lg bold font-extrabold">WAX-WD LP Pool</p>
      <div className="py-2">
        <p className="text-md ">APR : 42%</p>
        <div className="flex justify-between mb-2">
          <p>Earn :</p>
          <p className="pr-5">WD</p>
        </div>
        <div className="flex justify-between mb-8">
          <p>Earned WD</p>
          <span className="">
            <button className="bg-red-600 text-white px-2 rounded-lg">
              Claim
            </button>
          </span>
        </div>
        <div className="">
          <p className="text-md font-semibold  ">
            Staked WG :{" "}
            <span className="bg-white text-sky-300 px-2 ">
              12,356 <span className="text-red-400 pl-2"> WD</span>
            </span>{" "}
          </p>
        </div>
        <div>
          <p className="text-sm mt-2 flex justify-center items-center ">
            Add Equidity here{" "}
            <span className="pl-2">
              <button className="bg-black text-white px-3  rounded-lg">
                + Add
              </button>
            </span> 
          </p>
        </div>
        <div className="mt-5 flex justify-center items-center ">
          <p className="text-sm text-red-500 font-semibold pr-1">
            Look up time : 20 D
          </p>
          <GrCircleInformation className="bg-red-500 rounded-2xl items-center tet-white hover:cursor-pointer " />
        </div>
        <div className="flex justify-center gap-2 mt-4">
          <button className="bg-red-600 text-white px-7 py-1 rounded-lg">
            Stake
          </button>
          <button className="bg-red-600 text-white px-7 py-1 rounded-lg">
            UnStake
          </button>
        </div>
      </div>
    </div>
  );
};

export default LiquidityCart;
