import React from "react";

import "./Filter.scss";

function Filter({commonTitle, filterEntity, optionsArr, applyFilter}) {
    return (
        <div className="filter">
                <div className="filter__item">
                    <input 
                        name="type" 
                        type="radio"
                        id="filter_all"
                        value="all"
                        onChange={(evt) => applyFilter(evt.target.value)} 
                        checked={filterEntity === "all"}
                    />
                    <label htmlFor="filter_all">{commonTitle}</label>
                </div>
                {
                    optionsArr && optionsArr.length && 
                    optionsArr.map(item => (
                        <div
                            key={item.id ?? item} 
                            className="filter__item"
                        >
                            <input 
                                name="type" 
                                type="radio"
                                id={`filter_${item.name ?? item}`}
                                value={item.name ?? item}
                                onChange={(evt) => applyFilter(evt.target.value)} 
                                checked={filterEntity === item.name ?? item}
                            />
                            <label htmlFor={`filter_${item.name ?? item}`}>
                                {item.name ?? item}
                            </label>
                        </div>
                    ))
                }
            </div>
    )
}

export default Filter;