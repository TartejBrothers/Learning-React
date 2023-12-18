import "./App.css";
import { Hello, Hellonew } from "./components/hello.jsx";
import Trial from "./components/class.jsx";
import { Trialnew, TrialFunc } from "./components/createreact.jsx";
function App() {
  return (
    <div className="App">
      <Hello />
      <Hellonew />
      <Trial />
      <Trialnew />
      <TrialFunc />
    </div>
  );
}

export default App;
