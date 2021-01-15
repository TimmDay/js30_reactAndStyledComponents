import React, { useState } from 'react';
import styled from 'styled-components';

const StyledP = styled.p`
  text-transform: uppercase;
  font-family: 'Amatic SC', cursive;
  text-shadow: 0 0 4px rgba(0, 0, 0, 0.72), 0 0 14px rgba(0, 0, 0, 0.45);
  font-size: 2em;
  &:nth-child(2) {
    font-size: 4em;
  }
`;

const StyledPanel = styled.div`
  background: #6B0F9C;
  box-shadow: inset 0 0 0 5px rgba(255,255,255,0.1);
  color: white;
  text-align: center;
  align-items: center;
  /* Safari transitionend event.propertyName === flex */
  /* Chrome + FF transitionend event.propertyName === flex-grow */
  transition:
    font-size 0.7s cubic-bezier(0.61,-0.19, 0.7,-0.11),
    flex 0.7s cubic-bezier(0.61,-0.19, 0.7,-0.11);
  font-size: 20px;
  background-size: cover;
  background-position: center;
  flex: ${props => props.isActive ? '4' : '1'};
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;

  & > * {
    margin: 0;
    width: 100%;
    transition: transform 0.3s 0.7s; //prop, duration, delay
    flex: 1 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  & > :first-child {
    transform: translateY(${props => props.isActive ? '0' : '-100%'});

  }
  & > :last-child {
    transform: translateY(${props => props.isActive ? '0' : '100%'});
  }
`;
  //& means 'this element'


const Panel = ({ words, bgImg, isActive, onClick, index }) => {
  return (
    <StyledPanel
      isActive={isActive}
      style={{backgroundImage: `url(${bgImg})`}}
      onClick={(e) => onClick(e, index)}
    >
      {words && <StyledP>{words[0]}</StyledP>}
      {words && <StyledP>{words[1]}</StyledP>}
      {words && <StyledP>{words[2]}</StyledP>}
    </StyledPanel>
  )
}
export default Panel;