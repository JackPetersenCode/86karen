import { React, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Select from 'react-select';

const DropdownStyle = styled.div`
    background-color: white;
    display: flex;
    flex-direction: column;
    border-radius: 3px;
`

const DropdownRowStyle = styled.div`
    cursor: pointer;
    textAlign: start;
    margin: 2px 0;
    padding-left: 3px;
    padding-right: 3px;
`
const StyledDiv = styled.div`
    background-color: white;
    padding: 10px;
    
`
const StyledOption = styled.div`

`
 
function SearchList({ inputText, data, reviewsList }) {
    //create a new array by filtering the original array
    
    const [selectedBusiness, setSelectedBusiness] = useState('');

    const filteredData = data.filter((element) => {
        //if no input the return the original
        //return the item which contains the user input
        return element.name.toLowerCase().includes(inputText);
        
    })

    function handleList(name) {
        setSelectedBusiness(name);
        console.log(name)
    }


    return (
      <>
      { !reviewsList ?

      <DropdownStyle>
        {filteredData.map((item, index) => (
        <Link key={index} to={`/${item.name}`}><DropdownRowStyle>{item.name}</DropdownRowStyle></Link>
        ))}
      </DropdownStyle>
      
      :
      
      <StyledDiv>
        {filteredData.map((item, index) => (
            <StyledOption key={index} onClick={() => handleList(item.name)} >{item.name}</StyledOption>
        ))}
      </StyledDiv>
      }
      </>
    )
}

export default SearchList;