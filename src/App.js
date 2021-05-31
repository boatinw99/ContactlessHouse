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
// const  db = firebase.firestore();

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
      console.log(database)
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
  }


  // Yu's implementation
  // const fetchDB = useCallback(async () => {
  //   const querySnapshot = await db.collection("states").get()
  //   console.log("DB",querySnapshot)
  //   querySnapshot.docs.forEach((doc) => {
  //       setDoorTurnOn(doc.data()["door"])
  //       setLightTurnOn(doc.data()["light"])
  //       setImTiredOfThisLang([...imTiredOfThisLang,doorTurnOn,lightTurnOn ])
  //   });
  // },[doorTurnOn,lightTurnOn,setDoorTurnOn,setLightTurnOn,setImTiredOfThisLang])

  // useEffect(() => {
  //   fetchDB()
  // },[])


  // db.collection("states").
  // console.log(imTiredOfThisLang);
  // console.log('lightTurnOn Last=', lightTurnOn);
  // console.log('doorTurnOn Last=', doorTurnOn);


  return (
    <div className="App">
      <Header />
      <Device  database={database} onClick = {changeState}/>
      <History />
    </div>
  );
}

export default App;
