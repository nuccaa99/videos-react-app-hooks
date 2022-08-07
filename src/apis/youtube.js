import axios from 'axios';

const KEY = 'AIzaSyDQhlooZztY4nPZK_Fv3fD38jCIE2o9_vU';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResult: 5,
        key: KEY
    }
})