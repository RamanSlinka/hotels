import React, {FC, useEffect} from 'react';
import style from './Hotel.module.scss';
import {AiFillStar, AiOutlineStar} from "react-icons/ai";
import {fetchHotelsTC} from "../../store/hotelsReducer";
import {useDispatch, useSelector} from "react-redux";
import CarouselComponent from "../carousel/CarouselComponent";
import {AppRootStateType} from '../../store/store';
import {HotelTypes} from "../../api/api";
import RoomsWrapper from "../room/RoomsWrapper";

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
        <>
            {hotels.filter((hotel: HotelTypes) => Number(hotel.starRating) >= ratingValue)
                .map((hotel: HotelTypes) => (

                    <div
                        key={hotel.id}
                        className={style.container}>
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


                                <div>

                                    {/*<Star selected={Number(hotel.starRating) >= 1}  />*/}
                                    {/*<Star selected={Number(hotel.starRating) >= 2} />*/}
                                    {/*<Star selected={Number(hotel.starRating) >= 3} />*/}
                                    {/*<Star selected={Number(hotel.starRating) >= 4} />*/}
                                    {/*<Star selected={Number(hotel.starRating) >= 5} />*/}

                                    <span>{Number(hotel.starRating) >= 1 ? <AiFillStar/> : <AiOutlineStar/>}</span>
                                    <span>{Number(hotel.starRating) >= 2 ? <AiFillStar/> : <AiOutlineStar/>}</span>
                                    <span>{Number(hotel.starRating) >= 3 ? <AiFillStar/> : <AiOutlineStar/>}</span>
                                    <span>{Number(hotel.starRating) >= 4 ? <AiFillStar/> : <AiOutlineStar/>}</span>
                                    <span>{Number(hotel.starRating) >= 5 ? <AiFillStar/> : <AiOutlineStar/>}</span>
                                </div>


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
        </>
    );
};

export default Hotel;