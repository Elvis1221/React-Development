// // import profilePageReducer from "./profilePage-reduser";
//
// export const store = {
//   _state: {
//     profilePage: {
//       // postsObj: [
//       //   {
//       //     id: 1,
//       //     message: 'Mi,how are post',
//       //     date: new Date(),
//       //   },
//       //   {
//       //     id: 2,
//       //     LikesCount: '20',
//       //     message: 'My next post',
//       //     date: new Date(),
//       //   },
//       //   {
//       //     id: 3,
//       //     LikesCount: '24',
//       //     message: 'Talk my  post',
//       //     date: new Date(),
//       //   },
//       // ],
//       // newPostText: 'Написать сообщение',
//     },
//     sidebar: {},
//   },
//   _callSubscriber() {
//     console.log('state changed')
//   },
//
//   getState() {
//     return this._state
//   },
//   subscribe(observer) {
//     this._callSubscriber = observer
//   },
//
//   dispatch(action) {
//
//     this._state.profilePage = profilePageReducer(this._state.profilePage, action);
//     this._state.sidebar = profilePageReducer(this._state.sidebar, action);
//
//     this._callSubscriber(this._state)
//   }
// };
//
//
// window.store = store;