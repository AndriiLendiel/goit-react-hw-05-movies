import * as API from '../service/api'
import { useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
const Cast = () => {
    const [cast, setCast] = useState([])
const {movieId} = useParams()

useEffect(() => {
    const fetchCast = async () =>{
        const response = await API.fetchCredits(movieId)
        setCast(response.cast);
    }
    fetchCast()
}, [movieId])
    return(
<ul>

    {cast.map(({name,id, character, profile_path}) =>(
        <li key={id}>
        <img src={`https://image.tmdb.org/t/p/w500/${profile_path}`} alt={name} width='150'/>
        <p>{name}</p>
        <p>Character : {character}</p>
    </li>
    ))} 
</ul>
    )
}

export default Cast