import React from 'react';
import {useDispatch, useSelector} from "react-redux";

import {followActionCreator, setUsersActionCreator, unFollowActionCreator} from "../../../redux/users-reduser";
import {Users} from "./Users";


const UsersContainer = () => {
  const dispatch = useDispatch();// так всегда пишем
  const {users} = useSelector(state => state.usersPage);

  const unFollow = userId => dispatch(unFollowActionCreator(userId));
  const follow = userId => {
    const updatedUsers = users.map(users => {
        if (users.id === userId) {
          return {...users, followed: true}
        }
        return users
      }
    );
    dispatch(followActionCreator(updatedUsers));
  };
  const setUsers = users => dispatch(setUsersActionCreator(users));

  return (
    <Users {...{
      unFollow,
      follow,
      setUsers,
      users
    }}/>
  )
};

export default UsersContainer