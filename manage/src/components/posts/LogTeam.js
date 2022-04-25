import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import ReactDom from "react-dom";
import database from "../../database.json";
import ReadOnlyRow from "../../redux/ReadOnlyRow.js";
import EditableRow from "../../redux/EditableRow.js";
// import video from "../../styles/assets/video.mp4";

// import ReactTooltip from 'react-tooltip';
import "@blueprintjs/core/lib/css/blueprint.css";
import { Tooltip, Button } from "@blueprintjs/core";
import "../../styles/components/logs/_logTeam.css";
import { aliceblue } from "color-name";

const LogTeam = () => {

  const [logs, setLogs] = useState(database);

  const [addFormData, setAddFormData] = useState({
    nameProject: "",
    nameClient: "",
    respoProject: "",
    chargerAffaire: "",
    chefProject: "",
    respoPlanification: "",
    respoDepartement: ""
  });
  const [editFormData, setEditFormData] = useState({
    nameProject: "",
    nameClient: "",
    respoProject: "",
    chargerAffaire: "",
    chefProject: "",
    respoPlanification: "",
    respoDepartement: "",

  });

  const [editLogId, setEditLogId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newLog = {
      id: nanoid(),
      nameProject: addFormData.nameProject,
      nameClient: addFormData.nameClient,
      respoProject: addFormData.respoProject,
      chargerAffaire: addFormData.chargerAffaire,
      chefProject: addFormData.chefProject,
      respoPlanification: addFormData.respoPlanification,
      respoDepartement: addFormData.respoDepartement,
    };

    const newLogs = [...logs, newLog];
    setLogs(newLogs);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedLog = {
      id: editLogId,
      nameProject: editFormData.nameProject,
      nameClient: editFormData.nameClient,
      respoProject: editFormData.respoProject,
      chargerAffaire: editFormData.chargerAffaire,
      chefProject: editFormData.chefProject,
      respoPlanification: editFormData.respoPlanification,
      respoDepartement: editFormData.respoDepartement,
    };

    const newLogs = [...logs];

    const index = logs.findIndex((log) => log.id === editLogId);

    newLogs[index] = editedLog;

    setLogs(newLogs);
    setEditLogId(null);
  };

  const handleEditClick = (event, log) => {
    event.preventDefault();
    setEditLogId(log.id);

    const formValues = {
      nameProject: log.nameProject,
      nameClient: log.nameClient,
      respoProject: log.respoProject,
      chargerAffaire: log.chargerAffaire,
      chefProject: log.chefProject,
      respoPlanification: log.respoPlanification,
      respoDepartement: log.respoDepartement,

    };
    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditLogId(null);
  };

  const handleDeleteClick = (logId) => {
    const newLogs = [...logs];

    const index = logs.findIndex((log) => log.id === logId);

    newLogs.splice(index, 1);

    setLogs(newLogs);
  };


  // handelDelete = (id) => {
  //   const clients = [...this.state.clients];
  //   const index = clients.findIndex((client) => client.id === id);

  //   clients.splice(index, 1);

  //   this.setState({ clients });
  // };

  // handelAdd = (client) => {
  //   // faire une copie
  //   const clients = [...this.state.clients];
  //   clients.push({ client });

  //   // mise a jour de mon state
  //   this.setState({ clients });
  // };




  // render() {
  // const dev = "Présentation de l'équipe de Développeurs."
  return (
    <div className="containers app-container ">
      {/* bemol eureka  */}
      <div className="form">

        <form onSubmit={handleEditFormSubmit}>
          <table style={{
            color: "aliceblue",
            fontSize: "1rem",
            fontWeight: "bold",
            // border: "2px solid aliceblue",
            borderRadius: "20px",
            boxShadow: "2px 3px 2px 2px azure"
          }}>
            <thead style={{
              color: "#00ffd2"
            }}>
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
              {logs.map((log) => (
                <Fragment>
                  {editLogId === log.id ? (
                    <EditableRow
                      editFormData={editFormData}
                      handleEditFormChange={handleEditFormChange}
                      handleCancelClick={handleCancelClick}
                    />
                  ) : (
                    <ReadOnlyRow
                      log={log}
                      handleEditClick={handleEditClick}
                      handleDeleteClick={handleDeleteClick}
                    />
                  )}
                </Fragment>
              ))}
            </tbody>
          </table>
        </form>

      </div>
      {/* bemol eureka  */}
      <div className="title">
        <h1>RESPONSABLES DU PROJET</h1>
        <span>Client && Managers</span>
      </div>
      <div className="logContent">
        <div className="presentation">

          {/* inscription */}
          <form onSubmit={handleAddFormSubmit} >
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
                  onChange={handleAddFormChange}
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
                  onChange={handleAddFormChange}
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
                  onChange={handleAddFormChange}
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
                  onChange={handleAddFormChange}
                />
              </Tooltip>
              <label>Le chargé d'affaire / Porfolio manager</label>
            </div>

          </form>
        </div>
        {/* <div className="devops">
           
          </div> */}
        <div className="devops">
          <form onSubmit={handleAddFormSubmit}>

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
                  aria-label="personne physique chargée dans le cadre d'une mission définie, d'assumer la maîtrise du projet."
                  placeholder="chef de Projet..."
                  required="required"
                  onChange={handleAddFormChange}
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
                  onChange={handleAddFormChange}
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
                  aria-label="le garant d'un des savoir-faire de l'entreprise.
                  Il est sollicité par la chef de projet à qui il doit fournir les moyens en rapport avec son métier. "
                  placeholder="Responsable de département..."
                  required="required"
                  aria-required="true"
                  onChange={handleAddFormChange}
                />
              </Tooltip>
              <label>
                Responsable de département / Team leader & HR Manager
              </label>
              {/*  */}
              <Tooltip
                content="password of the project"
                position="right"
              >
                <input
                  aria-label="password"
                  type="password"
                  placeholder="Inserer un mot de passe..."
                  required="required"
                  aria-required="true"
                  onChange={handleAddFormChange}
                />
              </Tooltip>
              <label>
                Mot de passe !
              </label>
            </div>


            {/*  */}
            {/* <Tooltip content="Valider le formulaire" position="right">
                  <button className="fancy">Confirmer</button>
                </Tooltip> */}
            <button className="fancy" type="submit">Ajouter</button>
          </form>
        </div>
        {/* <ClientForm onClientAdd={this.handelAdd} /> */}
      </div>
    </div>
  );
  // }
}

export default LogTeam;
