import React, { useState, useEffect } from 'react';
import styled, {createGlobalStyle} from 'styled-components';


const GlobalStyle = createGlobalStyle`
  :root {
    --base: #E1b01d; /* #fff8e7;  cosmic latte */
    --blur: 3px;
    --spacing: 10px;
  }
  body {
    text-align: center;
    background: #193549;
    color: white;
    font-family: 'helvetica neue', sans-serif;
    font-weight: 100;
    font-size: 50px;
    margin: 0;
    padding: 0;
  }
  .highlight {
    color: var(--base)
  }
`;

const Controls = styled.div`
  margin-bottom: 50px;
`
const StyledInput = styled.input`
  width: 101px;
`
const StyledImg = styled.img`
  padding: var(--spacing);
  background: var(--base);
  filter: blur(var(--blur));
`;


const SliderApp = () => {
  const [valSpacing, setValSpacing] = useState(10); //px
  const [valBlur, setValBlur] = useState(3); //px
  const [valBase, setValBase] = useState('#E1b01d'); //hex
  
  useEffect(() => {
    const handleChange = (e) => {
      const suffix = e.target.dataset.sizing || '';
      document.documentElement.style.setProperty(`--${e.target.name}`, `${e.target.value}${suffix}`)
      document.documentElement.style.getPropertyValue(`--${e.target.name}`)
    }
    const inputs = document.querySelectorAll(StyledInput)

    inputs.forEach((input) => {
      input.addEventListener('change', handleChange)
      input.addEventListener('mousemove', handleChange)
    })
    return () => {
      inputs.forEach((input) => {
        input.removeEventListener('change', handleChange)
        input.addEventListener('mousemove', handleChange)
      })
    }
  }, [])

  // useEffect(() => {
  //   console.log(valBase, valBlur, valSpacing)
  // })

  return (
    <>
      <h2>Update CSS Variables with <span className='highlight'>JS</span></h2>
      <Controls>
        <label htmlFor="spacing">Spacing:</label>
        <StyledInput 
          id="spacing" 
          type="range" 
          name="spacing" 
          min="10" 
          max="200" 
          value={valSpacing} 
          onChange={(e)=>setValSpacing(e.target.value)}
          data-sizing="px"
        />

        <label htmlFor="blur">Blur:</label>
        <StyledInput id="blur" type="range" name="blur" min="0" max="25" value={valBlur} onChange={e=>setValBlur(e.target.value)} data-sizing="px"/>
        
        <label htmlFor="base">Base Color</label>
        <StyledInput id="base" type="color" name="base" value={valBase} onChange={e=>setValBase(e.target.value)}/>
      </Controls>
      <StyledImg src="https://source.unsplash.com/7bwQXzbF6KE/800x500"/>
      <GlobalStyle/>
    </>
  )
}
export default SliderApp;