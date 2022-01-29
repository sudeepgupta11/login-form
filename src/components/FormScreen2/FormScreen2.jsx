import { Grid } from "@mui/material";
import React, { useContext } from "react";
import { FormContext } from "../MainForm/Form";
import "./FormScreen2.css";
import InputField from "../InputField";
function FormScreen2() {
  const { steps, handleChange, info, validate } = useContext(FormContext);
  return (
    steps === 2 && (
      <div>
        <p className="pageHeading">Let's set up a home for all your work</p>
        <p className="pageSubHeading">
          You can always create another workspace later.
        </p>
        <Grid container>
          <Grid item xs={1} md={2} />
          <Grid item xs={10} md={8}>
            <InputField
              fieldName="Workspace Name"
              inputFieldType="text"
              placeholder="Eden"
              name="workspaceName"
              classesWhenError="inputField redInputBorder"
              classesWithoutError="inputField"
              handleChange={handleChange}
              info={info}
            />
            <div id="workspaceDiv" className="inputDiv">
              <span className="inputFieldName">Workspace URL</span>
              <span className="optionalFieldName">(optional)</span>
              <div className="workspaceURL">
                <input
                  type="text"
                  className="inputFieldFixedURL"
                  disabled={true}
                  value="www.eden.com/"
                />
                <input
                  type="text"
                  placeholder="Example"
                  name="workspaceURL"
                  className="inputFieldURL"
                  onChange={handleChange}
                />
              </div>
            </div>
            <button className="pageButton" name="2" onClick={validate}>
              Create Workspace
            </button>
          </Grid>
          <Grid item xs={1} md={2} />
        </Grid>
      </div>
    )
  );
}

export default FormScreen2;
