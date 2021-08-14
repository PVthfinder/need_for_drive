import React, {useContext, useEffect} from "react";

import { AppContext } from "../../context";

import Filter from "../layouts/Filter";

import "./Options.scss";

function Options() {
    const {
        activeCar,
        carColor,
        setCarColor,
        setActiveBtn
    } =useContext(AppContext);

    const date = {};

    useEffect(() => {
        if (!date.from) {
            setActiveBtn(false);
        }
    }, []);

    return (
        <div className="order_content__options">
            <div className="option">
                <p className="option__title">Цвет</p>
                <Filter 
                    commonTitle="Любой"
                    filterEntity={carColor}
                    // optionsArr={activeCar.colors}
                    applyFilter={setCarColor}
                />
            </div>

            <div className="option">
                <p className="option__title">Дата аренды</p>
                <div className="option__content date_filter">
                    <div className="date_filter__item">
                        <label className="filter_label" htmlFor="date_from">С</label>
                        <input 
                            type="datetime-local" 
                            id="date_from" 
                            className="datepicker"
                            placeholder="Введите дату и время"
                            // onChange={(event) => setDateFrom(event.target.value)}
                        />
                    </div>

                    <div className="date_filter__item">
                        <label className="filter_label" htmlFor="date_to">По</label>
                        <input 
                        type="datetime-local" 
                        id="date_to" 
                        className="datepicker"
                        // onChange={(event) => setDateTo(event.target.value)}
                        />
                    </div>
                </div>
            </div>
            
            <div className="option">
                <p className="option__title">Тариф</p>
                <div className="option__content filter">
                    <div className="filter__item">
                        <input 
                            name="type" 
                            type="radio"
                            id="filter_minutes"
                            value="minutes"
                            // onChange={(evt) => applyFilter(evt.target.value)} 
                            // checked={filterEntity === "all"}
                        />
                        <label htmlFor="filter_minutes">Поминутно, 7 &#8381;/мин</label>
                    </div>

                    <div className="filter__item">
                        <input 
                            name="type" 
                            type="radio"
                            id="filter_days"
                            value="all"
                            // onChange={(evt) => applyFilter(evt.target.value)} 
                            // checked={filterEntity === "all"}
                        />
                        <label htmlFor="filter_days">На сутки, 1999 &#8381;/сутки</label>
                    </div>
                </div>
            </div>
            
            <div className="option">
                <p className="option__title">Тариф</p>
                <div className="option__content">
                    <div className="option__item">
                        <input 
                            name="type" 
                            type="checkbox"
                            id="add_full_tank"
                            value="full"
                            // onChange={(evt) => applyFilter(evt.target.value)} 
                            // checked={filterEntity === "all"}
                        />
                        <label htmlFor="add_full_tank">Полный бак, 500 &#8381;</label>
                    </div>

                    <div className="option__item">
                        <input 
                            name="type" 
                            type="checkbox"
                            id="add_child_chair"
                            value="chair"
                            // onChange={(evt) => applyFilter(evt.target.value)} 
                            // checked={filterEntity === "all"}
                        />
                        <label htmlFor="add_child_chair">На сутки, 200 &#8381;</label>
                    </div>

                    <div className="option__item">
                        <input 
                            name="type" 
                            type="checkbox"
                            id="add_right_wheel"
                            value="wheel"
                            // onChange={(evt) => applyFilter(evt.target.value)} 
                            // checked={filterEntity === "all"}
                        />
                        <label htmlFor="add_right_wheel">На сутки, 1600 &#8381;</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Options;
