import React from "react";
// import { Switch, Route } from "react-router-dom";
import ReactDom from "react-dom";
import AddUser from "./redux/pages/AddUser";
import Server from "./redux/pages/Home";
// import "./App.css";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Index0 from "./components/functions/pages/Index0";
import Index1 from "./components/functions/pages/Index1";
import Index1_2 from "./components/functions/pages/Index1_2";
import Index2 from "./components/functions/pages/Index2";

import Home from "./components/functions/Home";

import Help from "./components/functions/Help";
import LogTeam from "./components/posts/LogTeam";
import Gantt from "./components/logs/Gantt";
import CrudContext from "./components/posts/CrudContext";
import "./styles/styles.css";
// import Gantt from "./components/logs/Gantt";
// import Gantt from "./components/logs/Gantt";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const App = () => {

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBuV-7WlgqvoLXckn0yAuERNqr9RiF09SU",
    authDomain: "openproma.firebaseapp.com",
    projectId: "openproma",
    storageBucket: "openproma.appspot.com",
    messagingSenderId: "1020914053628",
    appId: "1:1020914053628:web:fbb0ff4538110930bc0279",
    measurementId: "G-P6TQ2FECB2"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
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
          <Route exact path="/Server" component={Server} />
          <Route exact path="/addUser" component={AddUser} />
          <Route path="/help" component={Help} />

          <Redirect to='/Home' />

        </Switch>
      </Router>



    </>
  );
};

export default App;