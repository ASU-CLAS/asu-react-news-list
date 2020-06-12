import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import D8News from './D8News';

let appRoots = document.getElementsByClassName('clas-news-react-base');

for (let element of appRoots) {
  ReactDOM.render(<D8News dataFromPage={element.dataset} />, element);
}
