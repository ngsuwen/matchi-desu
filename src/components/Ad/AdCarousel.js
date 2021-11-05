import React from 'react';
import { CarouselProvider, Slider, Slide} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Ad from '../ApiCalls/AdsApi';

const arrList = [15050, 4329, 9617, 15499, 13431, 17318, 15322, 13346, 7025]
const ads = arrList.map((element, index) => <Slide index={index}><Ad id={element}/></Slide>)

export default function Carousel() {
    return (
        <>
            <div style={{ height: '20vw', width: '15vw' }}>
                <CarouselProvider
                    naturalSlideWidth={10}
                    naturalSlideHeight={12}
                    totalSlides={9}
                    isPlaying={true}
                    interval={2500}
                >
                    <Slider>
                        {ads}
                    </Slider>
                </CarouselProvider>
            </div>
        </>
    );
}