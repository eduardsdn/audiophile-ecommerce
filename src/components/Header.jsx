import HeaderCSS from "../styles/header.module.css";
import cartImg from "../assets/shared/desktop/icon-cart.svg";
import iconHamburger from "../assets/shared/tablet/icon-hamburger.svg";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import CartDropdown from "./CartDropdown";

export default function Header(props) {
  const navigate = useNavigate();
  const [cartIsShown, setCartIsShown] = useState(false);

  return (
    <div className={HeaderCSS.navWrapper}>
      <div className={HeaderCSS.headerNavHolder}>
        <nav className={HeaderCSS.nav}>
          <div className={HeaderCSS.logoHolder}>
            <img
              className={HeaderCSS.iconHamburgerMenu}
              src={iconHamburger}
              alt=""
            />
            <a href="/" className={HeaderCSS.logo}>
              audiophile
            </a>
          </div>
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
          <img
            className={HeaderCSS.cartIcon}
            src={cartImg}
            alt=""
            onClick={() => {
              props.toggleCartIsShown();
            }}
          />
          {/* Has to be link to the cart */}
        </nav>
        {props.cartIsShown && (
          <CartDropdown toggleCartIsShown={props.toggleCartIsShown} />
        )}
      </div>
      {/* {cartIsShown && <CartDropdown />} */}
    </div>
  );
}
