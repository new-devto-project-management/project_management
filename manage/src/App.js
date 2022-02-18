import React from "react";
import "./App.css";
import { Switch } from "switch";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/functions/Home";
import Files from "./components/functions/Files";
import Taches from "./components/functions/Taches";
import Ressource from "./components/functions/Ressource";
import Tool from "./components/functions/Tool";
import Settings from "./components/functions/Settings";
import Help from "./components/functions/Help";
import NotFound from "./components/functions/NotFound";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/files" component={Files} />
          <Route path="/taches" component={Taches} />
          <Route path="/ressource" component={Ressource} />
          <Route path="/tool" component={Tool} />
          <Route path="/settings" component={Settings} />
          <Route path="/help" component={Help} />

          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;