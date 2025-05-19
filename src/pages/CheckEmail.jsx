import React from "react";
import AuthWrapper from "../components/layout/AuthWrapper";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const CheckEmail = () => {
  return (
    <AuthWrapper>
      <div className="bg-[#FFF] py-[29px] px-[26px] rounded-lg shadow-lg w-full lg:w-[453px]">
        <Link to="/register">
          <button className="flex items-center gap-1.5 bg-[#F9F9F9]">
            <FaArrowLeft /> Back
          </button>
        </Link>
        <div className="max-w-[332px] mt-4">
          <h1 className="text-[30px] lg:text-[30px] font-[600] text-[#000]">
            Check Your Email
          </h1>
          <p className="text-[#666] text-[16px] font-[400]">
            Check the email address
            <span className="font-[700]"> olafarid12@gmail.com </span> for
            instructions to reset your password.
          </p>
        </div>
        <button
          className="btn w-full h-[56px] mt-4 font-[600] rounded-[12px] border border-[#D9D9D9]
                       py-[12px] px-[19px] text-center text-[#000] text-[16px]"
          type="submit"
        >
          Resend Email
        </button>
      </div>
    </AuthWrapper>
  );
};

export default CheckEmail;
