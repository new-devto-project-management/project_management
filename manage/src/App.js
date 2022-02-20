import React from "react";
// import "./App.css";
import { BrowserRouter, Route} from "react-router-dom";
import { Switch } from "switch";
import Home from "./components/functions/Home";
import Files from "./components/functions/Files";
import Taches from "./components/functions/Taches";
import Ressource from "./components/functions/Ressource";
import Tool from "./components/functions/Tool";
import Settings from "./components/functions/Settings";
import Help from "./components/functions/Help";
import "./styles/styles.css"
// import NotFound from "./pages/NotFound";


const App = () => {
  return (
    <>

      <BrowserRouter>
        <Switch>
        <Home />
          <Route path="/" exact component={Home} />
          <Route path="/files" component={Files} />
          <Route path="/taches" component={Taches} />
          <Route path="/ressource" component={Ressource} />
          <Route path="/tool" component={Tool} />
          <Route path="/settings" component={Settings} />
          <Route path="/help" component={Help} />
        
          {/* <Redirect to="/" /> */}
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;