import React, {FC, useEffect} from 'react';
import Room from "./Room";
import {useDispatch, useSelector} from "react-redux";
import {fetchRoomsTC} from "../../store/roomsReducer";
import {AppRootStateType} from "../../store/store";
import {HotelDetailsType, RoomType} from "../../api/api";

type RoomsWrapperPropsType = {
    id: string
    adult: number
    child: number
}

type RoomsByIdType = {
    [key: string]: HotelDetailsType
}

const RoomsWrapper:FC<RoomsWrapperPropsType> = ({   id,adult, child} ) => {

    const rooms = useSelector<AppRootStateType, RoomsByIdType>(state => state.hotelDetails)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchRoomsTC(id))
    }, [dispatch])


    return (
        <>
            {rooms[id].rooms
                .filter((room: RoomType) => room.occupancy.maxAdults >= adult && adult !== 0)
                .filter((room: RoomType) => room.occupancy.maxChildren >= child)
                .map((room: RoomType) => {
                    return <Room
                        description={room.longDescription}
                        name={room.name}
                        adult={room.occupancy.maxAdults}
                        children={room.occupancy.maxChildren}
                    />
                })}
        </>
    );
};

export default RoomsWrapper;