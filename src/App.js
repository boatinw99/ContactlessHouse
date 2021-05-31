// import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import History from "./components/History"
import Device from "./components/Device";

import firebase from "firebase/app";
import "firebase/firestore";

import {useEffect,useState,useCallback} from "react"



const firebaseConfig = {
  apiKey: "AIzaSyASlgzTKt0fmOIUeCHHMLd3KUNacJOOAS8",
  authDomain: "contactlesshouse-9cf98.firebaseapp.com",
  projectId: "contactlesshouse-9cf98"
  // databaseURL: "https://embededproject-93df5.firebaseio.com",
  // storageBucket: "embededproject-93df5.appspot.com",
  // messagingSenderId: "863008823567"
};
firebase.initializeApp(firebaseConfig);
const  db = firebase.firestore();

function App() {

  const [imTiredOfThisLang,setImTiredOfThisLang] = useState([])
  const [doorTurnOn,setDoorTurnOn] = useState(false)
  const [lightTurnOn,setLightTurnOn] = useState(true)

  const fetchDB = useCallback(async () => {
    const querySnapshot = await db.collection("states").get()
    console.log("DB",querySnapshot)
    querySnapshot.docs.forEach((doc) => {
        setDoorTurnOn(doc.data()["door"])
        setLightTurnOn(doc.data()["light"])
        setImTiredOfThisLang([...imTiredOfThisLang,doorTurnOn,lightTurnOn ])
    });
  },[doorTurnOn,lightTurnOn,setDoorTurnOn,setLightTurnOn,setImTiredOfThisLang])

  useEffect(() => {
    fetchDB()
  },[])


  // db.collection("states").
  console.log(imTiredOfThisLang);
  console.log('lightTurnOn Last=', lightTurnOn);
  console.log('doorTurnOn Last=', doorTurnOn);
  
  return (
    <div className="App">
      <Header />
      {`${doorTurnOn}`} 
      <br/>
      {`${lightTurnOn}`}
      <Device lightTurnOn={lightTurnOn} doorTurnOn={doorTurnOn} />
      <History />
    </div>
  );
}

export default App;
