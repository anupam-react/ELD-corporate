import React from "react";
import isymbol from "../Assets/Reports/isymbol.svg";
import { Link } from "react-router-dom";
const Reports = () => {
  return (
    <div className="p-5">
      <div className="flex justify-between items-center">
        <div className="text-[28px] font-semibold">Reports</div>
        <div>
          <button className="bg-[#34B7C1] w-[182px] h-[45px] rounded-lg text-white">
            Report History
          </button>
        </div>
      </div>
      <hr className="mt-5" />
      <div className="mt-5 flex gap-2 flex-wrap">
        <Link to="/Reportdetails">
          <div className="bg-[#F0FAFB] border w-[290px] h-[138px] rounded-xl flex justify-center items-center">
            <div className="flex flex-col gap-5 items-center">
              <img src={isymbol} alt="" className="w-[40px] h-[40px]" />
              <div className="font-semibold text-[20px]">Critical Event</div>
            </div>
          </div>
        </Link>
        <div className="bg-[#F0FAFB] border w-[290px] h-[138px] rounded-xl flex justify-center items-center">
          <div className="flex flex-col gap-5 items-center">
            <img src={isymbol} alt="" className="w-[40px] h-[40px]" />
            <div className="font-semibold text-[20px]">Critical Event</div>
          </div>
        </div>
        <div className="bg-[#F0FAFB] border w-[290px] h-[138px] rounded-xl flex justify-center items-center">
          <div className="flex flex-col gap-5 items-center">
            <img src={isymbol} alt="" className="w-[40px] h-[40px]" />
            <div className="font-semibold text-[20px]">Critical Event</div>
          </div>
        </div>
        <div className="bg-[#F0FAFB] border w-[290px] h-[138px] rounded-xl flex justify-center items-center">
          <div className="flex flex-col gap-5 items-center">
            <img src={isymbol} alt="" className="w-[40px] h-[40px]" />
            <div className="font-semibold text-[20px]">Critical Event</div>
          </div>
        </div>
        <div className="bg-[#F0FAFB] border w-[290px] h-[138px] rounded-xl flex justify-center items-center">
          <div className="flex flex-col gap-5 items-center">
            <img src={isymbol} alt="" className="w-[40px] h-[40px]" />
            <div className="font-semibold text-[20px]">Critical Event</div>
          </div>
        </div>
        <div className="bg-[#F0FAFB] border w-[290px] h-[138px] rounded-xl flex justify-center items-center">
          <div className="flex flex-col gap-5 items-center">
            <img src={isymbol} alt="" className="w-[40px] h-[40px]" />
            <div className="font-semibold text-[20px]">Critical Event</div>
          </div>
        </div>
        <div className="bg-[#F0FAFB] border w-[290px] h-[138px] rounded-xl flex justify-center items-center">
          <div className="flex flex-col gap-5 items-center">
            <img src={isymbol} alt="" className="w-[40px] h-[40px]" />
            <div className="font-semibold text-[20px]">Critical Event</div>
          </div>
        </div>
        <div className="bg-[#F0FAFB] border w-[290px] h-[138px] rounded-xl flex justify-center items-center">
          <div className="flex flex-col gap-5 items-center">
            <img src={isymbol} alt="" className="w-[40px] h-[40px]" />
            <div className="font-semibold text-[20px]">Critical Event</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
