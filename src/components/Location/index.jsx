import React, {useState, useEffect} from "react";

import LocationItem from "./LocationItem";
import LocationMap from "./LocationMap";

import {locations} from "../../assets/db";

import "./Location.scss";

function Location({townValue, setTownValue, pointValue, setPointValue}) {
    const [filteredTowns, setFilteredTowns] = useState([]);
    const [filteredPoints, setFilteredPoints] = useState([]);

    const filter = (str = '', arr=[]) => {
        return arr.filter(item => item.toLowerCase().includes(str.toLowerCase()));
    }

    useEffect(() => {
        setFilteredTowns(filter(townValue, Object.keys(locations)));
        setFilteredPoints(filter(pointValue, locations[townValue]));
    }, [townValue, pointValue]);

    useEffect(() => {
        if (townValue.length === 0) {
            setPointValue('');
        }
        //eslint-disable-next-line
    }, [townValue]);

    return (
        <div className="order_content__location">
            <div className="location_inputs">
                <LocationItem
                    inputValue={townValue}
                    setInputValue={setTownValue}
                    selectorArr={filteredTowns}
                    label="Город"
                    placeholder="город"
                />

                <LocationItem
                    inputValue={pointValue}
                    setInputValue={setPointValue}
                    selectorArr={filteredPoints}
                    label="Пункт выдачи"
                    placeholder="пункт"
                />
            </div>
            
            <LocationMap 
                town={townValue}
                point={pointValue}
                points={locations[townValue]}
            />
        </div>
    )
}

export default Location;
