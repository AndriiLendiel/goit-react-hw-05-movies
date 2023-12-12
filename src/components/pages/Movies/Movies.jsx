import { fetchMoivies } from "components/service/api";
import { useEffect,useState } from "react";
import { Link, useLocation,useSearchParams } from "react-router-dom";

const Movies = () => {
    const [queryWord, setQueryWord] = useState('');
    const [movies, setMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();






    const handleInput = (e) => {
    setQueryWord(e.target.value)
    setSearchParams(e.target.value)
    }
    const location = useLocation()

    useEffect(() => {
    const respMovies = async () => {
        if(queryWord === '') {
            return;
        }
        const  response = await fetchMoivies(queryWord)
        setMovies(response.results)
        }
        respMovies()
}, [queryWord])

    return (
        <div>
            <input type='text' onChange={handleInput} value={queryWord}/>
<ul>
            {movies.map(({id, title}) => (
            <li key={id}>
            <p><Link to={`${id}`} state={{from: location}}>{title}</Link></p>
            </li>
        ))}
    </ul>
    </div>

    )
}

export default Movies