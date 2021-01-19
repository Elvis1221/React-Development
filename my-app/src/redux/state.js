const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';

export const store = {
  _state: {
    profilePage: {
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
    },
  },
  _callSubscriber() {
    console.log('state changed')
  },

  getState() {
    return this._state
  },
  subscribe(observer) {
    this._callSubscriber = observer
  },

  _addPost() {
    const newPost = {
      id: 4,
      LikesCount: '2',
      message: this._state.profilePage.newPostText,
      date: new Date(),
    };
    this._state.profilePage.postsObj.push(newPost);
    this._state.profilePage.newPostText = '';
    this._callSubscriber(this._state)
  },
  _updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state)
  },

  dispatch(action) {
    if (action.type === 'ADD-POST') {
      this._addPost()
    } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
      this._updateNewPostText(action.newText)
    }
  }
};
export const addNewPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = text => ({type: UPDATE_NEW_POST_TEXT, newText: text});

window.store = store;