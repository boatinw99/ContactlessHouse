import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Controls from "./components/Controls";
import History from "./components/History"
// import SplitPane, { Pane } from "react-split-pane";
import Device from "./components/Device";

function App() {
  return (
    <div className="App">
      <Header />
      <Device />
      <History />
    </div>
  );
}

export default App;
