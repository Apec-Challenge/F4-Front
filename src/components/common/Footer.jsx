import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer id="footer" className="site-footer">
      <div className="footer-copyright">
        <div className="container">
          <p className="copyright">2020 by K-RONA All Rights Reserved.</p>
          <Link
            to="#"
            style={{ cursor: 'pointer' }}
            className="back-top"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Back to top
            <i className="fa fa-arrow-up" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
