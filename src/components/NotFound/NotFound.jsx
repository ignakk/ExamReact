import React from "react";
import NotFoundImg from '../../assets/img/amico.svg';

import style from './notFound.module.css';

export const NotFound = (props) => {
    return (
        <div className={style.wrapper}>
            <img className={style.notFound} src={NotFoundImg} alt="" />
            <h2>Упс по вашему запросу ничего не нашлось</h2>
        </div>
    )
}