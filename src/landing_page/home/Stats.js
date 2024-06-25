import React from "react";

function Stats() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 p-3">
          <h2 className="mt-5 p-5">Trust with confidence</h2>

          <h5>Customer-first always</h5>
          <p className="text-muted">
            That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores
            worth of equity investments.
          </p>

          <h5>No spam or gimmicks</h5>
          <p  className="text-muted">
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like.
          </p>

          <h5>The Zerodha universe</h5>
          <p className="text-muted">
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>

          <h5>Do better with money</h5>
          <p className="text-muted">
            With initiatives like Nudge and Kill Switch, we don't just
            facilitate transactions, but actively help you do better with your
            money.
          </p>
        </div>
        <div className="col-6">
          <img src="media/images/ecosystem.png" style={{ width: "100%" }}></img>
          <div className="text-center">
          <a className='mx-5' href="" style={{textDecoration:"none"}}> Explore our products <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
          <a href="" style={{textDecoration:"none"}}> Try Kite demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
