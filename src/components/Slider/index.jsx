import React, {useContext} from 'react';

import { AppContext } from '../../context';

import Slide from './Slide';
import Arrow from './Arrow';
import Dots from './Dots';

import './Slider.scss';

function Slider({slides}) {
    const {activeSlide, setOnNextSlide, setOnPrevSlide} = useContext(AppContext);

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
            <Arrow direction="left" handleClick={() => setOnPrevSlide(slides.length)}/>
            <Arrow direction="right" handleClick={() => setOnNextSlide(slides.length)}/>
            <Dots slides={slides} activeSlide={activeSlide}/>
        </div>
    )
}

export default Slider
