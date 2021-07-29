import React from 'react';
import classNames from 'classnames';

import Button from '../layouts/Button';

function Slide({prevImgIndex, nextImgIndex, slide}) {
    return (
        <div 
            className={
                classNames(
                    "slide", 
                    prevImgIndex ? "slide_prev" : null,
                    nextImgIndex ? "slide_next" : null
                )
            }
        >
            <h2 className="slide__heading">{slide.heading}</h2>
            <p className="slide__description">{slide.desc}</p>
            <Button 
                title="Подробнее" 
                color={slide.color} 
                location="btn--slider"
            />
            {slide.img}
        </div>
    )
}

export default Slide;
