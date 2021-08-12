import {API_HEADERS, API_URL} from './config';

const getCities = async () => {
    const response = await fetch(`${API_URL}city`, {
        headers: API_HEADERS
    });
    return await response.json();
};

const getPoints = async (cityId) => {
    const response = await fetch(`${API_URL}point?cityId[id]=${cityId}`, {
        headers: API_HEADERS
    });
    return await response.json();
};

const getAllCars = async (page) => {
    const response = await fetch(`${API_URL}car?page=${page}&limit=12`, {
        headers: API_HEADERS
    });
    return await response.json();
};

const getCarsCategories = async () => {
    const response = await fetch(`${API_URL}category`, {
        headers: API_HEADERS
    });
    return await response.json();
};

export {
    getAllCars, 
    getCarsCategories,
    getCities,
    getPoints
};