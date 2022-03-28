import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import ReactDom from "react-dom";
import database from "../../database.json";
import ReadOnlyRow from "../../redux/ReadOnlyRow.js";
import EditableRow from "../../redux/EditableRow.js";

// import ReactTooltip from 'react-tooltip';
import "@blueprintjs/core/lib/css/blueprint.css";
import { Tooltip, Button } from "@blueprintjs/core";
import "../../styles/components/logs/_logTeam.css";

const LogTeam = () => {

  const [login, setLogin] = useState(database);

  const [addFormData, setAddFormData] = useState({
    nameProject: "",
    nameClient: "",
    respoProjet: "",
    chargerAffaire: "",
    chefProject: "",
    respoPlanification: "",
    respoDepartement: ""
  });
  const [editFormData, setEditFormData] = useState({
    nameProject: "",
    nameClient: "",
    respoProjet: "",
    chargerAffaire: "",
    chefProject: "",
    respoPlanification: "",
    respoDepartement: "",

  });

  const [editLoginId, setEditLoginId] = useState(null);

  const handelAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handelEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handelAddFormSubmit = (event) => {
    event.preventDefault();

    const newLogin = {
      id: nanoid(),
      nameProject: addFormData.nameProject,
      nameClient: addFormData.nameClient,
      respoProjet: addFormData.respoProjet,
      chargerAffaire: addFormData.chargerAffaire,
      chefProject: addFormData.chefProject,
      respoPlanification: addFormData.respoPlanification,
      respoDepartement: addFormData.respoDepartement,
    };

    const newLogins = [...login, newLogin];
    setLogin(newLogins);
  };

  const handelEditFormSubmit = (event) => {
    event.preventDefault();

    const editedLogin = {
      id: editLoginId,
      nameProject: editFormData.nameProject,
      nameClient: editFormData.nameClient,
      respoProjet: editFormData.respoProjet,
      chargerAffaire: editFormData.chargerAffaire,
      chefProject: editFormData.chefProject,
      respoPlanification: editFormData.respoPlanification,
      respoDepartement: editFormData.respoDepartement,
    };

    const newLogins = [...login];

    const index = login.findIndex((logins) => logins.id === editLoginId);

    newLogins[index] = editedLogin;

    setLogin(newLogins);
    setEditLoginId(null);
  };

  const handelEditClick = (event, logins) => {
    event.preventDefault();
    setEditLoginId(logins.id);

    const formValues = {
      nameProject: logins.nameProject,
      nameClient: logins.nameClient,
      respoProjet: logins.respoProjet,
      chargerAffaire: logins.chargerAffaire,
      chefProject: logins.chefProject,
      respoPlanification: logins.respoPlanification,
      respoDepartement: logins.respoDepartement,

    };
    setEditFormData(formValues);
  };

  const handelCancelClick = () => {
    setEditLoginId(null);
  };

  const handelDeleteClick = (loginId) => {
    const newLogins = [...login];

    const index = login.findIndex((logins) => logins.id === loginId);

    newLogins.splice(index, 1);

    setLogin(newLogins);
  };


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




  // render() {
  // const dev = "Présentation de l'équipe de Développeurs."
  return (
    <div className="containers app-container">
      <form onSubmit={ handelEditFormSubmit }>
        <table>
          <thead>
            <tr>
              <th>Name Project</th>
              <th>Name Client</th>
              <th>Responsable of projet</th>
              <th>Charger d'Affaire</th>
              <th>Chef of Project</th>
              <th>Responsable Planification</th>
              <th>Responsable Departement</th>
            </tr>
          </thead>
          <tbody>
            {login.map((logins) => (
              <Fragment>
                {editContactId === contacts.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handelEditFormChange={handelEditFormChange}
                    handelCancelClick={handelCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                    login={logins}
                    handelEditClick={handelEditClick}
                    handelDeleteClick={handelDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>
      <div className="title">
        <h1>RESPONSABLES DU PROJET</h1>
        <span>Client && Managers</span>
      </div>
      <div className="logContent">
        <div className="presentation">

          {/* inscription */}
          <form onSubmit={this.handelEditFormSubmit} >
            <div className="Mou">
              {/* propriétaire */}
              <Tooltip
                content="nom du projet."
                position="right"
              >
                <input
                  aria-label="nom du projet."
                  placeholder="Entrer le non du projet..."
                  required="required"
                  aria-required="true"
                  onChange={handelAddFormChange}
                />
              </Tooltip>
              <label>Maître d'ouvrage</label>
              {/* <Tooltip content="" position='right'>

                                    </Tooltip>                     */}
            </div>
            <div className="Mou">
              {/* propriétaire */}
              <Tooltip
                content="Personne physique ou morale qui sera propriétaire de l'ouvrage réalisé."
                position="right"
              >
                <input
                  aria-label="Personne physique ou morale qui sera propriétaire de l'ouvrage réalisé."
                  placeholder="non du Client..."
                  required="required"
                  aria-required="true"
                  onChange={handelAddFormChange}
                />
              </Tooltip>
              <label>Maître d'ouvrage</label>
              {/* <Tooltip content="" position='right'>
                                            
                                    </Tooltip>                     */}
            </div>

            <div className="Moe">
              {/* personne responnsable */}
              <Tooltip
                content="Personne physique ou morale qui réalise le travail pour le maître d'ouvrage."
                position="right"
              >
                <input
                  aria-label="Personne physique ou morale qui réalise le travail pour le maître d'ouvrage. "
                  placeholder="Responsable du project..."
                  required="required"
                  aria-required="true"
                  onChange={handelAddFormChange}
                />
              </Tooltip>
              <label>Maître d'œuvre</label>
            </div>

            <div className="Ca">
              {/* charger d'affaire */}
              <Tooltip
                content="Le
                                    chargé d'affaires assure les contacts avec le maître d'ouvrage avant la conclusion du
                                    contrat, pendant son déroulement et lors de son achèvement."
                position="right"
              >
                <input
                  aria-label="Le
                                    chargé d'affaires assure les contacts avec le maître d'ouvrage avant la conclusion du
                                    contrat, pendant son déroulement et lors de son achèvement."
                  placeholder="chargé d'affaire..."
                  required="required"
                  aria-required="true"
                  onChange={handelAddFormChange}
                />
              </Tooltip>
              <label>Le chargé d'affaire / Porfolio manager</label>
            </div>

          </form>
        </div>
        {/* <div className="devops">
           
          </div> */}
        <div className="devops">
          <form onSubmit={handelEditFormSubmit}>

            <div className="chefDequipe">
              {/* chefs d'"quipe" */}
              <Tooltip
                content="personne physique chargée dans le cadre d'une mission définie,
                                                            d'assumer la maîtrise du projet."
                position="right"
              >
                {/* c'est-à-dire de veiller à sa bonne réalisation dans les
                                                            objectifs de technique, de coût et de délai. */}

                <input
                  aria-label="personne physique chargée dans le cadre d'une mission définie,
                                                            d'assumer la maîtrise du projet, c'est-à-dire de veiller à sa bonne réalisation dans les
                                                            objectifs de technique, de coût et de délai."
                  placeholder="chef de Projet..."
                  required="required"
                  onChange={handelAddFormChange}
                />
              </Tooltip>
              <label>Chef de projet / Project Manager</label>
            </div>

            <div className="resPlan">
              {/* personne responnsable de la planification */}
              <Tooltip
                content="Il identifie et organise les tâches, publie l'échéancier de chaque activité; ensuite, il met
                                                        à jour le planning et calcule la probabilité que les délais soient maintenus."
                position="right"
              >
                {/*  Souvent, le
                                                        chef de projet assume cette fonction. */}

                <input
                  aria-label="Il identifie et organise les tâches, publie l'échéancier de chaque activité; ensuite, il met
                                                        à jour le planning et calcule la probabilité que les délais soient maintenus. Souvent, le
                                                        chef de projet assume cette fonction. "
                  placeholder="Responsable Planification..."
                  required="required"
                  aria-required="true"
                  onChange={handelAddFormChange}
                />
              </Tooltip>
              <label>
                Responsable planification / Scope & Time Manager
              </label>
            </div>

            <div className="resDepart">
              {/* personne responnsable de departement */}
              <Tooltip
                content="le garant d'un des savoir-faire de l'entreprise. Il est sollicité par la chef de projet à
                                                        qui il doit fournir les moyens en rapport avec son métier. "
                position="right"
              >
                <input
                  aria-label="le garant d'un des savoir-faire de l'entreprise. Il est sollicité par la chef de projet à
                                                        qui il doit fournir les moyens en rapport avec son métier. "
                  placeholder="Responsable de département..."
                  required="required"
                  aria-required="true"
                  onChange={HandelAddFormChange}
                />
              </Tooltip>
              <label>
                Responsable de département / Team leader & HR Manager
              </label>
            </div>


            {/*  */}
            {/* <Tooltip content="Valider le formulaire" position="right">
                  <button className="fancy">Confirmer</button>
                </Tooltip> */}
          </form>
        </div>
        {/* <ClientForm onClientAdd={this.handelAdd} /> */}

      </div>
    </div>
  );
  // }
}

export default LogTeam;
