import React from 'react';
import style from './Hotel.module.scss';
import {AiFillStar, AiOutlineStar} from "react-icons/ai";
import Room from "../room/Room";

const Hotel = () => {
    return (
        <div className={style.container}>
            <div className={style.hotelInfoWrapper}>
                <div className={style.imageBlock}>Images</div>
                <div className={style.infoBlock}>
                    <p>Name Hotel</p>
                    <p>Address hotel</p>
                </div>
                <div className={style.starsBlock}>

                        <span><AiFillStar/></span>
                        <span><AiFillStar/></span>
                        <span><AiFillStar/></span>
                        <span><AiOutlineStar/></span>
                        <span><AiOutlineStar/></span>

                </div>
            </div>
            <div className={style.roomInfoWrapper}>
                <Room/>
                <Room/>
                <Room/>
            </div>
        </div>
    );
};

export default Hotel;