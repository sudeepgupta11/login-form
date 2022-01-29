import { Grid } from "@mui/material";
import React, { useContext } from "react";
import InputField from "../InputField";
import { FormContext } from "../MainForm/Form";
function FormScreen1() {
  const { steps, handleChange, info, validate } = useContext(FormContext);

  return (
    steps === 1 && (
      <div>
        <p className="pageHeading">Welcome! First things first...</p>
        <p className="pageSubHeading">You can always change them later.</p>
        <Grid container>
          <Grid item xs={1} md={2} />
          <Grid item xs={10} md={8}>
            <InputField
              fieldName="Full Name"
              inputFieldType="text"
              placeholder="Steve Jobs"
              name="fullName"
              classesWhenError="inputField redInputBorder"
              classesWithoutError="inputField"
              handleChange={handleChange}
              info={info}
            />
            <InputField
              fieldName="Display Name"
              inputFieldType="text"
              placeholder="Steve"
              name="displayName"
              classesWhenError="inputField redInputBorder"
              classesWithoutError="inputField"
              handleChange={handleChange}
              info={info}
            />
            <button className="pageButton" name="1" onClick={validate}>
              Create Workspace
            </button>
          </Grid>
          <Grid item xs={1} md={2} />
        </Grid>
      </div>
    )
  );
}

export default FormScreen1;
