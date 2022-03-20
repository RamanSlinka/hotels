import {hotelsAPI, RatePlanType, RoomType} from "../api/api";
import {AppThunkType} from "./store";
import {SetHotelsActionType} from "./hotelsReducer";


export type SetRoomsActionType = ReturnType<typeof setRoomsAC>
type ActionType = SetHotelsActionType | SetRoomsActionType

export type initialStateType = {
    [key: string]: {
        rooms: Array<RoomType>
        ratePlans: Array<RatePlanType>
    }
}


const initialState: initialStateType = {}

export const roomsReducer = (state = initialState, action: ActionType): initialStateType => {
    switch (action.type) {
        case 'SET-HOTELS' : {
            const copyState = {...state};
            action.hotels.forEach(hotel => {
                copyState[hotel.id] = {
                    rooms: [],
                    ratePlans: []
                }
            })

            return copyState
        }

        case  'SET-ROOMS':

            return {...state, [action.hotelId]: {...state[action.hotelId], rooms: action.rooms}}

        default:
            return state
    }
}


//action
export const setRoomsAC = (rooms: Array<RoomType>, hotelId: string) =>
    ({type: 'SET-ROOMS', rooms: rooms, hotelId} as const);


//thunk
export const fetchRoomsTC = (hotelId: string): AppThunkType => {
    return (dispatch) => {
        hotelsAPI.getHotelDetails(hotelId)

            .then((res) => {
                const rooms = res.data.rooms
                dispatch(setRoomsAC(rooms, hotelId))
            })

            .catch((error) => {
                console.log(error)
            })
    }
}