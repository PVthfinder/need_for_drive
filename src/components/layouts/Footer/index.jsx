import React from 'react';

import "./Footer.scss";

function Footer() {
    return (
        <footer className="page_footer">
          <div className="page_footer__copyright">
            &copy; 2016-2019 &laquo;Need for drive&raquo;
          </div>
          <a href="tel:8 (495) 234-22-44" className="page_footer__phone">8 (495) 234-22-44</a>
        </footer>
    )
}

export default Footer;
