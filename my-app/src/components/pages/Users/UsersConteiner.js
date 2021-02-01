import React from 'react'
import {connect} from "react-redux";
import {Users} from "./Users";
import {followActionCreator, setUsersActionCreator, unFollowActionCreator} from "../../../redux/users-reduser";


const mapStateToProps = state => ({
  users: state.usersPage.users
});

const mapDispatchToProps = dispatch => ({
  follow: (userId) => {
    dispatch(followActionCreator(userId))
  },
  unFollow: (userId) => {
    dispatch(unFollowActionCreator(userId))
  },
  setUsers: (users) => {
    dispatch(setUsersActionCreator(users))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Users)