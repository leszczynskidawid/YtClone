import "./App.css";
import { PersistentDrawerRight } from "./Drawer";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <PersistentDrawerRight />

      <button onClick={() => handle()} />
    </div>
  );
}

export default App;
