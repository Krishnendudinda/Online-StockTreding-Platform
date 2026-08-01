import React from "react";

export default function Hero() {
  return (
    <div className="container-fluid" id="support-Hero">
      <div className="p-5" id="support-Wrapper">
        <h4 className="fs-2">Support Portal</h4>
        <a href="">Track Ticket</a>
      </div>
      <div className="row p-3 m-5">
        <div className="col-6 p-5" id="support">
          <h1 className="fs-3">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input placeholder="Eg. how do I activate F&O" /> <br></br>
          <a href="">Track account opening</a>
          <a href="">Track segment activation</a>
          <a href="">Intraday margins</a>
          <a href="">Kite user manual</a>
        </div>
        <div className="col-6 p-5">
          <h4 className="fs-3">Featured</h4>
          <ul>
            <li>
              <a href="">1. Current Takeovers and Delisting - january 2024</a>
            </li>
            <li style={{marginTop:'1rem'}}>
              <a href="" >2. Latest Intraday leverages - MIS & CO</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
