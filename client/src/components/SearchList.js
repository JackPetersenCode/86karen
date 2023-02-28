import { React, useEffect, useState } from 'react';
import styled from 'styled-components';

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

function SearchList({ inputText, setInputText, data, onSearch }) {
    //create a new array by filtering the original array

    const filteredData = data.filter((element) => {
        //if no input the return the original
        //return the item which contains the user input
        return element.name.toLowerCase().includes(inputText);
        
    })

    return (
      <DropdownStyle>
          {filteredData.map((item, index) => (
              <DropdownRowStyle onClick={() => onSearch(item.name)} key={index}>{item.name}</DropdownRowStyle>
          ))}
      </DropdownStyle>
    )
}

export default SearchList;