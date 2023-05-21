import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyDB_qSGyTd1Io4utSfla4tg06vHLffEVZA",
    authDomain: "aitools-24f38.firebaseapp.com",
    projectId: "aitools-24f38",
    storageBucket: "aitools-24f38.appspot.com",
    messagingSenderId: "511145168419",
    appId: "1:511145168419:web:a254abc22b1941a3986b96"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const login = (email, password) => {
    return new Promise((resolve, reject) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                resolve(user); // Return user data if logged in, or 'true' if no user data is available
            })
            .catch((error) => {
                const errorMessage = error.message;
                reject(errorMessage); // Return error message if login fails
        });
    });
};



export default login