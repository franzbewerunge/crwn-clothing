import firebase from 'firebase/app';
import 'firebase/firestore';
import'firebase/auth';

const config = {
    apiKey: "AIzaSyBVN8seLq1EvqUe8ysV7C2oreZD8l81NCU",
    authDomain: "crwn-db-237c9.firebaseapp.com",
    databaseURL: "https://crwn-db-237c9.firebaseio.com",
    projectId: "crwn-db-237c9",
    storageBucket: "crwn-db-237c9.appspot.com",
    messagingSenderId: "215986391077",
    appId: "1:215986391077:web:a58f7ac78e2e531c6297cc"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;