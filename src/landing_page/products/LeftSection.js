import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDesription,
  typeDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container border-top p-5">
      <div className="row">
        <div className="col-5 p-3">
            <img src={imageURL} alt="product" width="100%" />
        </div>
        <div className="col-1"></div>
        <div className="col-6 p-5 mt-4 ">
            <h2>{productName}</h2>
            <p>{productDesription}</p>
            <div>
            <a href={typeDemo}> Try Demo</a>
            <a href={learnMore} style={{marginLeft:"50px"}}>Learn More</a>
            </div>
            <div className="mt-4">
            <a href={googlePlay}> <img src="media/images/google-play-badge.svg" /></a>
            <a href={appStore}> <img src="media/images/appstore-badge.svg"  style={{marginLeft:"50px"}} /> </a>
            </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
