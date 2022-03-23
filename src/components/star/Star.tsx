import React, {FC} from "react";
import {AiFillStar, AiOutlineStar} from "react-icons/ai";


export type RatingValueType = 1 | 2 | 3 | 4 | 5 | 0

type StarPropsType = {
    selected: boolean
    onClick?: (value: RatingValueType) => void
    value?: RatingValueType
}

const Star: FC<StarPropsType> = ({onClick, value, selected}) => {
    return (
        <>
            {onClick && value
                ? (
                    <span onClick={() => onClick(value)}>
                         {selected ? <AiFillStar/> : <AiOutlineStar/>}
                     </span>
                )
                : (
                    <span>
                         {selected ? <AiFillStar/> : <AiOutlineStar/>}
                    </span>
                )
            }
        </>
    )
}

export default Star;