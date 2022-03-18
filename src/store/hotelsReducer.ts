import {AppThunkType} from "./store";
import {hotelsAPI, HotelTypes} from "../api/api";

export type SetHotelsActionType = ReturnType<typeof setHotelsAC>
type ActionType = SetHotelsActionType

export type InitialStateType = {
    hotels: Array<HotelTypes>
}

const initialState: InitialStateType = {
    hotels: []
}

export const hotelsReducer = (state= initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case 'SET-HOTELS':
        return {...state, hotels: action.hotels}

        default:
            return state
    }
}


//action
export const setHotelsAC = (hotels: Array<HotelTypes>) => ({
    type: 'SET-HOTELS', hotels} as const);



//thunk
export const fetchHotelsTC = (): AppThunkType => {
    return (dispatch) => {
        hotelsAPI.getHotels()
            .then((res) => {
                dispatch(setHotelsAC(res.data))
            })

            .catch((error) => {
                console.log(error)
            })
    }
}