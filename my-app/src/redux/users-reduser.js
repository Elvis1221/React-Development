const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

let initialState = {
  users: []
};

export const usersReduser = (state = initialState, {type, payload = {}}) => {

  switch (type) {

    case  FOLLOW:
      return {
        ...state,
        users: payload
      };

    case  UNFOLLOW:
      return {
        ...state,
        users: state.users.map(users => {
          if (users.id === payload) {
            return {...users, followed: false}
          }
          return users
        })
      };

    case SET_USERS: {
      return {...state, users: [...state.users, ...payload]}
    }

    default:
      return state
  }
};

export const followActionCreator = users => ({type: FOLLOW, payload: users});
export const unFollowActionCreator = userId => ({type: UNFOLLOW, payload: userId});
export const setUsersActionCreator = users => ({type: SET_USERS, payload: users});
