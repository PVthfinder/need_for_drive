import React, {useContext, useEffect} from "react";

import { AppContext } from '../../context';

import LocationItem from "./LocationItem";
import LocationMap from "./LocationMap";

import {locations} from "../../assets/db";

import "./Location.scss";

function Location() {
    const {
        order,
        setTownValue,
        setPointValue,
        filteredTowns, 
        setFilteredTowns, 
        filteredPoints, 
        setFilteredPoints
    } = useContext(AppContext);

    useEffect(() => {
        locations && setFilteredTowns(order.town, Object.keys(locations));
        locations[order.town] && setFilteredPoints(order.point, locations[order.town]);
        //eslint-disable-next-line
    }, [order.town, order.point]);

    useEffect(() => {
        if (order.town.length === 0) {
            setPointValue('');
        }
        //eslint-disable-next-line
    }, [order.town]);

    return (
        <div className="order_content__location">
            <div className="location_inputs">
                <LocationItem
                    inputValue={order.town}
                    setInputValue={setTownValue}
                    selectorArr={filteredTowns}
                    label="Город"
                    placeholder="город"
                />

                <LocationItem
                    inputValue={order.point}
                    setInputValue={setPointValue}
                    selectorArr={filteredPoints}
                    label="Пункт выдачи"
                    placeholder="пункт"
                />
            </div>
            
            <LocationMap 
                points={locations[order.town]}
            />
        </div>
    )
}

export default Location;