import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunkMiddleware, {ThunkAction} from 'redux-thunk'
import {hotelsReducer, SetHotelsActionType} from "./hotelsReducer";
import {roomsReducer, SetRoomsActionType} from "./roomsReducer";


const rootReducer = combineReducers({
    hotels: hotelsReducer,
    rooms: roomsReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export type AppRootStateType = ReturnType<typeof rootReducer>

export type AppActionType = SetHotelsActionType | SetRoomsActionType


export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType,
    AppRootStateType,
    unknown,
    AppActionType>