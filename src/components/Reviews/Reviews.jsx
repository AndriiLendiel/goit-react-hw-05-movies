import { fetchReviews } from "components/service/api"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
const Reviews = () => {
    const [reviews, setReviews] = useState([])
const {movieId} = useParams()
    useEffect(() => {
        const fetchReview = async () => {
            const response = await fetchReviews(movieId)
            setReviews(response.results);
            console.log(response.results);
            } 
            fetchReview()
    }, [movieId])

    return (
        <>
{reviews.length > 0 ? reviews.map(({author, content,id}) => (
    <li key={id}>
    <h3>{author}</h3>
    <p>{content}</p>
    </li>

)) : <p>Sorry, we don`t have any reviws about this film</p>}
        </>

    )
}

export default Reviews