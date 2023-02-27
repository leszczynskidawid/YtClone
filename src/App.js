import "./App.css";
import { PersistentDrawerRight } from "./Drawer";

function App() {
  return (
    <div className="App">
      <PersistentDrawerRight />

      <button onClick={() => handle()} />
    </div>
  );
}

export default App;
