import React, { useState, useEffect, useRef } from 'react';
import styled, {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    margin: 0;
    padding: 0;
    diplay: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background: linear-gradient(135deg, #000 0%,#005 48%,#00a 100%);
    background-size: cover;
  }
`
const StyledKeySequenceApp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  color: white;
`;
const StyledKeyCode = styled.div`
  font-size: 180px;
`
const secretCode = 'password'

const KeySequenceApp = (props) => {
  const [pressed, _setPressed] = useState([])
  const pressedRef = useRef(pressed)
  const setPressed = x => {
    pressedRef.current = x
    _setPressed(x)
  }

  useEffect(() => {
    window.addEventListener('keyup', handleKeyUp)
    return () => {
      window.removeEventListener('keyup', handleKeyUp)
    }
  }, [])

  const handleKeyUp = (e) => {
    document.querySelector('#keyCode').textContent = e.keyCode
    document.querySelector('#keySeqDisp').textContent = e.key

    setPressed([...pressedRef.current, e.key].splice(-secretCode.length))

    const str = pressedRef.current.join('')
    document.querySelector('#sequenceBuild').textContent = str

    if (str.includes(secretCode)) {
      console.log('ding ding ding')
    }

  }


  return (
    <StyledKeySequenceApp>
      <StyledKeyCode id='keyCode'>00</StyledKeyCode>
      <div id='keySeqDisp'>key</div>
      <div>
        <div id='sequenceBuild'>abc</div>
      </div>
      <GlobalStyle/>
    </StyledKeySequenceApp>
  )
}
export default KeySequenceApp;