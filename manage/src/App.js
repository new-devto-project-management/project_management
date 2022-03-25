import React from "react";
import ReactDom from "react-dom";
// import "./App.css";
import { BrowserRouter as Router, Route , Redirect, Switch } from "react-router-dom";
import Index0 from "./components/functions/pages/Index0";
import Index1 from "./components/functions/pages/Index1";
import Index1_2 from "./components/functions/pages/Index1_2";
import Index2 from "./components/functions/pages/Index2";

import Home from "./components/functions/Home";

import Help from "./components/functions/Help";
import "./styles/styles.css";
import LogTeam from "./components/logs/LogTeam";
import Gantt from "./components/logs/Gantt";
import CrudContext from "./components/posts/CrudContext";
// import Gantt from "./components/logs/Gantt";
// import Gantt from "./components/logs/Gantt";



const App = () => {
  return (
    <>
      <Router>
          {/* <Home /> */}
          <Switch>
          {/* permet de matcher les éléments function */}
            <Route path="/" exact component={Index0} />
            <Route path="/Index0" exact component={Index0} />
            <Route path="/index1" component={Index1} />
            <Route path="/index1_2" component={Index1_2} />
            <Route path="/index2" component={Index2} />
            <Route path="/home" component={Home} />
            <Route path="/gantt" component={Gantt} />
            <Route path="/crudContext" component={CrudContext} />
            <Route path="/logteam" component={LogTeam} />
           
            <Route path="/help" component={Help} />

            <Redirect to='/Home'/>

        </Switch>
      </Router>



    </>
  );
};

export default App;