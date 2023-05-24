import React, { useState } from "react";

const GenerateOTP = (props) => {
  const [orgOTP, setOrgOTP] = useState("");
  const handleOnClickRandomOTPButton = () => {
    const otp = Math.floor(100000 + Math.random() * 900000);
    setOrgOTP(otp);
    props.setOrgOTPParent(otp);
  };
  return (
    <div className="generate-otp-container">
      <button
        onClick={() => {
          handleOnClickRandomOTPButton();
        }}
      >
        GenerateOTP
      </button>
      <div className="title">your OTP: {orgOTP} </div>
    </div>
  );
};

export default GenerateOTP;
