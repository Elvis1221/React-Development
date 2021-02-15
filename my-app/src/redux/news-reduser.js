const ADD_NEWS = 'ADD_NEWS';

const initialState = {
  news: [],
};

export const newsPageReduser = (state = initialState, {type, payload}) => {
  switch (type) {

    case ADD_NEWS:
      return {
        news: [
          ...state.news,
          payload
        ],
      };

    default:
      return state
  }
};


export const addNewsAC = (payload) => ({type: ADD_NEWS, payload});
