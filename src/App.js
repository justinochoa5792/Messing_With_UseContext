import "./App.css";
import { Parent, Child1, Child2, Child3, Child4 } from "./Context.jsx";

function App() {
  return (
    <div className="App">
      <h1>Context Practice</h1>
      <Parent />
      <Child1 />
      <Child2 />
      <Child3 />
      <Child4 />
    </div>
  );
}

export default App;
