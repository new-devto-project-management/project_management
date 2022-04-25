import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import data from "./mock-data-pert.json";
import ReadOnlyRowPert from "../crud/ReadOnlyRowPert";
import EditableRowPert from "../crud/EditableRowPert ";
import "../../styles/components/post/crud.css";

const App = () => {
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    fullName: "",
    taches: "",
    dateBefore: "",
    dateAfter: "",
  });

  const [editFormData, setEditFormData] = useState({
    fullName: "",
    taches: "",
    dateBefore: "",
    dateAfter: "",
  });

  const [editContactId, setEditContactId] = useState(null);

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

    const newContact = {
      id: nanoid(),
      fullName: addFormData.fullName,
      taches: addFormData.taches,
      dateBefore: addFormData.dateBefore,
      dateAfter: addFormData.dateAfter,
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      fullName: editFormData.fullName,
      taches: editFormData.taches,
      dateBefore: editFormData.dateBefore,
      dateAfter: editFormData.dateAfter,
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      fullName: contact.fullName,
      taches: contact.taches,
      dateBefore: contact.dateBefore,
      dateAfter: contact.dateAfter,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
  };

  return (
    <div className="app-container">
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th>Nom & prénom</th>
              <th>Tâches</th>
              <th>Date au plus tôt</th>
              <th>Date au plus tard</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <Fragment>
                {editContactId === contact.id ? (
                  <EditableRowPert
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRowPert
                    contact={contact}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>

      <h2>Ajouter une Tâche</h2>
      <form onSubmit={handleAddFormSubmit}>
        <input
          type="text"
          name="fullName"
          required="required"
          placeholder="Entrer Nom et prénom..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="address"
          required="required"
          placeholder="Entrer la tâches..."
          onChange={handleAddFormChange}
        />
        <input
          type="date"
          name="dateBefore"
          required="required"
          placeholder="date au plus tôt..."
          onChange={handleAddFormChange}
        />
        <input
          type="date"
          name="dateAfter"
          required="required"
          placeholder="date au plus tard..."
          onChange={handleAddFormChange}
        />
        <button className="fancy" type="submit">Ajouter</button>
      </form>
    </div>
  );
};

export default App;
