import React from "react";
import ReactDom from "react-dom";
// import "./App.css";
import { BrowserRouter as Router, Route , Redirect, Switch } from "react-router-dom";
import Index0 from "./components/functions/pages/Index0";
import Index1 from "./components/functions/pages/Index1";
import Index1_2 from "./components/functions/pages/Index1_2";
import Index2 from "./components/functions/pages/Index2";

import Home from "./components/functions/Home";
// import Taches from "./components/functions/Taches";
// import Ressources from "./components/functions/Ressource";
// import Tools from "./components/functions/Tool";
// import Settings from "./components/functions/Settings";
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
            <Route path="/" exact component={Index0} />
            <Route path="/index1" component={Index1} />
            <Route path="/index1_2" component={Index1_2} />
            <Route path="/index2" component={Index2} />
            <Route path="/home" component={Home} />
            {/* <Route path="/ressources" component={Ressources} />
            <Route path="/tools" component={Tools} />
            <Route path="/settings" component={Settings} /> */}
            <Route path="/help" component={Help} />

            <Redirect to='/Home'/>

        </Switch>
      </Router>



    </>
  );
};

export default App;