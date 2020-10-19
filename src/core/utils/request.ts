import axios from 'axios';

const BASE_URL = 'https://api.github.com/users/';

export const makeRequest = (user: string) => {
    return axios({
        method: 'GET',
        url: `${BASE_URL}${user}`
    });
};