import firebase from 'firebase'

var config = {
  apiKey: JSON.stringify(process.env.FIREBASE_API_KEY),
  authDomain: "wayfare-8e106.firebaseapp.com",
  projectId: "wayfare-8e106"
};

firebase.initializeApp(config);

export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const facebookProvider = new firebase.auth.FacebookAuthProvider();
export default firebase;