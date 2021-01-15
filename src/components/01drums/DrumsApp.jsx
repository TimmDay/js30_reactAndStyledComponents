import React, { useEffect } from 'react'
import Keys from './Keys'
import {createUseStyles} from 'react-jss'


const useStyles = createUseStyles({
  drumsApp: {
    background: 'url("/01background03.jpg")',
    backgroundSize: 'cover',
    margin: 0,
    padding: 0,
    fontFamily: 'sans-serif',
    height: '100vh'
  }
})


const DrumsApp = () => {
  const classes = useStyles()

  useEffect(() => {
    document.body.className = classes.drumsApp
    return () => document.body.className = null
  }, [])

  return (
    <div className={classes.drumsApp}>
      <Keys />
    </div>
  )
}

export { DrumsApp as default }