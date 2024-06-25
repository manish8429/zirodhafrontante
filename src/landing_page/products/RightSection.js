import React from "react";

function RightSection({ imageURL, productName, productDesription, learnMore }) {
  return (
    <div className="container ">
      <div className="row ">
        <div className="col-6 mt-5 p-5">
           <h1 className="mt-5 -4">{productName}</h1>
           <p className="text-muted">{productDesription}</p>
           <a href="" style={{textDecoration:"none"}}>{learnMore}</a>
        </div>
        <div className="col-6 mb-5">
        <img src={imageURL} alt={productName} />
       
        </div>
      </div>
    </div>
  );
}

export default RightSection;
