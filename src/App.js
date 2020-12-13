import "./App.css";
import Toolbar from "./components/Toolbar";
import { Route } from "react-router-dom";
import Home from "./components/Home";
// import YesUglyCry from "./components/YesUglyCry";
import NoFireDog from "./components/NoFireDog";
import YesFuturama from "./components/YesFuturama";
import NoSadKnight from "./components/NoSadKnight";
// import YesWhiteGuyCry from "./components/YesWhiteGuyCry";
import NoFatAquaMan from "./components/NoFatAquaMan";
import No500DaysSummer from "./components/No500DaysSummer";

function App() {
  return (
    <div className="App">
      <Toolbar />
      <Route exact path="/" component={Home} />
      {/* <Route path="/yesuglycry" component={YesUglyCry} /> */}
      <Route path="/nofiredog" component={NoFireDog} />
      <Route path="/yesfuturama" component={YesFuturama} />
      <Route path="/nosadknight" component={NoSadKnight} />
      {/* <Route path="/yeswhiteguycry" component={YesWhiteGuyCry} /> */}
      <Route path="/nofataquaman" component={NoFatAquaMan} />
      <Route path="/no500dayssummer" component={No500DaysSummer} />
    </div>
  );
}

export default App;
