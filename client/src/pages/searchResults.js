import React, { useEffect, useState } from "react";
import Navbar from "./NavBar";
import styled from "styled-components";
import axios from "axios";
import { useParams } from 'react-router-dom'


const SearchResultsBackground = styled.div`
background-image: linear-gradient(180deg, black, white);
`

const SearchResults = () => {

    const { input } = useParams();
    console.log(input)
/*
    useEffect(() => {
        const getMatches = async() => {

            let results = await axios.get(`/api/getAllLike/${input}`);
            console.log(results.data)
        }
        getMatches();
    }, [input])
*/
    const [data, setData] = useState([]);

    useEffect(() => {
        const getAll = async() => {
            let results = await axios.get(`/api/searchAll`);
            console.log(results.data)

            setData(results.data);
        }
        getAll()
    }, [])

    const filteredData = data.filter((element) => {
        //if no input the return the original
        //return the item which contains the user input
        return element.name.toLowerCase().includes(input.toLowerCase());
        
    })


    return (
        <SearchResultsBackground>
            <Navbar />
            {filteredData.map((element, index) => (
                <div key={index}>{element.name}</div>
            ))}
        </SearchResultsBackground>
    )
}

export default SearchResults;