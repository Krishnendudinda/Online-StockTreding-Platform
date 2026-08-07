import React, { useState, useEffect } from "react";
import axios from "axios";

const Summary = () => {
  const [username, setUsername] = useState("User");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const cachedName = localStorage.getItem("username");
    const activeUserId = localStorage.getItem("userId");

    if (cachedName) {
      setUsername(cachedName);
    }

    if (!activeUserId) {
      window.location.href = "https://zerodha-frontend-jrrm.onrender.com/loginup";
      return;
    }

    axios.get("https://online-stocktreding-platform-1.onrender.com", { withCredentials: true })
      .then((res) => {
        if (isMounted && res.data.success) {
          setUsername(res.data.username); 
        }
        if (isMounted) {
          setLoading(false);
        }
      })
      .catch((err) => {
        console.error("Session expired or user missing matching cookie:", err);
  
        //window.location.href = "https://zerodha-frontend-jrrm.onrender.com/loginup";
        if (isMounted) { 
          setLoading(false);
        }
      });
      return () => {isMounted = false};
  }, []);
  if (loading) {
    return <div style={{ padding: "20px" }}>Loading your dashboard workspace...</div>;
  }

  return (
    <>
      <div className="username">
        <h6>Hi, {username}!</h6>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Equity</p>
        </span>

        <div className="data">
          <div className="first">
            <h3>3.74k</h3>
            <p>Margin available</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Margins used <span>0</span>{" "}
            </p>
            <p>
              Opening balance <span>3.74k</span>{" "}
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Holdings (13)</p>
        </span>

        <div className="data">
          <div className="first">
            <h3 className="profit">
              1.55k <small>+5.20%</small>{" "}
            </h3>
            <p>P&L</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Current Value <span>31.43k</span>{" "}
            </p>
            <p>
              Investment <span>29.88k</span>{" "}
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>
    </>
  );
};

export default Summary;
