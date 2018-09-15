import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainContainer from '../src/containers/MainContainer/MainContainer';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './configureStore';
const store = configureStore();
ReactDOM.render(  <MainContainer store={store} />  , document.getElementById('root'));
registerServiceWorker();
