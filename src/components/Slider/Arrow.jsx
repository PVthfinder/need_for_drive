import React from 'react';

import leftArrow from "../../assets/images/left_arrow.svg";
import rightArrow from "../../assets/images/right_arrow.svg";

function Arrow({direction, handleClick}) {
    return (
        <div 
            onClick={handleClick}
            className="arrow"
            style={
                direction === "right" ?
                {right: "0"} :
                {left: "0"}
            }
        >
            {
                direction === "right" ?
                <img src={rightArrow} alt="right_arrow"/> :
                <img src={leftArrow} alt="leftArrow"/>
            }
        </div>
    )
}

export default Arrow;
