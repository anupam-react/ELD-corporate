import React from "react";
import { IoMdAdd } from "react-icons/io";
import checkarrow from "../Assets/Device/checkarrow.svg";
import youtube from "../Assets/Device/youtube.svg";
const Sensordevices = () => {
  return (
    <div className="flex">
      <div className="bg-[#F4F6FA] w-[1200px] p-5">
        <div className="w-[880px]  rounded-xl bg-white p-10 ">
          <div className="flex gap-5">
            <div className="w-[400px] pr-5">
              <div className="text-[30px] text-left">
                Secure . Monitor . Protect
              </div>
              <div className="mt-5 text-[20px] text-left text-[#858B9A]">
                Real-time monitoring to take proactive measures to ensure safety
                and integrity of loads.
              </div>
              <div className="mt-5">
                <button className="bg-[#34B7C1] w-[296px] h-[45px] flex justify-center items-center gap-1 text-white">
                  <IoMdAdd />
                  Add Device
                </button>
              </div>
            </div>
            <div className="w-[400px] flex gap-2">
              <div className="w-[200px] bg-[#858B9A] h-[200px]"></div>
              <div className="w-[200px] bg-[#858B9A] h-[200px]"></div>
            </div>
          </div>
          <div className="mt-10">
            <div className="text-[#858B9A] font-bold text-left">
              Our Products
            </div>
            <div className="mt-5 flex gap-2">
              <div className="bg-[#858B9A] w-[300px] h-[150px]"></div>
              <div className="bg-[#858B9A] w-[300px] h-[150px]"></div>
              <div className="bg-[#858B9A] w-[300px] h-[150px]"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[400px] bg-white p-5 ">
        <div className="text-left">A new home for all your IoT data!</div>
        <div className="text-[#858B9A] text-left mt-2">
          Add device to unlock the power of data-driven fleet operations.
        </div>
        <div className="mt-5 border rounded-2xl  box-shadow p-6">
          <div className="flex justify-between">
            <div className="flex gap-2">
              <input type="radio" />
              <div className="text-[#858B9A]">Add Asset Tracker</div>
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
                Don't have an Asset Tracker? Buy Now!
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

export default Sensordevices;
