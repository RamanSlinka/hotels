

import {HotelTypes} from "../api/api";
import {hotelsReducer, setHotelsAC} from "./hotelsReducer";

export type SetHotelsActionType = ReturnType<typeof setHotelsAC>


export type InitialStateType = {
    hotels: Array<HotelTypes>
}


let hotels =   [
    {
        id: "OBMNG1",
        name: "OBM Hotel 1",
        description: "Etag for the win chocolate biscuit wafer soufflé toffee toffee donut.",
        address1: "Shrewsbury",
        address2: "Shrewsbury_2",
        postcode: "WC1R 4PS",
        town: "London",
        country: "United Kingdom",
        countryCode: "GB",
        starRating: "2",
        facilities: [{code: "2"}],
        telephone: "1234567",
        email: "JabbaScript@guestline.com",
        images: [{
            url: "https://rl-uk2.azureedge.net/picturemanager/images/OBMNG1/hotel4.jpg"
        }],
        checkInHours: "12",
        checkInMinutes: "00",
        checkOutHours: '11',
        checkOutMinutes: '00',
        position: {
            latitude: "51.507351000",
            longitude: "-0.127758000",
            timezone: "GMT"
        }
    } ,
    {     id: "OBMNG2",
        name: "OBM Hotel 2",
        description: "The win chocolate biscuit wafer soufflé toffee toffee donut.",
        address1: "10 Palace Place",
        address2: "Shrewsbury_2",
        postcode: "RTTBKJ C1R PS",
        town: "London",
        country: "United Kingdom",
        countryCode: "GB",
        starRating: "5",
        facilities: [{code: "2"}],
        telephone: "1234567",
        email: "JabbaScript@guestline.com",
        images: [{
            url: "https://rl-uk2.azureedge.net/picturemanager/images/OBMNG1/hotel4.jpg"
        }],
        checkInHours: "12",
        checkInMinutes: "00",
        checkOutHours: '11',
        checkOutMinutes: '00',
        position: {
            latitude: "31.7351000",
            longitude: "0.5527758000",
            timezone: "GMT"
        }
    }
]

let state: InitialStateType = {
    hotels:  []
}

test('new hotels should be added', () => {
    let action = setHotelsAC(hotels);
    let newState = hotelsReducer(state, action);

    expect(newState.hotels.length).toBe(2);
    expect(newState.hotels[0].name).toBe('OBM Hotel 1');
    expect(newState.hotels[1].name).toBe('OBM Hotel 2');
    expect(newState.hotels[1].position.timezone).toBe('GMT');
})