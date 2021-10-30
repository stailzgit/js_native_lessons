import axios from 'axios';

const settings = {
    withCredentials: true,
    headers: {
        'apikey': "ede90d",
    }
}

const configOMB = {
    baseURL: 'http://www.omdbapi.com',
    // ...settings
    // baseURL: 'http://www.omdbapi.com',
};
const key = '?apikey=ede90d';

const url_ = "http://www.omdbapi.com/?apikey=ede90d&t=green"

const axiosInstance = axios.create(configOMB);

const API = {
    searchFilmsByTitle: (title: string) => {
        // const query = `&plot=full&s=${title}`
        const query = `${key}&plot=full&s=${title}`
        return axiosInstance.get(query)
    },
    searchFilmsByType: (title: string, type: string) => {
        const query = `${key}&plot=full&s=${title}?type=${type}`
        return axiosInstance.get(query)
    }
};


export default API;
