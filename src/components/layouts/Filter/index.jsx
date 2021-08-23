import React from "react";

import "./Filter.scss";

function Filter({commonTitle, filterEntity, optionsArr, applyFilter}) {
    return (
        <div className="filter">
            {
                commonTitle && <div className="filter__item">
                    <input 
                        name="type" 
                        type="radio"
                        id="filter_any"
                        value="any"
                        onChange={(evt) => applyFilter(evt.target.value)} 
                        checked={filterEntity === "any"}
                    />
                    <label htmlFor="filter_any">{commonTitle}</label>
                </div>
            }
            {
                optionsArr && optionsArr.length > 0 && 
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
                            checked={
                                item.name ?
                                filterEntity === item.name :
                                filterEntity === item
                            }
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