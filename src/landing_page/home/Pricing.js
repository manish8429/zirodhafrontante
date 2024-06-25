import React from "react";

function Pricing() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-4 mt-5">
          <h2 className="">Unbeatable pricing</h2>
          <p className="p-3">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <p>
            <a href="">
              See pricing{" "}
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </p>
        </div>
        <div className="col-2"></div>
        <div className="col-6 mt-5 p-3">
          <div className="row text-center">
            <div className="col p-5 border">
                <h1  className="m3">₹0</h1>
                <p>Free equity delivery and <br></br>direct mutual funds</p>
            </div>
            <div className="col p-5 border">
                <h1 className="m3">₹20</h1>
                <p>Intraday and F&O</p>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
