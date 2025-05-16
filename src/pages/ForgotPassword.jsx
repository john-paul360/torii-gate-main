import React from "react";
import AuthWrapper from "../components/layout/AuthWrapper";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { forgotPasswordSchema } from "../utils/formValidator";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const ForgotPassword = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(forgotPasswordSchema),
  });

  const handleForgotPassword = (data) => {
    setIsSubmitting(true);
    try {
      console.log("Forgot Password Data:", data);
    } catch (error) {
      console.log(error);
    }
    // setIsSubmitting(false);
  };
  return (
    <AuthWrapper>
      <div className="bg-white py-[29px] px-[26px] rounded-lg shadow-lg w-full lg:w-[453px]">
        <Link to="/register">
          <button className="flex items-center gap-1.5">
            <FaArrowLeft /> Back
          </button>
        </Link>
        <div className="max-w-[332px] mt-4">
          <h1 className="text-2xl lg:text-[30px] font-semibold text-[#000000]">
            Forgot your password?
          </h1>
          <p className="text-[16px] font-[400] text-[#666666] ">
            We will send instructions to your email to reset your password.
          </p>
        </div>
        <form onSubmit={handleSubmit(handleForgotPassword)}>
          <label
            htmlFor="email"
            className="text-[16px] font-medium text-[#0C0C0C] mt-[30px] block"
          >
            Email<span className="text-[red]">*</span>
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter email"
            {...register("email")}
            className="font-medium text-[14px] text-[#666666] bg-[#FFFFFF] border-[0.8px]
                border-[#D9D9D9] py-[18px] px-[19px] max-w-[453px] w-full h-[56px] rounded-[8px]"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
          <button
            className=" btn font-[600] text-[16px] text-center text-[#FFFFFF]
                rounded-[12px] max-w-[453px] w-full h-[56px] bg-[#0C0C0C] mt-[20px]"
            disabled={isSubmitting}
            type="submit"
          >
            {isSubmitting ? (
              <span className="loading loading-spinner loading-md text-black"></span>
            ) : (
              "Continue"
            )}
          </button>
          <p className="text-16px font-semibold text-[#666666] text-center mt-[40px]">
            Remember you Password?
            <Link to="/login" className="text-[#0c0c0c]">
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </AuthWrapper>
  );
};

export default ForgotPassword;
