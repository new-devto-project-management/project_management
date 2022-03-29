import React from "react";
import "../styles/components/post/crudRead.css";

const ReadOnlyRow = ({ logins, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{logins.nameProject}</td>
      <td>{logins.nameClient}</td>
      <td>{logins.respoProject}</td>
      <td>{logins.chargerAffaire}</td>
      <td>{logins.chefProject}</td>
      <td>{logins.respoPlanification}</td>
      <td>{logins.respoDepartement}</td>
      <td>
        <button
          type="button" className="fancy"
          onClick={(event) => handleEditClick(event, logins)}
        >
          Edit
        </button>
        <button type="button" className="fancy" onClick={() => handleDeleteClick(contact.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
