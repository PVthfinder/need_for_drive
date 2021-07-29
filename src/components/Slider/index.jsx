import React, {useState} from 'react';

import Slide from './Slide';
import Arrow from './Arrow';
import Dots from './Dots';

import './Slider.scss';

function Slider({slides}) {
    const [activeSlide, setActiveSlide] = useState(0);
    
    const onNextSlide = () => {
        setActiveSlide((current) => {
            const res = current === slides.length -1 ? 0 : current + 1;
            return res;
        })
    }

    const onPrevSlide = () => {
        setActiveSlide((current) => {
            const res = current ? current - 1 : slides.length -1;
            return res;
        })
    }

    const prevImgIndex = activeSlide ? activeSlide - 1 : slides.length - 1;

    const nextImgIndex = activeSlide === slides.length - 1 ? 0 : activeSlide + 1;

    return (
        <div className="slider">
            <div className="slider_content">
                <Slide
                    prevImgIndex
                    slide={slides[prevImgIndex]}
                />
                
                <Slide
                    slide={slides[activeSlide]}
                />
                
                <Slide
                    nextImgIndex
                    slide={slides[nextImgIndex]}
                />

                {/* <div className="slide slide_prev">
                    {slides[prevImgIndex].img}
                </div>

                <div className="slide">
                    {slides[activeSlide].img}
                </div>
                
                <div className="slide slide_next">
                    {slides[nextImgIndex].img}
                </div> */}
            </div>
            <Arrow direction="left" handleClick={onPrevSlide}/>
            <Arrow direction="right" handleClick={onNextSlide}/>
            <Dots slides={slides} activeSlide={activeSlide}/>
        </div>
    )
}

export default Slider
