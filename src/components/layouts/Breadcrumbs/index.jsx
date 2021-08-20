import React, {useContext} from "react";

import { AppContext } from "../../../context";

import BreadcrumbsItem from "./BreadcrumbsItem";

import {breadscrumbs} from "../../../assets/db";

import "./Breadcrumbs.scss";

function Breadscrumbs() { 
    const {
        choosenPoint, 
        choosenCar, 
        isValidPrice
    } = useContext(AppContext); 
    
    const isFilledStep = (pathname) => {
        switch (pathname) {
            case "/order/location":
                if (choosenPoint) return true;
                
            case "/order/models":
                if (choosenCar) return true;
                
            case "/order/options":
            case "/order/summary":
                if (isValidPrice) return true;

            default:
                return false;
        }
    };

    return (
        <nav className="breadscrumbs">
            {Object.keys(breadscrumbs).map((link, index) => {
                const prevLink = Object.keys(breadscrumbs)[index-1];
                return <BreadcrumbsItem 
                    key={link}
                    path={breadscrumbs[link]}
                    title={link}
                    isFilledStep={isFilledStep}
                    prevLinkPath={breadscrumbs[prevLink]}
                />
})}
        </nav>
    )
}

export default Breadscrumbs
