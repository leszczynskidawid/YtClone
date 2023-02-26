import "./App.css";
import { PersistentDrawerRight } from "./Drawer";
import { ButtonShowMoreLess, MenuListDrawer } from "./Drawer/MenuListDrawer";

function App() {
  const handle = () => {
    console.log("Sdasd");
  };
  return (
    <div className="App">
      <PersistentDrawerRight />

      <button onClick={() => handle()} />
    </div>
  );
}

export default App;
