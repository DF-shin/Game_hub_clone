import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '6b0293ea6cf84d88abadca86d04095e9'
    }

})