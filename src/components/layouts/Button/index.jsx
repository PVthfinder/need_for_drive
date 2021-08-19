import React from 'react';
import classNames from 'classnames';

import "./Button.scss";

function Button({title, color, location, isActiveBtn, onclick}) {
    const btnClasses = classNames(
        "btn", 
        location, 
        {[`btn--${color}`]: color}
    );

    return (
        <input 
            type="button" 
            value={title} 
            className={btnClasses}
            disabled={!isActiveBtn}
            onClick={onclick}
        />
    )
}

export default Button;
