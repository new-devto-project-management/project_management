import React from "react";
import "../styles/components/post/crudRead.css";

const ReadOnlyRow = ({ log, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{log.nameProject}</td>
      <td>{log.nameClient}</td>
      <td>{log.respoProject}</td>
      <td>{log.chargerAffaire}</td>
      <td>{log.chefProject}</td>
      <td>{log.respoPlanification}</td>
      <td>{log.respoDepartement}</td>
      <td>
        <button
          type="button" className="fancy"
          onClick={(event) => handleEditClick(event, log)}
        >
          Edit
        </button>
        <button type="button" className="fancy" onClick={() => handleDeleteClick(log.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
