import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";

import {store} from "./redux/state";
import App from './App';

import './index.css';


const rerenderEntireTree = (state)=> {
  ReactDOM.render(
    <BrowserRouter>
      <App state={state} dispatch={store.dispatch.bind(store)}/>
    </BrowserRouter>, document.getElementById('root')
  );
};


rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);
