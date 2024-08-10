// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth  } from "firebase/auth";
 const firebaseConfig = {
  apiKey: "AIzaSyCsX0LmgXPCZpQShNlNX4La8zTfgfRJIlw",
  authDomain: "todo-with-react-e92f6.firebaseapp.com",
  projectId: "todo-with-react-e92f6",
  storageBucket: "todo-with-react-e92f6.appspot.com",
  messagingSenderId: "903789114834",
  appId: "1:903789114834:web:f70e7e445aeed33ec0c40b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth}
