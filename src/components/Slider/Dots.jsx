import React from 'react';

function Dots({slides, activeSlide}) {
    return (
        <div className="dots">
            {
                slides.map((slide, ind) => (
                    <span 
                        className="dot"
                        style={{
                            background: 
                                `${activeSlide === ind ? 
                                "#0EC261" : 
                                "white"}`
                        }}
                        key={slide.heading}
                    />
                ))
            }
        </div>
    )
}

export default Dots;
