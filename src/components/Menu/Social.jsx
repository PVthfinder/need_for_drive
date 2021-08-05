import React from 'react';
import classNames from 'classnames';

function Social({img, path, openedClass, index, socialsArr}) {
    const delay = (socialsArr.length - index) * 0.1;
    return (
        <a 
        href={path}
        className={classNames("menu__social", openedClass)}
        style={{ transitionDelay: `${delay}s` }}
        >{img}</a>
    )
}

export default Social;