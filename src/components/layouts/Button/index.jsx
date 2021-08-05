import React from 'react';
import classNames from 'classnames';

import "./Button.scss";

function Button({title, color, location, activeBtn}) {
    return (
        <input 
            type="button" 
            value={title} 
            className={classNames(
                "btn", 
                location, 
                {[`btn--${color}`]: color}
            )}
            disabled={!activeBtn}
        />
    )
}

export default Button;
