import gitLogo from "./pages/git-logo.jpeg";
import microsoftLogo from "./pages/microsoft-logo.svg";
import "./App.css";
import img1 from "./pages/img1.png";
import img2 from "./pages/img2.png";
import img3 from "./pages/img3.png";
import img4 from "./pages/img4.png";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import BackgroundLetters from "./BackgroundLetters";
import { githubProvider, microsoftProvider, loginWithProvider } from "./firebase";
import React, { useState } from "react";

export default function App() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleGithubLogin = async () => {
  if (loading) return;
  setLoading(true);

  try {
    const user = await loginWithProvider(githubProvider);
    console.log("GitHub user:", user);
    localStorage.setItem("user", JSON.stringify({ name: user.displayName || user.email, email: user.email, photo: user.photoURL }));
    navigate("/dashboard");
  } catch (error) {
    alert("GitHub login failed: " + error.message);
  } finally {
    setLoading(false);
  }
};

  // ✅ Microsoft Login
  const handleMicrosoftLogin = async () => {
  if (loading) return;
  setLoading(true);

  try {
    const user = await loginWithProvider(microsoftProvider);
    localStorage.setItem("user", JSON.stringify({ name: user.displayName || user.email, email: user.email, photo: user.photoURL }));
    navigate("/dashboard");
  } catch (error) {
    alert("Microsoft login failed: " + error.message);
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="container">
      {/* LEFT SIDE */}
      <div className="left">
        <div className="left-top">
        <div className="brand-header">
          <model-viewer
            src="/logo.glb"
            auto-rotate
            auto-rotate-delay="0"
            rotation-per-second="-30deg"
            camera-controls
            shadow-intensity="1"
            exposure="1.2"
            className="brand-logo-viewer"
          />
          <div className="brand-name">Vynedam AI</div>
          
        </div>
        </div>
        <div className="left-bottom">
          <model-viewer
            src="/logo.glb"
            auto-rotate
            auto-rotate-delay="0"
            rotation-per-second="-30deg"
            camera-controls
            shadow-intensity="1"
            exposure="1.2"
            className="brand-logo-viewer2"
          />
          <br></br><br>
          </br><br></br>



        <h1>
          Build Full-Stack <br />
          <span>Web & Mobile Apps in minutes</span>
        </h1>

        {/* ✅ Google Login */}
        <div className="google-btn-wrapper" style={{ width: "400px" }}>
          <GoogleLogin
            theme="filled_black"
            shape="rectangular"
            width="400"
            onSuccess={(credentialResponse) => {
              const decoded = jwtDecode(credentialResponse.credential); // ✅ FIXED
              console.log(decoded);
              localStorage.setItem("user", JSON.stringify({ name: decoded.name || decoded.email, email: decoded.email, photo: decoded.picture }));
              navigate("/dashboard");
            }}
            onError={() => {
              alert("Google login failed");
            }}
          />
        </div>

        {/* ✅ Social logins */}
        <div className="socials">
          <button onClick={handleGithubLogin} disabled={loading}>
            {loading ? "Signing in..." : <img src={gitLogo} alt="GitHub" className="git-icon" />}
          </button>

          <button onClick={handleMicrosoftLogin} disabled={loading}>
            <img src={microsoftLogo} alt="Microsoft" className="social-icon2" style={{width: "28px", height: "28px"}} />
          </button>
        </div>

        {/* Email login */}
        <button
          className="email-btn"
          style={{ width: "400px" }}
          onClick={() => navigate("/email-login")}
        >
          Continue with Email
        </button>

        <p className="terms">
          By continuing, you agree to our <br />
          <a href="/terms" style={{ color: 'blue' ,font:'10px'}}>Terms of Service</a> and{" "}
          <a href="/privacy" style={{ color: 'blue' ,font:'10px'}}>Privacy Policy</a>
        </p>
      </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="right">
        <BackgroundLetters containerClass="right-letters" />
        <BackgroundLetters containerClass="right-letters" />

        <div className="cards-wrapper">
          <div className="cards-track">
            <Card img={img1} />
            <Card img={img2} />
            <Card img={img3} />
            <Card img={img4} />
            <Card img={img1} />
            <Card img={img2} />
            <Card img={img3} />
            <Card img={img4} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Card({ img }) {
  return (
    <div className="card">
      <img src={img} alt="card" className="card-img" />
    </div>
  );
}