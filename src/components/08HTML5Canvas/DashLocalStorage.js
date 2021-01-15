import React from 'react';
import styled from 'styled-components';

const StyledDashLocalStorage = styled.div`
  // position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;

  & button {
    margin: 10px;
    // padding: 5px 10px;
    width: 50px;
    height: 40px;
    border-radius: 50%;
    background: black;
    color: white;
    outline: 0;
  }
`;

const DashLocalStorage = ({ canvasId }) => {


  const handleSave = () => {
    const canvas = document.querySelector(`#${canvasId}`)
    const ctx = canvas.getContext('2d')
    localStorage.setItem('canvasName', canvas.toDataURL());
  }

  const handleLoad = () => {
    const canvas = document.querySelector(`#${canvasId}`)
    const ctx = canvas.getContext('2d')

    const dataURL = localStorage.getItem('canvasName');
    const img = new Image;
    img.src = dataURL;
    img.onload = function () {
      ctx.drawImage(img, 0, 0);
    };
  }

  const handleClear = () => {
    localStorage.clear()
    window.location.reload()
  }

  return (
    <StyledDashLocalStorage>
      <button
        onClick={handleSave}
      >
        save
      </button>
      <button
        onClick={handleLoad}
      >
        load
      </button>
      <button
        onClick={handleClear}
      >
        clear
      </button>
    </StyledDashLocalStorage>
  )
}
export default DashLocalStorage;