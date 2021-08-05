import React from 'react';
import classNames from 'classnames';

import "./Button.scss";

function Button({title, color, location}) {
    return (
        <input 
            type="button" 
            value={title} 
            className={classNames("btn", location, `btn--${color}`)}
        />
    )
}

export default Button;
