import React, {useEffect} from 'react';
import style from './Hotel.module.scss';
import {AiFillStar, AiOutlineStar} from "react-icons/ai";
import {fetchHotelsTC} from "../../store/hotelsReducer";
import {useDispatch, useSelector} from "react-redux";
import CarouselComponent from "../carousel/CarouselComponent";
import {AppRootStateType} from '../../store/store';
import {HotelTypes} from "../../api/api";
import RoomsWrapper from "../room/RoomsWrapper";

const Hotel = () => {

    const hotels = useSelector<AppRootStateType, Array<HotelTypes>>(state => state.hotels.hotels)
    console.log('hotels', hotels)


    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchHotelsTC())
        // dispatch(fetchRoomsTC(hotels.id))

    }, [dispatch])


    return (
        <>
            {hotels?.map((hotel: HotelTypes) => (

                <div
                    key={hotel.id}
                    className={style.container}>
                    <div className={style.hotelInfoWrapper}>
                        <div className={style.imageBlock}>

                            <CarouselComponent images={hotel.images}/>


                        </div>
                        <div className={style.infoBlock}>
                            <p>{hotel.name}</p>
                            <p>{hotel.address1}</p>
                            <p>{hotel.address2}</p>
                        </div>
                        <div className={style.starsBlock}>


                                <div>
                                    <span>{Number(hotel.starRating) >= 1 ? <AiFillStar/> : <AiOutlineStar/>}</span>
                                    <span>{Number(hotel.starRating) >= 2 ? <AiFillStar/> : <AiOutlineStar/>}</span>
                                    <span>{Number(hotel.starRating) >= 3 ? <AiFillStar/> : <AiOutlineStar/>}</span>
                                    <span>{Number(hotel.starRating) >= 4 ? <AiFillStar/> : <AiOutlineStar/>}</span>
                                    <span>{Number(hotel.starRating) >= 5 ? <AiFillStar/> : <AiOutlineStar/>}</span>
                                </div>


                        </div>
                    </div>
                    <div className={style.roomInfoWrapper}>
                        <RoomsWrapper id={hotel.id} />
                    </div>
                </div>
            ))

            }
        </>
    );
};

export default Hotel;