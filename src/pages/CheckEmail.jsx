import React from "react";
import AuthWrapper from "../components/layout/AuthWrapper";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";


const CheckYourEmail = () => {
  const email = localStorage.getItem("email");
  const maskEmail = (email) => {
    const [start, domain] = email.split("@");
    if (start.length <= 2) {
      return `${start[0]}...@${domain}`;
    }
    return `${start.slice(0, 2)}...@${domain}`;
  };
  return (
    <AuthWrapper>
      <div className="bg-white py-[29px] px-[26px] rounded-lg shadow-lg w-full lg:w-[453px]">
        <Link to="/forgot-password">
          <button className="flex items-center gap-1.5">
            <FaArrowLeft /> Back
          </button>
        </Link>
        <div className="max-w-[332px] mt-4">
          <h1 className="text-2xl lg:text-[30px] font-[600] text-[#000]">
            Check Your Email
          </h1>
          <p className="text-[16px] font-[400] text-[#666] ">
            Check the email address
            <span className="font-[700]"> {maskEmail(email)} </span> for
            instructions to reset your password.
          </p>

          <Link
            to="/forgot-password"
            className="font-semibold w-full mt-2.5 btn btn-active text-black"
          >
            didn't get a link, resend mail
          </Link>
        </div>
      </div>
    </AuthWrapper>
  );
};

export default CheckYourEmail;
