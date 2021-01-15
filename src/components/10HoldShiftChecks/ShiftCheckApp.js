import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import data from '../../data/10data' //array str
import InboxItem from './InboxItem'

const StyledShiftCheck = styled.div`
  max-width: 400px;
  margin: 50px auto;
  background: white;
  border-radius: 5px;
  box-shadow: 10px 10px 0 rgba(0,0,0,0.1);
`;

const ShiftCheck = (props) => {
  const [lastChecked, _setLastChecked] = useState(null)
  
  const lastCheckedRef = useRef(lastChecked)
  const setLastChecked = (x) => {
    lastCheckedRef.current = x
    _setLastChecked(x)
  }

  useEffect(() => {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]')
    console.log(checkboxes)
    checkboxes.forEach((checkbox) => {
      checkbox.addEventListener('click', handleCheck)
    })

    return () => {
      checkboxes.forEach((checkbox, i) => {
        checkbox.removeEventListener('click', handleCheck)
      })
    }
  }, [])

  const handleCheck = (e) => {
    console.log(lastCheckedRef.current)
    const checkboxes = document.querySelectorAll('input[type="checkbox"]')

    // if shift key held, and click is checking (not unchecking)
    if (e.shiftKey && e.target.checked) {
      // loop through the whole list
      // when we hit either the one that was just clicked, or the one that was last clicked, start checking them
      // stop when we hit the other
      let checkZone = false;
      checkboxes.forEach((checkbox, i) => {
        if (checkbox === e.target || i === lastCheckedRef.current) {
          checkZone = !checkZone
        }
        if (checkZone) {
          checkbox.checked = true
          console.log(checkbox)
          console.log(i)
        }
      })
    }
    const index = Array.prototype.indexOf.call(checkboxes, e.target)
    setLastChecked(index)
  }

  return (
    <StyledShiftCheck>
      {data.map((item, index) => (
        <InboxItem
          key={`inboxkey${index}`}
          text={item}
          index={index}
        />
      ))}
    </StyledShiftCheck>
  )
}
export default ShiftCheck;