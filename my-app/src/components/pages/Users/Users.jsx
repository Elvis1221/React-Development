import React from 'react';
import {useDispatch, useSelector} from "react-redux";

import {followActionCreator, setUsersActionCreator, unFollowActionCreator} from "../../../redux/users-reduser";

import './users.css'

const UsersContainer = () => {
  const dispatch = useDispatch();// так всегда пишем
  const {users} = useSelector(state => state.usersPage);
  const {postsObj} = useSelector(state => state.postsObj);

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

export const Users = ({unFollow, follow, setUsers, users}) => {
  if (users.length === 0) {
    setUsers([
        {
          id: 1,
          photoUsers: 'https://4tololo.ru/sites/default/files/images/20151308202247.jpg',
          followed: false,
          fullName: 'Rita Krisckyk',
          status: 'i am fine',
          location: {
            cityName: 'Minsk',
            country: 'Belarus'
          },
        },
        {
          id: 2,
          photoUsers: 'https://s.mediasole.ru/cache/content/data/images/1855/1855952/1585556784_morf-1.jpg',
          followed: true,
          fullName: 'Igor',
          status: 'i am boss',
          location: {
            cityName: 'Moscow',
            country: 'Russia'
          },
        },
        {
          id: 3,
          photoUsers: 'https://v1.popcornnews.ru/k2/persons/canvas/970x700/upload/686826446912.jpg',
          followed: false,
          fullName: 'Zelenskiy',
          status: ' i am President',
          location: {
            cityName: 'Lvov',
            country: 'Ukraine'
          },
        },
      ]
    )
  }

  return (
    <div className='wrapperUsers'>
      {
        users.map(u => <div key={u.id} className='user'>
            <div className='userProfile'>
              <div className='usersImg'>
                <img src={u.photoUsers} alt=""/>
              </div>
              <div className='usersFollow'>
                {
                  u.followed
                    ? <button onClick={() => unFollow(u.id)}>Добавить в друзья</button>
                    : <button onClick={() => follow(u.id)}>В друзьях</button>
                }
              </div>
            </div>
            <div className='userInfo'>
              <div>{u.fullName}</div>
              <div>{u.status}</div>
            </div>
            <div className='userLocation'>
              <div>{u.location.country}</div>
              <div>{u.location.cityName}</div>
            </div>
          </div>
        )
      }
    </div>
  )
};


export default UsersContainer