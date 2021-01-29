import {combineReducers, createStore} from "redux";
import {profilePageReducer} from "./profilePage-reduser";
import {sidebarReducer} from "./sidebar-reducer";
import {usersReduser} from "./users-reduser";


let reducers = combineReducers({
  profilePage: profilePageReducer,
  sidebar: sidebarReducer,
  usersPage:usersReduser
});

export const store = createStore(reducers);
