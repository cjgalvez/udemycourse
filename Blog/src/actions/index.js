import firebase from 'firebase';
import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';
export const FETCH_POST = 'FETCH_POST';
export const DELETE_POST = 'DELETE_POST';

//const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
//const API_KEY = '?key=cjgalveztest';

var config = {
  apiKey: "AIzaSyALWWJP92UCgo-e94JhV3kndANNcmTq9Hc",
  authDomain: "blogentries-bb82f.firebaseapp.com",
  databaseURL: "https://blogentries-bb82f.firebaseio.com",
  storageBucket: "blogentries-bb82f.appspot.com",
  messagingSenderId: "988653231121"
};
firebase.initializeApp(config);

var rootRef = firebase.database().ref();

export function fetchPosts() {
  return (dispatch) => {
    rootRef.on('value', snapshot => {
      dispatch({
        type: FETCH_POSTS,
        payload: snapshot.val()
      });
    });
  };
}


export function createPost(props) {
  return dispatch => rootRef.push(props);
} 

export function fetchPost(id) {
  var singleRef = firebase.database().ref(id)
  return (dispatch) => {
    singleRef.on('value', snapshot => {
      dispatch({
        type: FETCH_POST,
        payload: snapshot.val()
      })
    })
  }
}

export function deletePost(id) {
  return dispatch => rootRef.child(id).remove();
}