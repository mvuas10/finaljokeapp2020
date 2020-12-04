import "./App.css";
import Toolbar from "./components/Toolbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import YesUglyCry from "./components/YesUglyCry";
import NoFireDog from "./components/NoFireDog";

function App() {
  return (
    <div className="App">
      <Toolbar />
      <Route exact path="/" component={Home} />
      <Route path="/yesuglycry" component={YesUglyCry} />
      <Route path="/nofiredog" component={NoFireDog} />
    </div>
  );
}

export default App;
