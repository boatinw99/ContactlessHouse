// import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import History from "./components/History"
import Device from "./components/Device";
import firebase from 'firebase/app' ;
import 'firebase/firestore'
import 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'
firebase.initializeApp({
  apiKey: "AIzaSyASlgzTKt0fmOIUeCHHMLd3KUNacJOOAS8",
  authDomain: "contactlesshouse-9cf98.firebaseapp.com",
  projectId: "contactlesshouse-9cf98",
  storageBucket: "contactlesshouse-9cf98.appspot.com",
  messagingSenderId: "1071517372768",
  appId: "1:1071517372768:web:d4569c6cb670e8d51b4e05",
  measurementId: "G-0ERF6M4MG3"
})
function App() {
  const db = firebase.firestore();
  const docRef = db.collection("states").doc("states");
  let doorState = false;
  docRef.get().then((doc) => {
      doorState = doc.data()["door"];
  })
  return (
    <div className="App">
      <Header />
      <Device />
      <History />
    </div>
  );
}

export default App;
