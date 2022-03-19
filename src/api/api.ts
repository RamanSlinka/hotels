import axios from "axios";

const instance = axios.create({
    baseURL: 'https://obmng.dbm.guestline.net/api/hotels?collection-id=OBMNG'
});

export const hotelsAPI = {
    getHotels() {
        return instance.get<Array<HotelTypes>>(``)
    },
    getHotelDetails(hotelId: string) {
        return instance.get<HotelDetailsType>(`/${hotelId}`)
    }
}


//types
export type HotelTypes = {
    id: string,
    name: string,
    description: string
    address1: string,
    address2: string,
    postcode: string,
    town: string,
    country: string,
    countryCode: string,
    starRating: string,
    facilities: Array<FacilitiesType>,
    telephone: string,
    email: string,
    images: Array<ImagesType>
    checkInHours: string,
    checkInMinutes: string,
    checkOutHours: string,
    checkOutMinutes: string,
    position: PositionType
}

type FacilitiesType = {
    code: string
}

export type ImagesType = {
    url: string
}

type PositionType = {
    latitude: string,
    longitude: string,
    timezone: string
}


export type HotelDetailsType = {
    rooms: Array<RoomType>
    ratePlans: Array<RatePlanType>
}

export type RoomType = {
    id: string
    name: string
    shortDescription: string
    longDescription: string
    occupancy: {
        maxAdults: number
        maxChildren: number
        maxOverall: number
    },
    disabledAccess: boolean
    bedConfiguration: string
    images: Array<ImageRoomType>,
    facilities: Array<FacilityType>

}
type ImageRoomType = {
    url: string
    alt: string
}
type FacilityType = {
    code: string
    name: string
}

export type RatePlanType = any
