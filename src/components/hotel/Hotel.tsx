import React, {useEffect} from 'react';
import style from './Hotel.module.scss';
import {AiFillStar, AiOutlineStar} from "react-icons/ai";
import Room from "../room/Room";
import {fetchHotelsTC} from "../../store/hotelsReducer";
import {useDispatch, useSelector} from "react-redux";
import CarouselComponent from "../carousel/CarouselComponent";
import { AppRootStateType } from '../../store/store';
import {HotelTypes} from "../../api/api";

const Hotel = () => {
const hotels = useSelector<AppRootStateType, Array<HotelTypes>>(state => state.hotels.hotels)
    console.log(hotels)

    const images = hotels[0].images
    //  console.log(images)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchHotelsTC())

    }, [dispatch])

    return (
        <div className={style.container}>
            <div className={style.hotelInfoWrapper}>
                <div className={style.imageBlock}>
                        <CarouselComponent images={images }/>


                    </div>
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