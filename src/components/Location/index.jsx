import React, {useContext, useEffect} from "react";

import { AppContext } from '../../context';

import LocationItem from "./LocationItem";
import LocationMap from "./LocationMap";

import { getTowns, getPoints } from "../../api";

import "./Location.scss";

function Location() {
    const {
        townValue,
        pointValue,
        setTownValue,
        setPointValue,
        filteredTowns, 
        setTowns, 
        setFilteredTowns,
        filteredPoints, 
        setPoints,
        setFilteredPoints,
        setChoosenTown,
        setChoosenPoint,
        setActiveBtn
    } = useContext(AppContext);

    useEffect(() => {
        getTowns().then(data => setTowns(data.data));
        //eslint-disable-next-line
    }, []);

    useEffect(() => {
        setFilteredTowns(townValue);
        //eslint-disable-next-line
    }, [townValue]);

    useEffect(() => {
        if (filteredTowns.length === 1) { 
            getPoints(filteredTowns[0].id).then(data => setPoints(data.data, filteredTowns[0]));
        }
        //eslint-disable-next-line
    }, [filteredTowns]);

    useEffect(() => {
        setFilteredPoints(pointValue);
        //eslint-disable-next-line
    }, [pointValue]);

    return (
        <div className="order_content__location">
            <div className="location_inputs">
                <LocationItem
                    inputValue={townValue}
                    setInputValue={setTownValue}
                    setChoosen={setChoosenTown}
                    selectorArr={filteredTowns}
                    label="Город"
                    placeholder="город"
                />

                <LocationItem
                    inputValue={pointValue}
                    setInputValue={setPointValue}
                    setChoosen={setChoosenPoint}
                    selectorArr={filteredPoints}
                    setActiveBtn={setActiveBtn}
                    label="Пункт выдачи"
                    placeholder="пункт"
                />
            </div>
            
            <LocationMap />
        </div>
    )
}

export default Location;