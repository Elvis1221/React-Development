import React from 'react';
import * as axios from "axios";

import usersPhoto from "../../../assets/images/unnamed.png"

import './users.css'

// захардкоженный данные
// {
//   id: 1,
//     photoUsers: 'https://4tololo.ru/sites/default/files/images/20151308202247.jpg',
//   followed: false,
//   fullName: 'Rita Krisckyk',
//   status: 'i am fine',
//   location: {
//   cityName: 'Minsk',
//     country: 'Belarus'
// },
// };

export const Users = ({unFollow, follow, setUsers, users}) => {
  if (users.length === 0) {
    axios.get('https://social-network.samuraijs.com/api/1.0/users')
      .then(response => {
        setUsers(response.data.items)
      })
  }
  return (
    <div className='wrapperUsers'>
      {
        users.map(u => <div key={u.id} className='user'>
            <div className='userProfile'>
              <div className='smallImg'>
                <img src={u.photos.small !== null ? u.photos.small : usersPhoto} alt=""/>
              </div>
              <div className='usersFollow'>
                {
                  u.followed
                    ? <button onClick={() => unFollow(u.id)} className='unFollow'>Добавить в друзья</button>
                    : <button onClick={() => follow(u.id)} className='follow'>В друзьях</button>
                }
              </div>
            </div>
            <div className='userInfo'>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </div>
            <div className='userLocation'>
              <div>{'u.location.country'}</div>
              <div>{'u.location.cityName'}</div>
            </div>
          </div>
        )
      }
    </div>
  )
};
