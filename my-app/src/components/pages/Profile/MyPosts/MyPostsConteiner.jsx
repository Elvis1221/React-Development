// import React from "react";

import {connect} from "react-redux";

import {addNewPostActionCreator, updateNewPostTextActionCreator} from "../../../../redux/profilePage-reduser";
import MyPosts from "./MyPosts";


const mapStateToProps = (state) => (
  {
    posts: state.profilePage.postsObj,
    newPostText: state.profilePage.newPostText
  }
);

const mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: (text) => {
      const action = updateNewPostTextActionCreator(text);
      dispatch(action)
    },
    addNewPost: () => dispatch(addNewPostActionCreator())
  }
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer


// posts={profilePage.postsObj}
// newPostText={profilePage.newPostText}
// dispatch={dispatch}