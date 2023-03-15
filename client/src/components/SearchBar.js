import React, {useState, useEffect} from 'react';
import TextField from "@mui/material/TextField";
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import SearchList from "./SearchList";
import axios from 'axios';
import "../App.css";
import styled from 'styled-components';
import { Link, useNavigate } from "react-router-dom";


const ContainerDiv = styled.div`
    position: relative;
`

const TextDiv = styled.div`
    padding-top: 20px;
`

const SearchBar = ({ selectedBusiness, setSelectedBusiness, reviewsList }) => {

    const [inputText, setInputText] = useState("");
    const [allBusinesses, setAllBusinesses] = useState([]);

    useEffect(() => {
        const getAll = async() => {
            let results = await axios.get(`/api/business/searchAll`);
            console.log(results.data)

            setAllBusinesses(results.data);
        }
        getAll()
    }, [])

    let inputHandler = (e) => {
      //convert input text to lower case
      var lowerCase = e.target.value.toLowerCase();
      setInputText(lowerCase);
    };



    const onSearch = (name) => {
        setInputText(name);
        console.log(`heres the thing you searched for: ${name}`);


    }

    return (
      <ContainerDiv>
        <TextDiv>
          <TextField 
            fullWidth
            id="outlined-basic"
            onChange={inputHandler}
            variant="outlined"
            label="Search"
            style={{backgroundColor: 'white', borderRadius: '5px'}}
            value={inputText}
            InputProps={{
                endAdornment: <InputAdornment position="start"><Link to={`/${inputText}`}><SearchIcon /></Link></InputAdornment>,
            }}
          />
        </TextDiv>
        {allBusinesses.length > 0 && inputText.length > 0 ? <SearchList inputText={inputText} setInputText={setInputText} data={allBusinesses} onSearch={onSearch} reviewsList={reviewsList} /> : ''}
      </ContainerDiv>
    );
}

export default SearchBar;