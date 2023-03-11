import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const ReviewsStyleDiv = styled.div`
    font-size: medium;
    padding: 10px;
    color: rgba(0, 0, 0, 0.6);
    
`
const ReviewerDiv = styled.div`
    padding: 10px;
`

const Reviews = ({ name }) => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {

        const getReviews = async() => {
            let results = await axios.get(`/api/reviews/${name}`);
            setReviews(results.data[0].reviews);
            console.log(results.data[0].reviews)
        }
        getReviews();
    }, [name])

    return (
        <div style={{resize: 'both'}}>
            {reviews.map((review, index) => (
                <ReviewsStyleDiv key={index}>{`${review[0]}`}<br></br><ReviewerDiv>{`-${review[1]}`}</ReviewerDiv></ReviewsStyleDiv>
            ))}
        </div>
    )
}

export default Reviews;