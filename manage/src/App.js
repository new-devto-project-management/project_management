import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Files from "./components/Files";
import Taches from "./components/Taches";
import Ressource from "./components/Ressource";
import Tool from "./components/Tool";
import Settings from "./components/Settings";
import Help from "./components/Help";
import NotFound from "./pages/NotFound";


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