import React from "react";

import {Route} from "react-router-dom";

import Header from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/pages/Profile/Profile";
import {News} from "./components/pages/News/News";
import {Music} from "./components/pages/Music/Music";
import {DialogsContainer} from "./components/pages/Dialogs/DialogsConteiner";
import {Settings} from "./components/pages/Settings/Settings";

import './App.css';


const App = ({state, dispatch}) => {
  return (
    <div className='app-wrapper'>
      <Header/>
      <Navbar/>
      <div className='app-wrapper-content'>
        <Route path='/Dialogs' render={() => <DialogsContainer/>}/>
        <Route path='/Profile' render={() => <Profile profilePage={state.profilePage}
                                                      dispatch={dispatch}
        />}/>
        <Route path='/News' render={() => <News/>}/>
        <Route path='/Music' render={() => <Music/>}/>
        <Route path='/Settings' render={() => <Settings/>}/>
      </div>
    </div>
  )
};

export default App;
