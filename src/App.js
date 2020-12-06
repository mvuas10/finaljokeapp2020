import "./App.css";
import Toolbar from "./components/Toolbar";
import { Route } from "react-router-dom";
import Home from "./components/Home";
import YesUglyCry from "./components/YesUglyCry";
import NoFireDog from "./components/NoFireDog";
import YesFuturama from "./components/YesFuturama";
import NoSadKnight from "./components/NoSadKnight";

function App() {
  return (
    <div className="App">
      <Toolbar />
      <Route exact path="/" component={Home} />
      <Route path="/yesuglycry" component={YesUglyCry} />
      <Route path="/nofiredog" component={NoFireDog} />
      <Route path="/yesfuturama" component={YesFuturama} />
      <Route path="/nosadknight" component={NoSadKnight} />
    </div>
  );
}

export default App;
