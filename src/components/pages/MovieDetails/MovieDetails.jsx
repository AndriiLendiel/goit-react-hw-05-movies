import * as API from '../../service/api';
import { Link, useParams } from "react-router-dom";
import { useEffect, useState,useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Img, InfoWrapper, Title, SubTitle } from './MovieDetails.styled';
const MovieDetails = () => {
    const [{title, backdrop_path, overview, vote_average}, setMovie] = useState({})
    const [genres, setGenres] = useState([]);
    const {movieId} = useParams();


    
const location = useLocation();
const BackLinkLocation = useRef(location.state?.from ?? '/')
console.log(location);
useEffect(()=>{
    const fetchMovie = async() => {
        const response = await API.fetchMovie(movieId)
        setMovie(response)
        setGenres(response.genres)
    
    }
    fetchMovie()
}, [movieId])

    return (
        <div>
        <Link to={BackLinkLocation.current}>Go Back</Link>
        <div style={{
        display: 'flex',
        padding: 25,
        }}>

<Img alt={title} src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`} />
<InfoWrapper>
<Title>Movie {title}</Title>
<p>User score: {Math.floor(vote_average * 10)} %</p>
<SubTitle>Overview</SubTitle>
<p>{overview}</p>
<ul><SubTitle>Genre</SubTitle>
{genres.map(el => (
    <span key={el.id}>{el.name} </span>
))}
</ul>

</InfoWrapper>

        </div>
        <ul style={{padding: 25}}><SubTitle>
Additional information
</SubTitle>
<li><Link to="cast">Cast</Link></li>
<li><Link to='reviews'>Reviews</Link></li>
</ul>
<Outlet/>
        </div>


    )
}

export default MovieDetails