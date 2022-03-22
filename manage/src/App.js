import React from "react";
import ReactDom from "react-dom";
// import "./App.css";
import { BrowserRouter as Router, Route , Redirect, Switch } from "react-router-dom";
import Index1_2 from "./components/functions/pages/Index1_2";
// import Files from "./components/functions/Files";
import Taches from "./components/functions/Taches";
import Ressources from "./components/functions/Ressource";
import Tools from "./components/functions/Tool";
import Settings from "./components/functions/Settings";
import Help from "./components/functions/Help";
import "./styles/styles.css";

// import NotFound from "./pages/NotFound";


const App = () => {
  return (
    <>
      <Router>
          {/* <Home /> */}
          <Switch>
          {/* permet de matcher les éléments function */}
            <Route path="/" exact component={Index1_2} />
            {/* <Route path="/files" component={Files} /> */}
            <Route path="/taches" component={Taches} />
            <Route path="/ressources" component={Ressources} />
            <Route path="/tools" component={Tools} />
            <Route path="/settings" component={Settings} />
            <Route path="/help" component={Help} />

            <Redirect to='/'/>

        </Switch>
      </Router>



    </>
  );
};

export default App;