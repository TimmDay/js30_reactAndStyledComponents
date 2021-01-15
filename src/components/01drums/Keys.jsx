import React, { useEffect } from 'react'
import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
  playing: {
    transform: 'scale(2)',
    borderColor: '#ffc600',
    boxShadow: '0 0 1rem #ffc600',
  },
  keys: {
    display: 'flex',
    flexWrap: 'wrap',
    flex: 1,
    minHeight: '100vh',
    alignItems: 'center',
    justifyContent: 'center'
  },
  key: {
    border: '.4rem solid black',
    borderRadius: '50%',
    boxSizing: 'border-box',
    margin: '1rem',
    fontSize: '1.5rem',
    padding: '1rem .5rem',
    transition: 'all .07s ease',
    width: '8rem',
    height: '8rem',
    textAlign: 'center',
    color: 'white',
    background: 'rgba(0.8,0.8,0.8,0.4)',
    textShadow: '0 0 .5rem black',
    '& kbd': {
      display: 'block',
      fontSize: '3rem',
      color: 'red'
    }
  },
  sound: {
    fontSize: '1.2rem',
    textTransform: 'uppercase',
    letterSpacing: '.1rem',
    color: '#ffc600', //yellow
  }
})

const sounds = [
  [65, "A", "clap", new Audio("sounds/clap.wav")],
  [83, "S", "hihat", new Audio("sounds/hihat.wav")],
  [68, "D", "kick", new Audio("sounds/kick.wav")],
  [70, "F", "openhat", new Audio("sounds/openhat.wav")],
  [71, "G", "boom", new Audio("sounds/boom.wav")],
  [72, "H", "ride", new Audio("sounds/ride.wav")],
  [74, "J", "snare", new Audio("sounds/snare.wav")],
  [75, "K", "tom", new Audio("sounds/tom.wav")],
  [76, "L", "tink", new Audio("sounds/tink.wav")]
];

const Drums = () => {
  const classes = useStyles()

  useEffect(() => {
    const handleKeyDown = (e) => {
      const sound = sounds.find(sound => sound[0] === e.keyCode) //checks the keycode of pressed key against the list of keycodes

      if (sound) {
        const el = document.querySelector(`div[data-key='${sound[0]}']`)
        el.classList.add(classes.playing)
        sound[3].currentTime = 0 //reset current audio file if already playing
        sound[3].play()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  },[])

  const removeTransition = e => e.target.classList.remove(classes.playing);

  return (
    <div className={classes.keys}>
      {sounds.map(([keyCode, keyName, soundName, ...rest]) => (
        <div className={classes.key} key={keyCode} data-key={keyCode} onTransitionEnd={removeTransition}>
          <kbd>{keyName}</kbd>
          <span className={classes.sound}>{soundName}</span>
        </div>  
      ))}
    </div>
  )
}

export { Drums as default }