import React from "react";

export default function Team() {
  return (
    <div className="container">
      <div className="row p-3 ">
        <h1 className="text-center fs-3 text-muted "> People</h1>
      </div>

      <div
        className="row p-3 text-muted"
        style={{ lineHeight: "1.8", fontsize: "1.2em" }}
      >
        <div className="col-6 p-3 text-center">
          <img
            src="/media/images/nithinKamath.jpg"
            style={{ borderRadius: "100%", width: "50%" }}
          ></img>
          <h5 className="mt-3">Nithin Kamath</h5>
          <h6 className="mt-4" style={{ opacity: "0.8" }}>
            Founder, CEO
          </h6>
        </div>
        <div className="col-6 p-3">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on{" "}
            <a href="" style={{ textDecoration: "none" }}>
              Homepage
            </a>
            /{" "}
            <a href="" style={{ textDecoration: "none" }}>
              TradingQnA
            </a>{" "}
            /{" "}
            <a href="" style={{ textDecoration: "none" }}>
              Twitter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
