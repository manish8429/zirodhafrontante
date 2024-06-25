import React from "react";

function Hero() {
  return (
    <section className="container-fluded" id="SupportHero">
      <div className="p-5" id="suppoerWrapper">
        <h5>Support Portal</h5>
        <a href="">Track tickets</a>
      </div>
      <div className="row p-2 mx-1">
      <div className="col-6 p-3 " id="anchertag"> 
        <h5>Search for an answer or browse help topics to create a ticket</h5>
        <input placeholder="Eg: how do i activate F&amp;O, why is my order getting rejected ... " id="searchbox" className="mt-3"/>
        <br/>
        <a href="" className="spad-block mb-3">Track account opening </a> 
        <a href="" className="spad-block mb-3">Track segment activation </a>
        <a href="">Intraday margins </a>
        <a href="">Kite user manual</a>
      </div>
      <div className="col-6 p-5 mb-5 "> 
      <h5>Featured</h5>
      <ol>
        <li><a href="">Latest Intraday leverages and Square-off timings </a></li>
        <br/>
        <li> <a href="">Surveillance measure on scrips - June 2024 </a></li>
      </ol>
      </div>
      </div>
    </section>
  );
}

export default Hero;
