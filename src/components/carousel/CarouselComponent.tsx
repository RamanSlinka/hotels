import React, {FC} from 'react';
import {Carousel} from 'react-bootstrap';

type ImagesType = {
    url: string
    alt?: string
}

const CarouselComponent: FC<any> = ({images}) => {


    return (
        <>
            <Carousel
                variant="dark"
                indicators={false}>
                {images.map((image: ImagesType, index: number) => (

                    <Carousel.Item>
                        <img
                            key={index}
                            //  className="d-block w-100 h-50"
                            style={{height: "100px"}}
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