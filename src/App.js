import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Controls from "./components/Controls";
import History from "./components/History"
import SplitPane, { Pane } from "react-split-pane";

function App() {
  return (
    <div>
      <Header />
      <Controls />
      <History />
      {/* </SplitPane> */}
    </div>
  );
}

export default App;
