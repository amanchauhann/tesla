import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBJeCvRi0NBqkvDo6tVfxNmElk6L2elasc",
    authDomain: "tesla-fffa2.firebaseapp.com",
    projectId: "tesla-fffa2",
    storageBucket: "tesla-fffa2.appspot.com",
    messagingSenderId: "651975154551",
    appId: "1:651975154551:web:c69978842a7eb156c09f72",
    measurementId: "G-LF5QZL4CNE"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);