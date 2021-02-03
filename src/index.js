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
import StyledKeySequenceApp from './components/12KeySequence/KeySequenceApp'
import SlidingImgApp from './components/13SlideInOnScroll/SlidingImgApp'
import EvtDelApp from './components/15LocalStorageEventDelegation/EvtDelApp'
import TextShadowMouseMoveApp from './components/16CssTextShadowMouseMove/TextShadowMouseMoveApp' 
import SortApp from './components/17SortWithoutArticles/SortApp'
import WebcamApp from './components/19Webcam/WebcamApp'
import SpeechRecognitionApp from './components/20SpeechRecognition/SpeechRecognitionApp'

ReactDOM.render(
  <React.StrictMode>
    <SpeechRecognitionApp />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
