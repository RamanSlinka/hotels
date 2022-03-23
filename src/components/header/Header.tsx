import React, {FC} from 'react';
import image from '../../assets/image_hotel.jpg';
import style from './Header.module.scss';
import Star from '../star/Star';
import { AiOutlineMinusCircle, AiOutlinePlusCircle} from "react-icons/ai";

type HeaderPropsType = {
    value: number
    onClick: (value: number) => void
    adult: number
    incrementAdult: () => void
    decrementAdult: () => void
    child: number
    incrementChild: () => void
    decrementChild: () => void
}

const Header: FC<HeaderPropsType> = ({
                                         value, onClick,
                                         incrementAdult, adult,
                                         decrementAdult, child,
                                         incrementChild, decrementChild
                                     }) => {


    return (
        <header className={style.header}>
            <div>
                <img
                    className={style.headImage}
                    src={image} alt="hotel"/>
                <div className={style.line}></div>
            </div>
            <div className={style.filterBlock}>

                <div className={style.starsWrapper}>
                    <Star selected={value > 0} onClick={onClick} value={1}/>
                    <Star selected={value > 1} onClick={onClick} value={2}/>
                    <Star selected={value > 2} onClick={onClick} value={3}/>
                    <Star selected={value > 3} onClick={onClick} value={4}/>
                    <Star selected={value > 4} onClick={onClick} value={5}/>
                </div>

                <div className={style.adultWrapper}>
                    <p>Adults : </p>
                    <AiOutlinePlusCircle className={style.button}
                                         onClick={incrementAdult}/>
                    <p>{adult}</p>
                    <AiOutlineMinusCircle className={style.button}
                                          onClick={decrementAdult}/>

                </div>
                <div className={style.childrenWrapper}>
                    <p>Children : </p>
                    <AiOutlinePlusCircle
                        className={style.button}
                        onClick={incrementChild}/>

                    <p>{child}</p>
                    <AiOutlineMinusCircle
                        className={style.button}
                        onClick={decrementChild}/>

                </div>
            </div>
        </header>
    );
};


export default Header;