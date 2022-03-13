import React from "react";
import "../../styles/components/post/crudEdit.css";

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
          placeholder="Enter a name..."
          name="fullName"
          value={editFormData.fullName}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Tâches du dev..."
          name="function"
          value={editFormData.taches}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="date au plus tôt..."
          name="phoneNumber"
          value={editFormData.dateBefore}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="email"
          required="required"
          placeholder="date au plus tard..."
          name="email"
          value={editFormData.dateAfter}
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
