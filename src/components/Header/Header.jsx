import { NavLink } from "react-router-dom";
import cart from "../../assets/img/Shopping.svg";
import style from "./Header.module.css";

const Header = ({ setActive }) => {
  return (
    <header className={style.header}>
      <NavLink style={{textDecoration: 'none'}} to={"/"}>
        <div className={style.logo}>Flowers Store</div>
      </NavLink>
      <nav className={style.nav}>
        <NavLink className={style.navlink} to={"/"}>
          Main
        </NavLink>
        <NavLink className={style.navlink} to={"#catalog"}>
          Catalog
        </NavLink>
        <NavLink className={style.navlink} to={"#catalog"}>
          Sale
        </NavLink>
      </nav>
      <div className={style.btns_header}>
        <div className={style.ikon} onClick={() => setActive(true)}>
          <img className={style.cart_icon} src={cart} alt="" />
        </div>
      </div>
    </header>
  );
};

export default Header;
