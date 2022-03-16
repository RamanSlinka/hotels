import React from 'react';
import image from '../../assets/image_hotel.jpg';
import style from './Header.module.scss';
import {AiFillStar, AiOutlineStar} from "react-icons/ai";

const Header = () => {
    return (
        <header className={style.header}>
            <div>
                <img
                    className={style.headImage}
                    src={image} alt="hotel"/>
                <div className={style.line}></div>
            </div>
            <div className={style.filterBlock}>
                <div className={style.starsWrapper}>
                    <span><AiFillStar/></span>
                    <span><AiFillStar/></span>
                    <span><AiFillStar/></span>
                    <span><AiOutlineStar/></span>
                    <span><AiOutlineStar/></span>
                </div>
                <div className={style.adultWrapper}>
                    <p>Adults : </p>
                    <button className={style.button}>+</button>
                    <p>1</p>
                    <button className={style.button}>-</button>
                </div>
                <div className={style.childrenWrapper}>
                    <p>Children : </p>
                    <button className={style.button}>+</button>
                    <p>1</p>
                    <button className={style.button}>-</button>
                </div>
            </div>
        </header>
    );
};

export default Header;