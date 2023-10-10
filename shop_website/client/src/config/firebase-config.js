import {initializeApp} from "firebase/app";
import {GoogleAuthProvider, GithubAuthProvider, getAuth} from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyDeUiPTlRHX1anbrC4aiDv7GnSSt3I6Njc",
    authDomain: "shopping-5032a.firebaseapp.com",
    projectId: "shopping-5032a",
    storageBucket: "shopping-5032a.appspot.com",
    messagingSenderId: "987589946323",
    appId: "1:987589946323:web:69af68967e6e337ba61d26",
    measurementId: "G-D5HS7VESGT"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const googleprovider = new GoogleAuthProvider();
const githubprovider = new GithubAuthProvider();

export {auth, googleprovider, githubprovider}
