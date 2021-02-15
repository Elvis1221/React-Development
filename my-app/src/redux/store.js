import {combineReducers, createStore} from "redux";

import {profilePageReducer} from "./profilePage-reduser";
import {sidebarReducer} from "./sidebar-reducer";
import {usersReduser} from "./users-reduser";
import {counterReduser} from "./couner-reduser";
import {newsPageReduser} from "./news-reduser";


let reducers = combineReducers({
  profilePage: profilePageReducer,
  sidebar: sidebarReducer,
  usersPage: usersReduser,
  counter: counterReduser,
  newsPage:newsPageReduser
});
export const store = createStore(reducers);
