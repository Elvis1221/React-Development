import {combineReducers, createStore} from "redux";
import {profilePageReducer} from "./profilePage-reduser";
import {sidebarReducer} from "./sidebar-reducer";


let reducers = combineReducers({
  profilePage: profilePageReducer,
  sidebar: sidebarReducer
});

export const store = createStore(reducers);

