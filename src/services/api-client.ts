import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '39095afdedd54bc599e71d550b81e4c6'
    }

})