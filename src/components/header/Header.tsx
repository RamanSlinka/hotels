import React, {FC} from 'react';
import image from '../../assets/image_hotel.jpg';
import style from './Header.module.scss';
import Star from '../star/Star';

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
                    <button className={style.button}
                            onClick={incrementAdult}
                    >+
                    </button>
                    <p>{adult}</p>
                    <button className={style.button}
                            onClick={decrementAdult}
                    >-
                    </button>
                </div>
                <div className={style.childrenWrapper}>
                    <p>Children : </p>
                    <button className={style.button}
                            onClick={incrementChild}
                    >+
                    </button>
                    <p>{child}</p>
                    <button className={style.button}
                            onClick={decrementChild}
                    >-
                    </button>
                </div>
            </div>
        </header>
    );
};


export default Header;