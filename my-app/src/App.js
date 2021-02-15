import React from "react";
import {Route} from "react-router-dom";

import Header from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/pages/Profile/Profile";
import {Music} from "./components/pages/Music/Music";
import {DialogsContainer} from "./components/pages/Dialogs/DialogsConteiner";
import {Settings} from "./components/pages/Settings/Settings";
import UsersContainer from "./components/pages/Users/UsersContainer";

import './App.css';
import NewsContainer from "./components/pages/News/NewsContainer";
import {Api} from "./components/pages/Api/Api";


const App = () => {
  return (
    <div className='app-wrapper'>
      <Header/>
      <Navbar/>
      <div className='app-wrapper-content'>
        <Route path='/Dialogs'
               render={() => <DialogsContainer/>}/>
        <Route path='/Profile'
               render={() => <Profile/>}/>
        <Route path='/News'
               render={() => <NewsContainer/>}/>
        <Route path='/Music'
               render={() => <Music/>}/>
        <Route path='/Users'
               render={() => <UsersContainer/>}/>
        <Route path='/Settings'
               render={() => <Settings/>}/>
        <Route path='/API'
               render={() => <Api/>}/>
      </div>
    </div>
  )
};

export default App;
