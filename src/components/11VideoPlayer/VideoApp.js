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
    background: #bada$$;
    min-height: 100vh;
    background: linear-gradient(135deg, #7c1599 0%,#921099 48%,#7e4ae8 100%);
    background-size: cover;
  }
`

const StyledVideo = styled.video`
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
  &:-webkit-full-screen {
    max-width: none;
    width: 100%;
  }
`;
const StyledBtnPlay = styled.button`
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
  }
`
const StyledInputSlider = styled.input`
  width: 10px;
  height: 30px;
`
const StyledControlsContainer = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;
  width: 100%;
  transform: translateY(100%) translateY(-5px);
  transition: all .3s;
  flex-wrap: wrap;
`

const VideoApp = (props) => {
  useEffect(() => {
    const player = document.querySelector('video')
    player.addEventListener('click', handleTogglePlay)
    player.addEventListener('play', handleUpdatePlayBtn)
    player.addEventListener('pause', handleUpdatePlayBtn)

    return () => { 
      player.removeEventListener('click', handleTogglePlay)
      player.removeEventListener('play', handleUpdatePlayBtn)
      player.removeEventListener('pause', handleUpdatePlayBtn)
    }
  }, [])

  const handleTogglePlay = (e) => {
    e.preventDefault()
    const player = document.querySelector('video')
    player.paused ? player.play() : player.pause()
  }
  const handleUpdatePlayBtn = (e) => {
    e.preventDefault()
    const playerBtn = document.querySelector('.player__button')
    playerBtn.textContent = 'SSS'
    console.log(e)
    playerBtn.textContent = e.type === 'play' ? '❚ ❚' : '►'
    // e.type === 'play' ? playerBtn.textContent = 'ii' : playerBtn.textContent = '►'⏸️
  }
  return (
    <>
     <StyledVideo className="player__video viewer" src="/652333414.mp4" autoPlay controls loop muted={true}></StyledVideo>
     <StyledControlsContainer>
        <div class="progress">
          <div class="progress__filled"></div>
        </div>
        <StyledBtnPlay className="player__button" title="Toggle Play">►♛</StyledBtnPlay>
        <StyledInputSlider type="range" name="volume" class="player__slider" min="0" max="1" step="0.05" value="1" />
        <StyledInputSlider type="range" name="playbackRate" class="player__slider" min="0.5" max="2" step="0.1" value="1" />
        <button data-skip="-10" class="player__button">« 10s</button>
        <button data-skip="25" class="player__button">25s »</button>
      </StyledControlsContainer>
      <GlobalStyle/>
    </>
  )
}
export default VideoApp;