import React, { useState } from "react";
import { MdOutlineEdit } from "react-icons/md";

import { LuArrowUpDown } from "react-icons/lu";

import { HiOutlineDotsVertical } from "react-icons/hi";
const Deleteddrivers = () => {
  const [Action, setAction] = useState(false);
  const toggleaction = () => {
    setAction(!Action);
  };
  return (
    <div className="p-5">
      <div className="text-[28px] font-semibold flex justify-start">
        Deleted Drivers
      </div>

      <div className="mt-5">
        <table class="border ">
          <thead>
            <tr className="bg-[#F0FAFB] h-[65px]  ">
              <th className="w-[150px] flex items-center gap-2 justify-start pl-2 h-[65px]">
                Name <LuArrowUpDown />
              </th>
              <th className="w-[180px] text-left  ">Action</th>
              <th className="w-[200px] text-left ">Start Date (EDT)</th>
              <th className="w-[180px]">Last Date (EDT) </th>
              <th className="w-[200px]">License</th>
              <th className="w-[180px]">Mode</th>
              <th className="w-[180px]">Phone Number</th>
              <th className="w-[100px]">Email</th>
              <th className="w-[180px]">Cycle Type</th>
              <th className="w-[180px]">Timezone</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b h-[79px]">
              <td className=" text-left pl-2">Adam Blake</td>
              <td>
                <div className="bg-[#F0FAFB] w-[115px] text-[14px] flex justify-center items-center h-[30px] rounded-2xl text-[#34B7C1] ">
                  View Logbook
                </div>
              </td>
              <td className="">2024-02-28</td>
              <td>2024-02-28</td>
              <td className="">T67529974</td>
              <td>ELD</td>
              <td>5404235926</td>
              <td>Srhlogistics@outlook.com</td>
              <td>USA 70 hour / 8 day (Interstate)</td>
              <td>Eastern Time (US & Canada)</td>
            </tr>
            <tr className="border-b h-[79px]">
              <td className=" text-left pl-2">Adam Blake</td>
              <td>
                <div className="bg-[#F0FAFB] w-[115px] text-[14px] flex justify-center items-center h-[30px] rounded-2xl text-[#34B7C1] ">
                  View Logbook
                </div>
              </td>
              <td className="">2024-02-28</td>
              <td>2024-02-28</td>
              <td className="">T67529974</td>
              <td>ELD</td>
              <td>5404235926</td>
              <td>Srhlogistics@outlook.com</td>
              <td>USA 70 hour / 8 day (Interstate)</td>
              <td>Eastern Time (US & Canada)</td>
            </tr>
            <tr className="border-b h-[79px]">
              <td className=" text-left pl-2">Adam Blake</td>
              <td>
                <div className="bg-[#F0FAFB] w-[115px] text-[14px] flex justify-center items-center h-[30px] rounded-2xl text-[#34B7C1] ">
                  View Logbook
                </div>
              </td>
              <td className="">2024-02-28</td>
              <td>2024-02-28</td>
              <td className="">T67529974</td>
              <td>ELD</td>
              <td>5404235926</td>
              <td>Srhlogistics@outlook.com</td>
              <td>USA 70 hour / 8 day (Interstate)</td>
              <td>Eastern Time (US & Canada)</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Deleteddrivers;
