import { useParams, Link } from "react-router-dom";
import { axiosInstance } from "../utils/axiosInstance";
import { useState, useEffect } from "react";
import icon from "../assets/Group.png";
import { BounceLoader } from "react-spinners";
import { MdCancel } from "react-icons/md";

const VerifyEmail = () => {
  const { token } = useParams();
  const [errorMessage, setErrorMessage] = useState("");
  const [status, setStatus] = useState("verifying");

  const checkToken = async () => {
    try {
      const response = await axiosInstance.post(`/auth/verify-email/${token}`, {
        token,
      });
      if (response.status === 200) {
        setStatus("success");
      }
    } catch (error) {
      setErrorMessage("Email verification Failed");
      setStatus("error");
    }
  };

  useEffect(() => {
    checkToken();
  }, []);

  if (status === "verifying") {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="w-full max-w-[505px] py-[29px] px-[26px] shadow-md text-center">
          <BounceLoader />
          <h1 className="text-xl lg:text-[30px] font-semibold my-3">
            Emial Verifying...
          </h1>
          <p className="text-[#666] text-lg"></p>
        </div>
      </div>
    );
  }
  if (status === "success") {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="w-full max-w-[505px] py-[29px] px-[26px] shadow-md text-center">
          <img src={icon} alt="verify" />
          <h1 className="text-xl lg:text-[30px] font-semibold my-3">
            Verification Successfully
          </h1>
          <p className="text-[#666] mb-4">
            Your account has been verified successfully
          </p>
          <Link to="/login">
            <button className="w-full font-semibold rounded-xl bg-[#0c0c0c] text-white h-[56px]">
              Procee to ligin
            </button>
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-[505px] py-[29px] px-[26px] shadow-md text-center">
        <MdCancel size={80} className="text-red-500 mx-auto" />
        <h1 className="text-xl lg:text-[30px] font-semibold my-3">
          Verification Failed
        </h1>
        <p className="text-[#666] mb-4">Invalid or Expired Token</p>
        <Link to="/login">
          <button className="w-full font-semibold rounded-xl bg-[#0c0c0c] text-white h-[56px]">
            Resend verification mail
          </button>
        </Link>
      </div>
    </div>
  );
};

export default VerifyEmail;
