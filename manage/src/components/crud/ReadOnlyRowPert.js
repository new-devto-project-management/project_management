import React from "react";
import "../../styles/components/post/crudRead.css";

const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{contact.fullName}</td>
      <td>{contact.taches}</td>
      <td>{contact.dateBefore}</td>
      <td>{contact.dateAfter}</td>
      <td>
        <button
          type="button" className="fancy"
          onClick={(event) => handleEditClick(event, contact)}
        >
          Modifier
        </button>
        <button type="button" className="fancy" onClick={() => handleDeleteClick(contact.id)}>
          Supprimer
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
