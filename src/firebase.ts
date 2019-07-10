import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCPs5teLFRUlto7nmPHIO3y9Z-j6loM2cU",
  authDomain: "blog-type-site.firebaseapp.com",
  databaseURL: "https://blog-type-site.firebaseio.com",
  projectId: "blog-type-site",
  storageBucket: "blog-type-site.appspot.com",
  messagingSenderId: "487087743688",
  appId: "1:487087743688:web:0860920dc6a5e5ea"
};

firebase.initializeApp(firebaseConfig);
export const firestore = firebase.firestore();
export const storage = firebase.storage();
export const auth = firebase.auth();

export default firebase;
