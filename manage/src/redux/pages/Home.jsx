import React from "react";
import MaterialTable from "../components/MaterialTable/MaterialTable";
import { Typography, Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
const Home = () => {
  const history = useHistory();
  return (
    <div>
      <Typography variant="h2">HomePage</Typography>
      <Button
        color="primary"
        variant="contained"
        style={{ marginBottom: "8px" }}
        onClick={() => history.push("/addUser")}
      >
        Add user
      </Button>
      <MaterialTable />
    </div>
  );
};

export default Home;
