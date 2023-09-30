import HeaderCSS from "../styles/header.module.css";
import cartImg from "../assets/shared/desktop/icon-cart.svg";

export default function Header() {
  return (
    <div className={HeaderCSS.navHolder}>
      <nav className={HeaderCSS.nav}>
        <a href="/" className={HeaderCSS.logo}>
          audiophile
        </a>
        <ul className={HeaderCSS.navLinks}>
          <li>
            <a href="/home">HOME</a>
          </li>
          <li>
            <a href="/headphones">HEADPHONES</a>
          </li>
          <li>
            <a href="/speakers">SPEAKERS</a>
          </li>
          <li>
            <a href="/earphones">EARPHONES</a>
          </li>
        </ul>
        <img src={cartImg} alt="" />
      </nav>
    </div>
  );
}
