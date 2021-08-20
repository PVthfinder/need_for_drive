import React from "react";
import {Link, useLocation} from 'react-router-dom';
import classNames from 'classnames';

function BreadcrumbsItem({path, title, isFilledStep, prevLinkPath}) {
    const {pathname} = useLocation();

    const linkClasses = classNames(
            "breadscrumbs__link",
            {"active": pathname.includes(path)},
            {"filled_step": isFilledStep(path)},
            {"disabled": !isFilledStep(path) && !isFilledStep(prevLinkPath)}
        );

    return (
        <Link 
            className={linkClasses} 
            to={path}
        >
            {title}
        </Link>
    )
}

export default BreadcrumbsItem;
