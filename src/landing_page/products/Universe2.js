import React from "react";

function Universe2() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h2>The Zerodha Universe</h2>
        <p className="mt-3">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 p-3 ">
          <img src="media/images/smallcase-logo.png" alt="..." />
          <p>Thematic investment platform</p>
        </div>
        <div className="col-4 p-3 ">
          <img
            src="media/images/streak-logo.png"
            alt="..."
            style={{ width: "40%" }}
          />
          <p>Algo & strategy platform</p>
        </div>
        <div className="col-4 p-3">
          <img
            src="media/images/sensibull-logo.svg"
            alt="..."
            style={{ height: "40%" }}
          />
          <p>Options trading platform</p>
        </div>
        <div className="col-4 p-3 ">
          <img
            src="media/images/zerodhafundhouse.png"
            alt="..."
            style={{ height: "30%" }}
          />
          <p>Asset management</p>
        </div>
        <div className="col-4 p-3 ">
          <img
            src="media/images/tijori.svg"
            alt="..."
            style={{ height: "25%" }}
          />
          <p>Fundamental research platform</p>
        </div>
        <div className="col-4 p-3 ">
          <img
            src="media/images/ditto-logo.png"
            alt="..."
            style={{ width: "30%" }}
          />
          <p>Asset management</p>
        </div>
        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Signup Now
        </button>
      </div>
    </div>
  );
}

export default Universe2;
