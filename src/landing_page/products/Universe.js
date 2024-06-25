import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe2 from "./Universe2"

function Universe() {
  return (
    <>
      <Hero />
      <LeftSection
        imageURL="media/images/products-kite.png"
        productName="Kite"
        productDesription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        typeDemo=""
        learnMore="Learn More"
        googlePlay=""
        appStore=""
      />
       <RightSection 
      imageURL="media/images/products-kiteconnect.png"
      productName="Kite Connect API"
      productDesription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations"
      learnMore="Kite Connect "

      />
       <LeftSection
        imageURL="media/images/products-coin.png"
        productName="Kite Connect API"
        productDesription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        typeDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
       <RightSection 
      imageURL="media/images/products-console.png"
      productName="Console"
      productDesription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations"
      learnMore="Learn more"

      />
       <LeftSection
        imageURL="media/images/varsity-products.png"
        productName="Varsity mobile"
        productDesription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        
        googlePlay=""
        appStore=""
      />
      <p className="text-center p-5 fs-5">Want to know more about our technology stack? Check out the Zerodha.tech blog.</p>
     <Universe2/>
    </>
  );
}

export default Universe;
