// firebase.js
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCY1ooT8l_UJUaOgTXRqzg7WjIcJwJXfs",
  authDomain: "my-fist-project-1afca.firebaseapp.com",
  databaseURL: "https://my-fist-project-1afca-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "my-fist-project-1afca",
  storageBucket: "my-fist-project-1afca.appspot.com",
  messagingSenderId: "343172365180",
  appId: "1:343172365180:web:f46e8cf4912a672b0302f9",
  measurementId: "G-YFC9SNVXQH",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };
