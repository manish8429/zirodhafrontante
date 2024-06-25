import React from "react";

function Footer() {
  return (
    <footer className="mainfooter" style={{ backgroundColor: "#fbfbfb" }}>
      <div className="contaner  m-5 border-top mt-5">
        <div className="row">
          <div className="col">
            <img
              src="media/images/logo.svg"
              style={{ width: "50%" }}
              className=""
            ></img>
            <p>
              {" "}
              &copy; 2010 - 2024, Zerodha Broking Ltd. All rights reserved.
            </p>
          </div>
          <div className="col">
            <p>Company</p>
            <a style={{ textDecoration: "none" }} className="text-muted" href="">
              About
            </a>
            <br></br>
            <a style={{ textDecoration: "none"  }}  className="text-muted"  href="">
              Products
            </a>
            <br></br>
            <a style={{ textDecoration: "none" }}  className="text-muted"  href="">
              Pricing
            </a>
            <br></br>
            <a style={{ textDecoration: "none" }} className="text-muted"   href="">
              Referral programme
            </a>
            <br></br>
            <a style={{ textDecoration: "none" }}  className="text-muted"  href="">
              Careers
            </a>
            <br></br>
            <a style={{ textDecoration: "none" }}  className="text-muted"  href="">
              Zerodha.tech
            </a>
            <br></br>
            <a style={{ textDecoration: "none" }} className="text-muted"  href="">
              Press & media
            </a>
            <br></br>
            <a style={{ textDecoration: "none" }}  className="text-muted"  href="">className="text-muted" 
              Zerodha Cares (CSR)
            </a>
            <br></br>
          </div>
          <div className="col ">
            <p href="">Contact us</p>

            <a style={{ textDecoration: "none" }} className="text-muted"  href="">Support portal</a>
            <br></br>
            <a style={{ textDecoration: "none" }} className="text-muted"  href="">Z-Connect blog</a>
            <br></br>
            <a style={{ textDecoration: "none" }} className="text-muted"  href="">List of charges</a>
            <br></br>
            <a style={{ textDecoration: "none" }} className="text-muted"  href="">Downloads & resources</a>
            <br></br>
            <a style={{ textDecoration: "none" }} className="text-muted"  href=""> Videos</a>
            <br></br>
            <a style={{ textDecoration: "none" }} className="text-muted"  href=""> Market overview</a>
            <br></br>
            <a style={{ textDecoration: "none" }} className="text-muted"  href="">How to file a complaint?</a>
            <br></br>
            <a style={{ textDecoration: "none" }} className="text-muted"  href="">Status of your complaints</a>
            <br></br>
          </div>
          <div className="col">
            <p>Account</p>
            <a style={{ textDecoration: "none" }} className="text-muted" href="">Open an account</a> <br></br>
            <a style={{ textDecoration: "none" }} className="text-muted" href="">Fund transfer</a> <br></br>
          </div>
        </div>
        <div className="mt-5 text-muted" style={{ fontSize: "14px" }}>
          <p>
            Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration
            no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha
            Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity
            Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001
            – SEBI Registration no.: INZ000038238 Registered Address: Zerodha
            Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence
            Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka,
            India. For any complaints pertaining to securities broking please
            write to complaints@zerodha.com, for DP related to dp@zerodha.com.
            Please ensure you carefully read the Risk Disclosure Document as
            prescribed by SEBI | ICF
          </p>
          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances
          </p>
          <p>
            Smart Online Dispute Resolution | Grievances Redressal Mechanism
          </p>
          Investments in securities market are subject to market risks; read all
          the related documents carefully before investing.
          <p>
            Attention investors: 1) Stock brokers can accept securities as
            margins from clients only by way of pledge in the depository system
            w.e.f September 01, 2020. 2) Update your e-mail and phone number
            with your stock broker / depository participant and receive OTP
            directly from depository on your e-mail and/or mobile number to
            create pledge. 3) Check your securities / MF / bonds in the
            consolidated account statement issued by NSDL/CDSL every month.
          </p>
          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of Zerodha and offering such services, please
            create a ticket here.
          </p>
        </div>
        <div className="d-flex justify-content-center text-muted">
            <ul >
            <li class="mx-3">NSE</li>
                    <li class="mx-2">BSE</li>
                    <li class="mx-2">MCX</li>
                    <li class="mx-2">Terms & conditions</li>
                    <li class="mx-2">Policies & procedures</li>
                    <li class="mx-2">Privacy policy</li>
                    <li class="mx-2">Disclosure</li>
                    <li class="mx-2">For investor's attention</li>
                    <li class="mx-2">Investor charter</li>
            </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
