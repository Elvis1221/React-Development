const ADD_LIKE = 'ADD_LIKE';
const ADD_DISLIKE = 'ADD_DISLIKE';

const initialState = {
  likesCount: 0
};

export const counterReduser = (state = initialState, action) => {
  switch (action.type) {

    case ADD_LIKE: {
      return {
        ...state,
        likesCount: state.likesCount + 1
      }
    }

    case ADD_DISLIKE: {
      return {
        ...state,
        likesCount: state.likesCount - 1
      }
    }
    default:
      return state
  }
};

export const addLikeAC = () => ({type: ADD_LIKE});
export const addDislikeAC = () => ({type: ADD_DISLIKE});