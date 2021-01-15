import React, { useState } from 'react';
import styled from 'styled-components';

const StyledCanvasColorPalette = styled.div`
  background: black;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
const StyledButton = styled.button`
  background: black;
  color: white;
  border-radius: 5px;
  margin: 10px;
  padding: 5px 10px;
  border: 1px solid white;
  // min-width: 100px;

  & .dccp__selected {
    background: white;
    color: black;
  }
`

const CanvasColorPalette = ({ canvasId }) => {

  const handleUpdateColor = (color) => {
    console.log('handling')
    const canvas = document.querySelector(`#${canvasId}`)
    const ctx = canvas.getContext('2d')
    ctx.strokeStyle = color
  }

  return (
    <StyledCanvasColorPalette>
      <StyledButton
          onClick={() => handleUpdateColor('blue')}
        >water potable
        </StyledButton>
        <StyledButton
          className='dccp__selected'
          onClick={() => handleUpdateColor('green')}
        >stormwater
        </StyledButton>
        <StyledButton
          onClick={() => handleUpdateColor('yellow')}
        >gas
        </StyledButton>
        <StyledButton
          onClick={() => handleUpdateColor('orange')}
        >electric
        </StyledButton>
        <StyledButton
          onClick={() => handleUpdateColor('white')}
        >communications
        </StyledButton>
        <StyledButton
          onClick={() => handleUpdateColor('red')}
        >fire
        </StyledButton>
        <StyledButton
          onClick={() => handleUpdateColor('pink')}
        >unidentified
        </StyledButton>
        <StyledButton
          onClick={() => handleUpdateColor('purple')}
        >recycled water
        </StyledButton>
        {/* https://www.jaybro.com.au/about/colour-codes-spray-paint/ */}
    </StyledCanvasColorPalette>
  )
}
export default CanvasColorPalette;