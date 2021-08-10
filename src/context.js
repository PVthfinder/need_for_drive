import { createContext, useReducer } from "react";
// import {useLocation} from "react-router-dom";

import reducer from "./reducer";

export const AppContext = createContext();

const initialState = {
    activeSlide: 0,
    openMenu: false,
    order: {
        town: "",
        point: "",
    },
    filteredTowns: [],
    filteredPoints: [],
    mapZoom: 3,
    mapCenterCoord: [64.010196, 98.911043],
    mapPointsCoord: [],
    activeBtn: false,
    cars: [],
    filteredCars: [],
    carsCategories: [],
    category: "all",
    activeCar: null,
    paginationPage: 0,
};

export const ContextProvider = ({children}) => {
    const [value, dispatch] = useReducer(reducer, initialState);
    
    // const {search} = useLocation();

    // const searchParams = new URLSearchParams(search);

    value.setOnNextSlide = (slidesLength) => {
        dispatch({type: 'SET_ON_NEXT_SLIDE', payload: slidesLength});
    }

    value.setOnPrevSlide = (slidesLength) => {
        dispatch({type: 'SET_ON_PREV_SLIDE', payload: slidesLength});
    }

    value.setOpenMenu = () => {
        dispatch({type: 'SET_OPEN_MENU'});
    }

    value.setTownValue = (townValue) => {
        dispatch({type: 'SET_TOWN_VALUE', payload: townValue});
    }

    value.setPointValue = (pointValue) => {
        dispatch({type: 'SET_POINT_VALUE', payload: pointValue});
    }

    value.setFilteredTowns = (townValue, townsArr) => {
        dispatch({type: 'SET_FILTERED_TOWNS', payload: {townValue, townsArr}});
    }

    value.setFilteredPoints = (pointValue, pointsArr) => {
        dispatch({type: 'SET_FILTERED_POINTS', payload: {pointValue, pointsArr}});
    }

    value.setMapZoom = (zoomValue) => {
        dispatch({type: 'SET_MAP_ZOOM', payload: zoomValue});
    }

    value.setMapCenter = (coords) => {
        dispatch({type: 'SET_MAP_CENTER', payload: coords});
    }

    value.setMapPointsCoord = (pointsArr) => {
        dispatch({type: 'SET_MAP_POINTS', payload: pointsArr});
    }

    // value.setActiveBtn = (isBtnActive) => {
    //     dispatch({type: 'SET_ACTIVE_BTN', payload: isBtnActive});
    // }

    value.setCars = (data) => {
        dispatch({type: 'SET_CARS', payload: data});
    }

    value.setPaginationPage = () => {
        dispatch({type: 'SET_PAGINATION_PAGE'});
    }

    value.setFilteredCars = (filterValue) => {
        dispatch({type: 'SET_FILTERED_CARS', payload: filterValue});
    }

    value.setCarsCategories = (data) => {
        dispatch({type: 'SET_CARS_CATEGORIES', payload: data});
    }

    value.setActiveCar = (car) => {
        dispatch({type: 'SET_ACTIVE_CAR', payload: car});
    }

    // value.setCompetitions = (data, search) => {
    //     dispatch({type: 'SET_COMPETITIONS', payload: {data, search}});
    // }

    // value.getUrlSearchValue = (str) => {
    //     if(search.includes(str)){
    //         return searchParams.get(str);
    //     } else {
    //         return '';
    //     }
    // }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
}