import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Dashboard from './pages/Dashboard';
import EmailLogin from './pages/EmailLogin'; // <-- import EmailLogin
import reportWebVitals from './reportWebVitals';
import SignUp from "./pages/SignUp";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GoogleOAuthProvider } from "@react-oauth/google";


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/email-login" element={<EmailLogin />} />  {/* <-- add this */}
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </GoogleOAuthProvider>
  </React.StrictMode>
);

reportWebVitals();