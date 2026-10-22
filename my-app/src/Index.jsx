import { useEffect, useRef, useState } from "react";

export const OTPGenerator = () => {
  const [otp, setOtp] = useState("");
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef(null);

  const generateOTP = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    
    const newOtp = Math.floor(100000 + Math.random() * 900000).toString();
    setOtp(newOtp);
    setTimer(10);

    intervalRef.current = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer <= 1) {
          clearInterval(intervalRef.current);
          setOtp("");
          return 0;
        }
        return prevTimer - 1;
      });
    }, 1000);
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div className="otp-container">
      <h1 className="otp-title">OTP Generator</h1>
      
      <div className="otp-display-wrapper">
        <h2 className={`otp-display ${otp ? "active" : "placeholder"}`}>
          {otp ? otp : "Click 'Generate OTP' to get a code"}
        </h2>
      </div>
      
      {timer > 0 ? (
        <p className="otp-timer active-timer" aria-live="polite">
          Expires in: <span className="timer-badge">{timer}s</span>
        </p>
      ) : (
        <p className="otp-timer expired-timer">Code expired or not generated</p>
      )}

      <button onClick={generateOTP} className="generate-btn">
        Generate OTP
      </button>
    </div>
  );
};
