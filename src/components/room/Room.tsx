import React, {FC} from 'react';
import style from './Room.module.scss';

type RoomPropsType = {
    description: string
    name: string
    adult: number
    children: number
}
const Room: FC<RoomPropsType> = ({description, name,
                                     adult, children}) => {
    return (
        <div className={style.roomContainer}>
            <div className={style.infoBlock}>
                <h4>{name}</h4>
                <p>Adult: {adult}</p>
                <p>Children: {children}</p>
            </div>
            <div className={style.descriptionBlock}>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Room;