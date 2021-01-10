import React from "react";

import {FriendsList} from "./Friends/FriendsList";
import {NavigationPanel} from "./NavigationPanel/NavigationPanel";

import {friendsMock} from "./Friends/Friends.mock";

import s from './Navbar.module.css'


export const Navbar = () => (
  <nav className={s.nav}>
    <NavigationPanel/>
    <FriendsList friends={friendsMock}/>
  </nav>
);
