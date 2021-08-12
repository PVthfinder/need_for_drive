import React from "react";

import LocationItem from "./LocationItem";
import LocationMap from "./LocationMap";

import "./Location.scss";

function Location({
    towns, 
    points, 
    filteredPoints,
    townValue, 
    setTownValue, 
    pointValue, 
    setPointValue, 
    choosenTown,
    choosenPoint
}) {
    return (
        <div className="order_content__location">
            <div className="location_inputs">
                <LocationItem
                    inputValue={townValue}
                    setInputValue={setTownValue}
                    selectorArr={towns}
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
                town={choosenTown && choosenTown.name}
                choosenPoint={choosenPoint && choosenPoint.address}
                points={points}
            />
        </div>
    )
}

export default Location;