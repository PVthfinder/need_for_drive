function reducer (state, {type, payload}) {

    switch(type) {
        case 'SET_ON_NEXT_SLIDE':
            return {
                ...state,
                activeSlide: state.activeSlide === payload - 1 ? 0 : state.activeSlide + 1
            }
            
        case 'SET_ON_PREV_SLIDE':
            return {
                ...state,
                activeSlide: state.activeSlide ? state.activeSlide - 1 : payload - 1
            }
            
        case 'SET_OPEN_MENU':
            return {
                ...state,
                openMenu: !state.openMenu
            }
            
        case 'SET_TOWN_VALUE':
            return {
                ...state,
                order: {
                    ...state.order,
                    town: payload
                }
            }
            
        case 'SET_POINT_VALUE':
            return {
                ...state,
                order: {
                    ...state.order,
                    point: payload
                },
                activeBtn: payload
            }
            
        case 'SET_FILTERED_TOWNS':
            const newFilteredTowns = payload.townsArr.filter(
                item => item.toLowerCase()
                    .includes(payload.townValue.toLowerCase())
            );
            return {
                ...state,
                filteredTowns: newFilteredTowns
            };
            
        case 'SET_FILTERED_POINTS':
            const newFilteredPoints = payload.pointsArr.filter(
                item => item.toLowerCase()
                    .includes(payload.pointValue.toLowerCase())
            );
            return {
                ...state,
                filteredPoints: newFilteredPoints
            };
            
        case 'SET_MAP_ZOOM':
            return {
                ...state,
                mapZoom: payload
            }
            
        case 'SET_MAP_CENTER':
            return {
                ...state,
                mapCenterCoord: payload
            }
            
        case 'SET_MAP_POINTS':
            return {
                ...state,
                mapPointsCoord: payload
            }

        case 'SET_CARS': {
            return {
                ...state,
                cars: [...state.cars, ...payload],
                filteredCars: [...state.filteredCars, ...payload]
            };
        }
            
        case 'SET_PAGINATION_PAGE':
            return {
                ...state,
                paginationPage: state.paginationPage + 1
            }
            
        case 'SET_FILTERED_CARS':
            let newFilteredCars = [];
            if (payload !== "all") {
                newFilteredCars = state.cars.filter(item => (
                        item.categoryId ?
                        item.categoryId.name === payload :
                        false
                    ));
            } else {
                newFilteredCars = state.cars;
            }
            return {
                ...state,
                category: payload,
                filteredCars: newFilteredCars
            }

        case 'SET_CARS_CATEGORIES': {
            return {
                ...state,
                carsCategories: payload
            };
        }

        case 'SET_ACTIVE_CAR': {
            return {
                ...state,
                activeCar: payload,
                order: {
                    ...state.order,
                    car: payload
                }
            };
        }

        default:
            return state;
    }
}

export default reducer;