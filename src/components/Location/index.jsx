/* eslint-disable react-hooks/exhaustive-deps */ //ошибка линтера 

import React, {useContext, useEffect} from "react";

import { AppContext } from '../../context';

import InputField from "../layouts/InputField";
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
        getTowns()
            .then(data => data ? setTowns(data.data) : null);
    }, []);

    useEffect(() => {
        setFilteredTowns(townValue);
    }, [townValue]);

    useEffect(() => {
        if (filteredTowns.length === 1) { 
            getPoints(filteredTowns[0].id)
                .then(data => data ? setPoints(data.data, filteredTowns[0]) : null);
        }
    }, [filteredTowns]);

    useEffect(() => {
        setFilteredPoints(pointValue);
    }, [pointValue]);

    return (
        <div className="order_content__location">
            <div className="location_inputs">
                <InputField
                    inputValue={townValue}
                    setInputValue={setTownValue}
                    setChoosen={setChoosenTown}
                    selectorArr={filteredTowns}
                    label="Город"
                    placeholder="Начните вводить город..."
                />

                <InputField
                    inputValue={pointValue}
                    setInputValue={setPointValue}
                    setChoosen={setChoosenPoint}
                    selectorArr={filteredPoints}
                    setActiveBtn={setActiveBtn}
                    label="Пункт выдачи"
                    placeholder="Начните вводить пункт..."
                />
            </div>
            
            <LocationMap />
        </div>
    )
}

export default Location;