import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../../redux/actions";
const FormInputs = () => {
  const history = useHistory();
  const [formInput, setFormInput] = useState({
    email: "",
    userName: "",
    phoneNumber: "",
    sex: "",
  });
  const { email, userName, phoneNumber, sex } = formInput;
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && userName && phoneNumber && sex) {
      dispatch(addUser(formInput));
      history.push("/");
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormInput({ ...formInput, [name]: value });
  };
  return (
    <>
      <Button
        varient="contained"
        color="primary"
        onClick={() => {
          history.push("/");
        }}
      >
        Go Back
      </Button>
      <form onSubmit={handleSubmit}>
        <TextField
          name="email"
          label="Outlined"
          variant="outlined"
          value={email}
          onChange={handleChange}
        />
        <TextField
          name="userName"
          label="Outlined"
          variant="outlined"
          value={userName}
          onChange={handleChange}
        />
        <TextField
          name="phoneNumber"
          label="Outlined"
          variant="outlined"
          value={phoneNumber}
          onChange={handleChange}
        />
        <TextField
          name="sex"
          label="Outlined"
          variant="outlined"
          value={sex}
          onChange={handleChange}
        />
        <Button varient="contained" type="submit" color="primary">
          {"Add User"}
        </Button>
      </form>
    </>
  );
};

export default FormInputs;
