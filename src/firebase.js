import firebase from "firebase/app";
import "firebase/auth";

// const app = firebase.initializeApp({
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   // databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
// });

const app = firebase.initializeApp({
  apiKey: "AIzaSyAKLPRWXFTPyZpXUo9aWCHToIg50PBVagI",
  authDomain: "yarlunn-food-delivery-9ef8c.firebaseapp.com",
  projectId: "yarlunn-food-delivery-9ef8c",
  storageBucket: "yarlunn-food-delivery-9ef8c.appspot.com",
  messagingSenderId: "280754839694",
  appId: "1:280754839694:web:50423b530775f3a10da9df",
});

console.log(process.env);

export const auth = app.auth();
export default app;
