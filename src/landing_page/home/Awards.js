import React from "react";

function Awards() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6">
          <img src="media/images/largest-broker.svg" className="mt-5"></img>
        </div>
        <div className="col-6">
          <h1> Largest stock broker in India</h1>
          <p className="pt-4">
            1.5+ Crore Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>
          <div className="row p-3">
            <div className="col-6 ">
              <ul>
                <li className="m-2">Futures and Options</li>
                <li className="m-2">Commodity derivatives</li>
                <li className="m-2">Currency derivatives</li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li className="m-2">Stocks & IPOs</li>
                <li className="m-2">Direct mutual funds</li>
                <li className="m-2">Bonds and Govt. Securities</li>
              </ul>
            </div>
          </div>
          <img src="media/images/press-logos.png" style={{width: "90%"}} className="mb-5"></img>
        </div>
      </div>
    </div>
  );
}

export default Awards;
