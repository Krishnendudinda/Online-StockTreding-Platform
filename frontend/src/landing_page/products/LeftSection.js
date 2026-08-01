import React from "react";

export default function LeftSection({
  imgURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6">
          <img src={imgURL}/>
        </div>
        <div className="col-6 mt-5">
          <h3>{productName}</h3>
          <p>{productDescription}</p>
          <div>
            <a href={tryDemo} style={{ textDecoration: "none" }}>Try Demo<i class="fa fa-long-arrow-right" area-hidden="true"></i></a>
            <a href={learnMore} style={{marginLeft:"50px", textDecoration: "none"}}>Learn More<i class="fa fa-long-arrow-right" area-hidden="true"></i></a>
          </div>
          <div className="mt-3">
            <a href={googlePlay}>
              <img src="/media/images/googlePlayBadge.svg"/>
            </a>
            <a href={appStore} style={{marginLeft:"50px"}}>
              <img src="/media/images/appstoreBadge.svg"/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
