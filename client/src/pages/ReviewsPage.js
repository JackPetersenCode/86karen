import React, {useEffect, useState} from "react"
import styled from "styled-components";
import Navbar from "./NavBar";
import SearchBar from "../components/SearchBar";

const BusinessesBackground = styled.div`
    background-image: linear-gradient(180deg, black, white);
    width: 100%;
`
const CenterDiv = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
`
const StyledHeader = styled.h2`
    display: grid;
    place-items: center;
    font-size: x-large;
    color: white;
    margin: 20px;
    text-shadow: 0 0 10px rgba(0, 0, 0, 0.5), 0 0 10px rgba(0, 0, 0, 0.5),
    0 0 10px rgba(0, 0, 0, 0.5);
`
const SearchBarContainer = styled.div`
    display: grid;
    place-items: center;
`

const ReviewsPage = () => {
    
    return (
        <BusinessesBackground>
            <Navbar />
            <CenterDiv>
                <StyledHeader>Find a business to review</StyledHeader>
                <br></br>
                <SearchBarContainer>
                    <SearchBar reviewsList={true} />
                </SearchBarContainer>
            </CenterDiv>
        </BusinessesBackground>
    )
}

export default ReviewsPage;