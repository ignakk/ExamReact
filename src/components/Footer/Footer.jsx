import { NavLink } from "react-router-dom";
import cart from "../../assets/img/Shopping.svg";
import style from "./footer.module.css";

const Footer = ({ setActive }) => {
  return (
    <footer>
      <NavLink to={"/"}>
        <div className={style.logo}>WeAreBuilding</div>
      </NavLink>
      <nav className={style.nav}>
        <NavLink className={style.navlink} to={"/"}>
          Main
        </NavLink>
        <NavLink className={style.navlink} to={"#catalog"}>
          Catalog
        </NavLink>
        <NavLink className={style.navlink} to={"#catalog"}>
          % Sale
        </NavLink>
      </nav>
      <div className={style.btns_header}>
        <div className={style.ikon} onClick={() => setActive(true)}>
          <img className={style.cart_icon} src={cart} alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
