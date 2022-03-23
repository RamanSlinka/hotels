import React, {FC, useEffect} from 'react';
import style from './Hotel.module.scss';
import {fetchHotelsTC} from "../../store/hotelsReducer";
import {useDispatch, useSelector} from "react-redux";
import CarouselComponent from "../carousel/CarouselComponent";
import {AppRootStateType} from '../../store/store';
import {HotelTypes} from "../../api/api";
import RoomsWrapper from "../room/RoomsWrapper";
import Star from "../star/Star";

type HotelPropsType = {
    ratingValue: number
    adult: number
    child: number
}

const Hotel: FC<HotelPropsType> = ({ratingValue, adult, child}) => {

    const hotels = useSelector<AppRootStateType, Array<HotelTypes>>(state => state.hotels.hotels)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchHotelsTC())
    }, [dispatch])


    return (
        <section  className={style.section} >

                {hotels.filter((hotel: HotelTypes) => Number(hotel.starRating) >= ratingValue)
                    .map((hotel: HotelTypes) => (

                        <div key={hotel.id} className={style.container}>
                            <div className={style.hotelInfoWrapper}>
                                <div className={style.imageBlock}>

                                    <CarouselComponent images={hotel.images}/>

                                </div>
                                <div className={style.infoBlock}>
                                    <h2>{hotel.name}</h2>
                                    <p>{hotel.address1}</p>
                                    <p>{hotel.address2}</p>
                                </div>
                                <div className={style.starsBlock}>

                                    <Star selected={Number(hotel.starRating) >= 1} />
                                    <Star selected={Number(hotel.starRating) >= 2} />
                                    <Star selected={Number(hotel.starRating) >= 3} />
                                    <Star selected={Number(hotel.starRating) >= 4} />
                                    <Star selected={Number(hotel.starRating) >= 5} />

                                </div>
                            </div>
                            <div className={style.roomInfoWrapper}>
                                <RoomsWrapper id={hotel.id}
                                              adult={adult}
                                              child={child}
                                />
                            </div>
                        </div>
                    ))

                }


        </section>
    );
};

export default Hotel;