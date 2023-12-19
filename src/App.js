import "./App.css";
import { Hello, Hellonew } from "./components/hello.jsx";
import Trial from "./components/class.jsx";
import PropsClass from "./components/propsclass.jsx";
import PrintFunc from "./components/props.jsx";
import { Trialnew, TrialFunc } from "./components/createreact.jsx";
function App() {
  return (
    <div className="App">
      <Hello />
      <Hellonew />
      <Trial />
      <Trialnew />
      <TrialFunc />
      <PrintFunc name="Sai" newname="Sairaj">
        <h2>Children Props</h2>
      </PrintFunc>
      <PropsClass name="Raj" newname="Sairaj" />
    </div>
  );
}

export default App;
