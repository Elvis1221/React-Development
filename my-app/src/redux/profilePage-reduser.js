const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';

let initialState = {
  postsObj: [

    {
      id: 1,
      LikesCount: {
        img: 'https://pngicon.ru/file/uploads/serdce-256x237.png',
        value: 22
      },
      message: 'Мой пост 1',
      date: new Date(),
      imgUser: 'https://www.stylenews.ru/wp-content/uploads/2016/08/JasonStatham-00.jpg'
    },
    {
      id: 2,
      LikesCount: {
        img: 'https://pngicon.ru/file/uploads/serdce-256x237.png',
        value: 31
      },
      message: 'Мой пост 2',
      date: new Date(),
      imgUser: 'https://www.stylenews.ru/wp-content/uploads/2016/08/JasonStatham-00.jpg'
    },
    {
      id: 3,
      LikesCount: {
        img: 'https://pngicon.ru/file/uploads/serdce-256x237.png',
        value: 50
      },
      message: 'Мой пост 3',
      date: new Date(),
      imgUser: 'https://www.stylenews.ru/wp-content/uploads/2016/08/JasonStatham-00.jpg'
    },

  ],
  newPostText: '',
};

export const profilePageReducer = (state = initialState, {type, payload}) => {

  switch (type) {

    case ADD_POST:

      return {
        ...state,
        postsObj: [
          {
            id: 4,
            LikesCount: {
              img: 'https://pngicon.ru/file/uploads/serdce-256x237.png',
              value: 0
            },
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
        newPostText: payload
      };
    default:
      return state
  }
};

export const addNewPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = text => ({type: UPDATE_NEW_POST_TEXT, payload: text});
