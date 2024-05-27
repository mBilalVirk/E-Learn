import React from "react";

export default function Footer({logo, facebook, instagram, twitter, linkedin}) {
  return (
    <div>
      <>
        <section id="footer">
          <div className="container footer-row">
            <hr />
            <div className="footer-left-col">
              <div className="footer-links">
                <div className="link-title">
                  <h4>Product</h4>
                  <small>Our Plan</small>
                  <br />
                  <small>Free Trial</small>
                </div>
                <div className="link-title">
                  <h4>About Us</h4>
                  <small>Request Demo</small>
                  <br />
                  <small>FAQs</small>
                </div>
                <div className="link-title">
                  <h4>Support</h4>
                  <small>Features</small>
                  <br />
                  <small>Contact US</small>
                </div>
                <div className="link-title">
                  <h4>Explore</h4>
                  <small>Find a nonprofit</small>
                  <br />
                  <small>Corporate Solution</small>
                </div>
              </div>
            </div>
            <div className="footer-right-col">
              <div className="footer-info">
                <div className="copyright-text">
                  <small>support@gmail.com</small>
                  <br />
                  <small>Copyright © 2022</small>
                </div>
                <div className="footer-logo">
                  <img src={logo} alt="" />
                  <button className="common-btn">English</button>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* end of footer */}
        {/* social-icon */}
        <div className="social-icons">
          <img src={facebook} alt="" />
          <img src={instagram} alt="" />
          <img src={twitter} alt="" />
          <img src={linkedin} alt="" />
        </div>
      </>
    </div>
  );
}
