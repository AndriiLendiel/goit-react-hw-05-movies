import * as API from '../../service/api';
import {StyledLink} from './Home.styled';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {List, Item, CardMovie, Img, Parag} from './Home.styled'
const Home = () => {
    const [trends, setTrends] = useState([]);
    const location = useLocation()
 useEffect(() => {
    const fetch  = async () =>{
        try {
            const {results} = await API.fetchTrending();
    setTrends(results)
        } catch (error) {
            console.log(error);
        }
    }
    fetch()
 }, [])

    return (
<>
<h1>Trending Today :</h1>
    <List>
        {trends.map(({id, title, backdrop_path}) => (
            <Item key={id} >
            <CardMovie>
            <StyledLink to={`movies/${id}`} state={location}>
                {backdrop_path ? 
                <Img src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`} alt={title} width='300'/> :
                <Img src='https://banffventureforum.com/wp-content/uploads/2019/08/no-photo-icon-22.png' alt='lol' width='300' height='200'/>}

                
                <Parag>{title}</Parag>
                </StyledLink>
            </CardMovie>

            </Item>
        ))}
    </List>
</>
    )
}

export default Home