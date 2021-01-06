import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {BrowserRouter, Route} from "react-router-dom";

const App = ({state}) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar navBar={state.navBarPage}/>
                <div className='app-wrapper-content'>
                    <Route path='/Dialogs' render={() => <Dialogs dialogs={state.dialogsPage} />}/>
                    <Route path='/Profile' render={() => <Profile  profile={state.profilePage}/>}/>
                    <Route path='/News' render={() => <News/>}/>
                    <Route path='/Music' render={() => <Music/>}/>
                    <Route path='/Settings' render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>);
};

export default App;
