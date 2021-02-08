import {combineReducers, createStore} from "redux";

import {profilePageReducer} from "./profilePage-reduser";
import {sidebarReducer} from "./sidebar-reducer";
import {usersReduser} from "./users-reduser";
import {counterReduser} from "./couner-reduser";
import {newsReduser} from "./news-reduser";


let reducers = combineReducers({
  profilePage: profilePageReducer,
  sidebar: sidebarReducer,
  usersPage: usersReduser,
  counter: counterReduser,
  news:newsReduser
});
export const store = createStore(reducers);
