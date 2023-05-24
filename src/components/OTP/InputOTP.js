import React, { useState } from "react";
import OtpInput from "react-otp-input";
import CountDown from "./CountDown";

const InputOTP = (props) => {
  const [otp, setOtp] = useState("");
  const [isDisableBtn, setIsDisableBtn] = useState(false);
  const handleOnChange = (otp) => {
    // console.log(">>> check inside on change", otp);
    setOtp(otp);
    props.setUserOTPParent(otp);
  };
  const handleSubmitOTP = () => {
    props.handleSubmitOTP();
  };
  return (
    <div className="input-otp-container">
      <div className="title">Enter verification code</div>
      <OtpInput
        value={otp}
        onChange={(event) => {
          handleOnChange(event);
        }}
        // onChange={setOtp}
        numInputs={6}
        renderSeparator={<span>-</span>}
        renderInput={(props) => <input {...props} />}
        inputStyle={"input-customize-peageruk"}
      />
      <div className="timer">
        <CountDown setIsDisableBtn={setIsDisableBtn} otp={otp} />
      </div>
      <div className="action">
        <button className="clear">clear</button>
        <button
          className="confirm"
          disabled={isDisableBtn}
          onClick={() => handleSubmitOTP()}
        >
          confirm
        </button>
      </div>
    </div>
  );
};

export default InputOTP;
