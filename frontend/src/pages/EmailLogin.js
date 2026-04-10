import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./EmailLogin.css";
import BackgroundLetters from "../BackgroundLetters";

export default function EmailLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const [step, setStep] = useState(1); 
  const [method, setMethod] = useState("otp"); // "otp" or "password"

  // Handle Email submit (OTP or Password)
  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (!email.includes("@")) {
      alert("Please enter a valid email");
      return;
    }

    if (method === "otp") {
      // OTP method: move to OTP input
      alert("OTP sent to your email!");
      setStep(2);
    } else {
      // Password method: validate password
      if (password === "1234") { // Example password
        alert("Login successful!");
        navigate("/dashboard"); // ✅ success
      } else {
        alert("Invalid password! Redirecting to Sign Up...");
        navigate("/signup"); // ❌ failure
      }
    }
  };

  // Handle OTP verification
  const handleOtpSubmit = (e) => {
    e.preventDefault();
    if (otp === "1234") { // Example OTP
      alert("Login successful!");
      navigate("/dashboard"); // ✅ success
    } else {
      alert("Invalid OTP! Redirecting to Sign Up...");
      navigate("/signup"); // ❌ failure
    }
  };

  return (
    <div className="email-login-container">
      <BackgroundLetters containerClass="left-letters" />
      
      {step === 1 && (
        <form onSubmit={handleEmailSubmit} className="email-form">
        
          <h2>Login with Email</h2><br></br>
          
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          {method === "password" && (
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          )}

          <button type="submit" className="email-btn">
            {method === "otp" ? "Send OTP" : "Login"}
          </button>

          <p
            className="switch-method"
            onClick={() =>
              setMethod(method === "otp" ? "password" : "otp")
            }
          >
            {method === "otp"
              ? "Or login with password"
              : "Or login with OTP"}
          </p>
        </form>
      )}

      {step === 2 && method === "otp" && (
        <form onSubmit={handleOtpSubmit} className="email-form">
          <h2>Enter OTP sent to your email</h2>
          <input
            type="text"
            placeholder="OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
          />
          <button type="submit" className="email-btn">
            Verify & Login
          </button>
        </form>
      )}
    </div>
  );
}