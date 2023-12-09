import * as API from '../service/api'
import {Link} from 'react-router-dom'
import { useState, useEffect } from 'react'
const Home = () => {
    const [trends, setTrends] = useState([])
 useEffect(() => {
    const fetch  = async () =>{
        try {
            const {results} = await API.fetchTrending()
    setTrends(results)
        } catch (error) {
            console.log(error);
        }
    }
    fetch()
 }, [])

    return (
<>
    <ul>
        {trends.map(({id, title}) => (
            <li key={id} 
            style={{listStyle: 'none'}}>
            <p><Link to={`${id}`}>{title}</Link></p>
            </li>
        ))}
    </ul>
</>
    )
}

export default Home