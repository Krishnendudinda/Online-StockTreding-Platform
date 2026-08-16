import React, { useState } from "react";
import axios from "axios";

export default function Signup() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ 
      ...formData, 
      [name]: value 
    });
  };
//http://localhost:3002/signup

  const handleSubmit = async (e) => {
    e.preventDefault(); //stop the reload page
    try {
      const response = await axios.post("https://online-stocktreding-platform-1.onrender.com/signup", formData, {
        withCredentials: true 
      });
      if (response.data.success === true) {
        //window.location.href = "http://localhost:3001/";
        window.location.href = "https://dashboard-28bk.onrender.com";
      }   
    } catch (err) {
      console.log("Signup failed", err);
    }
  };

  return (
    <div className="login-container">
      <form className="login-card" onSubmit={handleSubmit}>
        <p className="login-title">Create Your Account to Invest</p>
        
        <div className="login-form">
          <input
            name="username" 
            type="text"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>

        <div className="login-form">
          <input
            name="email" // Matches key in formData
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="login-form">
          <input
            name="password" // Matches key in formData
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <br />
        <button type="submit" className="login-btn">Signup</button>
        <p className="login-footer">
          Have an account? <a href="/loginup"> Login here</a>
        </p>
      </form>
    </div>
  );
}










/*import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  // 1. Manage form state
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  });
  const navigate = useNavigate();

  // 2. Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [etargetname]: e.target.value });
  };

  // 3. Submit data to backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3002/api/signup", formData, {
        withCredentials: true // Essential for Passport.js sessions
      });
      if (response.data.success) {
        navigate("/loginup"); // Redirect on success
      }
    } catch (err) {
      console.error("Signup failed", err);
    }
  };

  return (
    <div className="login-container">
      {/* Use a form tag with onSubmit }
      <form className="login-card" onSubmit={handleSubmit}>
        <p className="login-title">Create Your Account to Invest</p>
        
        <div className="login-form">
          <input
            name="username"
            type="text"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>

        <div className="login-form">
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="login-form">
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <br />
        <button type="submit" className="login-btn">Signup</button>
        <p className="login-footer">
          Have an account? <a href="/loginup"> Login here</a>
        </p>
      </form>
    </div>
  );
}
*/