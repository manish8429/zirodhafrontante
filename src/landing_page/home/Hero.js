import React from "react";

function Hero() {
  return (
    <div className="container p-5">
      <div className="row text-center p-5">
        <img src="media/images/landing.png" alt="Hero Img " className="mb-5" />
        <h1 className=" mt-3"> Invest in everything</h1>
        <p className="mt-2">
          Online platform to invest in stocks, derivatives, mutual funds, and
          more
        </p>
        <button className=" p-2 btn btn-primary fs-5 mt-3" style={{width: "20%", margin: "0 auto"}}>Signup now</button>
      </div>
    </div>
  );
}

export default Hero;
