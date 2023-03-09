import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const ReviewsStyleDiv = styled.div`
    font-size: medium;
    padding: 10px;
    color: rgba(0, 0, 0, 0.6);
    
`

const Reviews = ({ name }) => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {

        const getReviews = async() => {
            let results = await axios.get(`/api/reviews/${name}`);
            setReviews(results.data);
            console.log(results.data)
        }
        getReviews();
    }, [name])

    return (
        <div>
            {reviews.map((review, index) => (
                <ReviewsStyleDiv key={index}>{review.review} -{review.reviewer}</ReviewsStyleDiv>
            ))}
        </div>
    )
}

export default Reviews;