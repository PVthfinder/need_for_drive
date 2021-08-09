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
            style={{
                background: 
                `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%),
                url(${slide.img}) center / cover no-repeat`
            }}
        >
            <h2 className="slide__heading">{slide.heading}</h2>
            <p className="slide__description">{slide.desc}</p>
<<<<<<< Updated upstream
            <Button 
                title="Подробнее" 
                color={slide.color} 
                location="btn--slider"
            />
=======
            <Link to="/order/location">
                <Button 
                    title="Подробнее" 
                    color={slide.color} 
                    location="btn--slider"
                    activeBtn={true}
                />
            </Link>
>>>>>>> Stashed changes
        </div>
    )
}

export default Slide;
