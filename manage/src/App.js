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


// Import Bootstrap
import { Nav, Navbar, Container, Row, Col }
  from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

// Import Custom CSS
import "./App.css";

// Import from react-router-dom
// import { BrowserRouter as Router, Switch,
//     Route, Link } from "react-router-dom";

// Import other React Component
import CreateStudent from
  "./node/create-student.component";
import EditStudent from
  "./node/edit-student.component";
import StudentList from
  "./node/student-list.component";


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
          {/* permet de matcher les ??l??ments function */}
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
        <div className="App">
          <header className="App-header">
            <Navbar bg="dark" variant="dark">
              <Container>
                <Navbar.Brand>
                  <Link to={"/create-student"}
                    className="nav-link">
                    React MERN Stack App
                  </Link>
                </Navbar.Brand>

                <Nav className="justify-content-end">
                  <Nav>
                    <Link to={"/create-student"}
                      className="nav-link">
                      Create Student
                    </Link>
                  </Nav>

                  <Nav>
                    <Link to={"/student-list"}
                      className="nav-link">
                      Student List
                    </Link>
                  </Nav>
                </Nav>
              </Container>
            </Navbar>
          </header>

          <Container>
            <Row>
              <Col md={12}>
                <div className="wrapper">
                  <Switch>
                    <Route exact path="/"
                      component={CreateStudent} />
                    <Route path="/create-student"
                      component={CreateStudent} />
                    <Route path="/edit-student/:id"
                      component={EditStudent} />
                    <Route path="/student-list"
                      component={StudentList} />
                  </Switch>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </Router>



    </>
  );
};

export default App;