const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
  users: []
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
          }
        )
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
