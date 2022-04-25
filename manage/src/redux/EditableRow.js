import React from "react";
import "../styles/components/post/crudEdit.css";

const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <tr>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter the name of project..."
          name="nameProject"
          value={editFormData.nameProject}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
      <input
          type="text"
          required="required"
          placeholder="Enter the name of Client..."
          name="nameCilent"
          value={editFormData.nameClient}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="responsable du projet..."
          name="respoProject"
          value={editFormData.respoProject}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="charger d'Affaire..."
          name="chargerAffaire"
          value={editFormData.chargerAffaire}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Chef of Project..."
          name="Chef of Project"
          value={editFormData.chefProject}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="responsable planification..."
          name="responsable planification"
          value={editFormData.respoPlanification}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="responsable departement..."
          name="responsable departement"
          value={editFormData.respoDepartement}
          onChange={handleEditFormChange}
        ></input>
      </td>
     
      <td>
        <button className="fancy" type="submit">Enregistrer</button>
        <button className="fancy" type="button" onClick={handleCancelClick}>
          Annuler
        </button>
      </td>
    </tr>
  );
};

export default EditableRow;
