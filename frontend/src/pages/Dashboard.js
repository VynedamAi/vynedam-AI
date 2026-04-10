import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {

  const [activeTab, setActiveTab] =
    useState("Full Stack App");
   const [sidebarOpen, setSidebarOpen] = useState(true);
   const [prompt, setPrompt] = useState("");
   const [apiResponse, setApiResponse] = useState("");
   const [loading, setLoading] = useState(false);
   const [copyStatus, setCopyStatus] = useState("");
   const [chatHistory, setChatHistory] = useState([]);
   const [user, setUser] = useState(null);
   const navigate = useNavigate();

   useEffect(() => {
     const savedUser = localStorage.getItem("user");
     if (savedUser) {
       setUser(JSON.parse(savedUser));
     }
   }, []);

   const handleLogout = () => {
     localStorage.removeItem("user");
     navigate("/");
   };

   const handleNewChat = () => {
     const newTitle = prompt.trim() || "New Conversation";
     setChatHistory([newTitle, ...chatHistory]);
     setPrompt("");
     setApiResponse("");
   };

   const handleGenerate = async () => {
     if (!prompt) return;
     setLoading(true);
     try {
       const res = await fetch("https://api.example.com/generate", {
         method: "POST",
         headers: {
           "Content-Type": "application/json",
           "Authorization": `Bearer YOUR_API_KEY`
         },
         body: JSON.stringify({ prompt })
       });
       const data = await res.json();
       setApiResponse(data.result || "");
     } catch (e) {
       console.error(e);
       setApiResponse("Error fetching response");
     } finally {
       setLoading(false);
     }
   };

   const handleCopy = async () => {
     try {
       await navigator.clipboard.writeText(apiResponse);
       setCopyStatus("Copied!");
       setTimeout(() => setCopyStatus(""), 2000);
     } catch (e) {
       console.error(e);
       setCopyStatus("Failed");
       setTimeout(() => setCopyStatus(""), 2000);
     }
   };

  const tabs = [
    "Full Stack App",
    "Mobile App",
    "Landing Page"
  ];

  return (

    <div className="dashboard">

      {/* Sidebar */}

      <div className={`sidebar ${sidebarOpen ? "open" : "closed"}`}>
        <button
          className="side-btn"
          onClick={() => setSidebarOpen((prev) => !prev)}
        >
          <div className="brand-logo-icon">
            <model-viewer
              src="/logo.glb"
              auto-rotate
              auto-rotate-delay="0"
              rotation-per-second="-30deg"
              camera-controls
              shadow-intensity="1"
              exposure="1.2"
              className="button-logo"
            />
          </div>
          <span className="brand-text">vynedam</span>
        </button>

        {/* New Chat Button */}
        <button className="new-chat-btn" onClick={handleNewChat}>
          <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="plus-icon" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
          <span className="btn-text">New chat</span>
        </button>

        {/* Chat History */}
        {chatHistory.length > 0 && (
          <div className="history-section">
            <div className="history-title">Recent</div>
            <div className="history-list">
              {chatHistory.map((chat, index) => (
                <button key={index} className="history-item" onClick={() => setPrompt(chat)}>
                  {chat}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Main */}

      <div className="main">

        {/* Header */}

        <div className="header">

          {user && (
            <div className="user-profile">
              {user.photo ? (
                <img src={user.photo} alt="avatar" className="avatar" />
              ) : (
                <div className="avatar-placeholder">{user.name?.charAt(0) || "U"}</div>
              )}
              <div className="user-info">
                <span className="user-name">{user.name || "User"}</span>
                <span className="user-email">{user.email || "user@example.com"}</span>
              </div>
              <button className="logout-btn" onClick={handleLogout}>Logout</button>
            </div>
          )}

        </div>

        {/* Center Content */}

        <div className="content">

          <div className="title-logo">
            <model-viewer
              src="/logo.glb"
              auto-rotate
              auto-rotate-delay="0"
              rotation-per-second="-30deg"
              camera-controls
              shadow-intensity="1"
              exposure="1.2"
            />
          </div>

          {/* Title */}

          <h1 className="title">
            Where ideas become reality
          </h1>

          <p className="subtitle">
            Build fully functional apps and websites through simple conversations
          </p>

          {/* Tabs */}

          <div className="tabs">

            {tabs.map((tab) => (

              <button
                key={tab}
                className={
                  activeTab === tab
                    ? "tab-btn active"
                    : "tab-btn"
                }
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>

            ))}

          </div>

            {/* Interaction Section */}
            <div className="interaction-section">
              <div className="main-panel">
                <div className="input-box">
                  <textarea
                    className="textarea"
                    placeholder="Build me a SaaS app for..."
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                  ></textarea>

                  <div className="controls">
                    <div className="control-left">
                      <button>Claude 4.5 Sonnet</button>
                    </div>
                    <div className="control-right">
                      <button>🌐 Public</button>
                      <button>🎤</button>
                      <button onClick={handleGenerate} disabled={loading}>
                        {loading ? "Generating..." : "➤"}
                      </button>
                    </div>
                  </div>
                </div>
                {apiResponse && (
                  <div className="response-box editor-view">
                    <button className="copy-btn" onClick={handleCopy}>
                      {copyStatus || "Copy"}
                    </button>
                    <pre><code>{apiResponse}</code></pre>
                  </div>
                )}
              </div>
            </div>

          {/* Quick Buttons */}

          <div className="quick-buttons">
          </div>

        </div>

      </div>

    </div>

  );

}

export default Dashboard;