import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const KudosRating = ({ name }) => {

    const [count, setCount] = useState([]);

    useEffect(() => {

        const getCount = async() => {
            let results = await axios.get(`/api/reviews/count/${name}`);
            setCount(results.data[0].count);
        }
        getCount();
    }, [name])

    return (
        <>
            {count}
        </>
    )
}

export default KudosRating;