import * as API from '../service/api'
import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
const Movie = () => {
    const [{title, backdrop_path, overview, vote_average}, setMovie] = useState({})
    const [genres, setGenres] = useState([])
    const {movieId} = useParams()
useEffect(()=>{
    const fetchMovie = async() => {
        const response = await API.fetchMovie(movieId)
        setMovie(response)
        setGenres(response.genres)
    
    }
    fetchMovie()
}, [movieId])

    return (
        <>
<h1>Movie {title}</h1>
<p>User score: {Math.floor(vote_average * 10)} %</p>
<img alt={title} src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`} width="250"/>
<h2>Overview</h2>
<p>{overview}</p>
<ul>Genre
{genres.map(el => (
    <li key={el.id}>{el.name}</li>
))}
</ul>
<ul>Additional information
<li><Link to="cast">Cast</Link></li>
<li><Link to='reviews'>Reviews</Link></li>
</ul>
<Outlet/>
        </>

    )
}

export default Movie