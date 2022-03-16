import React from 'react';
import style from './Room.module.scss';


const Room = () => {
    return (
        <div className={style.roomContainer}>
            <div className={style.infoBlock}>
                <p>Room name</p>
                <p>Adult: 2</p>
                <p>Children: 0</p>
            </div>
            <div className={style.descriptionBlock}>
                <p>description</p>
            </div>
        </div>
    );
};

export default Room;