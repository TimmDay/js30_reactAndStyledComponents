import React, { useState, useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Panel from './Panel'
import panelData from './data/galleryData'

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    background: #ffc600;
    font-family: 'helvetica neue';
    font-size: 20px;
    font-weight: 200;
  }

  body {
    margin: 0;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }
`;
const StyledGalleryApp = styled.main`
  min-height: 100vh;
  overflow: hidden;
  display: flex;
`;

const GalleryApp = (props) => {
  const [ activePanel, setActivePanel ] = useState(-1) // number indicating index of panelData items

  const handleClick = (e, i) => {
    e.preventDefault()
    if (i === activePanel) {
      setActivePanel(-1)
    } else {
      setActivePanel(i)
    }
  }

  return (
    <StyledGalleryApp >
      {panelData.map((el, index) => (
        <Panel
          key={`panel${index}`}
          index={index} //so it can bubble it back up in the function
          isActive={(index === activePanel)}
          words={panelData[index].words}
          bgImg={panelData[index].bgImg}
          onClick={(e, index) => handleClick(e, index)}
          
        /> 
      ))}
      <GlobalStyle/>
    </StyledGalleryApp>
  )
}
export default GalleryApp;