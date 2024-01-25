import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="umumi__Footer">
      <div>
        <h2>Navigations</h2>
        <p>Sell online</p>
        <p>Features</p>
        <p>Shopping cart</p>
        <p>Store builder</p>
      </div>
      <div>
        <p>Mobile commerce</p>
        <p>Dropshipping</p>
        <p>Website development</p>
      </div>
      <div>
        <p>Point of sale</p>
        <p>Hardware</p>
        <p>Software</p>
      </div>
      <div>
        <h2>Promo</h2>
        <img
          style={{ height: "200", width: "200px" }}
          src="https://preview.colorlib.com/theme/shoppers/images/hero_1.jpg"
          alt=""
        />
        <p>
          Finding Your Perfect Shoes <br />
          Promo from nuary 15 — 25, 2019
        </p>
      </div>
      <div>
        <h2>Contact Info</h2>
        <p>
          203 Fake St. Mountain View, San <br />
          Francisco, California, USA
        </p>
        <p>+2 392 3929 210</p>
        <p>emailaddress@domain.com</p>
        <h2>Subscribe</h2>
        <div>
         
          <input type="text" placeholder="Email" />
          <button>send</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
