// firebase.js
import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  GithubAuthProvider, 
  OAuthProvider, 
  signInWithPopup 
} from "firebase/auth";

// 🔹 Replace these values with your Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWyKgDML3Zo9NlBXfY57uQ34iDCI8kwNI",          // 🔑 Your API Key
  authDomain: "vynedam-ai.firebaseapp.com",                     // 🔑 Auth domain
  projectId: "vynedam-ai",                                      // 🔑 Project ID
  storageBucket: "vynedam-ai.appspot.com",                      // 🔑 Storage bucket
  messagingSenderId: "1078948428812",                           // 🔑 Messaging sender ID
  appId: "1:1078948428812:web:4f35583027220b92fe4229",         // 🔑 App ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firebase Auth
const auth = getAuth(app);

// OAuth Providers
const githubProvider = new GithubAuthProvider();
const microsoftProvider = new OAuthProvider("microsoft.com");

// Function to login with any provider
const loginWithProvider = async (provider) => {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    console.log("Logged in user:", user);
    return user;
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
};

// Export everything
export {
  auth,
  githubProvider,
  microsoftProvider,
  loginWithProvider
};