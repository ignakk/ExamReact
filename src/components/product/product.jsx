import React from "react";
import {format} from '../Basket/Basket';
import { Link, NavLink } from "react-router-dom"
import style from './product.module.css';

export const Product = (props) => {
    return (
        <div className={style.tovar} key={props.id}>
            <NavLink to={`/tovar/${props.id}`}>
            <div className={style.img_tovar}>
                <img src={props.preview_image} alt="" />
            </div>
            </NavLink>
            <div className={style.name}>
                {props.name}
            </div>
            <div className={style.prices}>
            <p className={style.price}>{
            format(props.price * (props.discount/100))
            } ₽</p>
            <p className={style.price_old}>{format(props.price)} ₽</p>
            </div>
        </div>
    );
}