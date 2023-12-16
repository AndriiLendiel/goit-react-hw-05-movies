import * as API from '../service/api'
import { useEffect,useState} from 'react';
import { useParams } from 'react-router-dom';
import {Img} from './Cast.styled'
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
<ul style={{padding: 25}}>

    {cast.map(({name,id, character, profile_path}) =>(
        <li key={id}>
{profile_path ?  <Img src={`https://image.tmdb.org/t/p/w500/${profile_path}`} alt={name} width='150'/>: 
<Img src='https://banffventureforum.com/wp-content/uploads/2019/08/no-photo-icon-22.png' alt='lol' width='150'/>}
        <p style={{fontWeight: 700}}>{name}</p>
        <p>Character : {character}</p>
    </li>
    ))} 
</ul>
    )
}

export default Cast