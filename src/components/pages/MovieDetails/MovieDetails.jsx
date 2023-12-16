import * as API from '../../service/api';
import { IoChevronBackSharp } from "react-icons/io5";
import { useEffect, useState,useRef, Suspense } from 'react';
import { Outlet, useLocation , useParams} from 'react-router-dom';
import { Img, InfoWrapper, Title, SubTitle,Link } from './MovieDetails.styled';
const MovieDetails = () => {
    const [{title, backdrop_path, overview, vote_average}, setMovie] = useState({})
    const [genres, setGenres] = useState([]);
    const {movieId} = useParams();


    
const location = useLocation();
const backLink = useRef(location.state);


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
        <div>
        <Suspense>
        <Link to={backLink.current}>
        <IoChevronBackSharp />
        Go Back</Link>
        </Suspense>

        </div>

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