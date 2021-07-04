import firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyAzjh7CHZM9sn9i7LcFtvFqIOPKeFf9kRE",
    authDomain: "login-3711b.firebaseapp.com",
    projectId: "login-3711b",
    storageBucket: "login-3711b.appspot.com",
    messagingSenderId: "604312096367",
    appId: "1:604312096367:web:9bc22dd68b91069381879a"
};
const fire = firebase.initializeApp(firebaseConfig);
export default fire;