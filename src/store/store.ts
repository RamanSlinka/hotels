import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunkMiddleware, {ThunkAction} from 'redux-thunk'
import {hotelsReducer, SetHotelsActionType} from "./hotelsReducer";


const rootReducer = combineReducers({
hotels: hotelsReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export type AppRootStateType = ReturnType<typeof rootReducer>

export type AppActionType = SetHotelsActionType



export type AppThunkType <ReturnType = void> = ThunkAction<ReturnType,
    AppRootStateType,
    unknown,
    AppActionType>