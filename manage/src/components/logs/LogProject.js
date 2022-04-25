import React from "react";
import ReactDom from "react-dom";
// import ReactTooltip from 'react-tooltip';
import "@blueprintjs/core/lib/css/blueprint.css";
import { Tooltip, Button } from "@blueprintjs/core";
import "../../styles/components/logs/_logTeam.css";

class LogTeam extends React.Component {
  // clientInput = React.createRef();

  // state = {
  //     clients: [
  //         {id:'1' , nom:""},
  //         {id:2 , nom:"traore cheick"},

  //     ]
  // };

  handelDelete = (id) => {
    const clients = [...this.state.clients];
    const index = clients.findIndex((client) => client.id === id);

    clients.splice(index, 1);

    this.setState({ clients });
  };

  handelAdd = (client) => {
    // faire une copie
    const clients = [...this.state.clients];
    clients.push({ client });

    // mise a jour de mon state
    this.setState({ clients });
  };

  render() {
    // const dev = "Présentation de l'équipe de Développeurs."
    return (
      <div className="containers">
        <div className="title">
          <h1 >CONNEXION AU  PROJET</h1>
          <span > Create && Read && Update && Delete</span>
        </div>
        <div className="logContent">
          <div className="devops">
            <form>



              <div className="resDepart">
                {/* personne responnsable de departement */}
                <Tooltip
                  content="Entrer le mot de passe. "
                  position="right"
                >
                  <input
                    aria-label="Entrer le mot de passe. "
                    
                    placeholder="Enter le passe ex: ' root '..."
                    required
                    aria-required="true"
                  />
                </Tooltip>
                <label>
                  Mon de passe
                </label>
              </div>
            </form>
          </div>
          <div className="presentation">

            {/* inscription */}
            <form className="form">
              <div className="Mou">
                {/* propriétaire */}
                <Tooltip
                  content="Entrer le nom du projet expemple :'root'..."
                  position="right"
                >
                  <input
                    aria-label="Entrer le nom du projet expemple :'root ..."
                    placeholder="non du Projet... ex: 'root' "
                    required
                    aria-required="true"
                  />
                </Tooltip>
                <label>Nom du projet</label>
                {/* <Tooltip content="" position='right'>
                                            
                                    </Tooltip>                     */}
              </div>



            </form>
          </div>


          {/* <ClientForm onClientAdd={this.handelAdd} /> */}

        </div>
      </div>
    );
  }
}

export default LogTeam;
