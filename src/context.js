import { createContext, useReducer } from "react";
// import {useLocation} from "react-router-dom";

import reducer from "./reducer";

import {defaultTownCoord, defaultZoom} from "./assets/db";

export const AppContext = createContext();

const initialState = {
    activeSlide: 0,
    openMenu: false,
    townValue: "",
    pointValue: "",
    order: {
        point: null,
    },
    towns: [],
    filteredTowns: [],
    points: [],
    filteredPoints: [],
    choosenTown: null,
    mapZoom: defaultZoom,
    mapCenterCoord: defaultTownCoord,
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

    value.setTowns = (data) => {
        dispatch({type: 'SET_TOWNS', payload: data});
    }

    value.setFilteredTowns = (townValue) => {
        dispatch({type: 'SET_FILTERED_TOWNS', payload: townValue});
    }

    value.setPoints = (data) => {
        dispatch({type: 'SET_POINTS', payload: data});
    }

    value.setChoosenTown = (choosenTown) => {
        dispatch({type: 'SET_CHOOSEN_TOWN', payload: choosenTown});
    }

    value.setFilteredPoints = (pointValue) => {
        dispatch({type: 'SET_FILTERED_POINTS', payload: pointValue});
    }

    value.setChoosenPoint = (choosenPoint) => {
        dispatch({type: 'SET_CHOOSEN_POINT', payload: choosenPoint});
    }

    value.setMapCenter = (coords = defaultTownCoord, zoom = defaultZoom) => {
        dispatch({type: 'SET_MAP_CENTER', payload: {coords, zoom}});
    }

    value.setMapPointsCoord = (pointsArr) => {
        dispatch({type: 'SET_MAP_POINTS_COORD', payload: pointsArr});
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