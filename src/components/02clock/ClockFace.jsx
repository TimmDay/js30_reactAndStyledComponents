import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import ClockHand from './ClockHand'
import HourMark from './HourMark'

const StyledClockFace = styled.div`
  box-sizing: border-box;
  position: relative;
  width: 100%;
  height: 100%;
  --btn-font-size: 18;
`;

const ClockFace = () => {
  const [ hands, setHands ] = useState([90,90,90]) //[s,m,h] as deg

  useEffect(() => {
    const ticker = setInterval(() => {
      const date = breakDownDateToDeg() //save [s,m,h]
      setHands(date)}
    ,1000)
    return () => clearInterval(ticker) //clean up setInterval
  }, [])

  // useEffect(() => {
  //   console.log(hands)
  // }, [hands])

  const breakDownDateToDeg = (date=new Date) => {
    return [
      date.getSeconds()/60*360+90, 
      date.getMinutes()/60*360+90, 
      date.getHours()/12*360+90 
    ]
  }

  const types= ['second','minute','hour']
  const hourMarks = Array(12).fill(0)

  return (
    <StyledClockFace>      
      {/* <HourMark /> */}

      {hands.map((degree, i) => (
        <ClockHand
          key={i}
          degree={degree}
          type={types[i]}
        />
      ))}

      {hourMarks.map((undefined, j) => (
        <HourMark 
          key={j}
          pos={j+1}
        />
      ))}
    </StyledClockFace>
  )
}

export { ClockFace as default }