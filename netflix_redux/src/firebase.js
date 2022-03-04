import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyCcwOh6JMYN8eYYJBqhyzkySb0vY16YQJc",
    authDomain: "netflix-8c884.firebaseapp.com",
    projectId: "netflix-8c884",
    storageBucket: "netflix-8c884.appspot.com",
    messagingSenderId: "711801530146",
    appId: "1:711801530146:web:fe893e94699fa9f2ec677b",
    measurementId: "G-1DF0B2P3JZ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth()

export { auth }
export default db