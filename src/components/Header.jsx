import HeaderCSS from "../styles/header.module.css";
import cartImg from "../assets/shared/desktop/icon-cart.svg";
import iconHamburger from "../assets/shared/tablet/icon-hamburger.svg";

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import CartDropdown from "./CartDropdown";
import Categories from "./Categories";

export default function Header(props) {
  const [isMenuMobile, setIsMenuMobile] = useState(false);

  useEffect(() => {
    const handleWindowResize = () => {
      if (window.innerWidth <= 480) {
        setIsMenuMobile(true);
      } else if (window.innerWidth > 480) {
        setIsMenuMobile(false);
      }
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div className={HeaderCSS.navWrapper}>
      <div className={HeaderCSS.headerNavHolder}>
        <nav className={HeaderCSS.nav}>
          <div className={HeaderCSS.logoHolder}>
            <img
              className={HeaderCSS.iconHamburgerMenu}
              src={iconHamburger}
              alt=""
              onClick={() => {
                props.toggleMenuIsShown();
                if (props.cartIsShown) {
                  props.toggleCartIsShown();
                }
              }}
            />
            <Link to="/" className={HeaderCSS.logo}>
              audiophile
            </Link>
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
              if (props.menuIsShown) {
                props.toggleMenuIsShown();
              }
            }}
          />
        </nav>
        {props.cartIsShown && (
          <CartDropdown toggleCartIsShown={props.toggleCartIsShown} />
        )}
      </div>
      {props.menuIsShown ? (
        <div className={HeaderCSS.dropDownMenu}>
          <Categories isMenuMobile={isMenuMobile}></Categories>
        </div>
      ) : null}
    </div>
  );
}
