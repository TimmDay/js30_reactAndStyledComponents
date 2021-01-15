import React, { useState, useEffect, useRef } from 'react';
import styled, {createGlobalStyle} from 'styled-components';
import DashLocalStorage from './DashLocalStorage'
import DashCanvasColorPalette from './DashCanvasColorPalette'


//TODO: set thickness 
//TODO: cursor
// make dash 'on top' of background

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`
const StyledCanvasApp = styled.div`
  background: #018DED url("/08bg_construction-scott-blake-ZOiGMIcfXXg-unsplash.jpg");
  background-size: cover;
`;

const CanvasApp = (props) => {
  const [isDrawing, _setIsDrawing] = useState(false)
  const [lastX, _setLastX] = useState(100)
  const [lastY, _setLastY] = useState(100)


  //useRef, since onMount we only have the state at that time, we need to create a reference to the updated state for the listeners
  const isDrawingRef = useRef(isDrawing)
  const lastXRef = useRef(lastX)
  const lastYRef = useRef(lastY)
  const setIsDrawing = x => {
    isDrawingRef.current = x
    _setIsDrawing(x)
  }
  const setLastX = x => _setLastX(lastXRef.current)
  const setLastY = x => _setLastY(lastYRef.current)
  

  useEffect(() => {
    const canvas = document.querySelector('#draw')
    const ctx = canvas.getContext('2d')
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    ctx.strokeStyle = '#BADA55'
    ctx.lineJoin = 'round'
    ctx.lineCap = 'round'
    ctx.lineWidth = 10


    const isDraw = (e) => {
      if (!isDrawingRef.current) return
      // console.log(e)
      ctx.beginPath();
      ctx.moveTo(lastXRef, lastYRef); //start from
      ctx.lineTo(e.offsetX, e.offsetY); //go to
      ctx.stroke();
      setLastX(e.offsetX) //update (slow)
      setLastY(e.offsetY)
    }

    const handleMouseDown = (e) => {
      setIsDrawing(true)
      setLastX(e.offsetX)
      setLastY(e.offsetY)
    }
    const resizeCanvas = () => {
      canvas.height = window.innerHeight;
      canvas.width = window.innerWidth;
    }

    canvas.addEventListener('mousedown', handleMouseDown)
    canvas.addEventListener('mouseup', () => setIsDrawing(false))
    canvas.addEventListener('mouseout', () => setIsDrawing(false))
    canvas.addEventListener('mousemove', (e) => isDraw(e))
    window.addEventListener('resize', resizeCanvas)
    
    return () => {
      canvas.removeEventListener('mousedown', () => setIsDrawing(true))
      canvas.removeEventListener('mouseup', () => setIsDrawing(false))
      canvas.removeEventListener('mouseout', () => setIsDrawing(false))
      canvas.removeEventListener('mousemove', (e) => isDraw(e))
    }
  }, [])


  return (
    <StyledCanvasApp>
      <canvas
        id='draw'
        width="800" 
        height="800" 
      />
      <DashCanvasColorPalette canvasId='draw'/>
      <DashLocalStorage canvasId='draw'/>
      <GlobalStyle/>
    </StyledCanvasApp>
  )
}
export default CanvasApp;