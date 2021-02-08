const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';

// const ADD_COUNTER = 'ADD_COUNTER';
// const UPDATE_COUNTER = 'UPDATE_COUNTER';

let initialState = {
  postsObj: [
    {
      id: 1,
      message: 'Мой пост 1',
      date: new Date(),
      imgUser: 'https://www.stylenews.ru/wp-content/uploads/2016/08/JasonStatham-00.jpg'
    },
    {
      id: 2,
      message: 'Мой пост 2',
      date: new Date(),
      imgUser: 'https://www.stylenews.ru/wp-content/uploads/2016/08/JasonStatham-00.jpg'
    },
    {
      id: 3,
      message: 'Мой пост 3',
      date: new Date(),
      imgUser: 'https://www.stylenews.ru/wp-content/uploads/2016/08/JasonStatham-00.jpg'
    },
  ],
  newPostText: '',
};

export const profilePageReducer = (state = initialState, action) => {
  switch (action.type) {

    case ADD_POST:
      return {
        ...state,
        postsObj: [
          {
            id: 4,
            message: state.newPostText,
            date: new Date(),
            imgUser: 'https://www.stylenews.ru/wp-content/uploads/2016/08/JasonStatham-00.jpg'
          },
          ...state.postsObj
        ],
        newPostText: '',
      };

    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action
      };

    default:
      return state
  }
};

export const addNewPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = text => ({type: UPDATE_NEW_POST_TEXT, action: text});
