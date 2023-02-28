import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import './App.css';
import SearchBar from "./components/SearchBar";
import styled from 'styled-components';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const NavContainer = styled.nav`
    display: grid;
    max-height: 75px;
    grid-template-columns: 175px minmax(400px, 3fr) minmax(100px, 1fr) minmax(100px, 1fr) minmax(100px, 1fr);
    grid-template-rows: auto
`

const LowerNavContainer = styled.nav`
    display: grid;
    gap: 10px;
    columnGap: 10px;
    grid-template-columns: minmax(175px, 1fr) repeat(13, 1fr);
    grid-template-rows: auto;
`

const TopNavLinks = styled.div`
    display: grid;
    text-align: center;
    padding-top: 30px
`

const LogoNavLink = styled.div`
    display: grid;
    text-align: center;
    padding: 10px
`
const DropDownContent = styled.div`
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    z-index: 1;
`

const FirstNavLink = styled.div`
    grid-column-start: 2;
    grid-column-end: 3;
    &:hover ${DropDownContent} {
      display: block;
    }
  `

const GridLink = styled.div`
  padding: 10px;
  display: flex;
  alignItems: center;
  flexWrap: wrap;
`

const SecondNavLink = styled.div`
    grid-column-start: 3;
    grid-column-end: 4;
    &:hover ${DropDownContent} {
        display: block;
      }
`

const ThirdNavLink = styled.div`
    grid-column-start: 4;
    grid-column-end: 5;
    &:hover ${DropDownContent} {
        display: block;
      }
`

const FourthNavLink = styled.div`
    grid-column-start: 5;
    grid-column-end: 6;
    &:hover ${DropDownContent} {
        display: block;
      }
`

function Navbar() {

    return (
    <div>
      <NavContainer>
        <LogoNavLink>
          <a href="/">
              <div id="headtag"><img src="karen3.png" alt="Home"/></div>
          </a>
        </LogoNavLink>
        <div style={{display: 'grid'}}>
          <SearchBar />
        </div>
        <TopNavLinks>
          <Link to="/Businesses" className="Link" >For Business</Link>
        </TopNavLinks>
        <TopNavLinks>
          <Link to="/Reviews"  className="Link" >Write a Review</Link>
        </TopNavLinks>
        <TopNavLinks>
          profile logo
        </TopNavLinks>
      </NavContainer>
      <LowerNavContainer>
        <FirstNavLink>
          <GridLink>
            <Link to="/Restaurants" className="Link" >Restaurants</Link>
            <ExpandMoreIcon />
          </GridLink>
          <DropDownContent>Karen</DropDownContent>
        </FirstNavLink>
        <SecondNavLink>
          <GridLink>
            <Link to="/HomeServices" className="Link" >Home&nbsp;Services</Link>
            <ExpandMoreIcon />
          </GridLink>
          <DropDownContent>Karen</DropDownContent>
        </SecondNavLink>
        <ThirdNavLink>
          <GridLink>
            <Link to="/AutoServices" className="Link" >Auto&nbsp;Services</Link>
            <ExpandMoreIcon />
          </GridLink>
          <DropDownContent>Karen</DropDownContent>
        </ThirdNavLink>
        <FourthNavLink>
          <GridLink>
            <Link to="/More" className="Link" >More</Link>
            <ExpandMoreIcon />
          </GridLink>
          <DropDownContent>Karen</DropDownContent>
        </FourthNavLink>
      </LowerNavContainer>

    </div>
    );
}

export default Navbar;