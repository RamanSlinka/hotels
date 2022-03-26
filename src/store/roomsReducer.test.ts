import {RatePlanType, RoomType} from "../api/api";
import {roomsReducer, setRoomsAC} from "./roomsReducer";

 type initialStateType = {
    [key: string]: {
        rooms: Array<RoomType>
        ratePlans: Array<RatePlanType>
    }
}


const state: initialStateType = {
    hotelId: {
        rooms: [],
        ratePlans: []
    }
 }

const hotelId = 'ABC'
const rooms:RoomType[] = [
    {
        id: "SUPE",
        name: "Superior Double",
        shortDescription:'text',
        longDescription: "Superior Double",
        occupancy: {
            maxAdults: 2,
            maxChildren: 0,
            maxOverall: 2
        },
        disabledAccess: false,
        bedConfiguration: "None",
        images: [],
        facilities: []
    },
    {
        id: "STND",
        name: "Standard Double",
        shortDescription:'text',
        longDescription: "Standard Double",
        occupancy: {
            maxAdults: 2,
            maxChildren: 0,
            maxOverall: 2
        },
        disabledAccess: false,
        bedConfiguration: "None",
        images: [],
        facilities: []
    }
]

test('new rooms should be added', () => {

  const action = setRoomsAC(rooms, hotelId);
   const newState = roomsReducer(state, action);

    expect(newState[hotelId].rooms.length).toBe(2);
    expect(newState[hotelId].rooms[0].id).toBe('SUPE');
    expect(newState[hotelId].rooms[1].id).toBe('STND');
    expect(newState[hotelId].rooms[0].occupancy.maxAdults).toBe(2);
})


