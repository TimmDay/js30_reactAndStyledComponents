import React from 'react'
import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
  clockHand: props => ({
    height: props.handThickness || 6,
    // background: 'black',
    background: `var(--color-primary)`,
    // `${
    //   props.type == 'second' 
    //   ? 'green' 
    //   : props.type === 'minute' ? 'red'
    //     : 'purple'
    // }`,
    top: '50%',
    width: '50%',
    position: 'absolute', //relative to 'relative' parent
    transform: `
      translateY(-${props.handThickness/2 || 3}px)
      translateX(${props.handThickness/2 || 3}px)
      rotate(${props.degree || 90}deg) 
    `,
    transformOrigin: '100%',
    transition: (props.degree === 450 || props.degree === 90)
      ? 'none'
      : 'all 0.05s cubic-bezier(0, 2.79, 0.06, 0.87) 0s'
    // turn off transition at 12oclock otherwise it does at backwards 360
  })
})

const ClockHand = (props) => {
  const classes = useStyles(props)

  return (
    <div className={classes.clockHand}></div>
  )
}

export { ClockHand as default}