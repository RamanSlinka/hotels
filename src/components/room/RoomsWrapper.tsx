import React, {useEffect} from 'react';
import Room from "./Room";
import {useDispatch, useSelector} from "react-redux";
import {fetchRoomsTC} from "../../store/roomsReducer";
import {AppRootStateType} from "../../store/store";
import {RoomType} from "../../api/api";

type RoomsWrapperPropsType = {
    id: string
    adult: number
    child: number
}

const RoomsWrapper = (props: RoomsWrapperPropsType) => {

      const rooms = useSelector<AppRootStateType, any>(state => state.hotelDetails)

    console.log(`rooms[${props.id}]`, rooms[props.id].rooms)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchRoomsTC(props.id))
    }, [dispatch])


    return (
        <>
            {rooms[props.id].rooms
                .filter((room: RoomType) => room.occupancy.maxAdults >= props.adult && props.adult !==0)
                .filter((room: RoomType) => room.occupancy.maxChildren >= props.child )
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