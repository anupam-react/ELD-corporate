import React from "react";
import { IoArrowForward } from "react-icons/io5";

const Verificationcode = () => {
  return (
    <div className="background h-screen flex justify-center items-center">
      <div className="w-[500px] h-[700px] rounded-lg bg-[white]">
        <div className="text-[#34B7C1] font-bold text-[100px] text-center border-b">
          LOGO
        </div>
        <div className=" border-b p-10">
          <div className="font-bold text-3xl">Enter Verification code.</div>
          <div className="text-[#77878F]">
            Verification code sent to your mobile number or email.
          </div>
        </div>
        <div className="p-10">
          <div>
            <label>Verification Code</label>
            <br />
            <input className="border w-full h-[57px] mt-2" />
          </div>

          <div className="mt-5">
            <button className="bg-[#34B7C1] uppercase font-bold flex justify-center items-center gap-2 text-xl text-[white] h-[63px] w-full">
              Send Code <IoArrowForward />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Verificationcode;
