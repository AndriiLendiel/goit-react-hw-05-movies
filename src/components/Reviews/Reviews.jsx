import { fetchReviews } from "components/service/api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {ItemWrapper,ItemComment, ItemTitle} from './Reviews.styled.jsx'
const Reviews = () => {
    const [reviews, setReviews] = useState([])
const {movieId} = useParams()
    useEffect(() => {
        const fetchReview = async () => {
            const response = await fetchReviews(movieId)
            setReviews(response.results);
            } 
            fetchReview()
    }, [movieId])

    return (
        <>
{reviews.length > 0 ? reviews.map(({author, content,id}) => (
    <ItemWrapper key={id}>
    <ItemTitle>{author}</ItemTitle>
    <ItemComment>{content}</ItemComment>
    </ItemWrapper>

)) : <p>Sorry, we don`t have any reviws about this</p>}
        </>

    )
}

export default Reviews