import "../css/Footer.css";


function Footer() {
  return (
    <>
      <footer>
        <div className="footer-main-div">
          <div className="get-to-know">
            <div className="footer-child">
              Get to know
              <div><a className="footer-child-item" href="#">About NatureBee</a></div>
              <div><a className="footer-child-item" href="#">Career</a></div>
            </div>
          </div>
          <div className="connect-with-us">
            <div className="footer-child">
              Connect with us
              <div><a className="footer-child-item" href="#">Facebook</a></div>
              <div><a className="footer-child-item" href="#">Tweeter</a></div>
              <div><a className="footer-child-item" href="#"></a></div>
            </div>
          </div>
          <div className="make-money-with-us">
            <div className="footer-child">
              Make money with us
              <div><a className="footer-child-item" href="#">Sell on NatureBee</a></div>
              <div><a className="footer-child-item" href="#">Supply to NatureBee</a></div>
              <div><a className="footer-child-item" href="#">Become an Affiliate</a></div>
              <div><a className="footer-child-item" href="#">Advertise Your Products</a></div>
              </div>
          </div>
          <div className="let-us-help-you">
            <div className="footer-child">
              Let us help you
              <div><a className="footer-child-item" href="#">Your Accout</a></div>
              <div><a className="footer-child-item" href="#">Help</a></div>
            </div>
          </div>
        </div>
        <hr />
        <div className="footer-last">
          <img className="logo-img" src="naturebee.jpeg" alt="" />
          <div className="logo-line">naturebee.com</div>
        </div>
      </footer>
    </>
  );
}

export default Footer;