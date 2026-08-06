import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import Avatar from '@mui/material/Avatar';

//CandaleStick chart
function stringToColor(string) {
  let hash = 0;
  if (!string) return '#000000';
  for (let i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }
  let color = '#';
  for (let i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  return color;
}

function stringAvatar(name) {
  if (!name) return { children: "U" };
  const words = name.trim().split(' ');
  // Securely get initials even if only one word exists
  const initials = words.length >= 2 
    ? `${words[0][0]}${words[1][0]}` 
    : `${words[0][0]}`;

  return {
    sx: { bgcolor: stringToColor(name) },
    children: initials.toUpperCase(),
  };
}

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [username, setUsername] = useState("User");
  const [loading, setLoading] = useState(true);
   
  useEffect(() => {
    let isMounted = true;
    axios.get("https://online-stocktreding-platform-1.onrender.com/allHoldings", { withCredentials: true })
      .then((res) => {
        if(isMounted && res.data.success) {
          setUsername(res.data.username); 
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Session expired or user missing matching cookie:", err);
        window.location.href = "https://zerodha-frontend-jrrm.onrender.com/loginup";
    });
    return () => {isMounted = false;}
  }, []);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const handleProfileClick = (index) => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };
  
  const handleLogout = (e) =>{
    try{
      //axios.post("http://localhost:3002/logout", {withCredentials:true});
      axios.post("https://online-stocktreding-platform-1.onrender.com/logout", {withCredentials:true});

      //window.location.href ="http://localhost:3000";
      window.location.href = "https://zerodha-frontend-jrrm.onrender.com";
          
    }catch(err){
      console.error("Logout failed:", err);
      //window.location.href = "http://localhost:3000/loginup";
      window.location.href = "https://zerodha-frontend-jrrm.onrender.com/loginup"; 
    } 
  }
  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <img src="/logo.png" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/"
              onClick={() => handleMenuClick(0)}
            >
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>
                Dashboard
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/orders"
              onClick={() => handleMenuClick(1)}
            >
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>
                Orders
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/holdings"
              onClick={() => handleMenuClick(2)}
            >
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>
                Holdings
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/positions"
              onClick={() => handleMenuClick(3)}
            >
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>
                Positions
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/funds"
              onClick={() => handleMenuClick(4)}
            >
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>
                Funds
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/sells"
              onClick={() => handleMenuClick(6)}
            >
              <p className={selectedMenu === 6? activeMenuClass : menuClass}>
                Sells
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/apps"
              onClick={() => handleMenuClick(7)}
            >
              <p className={selectedMenu === 7 ? activeMenuClass : menuClass}>
                Apps
              </p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile" onClick={handleProfileClick}>
           <Avatar {...stringAvatar(username)} />
          <button onClick={handleLogout} style={{cursor:"pointer",border:"none"}} ><i className="fa-duotone fa-solid fa-right-from-bracket fa-2xl"></i></button>
        </div>
      </div>
    </div>
  );
};

export default Menu;

//<div className="avatar">{username}</div>