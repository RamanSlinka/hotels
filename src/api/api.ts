import axios from "axios";

export const hotelsAPI = {
    getHotels() {
        return axios
            .get<Array<HotelTypes>>('https://obmng.dbm.guestline.net/api/hotels?collection-id=OBMNG')
    },
    getHotelDetails(hotelId: string) {
        return axios
            .get<HotelDetailsType>(`https://obmng.dbm.guestline.net/api/roomRates/OBMNG/${hotelId}`)

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

export type RatePlanType = RatePlanObject1Type | RatePlanObject2Type

type RatePlanObject1Type =
    {
        id: "string",
        shortDescription: "string",
        longDescription?: "string",
        prePayment: "string",
        cancellationPolicy: {
            name: "string",
            text: "string",
            penalty: "string",
            applicable: "string",
            amount: number,
            hour?: "string"
            days?: number
        }
        prePaymentValue?: number,
        prePaymentIsPercentag?: boolean
    }
type RatePlanObject2Type =
    {
        id: "string",
        shortDescription: "string",
        prePayment: "string"
    }




