import React from "react";
import { IoFilterOutline } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import report from "../Assets/Reports/report.svg";
import { MdOutlineEdit } from "react-icons/md";
import { LuArrowUpDown } from "react-icons/lu";
const Reportdetails = () => {
  return (
    <div className="p-5">
      {" "}
      <div className="">
        <div className="text-[28px] flex justify-start font-semibold">
          Reports
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
        <div className="flex gap-2">
          <button className="text-[#34B7C1] w-[163px] h-[45px] border border-[#34B7C1] flex justify-center items-center gap-5 rounded-lg">
            Filter <IoFilterOutline />
          </button>
          <button className=" w-[163px] h-[45px] text-white border bg-[#34B7C1] flex justify-center items-center gap-5 rounded-lg">
            Report Action
          </button>
          <button className=" w-[163px] h-[45px] text-white border bg-[#34B7C1] flex justify-center items-center gap-5 rounded-lg">
            Download
          </button>
        </div>
      </div>
      <div className="mt-5">
        <img src={report} alt="" />
      </div>
      <div className="mt-5">
        <table class="border w-full ">
          <thead>
            <tr className="bg-[#F0FAFB] h-[65px]  ">
              <th className="w-[180px] flex items-center gap-2 justify-start pl-2 h-[65px]">
                <input type="checkbox" /> Vehicle <LuArrowUpDown />
              </th>
              <th className="w-[180px] ">Vehicle Type</th>
              <th className="w-[180px] flex  items-center justify-center gap-2">
                Utilization
                <LuArrowUpDown />
              </th>
              <th className="w-[180px]">Avg. Utilization/Day  </th>
              <th className="w-[200px] flex  items-center justify-center gap-2">
                Hours Available/Day <LuArrowUpDown />
              </th>
              <th className="w-[180px]">Total Hours Used</th>
              <th className="w-[180px]">Total Miles Driven</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b h-[79px]">
              <td className="flex gap-2 justify-start h-[79px] items-center pl-2">
                <input type="checkbox" /> 2012
              </td>
              <td>Truck</td>
              <td className="flex justify-center gap-2 items-center">
                {" "}
                <div className="w-[53px] h-[30px] rounded-lg bg-[#F0506E33] text-[#6F667F] flex justify-center items-center">
                  29%
                </div>
                <div className="w-[53px] h-[30px] rounded-lg bg-[#F0506E33] text-[#6F667F] flex justify-center items-center">
                  -30%
                </div>
              </td>
              <td>7h 0m 0s</td>
              <td className="flex gap-2 items-center justify-center">
                24h
                <MdOutlineEdit />
              </td>
              <td>42h</td>
              <td>1,691 mi</td>
            </tr>
            <tr className="border-b h-[79px]">
              <td className="flex gap-2 justify-start h-[79px] items-center pl-2">
                <input type="checkbox" /> 2012
              </td>
              <td>Truck</td>
              <td className="flex justify-center gap-2 items-center">
                {" "}
                <div className="w-[53px] h-[30px] rounded-lg bg-[#F0506E33] text-[#6F667F] flex justify-center items-center">
                  29%
                </div>
                <div className="w-[53px] h-[30px] rounded-lg bg-[#F0506E33] text-[#6F667F] flex justify-center items-center">
                  -30%
                </div>
              </td>
              <td>7h 0m 0s</td>
              <td className="flex gap-2 items-center justify-center">
                24h
                <MdOutlineEdit />
              </td>
              <td>42h</td>
              <td>1,691 mi</td>
            </tr>
            <tr className="border-b h-[79px]">
              <td className="flex gap-2 justify-start h-[79px] items-center pl-2">
                <input type="checkbox" /> 2012
              </td>
              <td>Truck</td>
              <td className="flex justify-center gap-2 items-center">
                {" "}
                <div className="w-[53px] h-[30px] rounded-lg bg-[#F0506E33] text-[#6F667F] flex justify-center items-center">
                  29%
                </div>
                <div className="w-[53px] h-[30px] rounded-lg bg-[#F0506E33] text-[#6F667F] flex justify-center items-center">
                  -30%
                </div>
              </td>
              <td>7h 0m 0s</td>
              <td className="flex gap-2 items-center justify-center">
                24h
                <MdOutlineEdit />
              </td>
              <td>42h</td>
              <td>1,691 mi</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Reportdetails;
