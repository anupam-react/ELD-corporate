import React from "react";
import { IoMdClose } from "react-icons/io";
import { GiSpeedometer } from "react-icons/gi";
import { IoFilterOutline } from "react-icons/io5";

const Alerts = () => {
  return (
    <div className="p-5">
      {" "}
      <div className="">
        <div className="text-[28px] flex justify-start font-semibold">
          Alerts
        </div>
      </div>
      <div className="flex justify-between items-center mt-5">
        <div>
          <div className="relative mt-2">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <span className=" p-2.5 ml-[-3px] rounded-tl rounded-bl text-white">
                <IoMdClose style={{ color: "#8E8F8F" }} />
              </span>
            </div>
            <input
              className="placeholder: ml-2 block w-[613px] h-[45px] bg-[#F9F9F9] rounded-xl border-0 py-1.5 pl-10 pr-4 text-gray-900  ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              type="date"
            />
          </div>
        </div>
        <div className="">
          <button className=" w-[163px] h-[45px] text-white border bg-[#34B7C1] flex justify-center items-center gap-5 rounded-lg">
            Download
          </button>
        </div>
      </div>
      <div className="mt-5">
        <table class="border w-full">
          <thead>
            <tr className="bg-[#F0FAFB] h-[65px]  ">
              <th className="w-[250px] flex items-center gap-2 justify-start pl-2 h-[65px]">
                <input type="checkbox" /> Time (EDT)
              </th>

              <th className="w-[250px] ">
                <div className="flex  items-center justify-center gap-2">
                  Event
                  <IoFilterOutline />
                </div>
              </th>
              <th className="w-[250px] ">Driver</th>

              <th className="w-[250px] ">
                <div className="flex  items-center justify-center gap-2">
                  Vehicle <IoFilterOutline />
                </div>
              </th>
              <th className="w-[250px]">Location</th>
            </tr>
          </thead>
          <tbody>
            {/* <div className="w-[188px] absolute -top-5 left-5   h-[35px] text-[#34B7C1] flex justify-center items-center rounded-3xl bg-[#D3F8EA]">
                March 26, 2024
              </div> */}
            <tr className="border-y ">
              <td className="">
                <div className="flex gap-2 justify-start h-[79px]  items-center pl-2">
                  <input type="checkbox" /> 12:48PM
                </div>
              </td>

              <td className="">
                <div className="flex items-center gap-2 justify-center">
                  <GiSpeedometer style={{ color: "#8E8F8F" }} />
                  Overspeeding
                </div>
              </td>
              <td className="text-center">Adam Blake Powers</td>
              <td className="text-center">2101</td>
              <td>I 77, Surry County, North Carolina</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Alerts;
