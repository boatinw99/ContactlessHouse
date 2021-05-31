// import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import History from "./components/History"
import Device from "./components/Device";

import firebase from "firebase/app";
import "firebase/firestore";

import {useEffect,useState,useCallback} from "react"

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

  const [database,setDatabase] = useState(
  {
  	brightness: 34, 
  	door: "lock", 
  	light1: "off", 
  	light2: "off"
  }
  	)  

  useEffect(() => {
    const getData = async() => {
      const tmp = await fetchData()
      const data = tmp.data
      // console log 
      // console.log(database)
      setDatabase(data)
    }
    getData()
  })

 const fetchData = async() => {
    const res = await fetch("https://api.netpie.io/v2/device/shadow/data?alias=NodeMCU", {
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
  }

  	let history = []

	db.collection("history").get().then((querySnapshot) => {
	    querySnapshot.forEach((doc) => {
	        history.push(doc.data())
	    });
	});

	history.sort(function compareFn(lhs, rhs) { 
		const l = lhs['Time']
		const r = lhs['Time']
		return l<r 
	})
	history.reverse()
	const numHistoryToShow = 5 
	history = history.slice(0,numHistoryToShow-1)
	// history.length = numHistoryToShow
	console.log(history)

  return (
    <div className="App">
      <Header />
      <Device  database={database} onClick = {changeState}/>
      <History history={history}/>
    </div>
  );
}

export default App;
