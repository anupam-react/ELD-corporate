import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { FiMessageSquare, FiFolder, FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { ReactComponent as logbook } from "../Assets/Sidebar/logbook.svg";

import { ReactComponent as location } from "../Assets/Sidebar/location.svg";
import { ReactComponent as dascams } from "../Assets/Sidebar/dascams.svg";
import { ReactComponent as report } from "../Assets/Sidebar/report.svg";
import { ReactComponent as ifta } from "../Assets/Sidebar/ifta.svg";

import { ReactComponent as vehicles } from "../Assets/Sidebar/vehicles.svg";
import { ReactComponent as drivers } from "../Assets/Sidebar/drivers.svg";
import { ReactComponent as Devices } from "../Assets/Sidebar/devices.svg";
import { ReactComponent as userrole } from "../Assets/Sidebar/userrole.svg";
import { ReactComponent as testimonial } from "../Assets/Sidebar/testimonial.svg";
import { ReactComponent as alert } from "../Assets/Sidebar/alert.svg";
import { ReactComponent as fmcsa } from "../Assets/Sidebar/fmcsa.svg";
const Newsidebar = () => {
  const menus = [
    { name: "Logbook", link: "/Logbook", icon: logbook },
    { name: "Location", link: "/location", icon: location },
    { name: "Traking Links", link: "/Trackinglinks", icon: location },
    { name: "Geofences", link: "/Geofences", icon: location },
    { name: "Dashcams", link: "/Dashcams", icon: dascams },
    {
      name: "Reports",
      link: "/Reports",
      icon: report,
      margin: true,
    },
    { name: "IFTA", link: "/Iftatrips", icon: ifta },
    { name: "Vehicles", link: "/Vehicles", icon: vehicles },
    { name: "Drivers", link: "/Drivers", icon: drivers, margin: true },
    { name: "Devices", link: "/Devices", icon: Devices },
    { name: "User Roles", link: "/Userroles", icon: userrole },
    {
      name: "Terminals",
      link: "/Terminals",
      icon: testimonial,
      margin: true,
    },
    { name: "Alerts", link: "/Alerts", icon: alert },
    { name: "Diagnostic", link: "/Diagnosticevents", icon: logbook },
    { name: "FMCSA", link: "/", icon: fmcsa, margin: true },
  ];
  const [open, setOpen] = useState(true);
  return (
    <section className="flex gap-6">
      <div
        className={`bg-[#F9FBFF] h-[1500px] ${
          open ? "w-52" : "w-16"
        } duration-500 text-gray-100 px-4`}
      >
        <div className="py-3 flex justify-end">
          <HiMenuAlt3
            size={26}
            style={{ color: "#34B7C1" }}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>

        <div className="mt-4 flex flex-col gap-4 relative">
          {menus?.map((menu, i) => (
            <Link
              to={menu?.link}
              key={i}
              className={` ${
                menu?.margin && "mt-5"
              } group flex items-center text-sm  gap-3.5 font-medium pt-2 pb-2 pl-1 bg-[#FFFFFF] text-[#80848F] rounded-md`}
            >
              <div className="flex justify-center items-center">
                {React.createElement(menu?.icon, { size: "20" })}
              </div>
              <h2
                style={{
                  transitionDelay: `${i + 3}00ms`,
                }}
                className={`whitespace-pre duration-500 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                {menu?.name}
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
              >
                {menu?.name}
              </h2>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Newsidebar;
