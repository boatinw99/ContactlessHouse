// import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import History from "./components/History"
import Device from "./components/Device";
import firebase from 'firebase' ;

function App() {
  // const firebase = require("firebase");
// Required for side-effects
  require("firebase/firestore");
   const firebaseConfig = {
      apiKey: "AIzaSyASlgzTKt0fmOIUeCHHMLd3KUNacJOOAS8",
      authDomain: "contactlesshouse-9cf98.firebaseapp.com",
      projectId: "contactlesshouse-9cf98"
      // databaseURL: "https://embededproject-93df5.firebaseio.com",
      // storageBucket: "embededproject-93df5.appspot.com",
      // messagingSenderId: "863008823567"
    };
  firebase.initializeApp(firebaseConfig);
  // let db = firebase.firestore();
  return (
    <div className="App">
      <Header />
      <Device />
      <History />
    </div>
  );
}

export default App;
