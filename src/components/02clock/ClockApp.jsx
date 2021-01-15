import React, { useEffect } from 'react'
import styled from 'styled-components'
import ClockFace from './ClockFace'

// note the css-variable (--) that is given to the body. This is then accessible within the css of all child elements
const bodyStyles = `
  --color-primary: limegreen;
  background: #018DED url(https://unsplash.it/1500/1000?image=881&blur=5);
  background-size: cover;
  margin: 0;
  padding: 0;
  text-align: center;
  font-size: 10px;
  font-family: 'helvetica neue, sans-serif';
  min-height: 100vh;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`
const StyledClockApp = styled.div`
  width: 15rem;
  height: 15rem;
  border: 20px solid var(--color-primary);
  border-radius: 50%;
  box-sizing: border-box;
  padding: 1rem;
  box-shadow:
    0 0 0 4px rgba(0,0,0,0.1),
    inset 0 0 0 3px #EFEFEF,
    inset 0 0 10px black,
    0 0 10px rgba(0,0,0,0.2);
    `;

const ClockApp = () => {

  useEffect(() => {
    document.body.style = bodyStyles
    return () => document.body.style = null
  }, [])

  return (
    <StyledClockApp>
      <ClockFace/>
    </StyledClockApp>
  )
}

export { ClockApp as default }