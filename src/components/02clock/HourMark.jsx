import React, { useState } from 'react';
import {createUseStyles} from 'react-jss';

const markDiameter = 0.5

const useStyles = createUseStyles({
  hourMark: props => ({
    height: `${markDiameter}rem`,
    width: `${markDiameter}rem`,
    borderRadius: '50%',
    background: 'black',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: (props.pos) ? `
      translateX(${(-markDiameter/2) + Math.sin((props.pos)/12*(360)*Math.PI/180)*(props.dia || 7)}rem) 
      translateY(${(-markDiameter/2) - Math.cos((props.pos)/12*(360)*Math.PI/180)*(props.dia || 7)}rem)
    ` : `
      translateX(${(-markDiameter/2)}rem) 
      translateY(${(-markDiameter/2)}rem)
    `
  })
})

const HourMark = (props) => {
  const el = document.getElementById('clockfaceapp')
if (el) {
  const dim = getComputedStyle(el).getPropertyValue('width')
  console.log(dim)
}
  const classes = useStyles(props)
  // console.log(props)

  return (
    <div className={classes.hourMark} />
  )
}
export default HourMark;