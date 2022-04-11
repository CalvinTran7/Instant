import firebase from "firebase/app";
import "firebase/auth"

export const auth = firebase.initializeApp({
        apiKey: "AIzaSyCsR1Fbelpl4kFN0RHjB8ib8Y0k6xwRnIQ",
        authDomain: "unichat-58568.firebaseapp.com",
        projectId: "unichat-58568",
        storageBucket: "unichat-58568.appspot.com",
        messagingSenderId: "4553525196",
        appId: "1:4553525196:web:0b5f3af746957feee3ff69"
}).auth();

