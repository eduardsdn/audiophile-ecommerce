import HeaderCSS from "../styles/header.module.css";

import cartImg from "../assets/shared/desktop/icon-cart.svg";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className={HeaderCSS.navWrapper}>
      <div className={HeaderCSS.headerNavHolder}>
        <nav className={HeaderCSS.nav}>
          <a href="/" className={HeaderCSS.logo}>
            audiophile
          </a>
          <ul className={HeaderCSS.navLinks}>
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
          <img src={cartImg} alt="" />
          {/* Has to be link to the cart */}
        </nav>
      </div>
    </div>
  );
}
