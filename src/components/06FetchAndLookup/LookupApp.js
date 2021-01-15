import React, { useState, useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import reactStringReplace from 'react-string-replace'

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    background: #ffc600;
    font-family: 'helvetica neue';
    font-size: 20px;
    font-weight: 200;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
`

const StyledLookupApp = styled.form` 
  max-width: 400px;
  margin: 50px auto;
  & .styledLookupApp__hl {
    background: #ffc600;
    color: red;
  }
  & .styledLookupApp__population {
    font-size: 15px;
  }
`

const StyledInput = styled.input`
  width: 100%;
  padding: 20px;

  margin: 0;
  text-align: center;
  outline: 0; //TODO: find a more accessible solution
  border: 10px solid #F7F7F7;
  width: 120%;
  left: -10%;
  position: relative;
  top: 10px;
  z-index: 2;
  border-radius: 5px;
  font-size: 20px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.12), inset 0 0 2px rgba(0, 0, 0, 0.19);
`

const StyledUl = styled.ul`
  margin: 0;
  padding: 0;
  position: relative;

  & li {
    background: white;
    list-style: none;
    border-bottom: 1px solid #D8D8D8;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.14);
    margin: 0;
    padding: 20px;
    transition: background 0.2s;
    display: flex;
    justify-content: space-between;
    text-transform: capitalize;
  }

  & li:nth-child(even) {
    transform: perspective(100px) rotateX(3deg) translateY(2px) scale(1.001);
    background: linear-gradient(to top,  #ffffff 0%,#EFEFEF 100%);
  }

  & li:nth-child(odd) {
    transform: perspective(100px) rotateX(-3deg) translateY(3px);
    background: linear-gradient(to bottom,  #ffffff 0%,#EFEFEF 100%);
  }
`

const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const LookupApp = (props) => {
  const [cities, setCities] = useState([])
  const [matchedCities, setMatchedCities] = useState([])
  const [text, setText] = useState('') //input
  
  useEffect(() => {
    fetch(endpoint)
      .then(blob => blob.json())
      .then(data => {
          setCities([...data])
          setMatchedCities([...data])
        },
        (error) => console.log(error)
      )
  }, [])


  const findMatches = (wordToMatch, cities) => {
    const matched = cities.filter(({ city, state }) => {
      const regex = new RegExp(wordToMatch, 'gi')
      return city.match(regex) || state.match(regex)
    })
    console.log(matched)
    setMatchedCities(matched)
  }

  const handleTextInput = (e) => {
    setText(e.target.value) // for input display
    findMatches(e.target.value, cities)
  }

  const numberWithCommas = (x) => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return (
    <StyledLookupApp>
      <StyledInput 
        type='text'
        value={text}
        onChange={(e) => handleTextInput(e)}
        placeholder="Search for a top 1000 US City or State"
      />
      <StyledUl>
        {matchedCities.map(({city, state, population}, i) => (
          <li key={`${city}${i}`}>
            <span>
              {reactStringReplace(city, text, (match, i) => {
                return (<span key={i} className="styledLookupApp__hl">{match}</span>)
              })}
            </span>
            <span>
              {reactStringReplace(state, text, (match, i) => {
                return (<span key={i} className="styledLookupApp__hl">{match}</span>)
              })}
            </span>
            <span className="styledLookupApp__population">{`${numberWithCommas(population)}`}</span>
          </li>
        ))}
      </StyledUl>

      <GlobalStyle/>
    </StyledLookupApp>
  )
}
export { LookupApp as default };