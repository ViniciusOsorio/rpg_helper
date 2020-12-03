import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAzY0iTQ3Pd49r7IDINZGKOn0OsHpDMMDY",
    authDomain: "rpgredux.firebaseapp.com",
    databaseURL: "https://rpgredux.firebaseio.com",
    projectId: "rpgredux",
    storageBucket: "rpgredux.appspot.com",
    messagingSenderId: "433702211774",
    appId: "1:433702211774:web:e47153981589a49fd48eef",
    measurementId: "G-QFFE8FGPKP"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
}

export const firestore = firebase.firestore();

export default firebase;