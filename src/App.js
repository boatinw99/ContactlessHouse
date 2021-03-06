// import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import History from "./components/History"
import Device from "./components/Device";

import firebase from "firebase/app";
import "firebase/firestore";

import {useEffect,useState,useCallback} from "react"
// import axios from "axios";

/// Code from stackoverflow to format time


const mapName = new Map() 
mapName['door'] = "Door"
mapName['light1'] = "Light 1"
mapName['light2'] = "Light 2"
mapName['lock'] = "Lock"
mapName['unlock'] = "Unlock"
mapName['on'] = "On"
mapName['off'] = "Off"

Date.prototype.today = function () { 
	return this.getFullYear() + "-" + (((this.getMonth()+1) < 10)?"0":"") + (this.getMonth()+1)+ "-" + ((this.getDate() < 10)?"0":"") + this.getDate()
}

// For the time now
Date.prototype.timeNow = function () {
     return ((this.getHours() < 10)?"0":"") + this.getHours() +":"+ ((this.getMinutes() < 10)?"0":"") + this.getMinutes() +":"+ ((this.getSeconds() < 10)?"0":"") + this.getSeconds();
}

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

  const [database,setDatabase] = useState({
    brightness: 34, 
    door: "lock", 
    light1: "off", 
    light2: "off"
  })

  const [lastMsg,setLastMsg] = useState('')

  const [historyList,setHistoryList] = useState([])

  useEffect(async () => {
    let history = []
    
    console.log("Try fetching history...") 

    const hist = db.collection("history")
    const snapshot = await hist.where('device', 'in', ['Door', 'Light 1', 'Light 2']).get()
    snapshot.forEach(doc => {
      history.push(doc.data())
    })

    history.sort(function(lhs, rhs) { 
      if (lhs.Time < rhs.Time) {
        return -1
      }
      if (lhs.Time > rhs.Time) {
        return 1
      }
      return 0
    })
    history.reverse()

    const numHistoryToShow = 5 
    history = history.slice(0, numHistoryToShow)

    console.log(history)
    setHistoryList(history)
  }, [lastMsg])

  useEffect(() => { 
    const getData = async() => {
      const tmp = await fetchData()
      const data = tmp.data
      console.log(database)
      setDatabase(data)
    }
    getData()
  }) //note

  const fetchData = async() => {
    const res = await fetch("https://api.netpie.io/v2/device/shadow/data?alias=81ed15facc20021f2cfa9896533d7498", {
      method: 'GET',
      headers: {
        'Authorization': 'Basic ZmNkYzhiNGUtNjkzYS00MmFkLWJjNTgtZjYyZDQ4NTYyYmJmOnlINU4zM2IxeFExaWdZbU5LWnB3NzJxQjkxQnhaRkJU', 
      }
    })
    const data = res.json()
    return data
  }

  const changeState = async(comp, msg) => {
    const res = fetch("https://api.netpie.io/v2/device/message?topic="+comp, {
      method: 'PUT',
      headers: {
        "Authorization": "Basic ZmNkYzhiNGUtNjkzYS00MmFkLWJjNTgtZjYyZDQ4NTYyYmJmOnlINU4zM2IxeFExaWdZbU5LWnB3NzJxQjkxQnhaRkJU" ,
        "Content-Type": "text/plain",
      },
      body:msg,
    })

    const datetime = new Date().today() + " at " + new Date().timeNow(); 

    db.collection("history").add({
        device: mapName[comp],
        state: mapName[msg],
        Time: datetime,
    })
    .then((docRef) => {
        // console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
        // console.error("Error adding document: ", error);
    });
    
    setLastMsg(`${comp} ${msg}`)
  }

    return (
    <div className="App">
      <div className="blur">
        <Header />
        <Device  database={database} onClick = {changeState}/>
        <History historyList={historyList}/>
      </div>
    </div>
  );
}

export default App;
