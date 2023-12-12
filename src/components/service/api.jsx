import axios from "axios"
axios.defaults.baseURL = 'https://api.themoviedb.org/3/'
const api_key = '1d1496fe0c254af353879b67a399bd91';

export const fetchTrending  = async () => {

        const response = await axios.get('trending/movie/week?language=en-US', {
            params: {
                api_key,
            }
        })
    return response.data

}   


export const fetchMoivies = async  (name) => {
    const response = await axios.get(`search/movie?query=${name}&include_adult=false&language=en-US&page=1`, {
        params : {
            api_key,
        }
    })
    return response.data;
}


export const fetchMovie = async (id) => {
    const response = await axios.get(`movie/${id}?language=en-US`, {
        params: {
            api_key,
        }
    })
return response.data
}


export const fetchCredits = async(id) => {
    const response = await axios.get(`movie/${id}/credits?language=en-US`, {
        params: {
            api_key,
        }
    })
return response.data
}


export const fetchReviews = async (id) => {
    const response = await axios.get(`movie/${id}/reviews?language=en-US&page=1`, {
        params: {
            api_key,
        }
    })
    return response.data
}
