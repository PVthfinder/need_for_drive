import React from 'react';
import classNames from 'classnames';
import {Link} from 'react-router-dom';

import Button from '../layouts/Button/';

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
            style={{
                background: 
                `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%),
                url(${slide.img}) center / cover no-repeat`
            }}
        >
            <h2 className="slide__heading">{slide.heading}</h2>
            <p className="slide__description">{slide.desc}</p>
            <Link to="/order/location">
                <Button 
                    title="Подробнее" 
                    color={slide.color} 
                    location="slider"
                    isActiveBtn={true}
                />
            </Link>
        </div>
    )
}

export default Slide;
