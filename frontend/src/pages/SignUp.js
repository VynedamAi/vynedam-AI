// SignUp.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";

export default function SignUp() {
  const navigate = useNavigate();

  // ✅ This is where you paste the function
  const handleSignUp = (e) => {
    e.preventDefault();
    alert("Sign up successful! Redirecting to dashboard...");
    navigate("/dashboard"); // redirect after signup
  };

  return (
    <div className="signup-container">
      <form onSubmit={handleSignUp} className="signup-form">
        <h2>Create an Account</h2>
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit" className="signup-btn">
          Sign Up
        </button>
      </form>
    </div>
  );
}