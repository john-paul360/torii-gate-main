import { useParams, Link } from "react-router-dom";
import { axiosInstance } from "../utils/axiosInstance";
import { useState, useEffect } from "react";

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
    return <div>Verifying...</div>;
  }
  if (status === "success") {
    return (
      <div>
        <h1>Email Verification Successfully</h1>
        <Link to="/login">
          <button>Procee to ligin</button>
        </Link>
      </div>
    );
  }
  return (
    <div>
      <h1>Verification failed</h1>
      <p>{errorMessage}</p>
      <button>Resnd Verification Email</button>
    </div>
  );
};

export default VerifyEmail;
