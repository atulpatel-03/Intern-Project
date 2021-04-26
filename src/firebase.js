import firebase from "firebase";

const config={
    apiKey: "AIzaSyDXsjHPBHoG_QOSgNwhNokCNl5PEfcY-t4",
    authDomain: "intern-task-850cb.firebaseapp.com",
    projectId: "intern-task-850cb",
    storageBucket: "intern-task-850cb.appspot.com",
    messagingSenderId: "255694359854",
    appId: "1:255694359854:web:572cc6af183e65a6727ebf"
}

firebase.initializeApp(config);

export default firebase;