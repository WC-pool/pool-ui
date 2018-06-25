import firebase from 'firebase';

var config = {
  apiKey: 'AIzaSyB-3KmGAjS8bMLWRGpor2FOZNUosNh5F7o',
  authDomain: "wcpool2018.firebaseapp.com",
  projectId: "wcpool2018"
};

firebase.initializeApp(config);

export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const facebookProvider = new firebase.auth.FacebookAuthProvider();
export default firebase;