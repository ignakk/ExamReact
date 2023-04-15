import Catalog from "../Catalog/Catalog";
import style from "./Home.module.css";
import rafiki from "../../assets/img/rafiki.svg"
import { NavLink } from "react-router-dom";

const Home = () => {


    return (
        <>
            <div className="container">
                <div className={style.intro}>
                    <div className={style.intro_left}>
                        <h1 className={style.intro_title}>"Flowers Store" - Магазин цветов на любой вкус!</h1>
                        <p className={style.intro_text}>
                            Порадуйте своих близких и любимых яркими цветами которыми наполнят их жизнь цветы нашей компании
                        </p>
                        <NavLink className={style.intro_btn} to={"/"}>
                            Explore
                        </NavLink>
                    </div>
                    <img src={rafiki} alt="" className={style.logo} />
                </div>
                <Catalog/>
            </div>
        </>
    )
}

export default Home