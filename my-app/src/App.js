import React from "react";
import {BrowserRouter, Route} from "react-router-dom";

import './App.css';

import Header from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/pages/Profile/Profile";
import {Dialogs} from "./components/pages/Dialogs/Dialogs";
import {News} from "./components/pages/News/News";
import {Music} from "./components/pages/Music/Music";
import {Settings} from "./components/pages/Settings/Settings";


const App = ({ state }) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header/>
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path='/Dialogs' render={() => <Dialogs />}/>
          <Route path='/Profile' render={() => <Profile profile={state.profilePage}/>}/>
          <Route path='/News' render={() => <News/>}/>
          <Route path='/Music' render={() => <Music/>}/>
          <Route path='/Settings' render={() => <Settings/>}/>
        </div>
      </div>
    </BrowserRouter>);
};

export default App;
