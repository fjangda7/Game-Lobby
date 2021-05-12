import firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyCwSjmvqJ8V8vnLFb9Fp2UbjCS0mW_-Cb8",
  authDomain: "game-lobby-f44be.firebaseapp.com",
  projectId: "game-lobby-f44be",
  storageBucket: "game-lobby-f44be.appspot.com",
  messagingSenderId: "446708373517",
  appId: "1:446708373517:web:b3a6c6bbab6297b0e29d44"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase; 