import {API_KEY, API_AUTH, API_URL} from './config';

const getAllCars = async () => {
    const response = await fetch(`${API_URL}car?limit=30`, {
        headers: {
            'X-Api-Factory-Application-Id': API_KEY,
            'Authorization': API_AUTH
        }
    });
    return await response.json();
};

const getCarsCategories = async () => {
    const response = await fetch(`${API_URL}category`, {
        headers: {
            'X-Api-Factory-Application-Id': API_KEY,
            'Authorization': API_AUTH
        }
    });
    return await response.json();
};

export {
    getAllCars, 
    getCarsCategories
};