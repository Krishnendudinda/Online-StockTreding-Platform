import React from "react";

export default function RightSection({
  imgURL,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 p-5 mt-5">
          <h3>{productName}</h3>
          <p>{productDescription}</p>
          <div>
            <a href={learnMore} style={{ textDecoration: "none",}}>Learn More<i class="fa fa-long-arrow-right" area-hidden="true"></i></a>  
          </div>
        </div>
        <div className="col-6 ">
          <img src={imgURL}/>
        </div>
      </div>
    </div>
  );
}
