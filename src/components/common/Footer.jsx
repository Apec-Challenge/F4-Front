import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer id="footer" className="site-footer">
      <div className="footer-copyright">
        <div className="container">
          <p className="copyright">2020 by K-RONA All Rights Reserved.</p>
          <Link to="/" className="back-top">
            Back to top<span className="ion-android-arrow-up"></span>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
