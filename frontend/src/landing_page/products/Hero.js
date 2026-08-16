import React from "react";

export default function Hero() {
  return (
    <div className="container border-bottom">
      <div className="row text-center mt-5 p-3">
        <h3>Zerodha Products</h3>
        <h6 className="text-muted fs-5 mt-3 ">
           Sleek, modern, and intuitive trading platforms
        </h6>
        <p className="mt-3  mb-5">
          Check out our{" "}
          <a href=" " style={{ textDecoration: "none" }}>
            investment offerings
            <i class="fa fa-long-arrow-right" area-hidden="true"></i>
          </a>
        </p>
      </div>
    </div>
  );
}
