import React, {FC} from 'react';
import {Carousel} from 'react-bootstrap';

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
                indicators={false}>
                interval={7000}
                pause={'false'}
                {images?.map((image: ImagesType, index: number) => (

                    <Carousel.Item
                        key={index}
                    >
                        <img
                            style={{height: "200px"}}
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