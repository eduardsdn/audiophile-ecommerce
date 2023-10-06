import FooterCSS from "../styles/footer.module.css";
import facebookLogo from "../assets/shared/desktop/icon-facebook.svg";
import twitterLogo from "../assets/shared/desktop/icon-twitter.svg";
import instagramLogo from "../assets/shared/desktop/icon-instagram.svg";

import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className={FooterCSS.footer}>
      <div className={FooterCSS.container}>
        <hr />
        <nav className={FooterCSS.nav}>
          <a href="/" className={FooterCSS.logo}>
            audiophile
          </a>
          <ul className={FooterCSS.navLinks}>
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/headphones">HEADPHONES</Link>
            </li>
            <li>
              <Link to="/speakers">SPEAKERS</Link>
            </li>
            <li>
              <Link to="/earphones">EARPHONES</Link>
            </li>
          </ul>
        </nav>
        <div className={FooterCSS.footerBottom}>
          <div className={FooterCSS.footerTextContent}>
            <p className={FooterCSS.footerTextContentMain}>
              Audiophile is an all in one stop to fulfill your audio needs.
              We're a small team of music lovers and sound specialists who are
              devoted to helping you get the most out of personal audio. Come
              and visit our demo facility - we’re open 7 days a week.
            </p>
            <p className={FooterCSS.footerTextContentCopyright}>
              Copyright 2023. All Rights Reserved
            </p>
          </div>
          <div className={FooterCSS.footerSocialLinks}>
            <a href="https://www.facebook.com/">
              <img src={facebookLogo} alt="" />
            </a>
            <a href="https://twitter.com/login">
              <img src={twitterLogo} alt="" />
            </a>
            <a href="https://www.instagram.com/">
              <img src={instagramLogo} alt="" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
