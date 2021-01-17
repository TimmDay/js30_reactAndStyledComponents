import React, { useState, useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

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
    background: linear-gradient(135deg, #7c1599 0%,#921099 48%,#7e4ae8 100%);
    background-size: cover;
    background: #7A419B; //#bada$$; //backup background 
  }
`
const StyledPlayer = styled.div`
  max-width: 750px;
  border: 5px solid rgba(0,0,0,0.2);
  box-shadow: 0 0 20px rgba(0,0,0,0.2);
  position: relative;
  font-size: 0;
  overflow: hidden;
  &:fullscreen {
    max-width: none;
    width: 100%;
  }
  &:-webkit-full-screen { max-width: none; width: 100%; }
  & video {
    width: 100%;
  }
`
const StyledBtn = styled.button`
  background: none;
  border: 0;
  line-height: 1;
  color: white;
  text-align: center;
  outline: 0;
  padding: 0;
  cursor: pointer;
  max-width: 50px;

  &:focus {
    border-color: #ffc600;
    color: yellow; //TODO:
  }
`
const StyledControlsContainer = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;
  width: 100%;
  transform: translateY(100%) translateY(-5px);
  transition: all .3s;
  flex-wrap: wrap;

  & > * {
    flex: 1; //TODO: equiv to flex: 1 1 0, equiv to flex-gro, fle-shrink, flex-basis
  }

  ${StyledPlayer}:hover & { //TODO: useful technique
    transform: translateY(0); 
  }
`
const StyledSlider = styled.input`
  width: 10px;
  height: 30px;
  background: red;

  -webkit-appearance: none;
  background: transparent;
  width: 100%;
  margin: 0 5px;

  &:focus {
    outline: none;
  }
  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 8.4px;
    cursor: pointer;
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0), 0 0 1px rgba(13, 13, 13, 0);
    background: rgba(255,255,255,0.8);
    border-radius: 1.3px;
    border: 0.2px solid rgba(1, 1, 1, 0);
  }
  &::-webkit-slider-thumb {
    height: 15px;
    width: 15px;
    border-radius: 50px;
    background: #ffc600;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -3.5px;
    box-shadow:0 0 2px rgba(0,0,0,0.2);
  }
  &:focus::-webkit-slider-runnable-track {
    background: #bada55;
  }
  &::-moz-range-track {
    width: 100%;
    height: 8.4px;
    cursor: pointer;
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0), 0 0 1px rgba(13, 13, 13, 0);
    background: #ffffff;
    border-radius: 1.3px;
    border: 0.2px solid rgba(1, 1, 1, 0);
  }
  &::-moz-range-thumb {
    box-shadow: 0 0 0 rgba(0, 0, 0, 0), 0 0 0 rgba(13, 13, 13, 0);
    height: 15px;
    width: 15px;
    border-radius: 50px;
    background: #ffc600;
    cursor: pointer;
  }
`
const StyledProgressBar = styled.div`
  flex: 10;
  position: relative;
  display: flex;
  flex-basis: 100%;
  height: 5px;
  transition: height 0.3s;
  background: rgba(0,0,0,0.5);
  cursor: ew-resize;

  & div {
    width: 50%;
    background: #ffc600;
    flex: 0;
    flex-basis: 50%;
  }

  ${StyledPlayer} & {
    height: 15px;
  }
`

const VideoApp = (props) => {
  const [volume, setVolume] = useState(1)
  const [playbackRate, setPlaybackRate] = useState(1)
  const [isDrag, setIsDrag] = useState(false)

  useEffect(() => {
    const player = document.querySelector('video')
    player.addEventListener('click', handleTogglePlay)
    player.addEventListener('play', handleUpdatePlayBtn)
    player.addEventListener('pause', handleUpdatePlayBtn)
    player.addEventListener('timeupdate', handleProgressBar)

    return () => { 
      player.removeEventListener('click', handleTogglePlay)
      player.removeEventListener('play', handleUpdatePlayBtn)
      player.removeEventListener('pause', handleUpdatePlayBtn)
      player.removeEventListener('timeupdate', handleProgressBar)
    }
  }, [])

  const handleTogglePlay = (e) => {
    e.preventDefault()
    const video = document.querySelector('video')
    video.paused ? video.play() : video.pause()
  }
  const handleUpdatePlayBtn = (e) => {
    e.preventDefault()
    document.querySelector('.player__button').textContent = e.type === 'play' ? '❚ ❚' : '►'
  }
  const handleSkip = (skip) => document.querySelector('video').currentTime += parseFloat(skip)

  const handleSlider = (e) => {
    const {value: val, name } = e.target
    const video = document.querySelector('video')
    if (name === 'volume') {
      setVolume(val)
      video.volume = val
    }
    if (name === 'playbackRate') {
      setPlaybackRate(val)
      video.playbackRate = val
    }
  }

  const handleProgressBar = () => {
    const video = document.querySelector('video')
    const progressBar = document.querySelector('.progressBar__filled')
    progressBar.style.flexBasis = `${video.currentTime / video.duration * 100}%`
  }
  const handleScrub = (e) => {
    const video = document.querySelector('video')
    const progressBar = document.querySelector('.progressBar')
    const clickedTime = e.clientX / progressBar.offsetWidth * video.duration
    video.currentTime = clickedTime
  }
  const handleFullscreen = () => {
    const video = document.querySelector('video')
    video.requestFullscreen()
  }
  return (
    <StyledPlayer>
      <video src="/652333414.mp4" autoPlay /*controls*/ loop /*muted={true}*/></video>
      <StyledControlsContainer>
        <StyledProgressBar 
          className='progressBar' 
          onClick={handleScrub}
          onMouseDown={() => setIsDrag(true)}
          onMouseUp={() => setIsDrag(false)}
          onMouseLeave={() => setIsDrag(false)}
          onMouseMove={(e) => isDrag && handleScrub(e)}
        >
          <div className='progressBar__filled'></div>
        </StyledProgressBar>
        <StyledBtn onClick={handleTogglePlay} className="player__button" title="Toggle Play">►</StyledBtn>
        <StyledSlider name='volume' onChange={handleSlider} value={volume} type="range" min="0" max="1" step="0.05" />
        <StyledSlider name='playbackRate' onChange={handleSlider} value={playbackRate} type="range" min="0.5" max="2" step="0.1" />
        <StyledBtn onClick={() => handleSkip('-10')}>« 10s</StyledBtn>
        <StyledBtn onClick={() => handleSkip('25')}>25s »</StyledBtn>
        <StyledBtn onClick={handleFullscreen}>FS</StyledBtn>
      </StyledControlsContainer>
      <GlobalStyle/>
    </StyledPlayer>
  )
}
export default VideoApp;