import React, { useEffect, useState } from "react";
import {
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableRow,
  TableCell,
  TableHead,
  ButtonGroup,
  Button,
} from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { getUsersDispatch, removeUser } from "../../redux/actions";
const MaterialTable = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);
  console.log(dispatch, users);
  useEffect(() => {
    dispatch(getUsersDispatch());
  }, []);
  const handleDelete = (id) => {
    window.confirm("Are you sure wanna delete this user?") &&
      dispatch(removeUser(id));
  };
  return (
    <>
      <TableContainer component={Paper} style={{ padding: "8px" }}>
        <Table sx={{ maxWidth: 400 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Email</TableCell>
              <TableCell align="center">Username</TableCell>
              <TableCell align="center">Phone Number</TableCell>
              <TableCell align="center">Sex</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users &&
              users.map((user) => (
                <TableRow
                  key={user.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {user.email}
                  </TableCell>
                  <TableCell align="center">{user.userName}</TableCell>
                  <TableCell align="center">{user.phoneNumber}</TableCell>
                  <TableCell align="center">{user.sex}</TableCell>
                  <TableCell align="center">
                    <ButtonGroup
                      variant="contained"
                      aria-label="outlined primary button group"
                    >
                      <Button
                        color="primary"
                        style={{ marginRight: "8px" }}
                        onClick={() => handleDelete(user.id)}
                      >
                        Delete
                      </Button>
                      <Button color="secondary">Edit</Button>
                    </ButtonGroup>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default MaterialTable;
