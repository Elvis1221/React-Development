let rerenderEntireTree = () => {
};
export const state = {
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
    // newPostText: 'Написать сообщение',
  },
  // dialogsPage: {
  //   messageObj: [
  //     {
  //       server: {
  //         id: 1,
  //         user: "https://pngimg.com/uploads/car_logo/car_logo_PNG1658.png",
  //         message: 'Здарова братка! Как дела? Что нового?',
  //       },
  //       local: {
  //         id: 1,
  //         user: "https://png-images.ru/wp-content/uploads/2015/02/car_logo_PNG1661-170x170.png",
  //         message: 'Хай братка! Все нормально,из  нового... Учу инглиш) А ты чем занимаешься?'
  //       }
  //     },
  //     {
  //       server: {
  //         id: 2,
  //         user: "https://pngimg.com/uploads/car_logo/car_logo_PNG1658.png",
  //         message: 'Да я ВОВ ебашу)',
  //       },
  //       local: {
  //         id: 2,
  //         user: "https://png-images.ru/wp-content/uploads/2015/02/car_logo_PNG1661-170x170.png",
  //         message: 'Задрот блять)!'
  //       }
  //     },
  //   ],
  // },

};
window.state = state;

export const addPost = () => {
  const newPost = {
    id: 4,
    LikesCount: '0',
    message: state.profilePage.newPostText,
    date: new Date(),
  };
  state.profilePage.postsObj.push(newPost);
  state.profilePage.newPostText = '';
  rerenderEntireTree(state)
};

export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state)
};

export const subscribe = (observer) => {
  rerenderEntireTree = observer
};

