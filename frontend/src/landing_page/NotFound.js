import React from "react";

export default function NotFound() {
  return (
    <div className="Container p-5 mb-5">
      <div className="row text-center">
        <h1 className="mt-5 fs-4">404 Not Found</h1>
        <p style={{ fontSize: "1.25rem" }} className="text-muted ">
          We couldn’t find the page you were looking for. <a style={{textDecoration:"none"}} href="/signup"> Visit Zerodha’s home
          page.</a>
        </p>
      </div>
    </div>
  );
}
