const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';

let initialState = {
  postsObj: [
    {
      id: 1,
      message: 'Мой пост 1',
      date: new Date(),
    },
    {
      id: 2,
      LikesCount: '20',
      message: 'Мой пост 2',
      date: new Date(),
    },
    {
      id: 3,
      LikesCount: '24',
      message: 'Мой пост 3',
      date: new Date(),
    },
  ],
  newPostText: '',
};


export const profilePageReducer = (state = initialState, action) => {

  if (action.type === ADD_POST) {
    const newPost = {
      id: 4,
      LikesCount: '2',
      message: state.newPostText,
      date: new Date(),
    };
    state.postsObj.push(newPost);
    state.newPostText = '';
  } else if (action.type === UPDATE_NEW_POST_TEXT) {
    state.newPostText = action.newText;
  }

  return state

};

export const addNewPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = text => ({type: UPDATE_NEW_POST_TEXT, newText: text});
