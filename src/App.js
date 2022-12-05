import "./App.css";
import Comp1 from "./components/component1";
import Comp2 from "./components/component2";
function App() {
  return (
    <div>
      <h1>I will import components from other folder to app.js</h1>
      <Comp1 />

      <Comp2 />
    </div>
  );
}

export default App;
