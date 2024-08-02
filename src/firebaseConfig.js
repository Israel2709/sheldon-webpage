import firebase from "firebase/compat/app";
import "firebase/compat/database";

const firebaseConfig = {
  apiKey: "AIzaSyB7er61_2s2yms2671dlImqatd-LHrKB4U",
  appId: "1:98582796022:web:023f4ff558e3dbbd523ed7",
  authDomain: "sheldon-webpage.firebaseapp.com",
  databaseURL: "https://sheldon-webpage-default-rtdb.firebaseio.com/",
  messagingSenderId: "98582796022",
  projectId: "sheldon-webpage",
  storageBucket: "sheldon-webpage.appspot.com",
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);

// Exportar instancia de la base de datos
export const database = firebase.database();
