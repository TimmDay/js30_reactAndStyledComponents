import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

import DrumsApp from './components/01drums/DrumsApp'
import ClockApp from './components/02clock/ClockApp'
import SliderApp from './components/03CssVariablesAndJs/SliderApp'
import ArrayMethodsEx from './components/04ArrayMethods/ArrayMethodsEx'
import GalleryApp from './components/05FlexPanelsImageGallery/GalleryApp'
import LookupApp from './components/06FetchAndLookup/LookupApp'
import CanvasApp from './components/08HTML5Canvas/CanvasApp'
import ShiftCheckApp from './components/10HoldShiftChecks/ShiftCheckApp'
import VideoApp from './components/11VideoPlayer/VideoApp'

ReactDOM.render(
  <React.StrictMode>
    <VideoApp />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
