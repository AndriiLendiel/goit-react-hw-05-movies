import { fetchMoivies } from "components/service/api";
import { Suspense, useEffect,useState } from "react";
import { useLocation,useSearchParams } from "react-router-dom";
import {Input, List, StyledLink, CardMovie, Item, Img, Parag} from './Movies.styled'
const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const textInput = searchParams.get('search') ?? '';





    const handleInput = (e) => {

    setSearchParams({search: e.target.value})
    }
    const location = useLocation()
    useEffect(() => {
    const respMovies = async () => {
        if(textInput === '') {
            return;
        }
        const  response = await fetchMoivies(textInput)
        setMovies(response.results)
        }
        respMovies()
}, [textInput])

    return (

        <div>
            <Input
            placeholder="Search Movie" 
            type='text' 
            onChange={handleInput} 
            value={textInput}
            />
<List>
            {movies.map(({id, title, backdrop_path}) => (
            <Item key={id}>
            <CardMovie>
            <Suspense fallback={<h1>Loading...</h1>}>
            <StyledLink to={`${id}`} state={location}>
            {backdrop_path ? 
                <Img src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`} alt={title} width='200'/> :
                <Img src='https://banffventureforum.com/wp-content/uploads/2019/08/no-photo-icon-22.png' alt='lol' width='300' height='200'/>}
                <Parag>{title}</Parag>
                </StyledLink>
                </Suspense>
            </CardMovie>
            </Item>
        ))}
    </List>
    </div>


    )
}

export default Movies