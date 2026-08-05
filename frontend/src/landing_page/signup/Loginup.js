import React, { useState } from "react";
import axios from "axios";

export default function Loginup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try { 
      //http://localhost:3002/login
      const res = await axios.post("https://online-stocktreding-platform-1.onrender.com/login", 
        { username, password }, 
        { withCredentials: true }
      );

      if (res.data.success === true) {
        //window.location.href = "http://localhost:3001/";
        window.location.href = "https://zerodha-landing-page-w4r4.onrender.com"; 
      }
    } catch (error) {
      console.error("Login Failed:", error.response?.data?.message || error.message);
    }
  };

  return (
    <div className="login-container">
      <form className="login-card" onSubmit={handleSubmit}>
        <p className="login-title">Welcome, Please Login to Your Account</p>
        
        <div className="login-form">
          <input
            name="username"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)} 
            required
          />
        </div>
        
        <div className="login-form">
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required
          />
        </div>
        
        <br />
        <button className="login-btn" type="submit">Login</button>
        <p className="login-footer">
          Don't have an account? <a href="/signup"> Signup here</a>
        </p>
      </form>
    </div>
  );
}
