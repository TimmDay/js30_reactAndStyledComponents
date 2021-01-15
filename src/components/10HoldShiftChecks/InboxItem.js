import React, { useState } from 'react';
import styled from 'styled-components';

const StyledInboxItem = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #F1F1F1;
  transition: background 0.3s;

  &:last-child {
    border-bottom: 0;
  }
  &:hover {
    background: #F9F9F9;
  }

  & input {
    margin: 20px;
  }
  & input:checked + p {
    background: #F9F9F9;
    text-decoration: line-through;
  }

  & p {
    margin: 0;
    padding: 20px;
    transition: background 0.2s, text-decoration 0.5s;
    flex: 1;
    font-family:'helvetica neue';
    font-size: 20px;
    font-weight: 200;
    border-left: 1px solid #D1E2FF;
  }
`;

const InboxItem = ({ text }) => {

  return (
    <StyledInboxItem>
      <input type='checkbox' />
      <p>{ text }</p>
    </StyledInboxItem>
  )
}
export default InboxItem;