import React, { useContext, useState } from "react";
import { FormContext } from "./../MainForm/Form";
import "./FormScreen4.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { Grid } from "@mui/material";
function FormScreen4() {
  const { steps, info } = useContext(FormContext);
  const [displayData, setDisplayData] = useState(false);
  return (
    steps === 4 && (
      <div>
        <div className="centerDiv">
          <FontAwesomeIcon
            className="checkIcon"
            icon={faCheckCircle}
            color="#654de4"
          />
        </div>
        <p className="pageHeading">Congratulations, {info.data.displayName}!</p>
        <p className="pageSubHeading">
          You have completed onboarding, you can start using Eden!
        </p>
        <Grid container>
          <Grid item xs={1} md={2} />
          <Grid item xs={10} md={8}>
            <button
              className="pageButton"
              onClick={() => {
                setDisplayData(true);
              }}
            >
              Launch Eden
            </button>
            {displayData && (
              <div>
                {Object.keys(info.data).map((key, index) => (
                  <p key={index}>{`${key}: ${info.data[key]}`}</p>
                ))}
              </div>
            )}
          </Grid>
          <Grid item xs={1} md={2} />
        </Grid>
      </div>
    )
  );
}

export default FormScreen4;
