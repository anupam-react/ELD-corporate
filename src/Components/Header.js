import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";
import profile from "../Assets/Header/profile.svg";
import { BiSolidBell } from "react-icons/bi";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { BsPlayBtn } from "react-icons/bs";
import Notification from "./Notification";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleToggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  const [isFeature, setisFeature] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const toggleFeatureDropdown = () => {
    setisFeature(!isFeature);
  };


  return (
    <div className="h-[100px] bg-white border-b flex justify-around items-center">
      <div className="border-[#34B7C1] flex justify-center items-center text-[#34B7C1] border w-[214px] h-[45px] rounded-lg">
        SRH LOGISTICS <RiArrowDropDownLine size={25} />
      </div>
      <div>
        <div className="relative mt-2">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <span className=" p-2.5 ml-[-3px] rounded-tl rounded-bl text-white">
              <FaSearch style={{ color: "black" }} />
            </span>
          </div>
          <input
            type="text"
            className="placeholder: ml-2 block w-[613px] bg-[#F9F9F9] rounded-xl border-0 py-1.5 pl-10 pr-4 text-gray-900  ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Search driver"
          />
        </div>
      </div>
      <div className="flex items-center gap-5">
        <div className="flex gap-1 cursor-pointer" onClick={toggleDropdown}>
          <img src={profile} alt=""  />

          {isOpen && (
            <div className="absolute mt-12 ml-[-100px] w-[250px] bg-white rounded-md shadow-lg z-10">
              <span className="flex justify-end m-3">
                <IoCloseSharp
                  size={25}
                  onClick={toggleDropdown}
                  className="cursor-pointer"
                />
              </span>
              <div className="text-center flex flex-col">
                <span className="font-semibold">Mudassar Iqbal</span>
                <span>srhlogistic@zzzzz.com</span>
              </div>

              <ul>
                <Link to="/Companyprofile">
                  <li className="p-2 hover:bg-[#ECF5FF] hover:text-[#34B7C1] cursor-pointer flex gap-2">
                    Company profile
                  </li>
                </Link>
                <Link to="/Billingdetails">
                  <li className="p-2 hover:bg-[#ECF5FF] hover:text-[#34B7C1] cursor-pointer flex gap-1">
                    Billing Details
                  </li>
                </Link>

                <li className="p-2 hover:bg-[#ECF5FF] text-[#EB5757] cursor-pointer flex gap-2">
                  Logout
                </li>
              </ul>
            </div>
          )}
          <div className="flex flex-col">
            <span className="font-semibold">SRH LOGISTICS</span>
            <span>DOT #3223344</span>
          </div>
        </div>

        <Notification />

      </div>
    </div>
  );
};

export default Header;
