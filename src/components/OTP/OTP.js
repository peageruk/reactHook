import React, { useState } from "react";
import GenerateOTP from "./GenerateOTP";
import InputOTP from "./InputOTP";
import "./OTP.scss";

const OTP = () => {
  const [orgOTPParent, setOrgOTPParent] = useState("");
  const [userOTPParent, setUserOTPParent] = useState("");

  const handleSubmitOTP = () => {
    if (+orgOTPParent === +userOTPParent) {
      alert("correct OTP ^^");
    } else {
      alert("wrong OTP ^^");
    }
  };

  return (
    <div className="otp-parent-container">
      <GenerateOTP setOrgOTPParent={setOrgOTPParent} />
      <InputOTP
        setUserOTPParent={setUserOTPParent}
        handleSubmitOTP={handleSubmitOTP}
      />
    </div>
  );
};

export default OTP;
