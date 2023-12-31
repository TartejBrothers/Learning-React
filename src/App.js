import "./App.css";
import { Hello, Hellonew } from "./components/hello.jsx";
import Trial from "./components/class.jsx";
import PropsClass from "./components/propsclass.jsx";
import PrintFunc from "./components/props.jsx";
import PrintFuncDestruct from "./components/destructprops.jsx";
import StateClass from "./components/componentstate.jsx";
import PropsClassDestruct from "./components/destructclass.jsx";
import Counter from "./components/counter.jsx";
import { Trialnew, TrialFunc } from "./components/createreact.jsx";
import FunctionHandler from "./components/eventhandling.jsx";
import HandlingClass from "./components/eventhandlingclass.jsx";
import EventBind from "./components/bindingeventhandler.jsx";
import PropClass from "./components/propclassformethod.jsx";
import Conditions from "./components/conditionalrender.jsx";
import ArraysNew from "./components/arrays.jsx";
import ObjectArray from "./components/objectarrays.jsx";
import ListKey from "./components/listkey.jsx";
import UsingKey from "./components/usingkey.jsx";
import NewList from "./components/styling.jsx";
import ModuleCheck from "./components/usingmodulecss.jsx";
import TrialForm from "./components/forms.jsx";
import Fragments from "./components/fragments.jsx";
import ParentPure from "./components/parentpurecomponent.jsx";
import Refs from "./components/refs.jsx";
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
      <StateClass />
      <Counter />
      <PrintFuncDestruct name="Sai" newname="Sairaj">
        <h2>Children Props From Destruct</h2>
      </PrintFuncDestruct>
      <PropsClassDestruct name="Raj" newname="Sairaj" />
      <FunctionHandler />
      <HandlingClass />
      <EventBind />
      <PropClass />
      <Conditions />
      <ArraysNew />
      <ObjectArray />
      <ListKey />
      <UsingKey />
      <NewList class={true} />
      <ModuleCheck />
      <TrialForm />
      <Fragments />
      <ParentPure />
      <Refs />
    </div>
  );
}

export default App;
