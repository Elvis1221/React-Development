const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
  users: [
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
  ],
};

export const usersReduser = (state = initialState, action) => {

  switch (action.type) {
    case  FOLLOW:
      return {
        ...state,
        users: state.users.map(users => {
          if (users.id === action.userId) {
            return {...users, followed: true}
          }
          return users
        })
      };
    case  UNFOLLOW:
      return {
        ...state,
        users: state.users.map(users => {
          if (users.id === action.userId) {
            return {...users, followed: false}
          }
          return users
        })
      };
    case SET_USERS: {
      return {...state, users: [...state.users, ...action.users]}
    }
    default:
      return state
  }
};

export const followActionCreator = userId => ({type: FOLLOW, userId});
export const unFollowActionCreator = userId => ({type: UNFOLLOW, userId});
export const setUsersActionCreator = users => ({type: SET_USERS, users});
