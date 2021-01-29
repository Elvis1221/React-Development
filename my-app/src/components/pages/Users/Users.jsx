import React from 'react';

import './users.css'

export const Users = (props) => {
  return (
    <div className='wrapperUsers'>
      {
        props.users.map(u => <div key={u.id} className='user'>
            <div className='userProfile'>
              <div className='usersImg'>
                <img src={u.photoUsers} alt=""/>
              </div>
              <div className='usersFollow'>
                {
                  u.followed
                  ? <button onClick={()=>{props.unFollow(u.id)}}>Добавить в друзья</button>
                  : <button onClick={()=>{props.follow(u.id)}}>В друзьях</button>
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