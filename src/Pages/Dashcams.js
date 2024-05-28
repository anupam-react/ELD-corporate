import React from "react";
import dashcam from "../Assets/Dashcamra/dashcamra.svg";
import checkarrow from "../Assets/Device/checkarrow.svg";
import youtube from "../Assets/Device/youtube.svg";
const Dashcams = () => {
  return (
    <div className="flex">
      <div className="bg-[#F4F6FA] w-full p-5">
        <div className="w-[80%]  rounded-xl bg-[#F4F6FA] p-5 ">
          <div className="text-[28px]">Driver Monitoring System Preview</div>
          <div className="text-[#858B9A] text-[20px]">
            You are viewing a NXT placeholder powered by a sample data set!
          </div>
          <img src={dashcam} alt="" />
        </div>
      </div>
      <div className="w-[30%] bg-white p-5 ">
        <div className="text-left">
          You are viewing a NXT placeholder powered by a sample data set!
        </div>
        <div className="text-[#858B9A] text-left mt-2">
          Prevent accidents and exonerate drivers.
        </div>
        <div className="mt-5 border rounded-2xl  box-shadow p-6">
          <div className="flex justify-between">
            <div className="flex gap-2">
              <input type="radio" />
              <div className="text-[#858B9A]">Add a Dashcam</div>
            </div>
            <img src={checkarrow} alt="" />
          </div>
          <div className="border rounded-2xl  mt-5 p-5">
            <div className="text-[#858B9A] text-left">
              How to add an Asset Tracker
            </div>
            <div className="mt-5">
              <img src={youtube} alt="" />
            </div>
          </div>
        </div>
        <div className="mt-5 border rounded-2xl  box-shadow p-6">
          <div className="text-[#858B9A] font-semibold text-left">
            Additional Resources
          </div>
          <div className="flex  border-b justify-between py-2">
            <div className="flex ">
              <img src={checkarrow} alt="" />
              <div className="text-[#858B9A]">
                Don't have a Dashcam? Buy Now!
              </div>
            </div>
            <img src={checkarrow} alt="" />
          </div>
          <div className="flex justify-between border-b py-2 ">
            <div className="flex  gap-2">
              <img src={checkarrow} alt="" />
              <div className="text-[#858B9A]">Help Center</div>
            </div>
            <img src={checkarrow} alt="" />
          </div>
          <div className="flex border-b  justify-between py-2">
            <div className="flex gap-2 ">
              <img src={checkarrow} alt="" />
              <div className="text-[#858B9A]">Contact US</div>
            </div>
            <img src={checkarrow} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashcams;
