import React, {FC} from 'react';
import {Carousel} from 'react-bootstrap';
import style from '../hotel/Hotel.module.scss';

type ImagesType = {
    url: string
    alt?: string
}

type CarouselComponentPropsType={
    images: Array<ImagesType>
}
const CarouselComponent: FC<CarouselComponentPropsType> = ({images}) => {
    return (
        <>
            <Carousel
                interval={7000}
                indicators={false}>

                {images?.map((image: ImagesType, index: number) => (

                    <Carousel.Item
                        key={index}
                    >
                        <img
                            className={style.carouselImage}
                            src={image.url}
                            alt=" slide"
                        />
                    </Carousel.Item>

                ))}
            </Carousel>
        </>

    );
};

export default CarouselComponent;