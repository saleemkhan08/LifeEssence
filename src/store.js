import { createStore, applyMiddleware, combineReducers } from "redux";
import { UserReducer } from "./components/users/UserReducer"
//import logger from "redux-logger";
import thunk from "redux-thunk";
import firebase from "firebase/app";
import "firebase/firestore/dist/index.cjs";
import "firebase/storage";
import "firebase/database";

export const store = createStore(
  combineReducers({
    UserReducer
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
);

export const config = {
  apiKey: "AIzaSyAMtlvG9nkr6oVAXzW5ZBaQWhyNAe1IHaY",
  authDomain: "life-essence.firebaseapp.com",
  databaseURL: "https://life-essence.firebaseio.com",
  projectId: "life-essence",
  storageBucket: "life-essence.appspot.com",
  messagingSenderId: "733870690753"
};

firebase.initializeApp(config);

export const database = firebase.database();

export const firestore = firebase.firestore();
const settings = { /* your settings... */ timestampsInSnapshots: true };
firestore.settings(settings);

export const storageRef = firebase.storage().ref();
