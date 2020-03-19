import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

const config = {
    apiKey: "AIzaSyAYMga2pffCPFEfJabQ4gdoCkr-65OrLd0",
    authDomain: "clothingstore-12a7b.firebaseapp.com",
    databaseURL: "https://clothingstore-12a7b.firebaseio.com",
    projectId: "clothingstore-12a7b",
    storageBucket: "clothingstore-12a7b.appspot.com",
    messagingSenderId: "410740358095",
    appId: "1:410740358095:web:d149c1e1d489df9db070ba",
    measurementId: "G-QZ4D8W5X04"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: "select_account"});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  
  export default firebase;