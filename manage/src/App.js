import React from "react";
import "./App.css";
import { BrowserRouter, Route} from "react-router-dom";
import { Switch } from "switch";
import Home from "./components/functions/Home";
import Files from "./components/functions/Files";
import Taches from "./components/functions/Taches";
import Ressources from "./components/functions/Ressource";
import Tools from "./components/functions/Tool";
import Settings from "./components/functions/Settings";
import Help from "./components/functions/Help";
// import "./styles/styles.css"
// import NotFound from "./pages/NotFound";


const App = () => {
  return (
    <>

      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
            <Home />
          <Route path="/files" component={Files} />
          <Route path="/taches" component={Taches} />
          <Route path="/ressources" component={Ressources} />
          <Route path="/tools" component={Tools} />
          <Route path="/settings" component={Settings} />
          <Route path="/help" component={Help} />
          {/* <Redirect to="/" /> */}
        </Switch>
      </BrowserRouter>
      <div id="container">
 <div class="row">
  <div class="container_wrapper">
   <a href="">
    <div class="tile"><i class="icon fa-q"></i>
     <p>Poser une question</p>
    </div>
   </a>
   <a href="">
		 <div class="tile"><i class="icon fa-list-alt  "></i>
     <p>Nos questions</p>
    
    </div>
   </a>
   <a href="">
    <div class="tile">
			<div class="flip-icon"><i class="icon fa-comment-o front-flip "></i>
				<i class="icon back-flip "><a href="http://">Prendre en charge</a><a href="http://">To validate</a><a href="http://">Prendre en charge</a></i>
				 </div>
     <p>Réponses</p>
    </div>
   </a>
  </div>
 </div>
 <div class="row">
  <div class="container_wrapper">
   <div class="tile"><i class="icon fa-calendar"></i>
    <p>Calendrier des réunions</p>
   </div>
   <div class="tile"><i class="icon fa-database"></i>
    <p>Consultation archive</p>
   </div>
   <div class="tile"><i class="icon fa-user-plus"></i>
    <p>Ajouter un contributeur</p>
   </div>

  </div>
 </div>
</div>
      
    </>
  );
};

export default App;