const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';

let initialState = {
  postsObj: [
    {
      id: 1,
      message: 'Mi,how are post',
      date: new Date(),
    },
    {
      id: 2,
      LikesCount: '20',
      message: 'My next post',
      date: new Date(),
    },
    {
      id: 3,
      LikesCount: '24',
      message: 'Talk my  post',
      date: new Date(),
    },
  ],
  newPostText: 'Написать сообщение',
};


const profilePageReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_POST:
      const newPost = {
        id: 4,
        LikesCount: '2',
        message: state.newPostText,
        date: new Date(),
      };
      state.postsObj.push(newPost);
      state.newPostText = '';
      break;
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      break;
  }

  return state

};

export const addNewPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = text => ({type: UPDATE_NEW_POST_TEXT, newText: text});

export default profilePageReducer