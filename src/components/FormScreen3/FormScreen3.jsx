import React, { useContext } from "react";
import { FormContext } from "../MainForm/Form";
import "./FormScreen3.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faUsers } from "@fortawesome/free-solid-svg-icons";
import { Grid } from "@mui/material";

function FormScreen3() {
  const { info, steps, validate, oneUserSelection, multipleUsersSelection } =
    useContext(FormContext);
  return (
    steps === 3 && (
      <div>
        <p className="pageHeading">How are you planning to use Eden?</p>
        <p className="pageSubHeading">
          We'll streamline your setup experience accordingly.
        </p>
        <Grid container>
          <Grid item md={2} />
          <Grid item xs={12} md={8}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <div
                  id="oneUserCard"
                  className={
                    info.data.teamSize === "one"
                      ? "teamCard teamSelected"
                      : "teamCard"
                  }
                  onClick={oneUserSelection}
                >
                  <FontAwesomeIcon className="oneUserIcon" icon={faUser} />
                  <p className="teamCardName">For myself</p>
                  <p className="teamCardDescription">
                    Write better. Think more clearly. Stay organized.
                  </p>
                </div>
              </Grid>
              <Grid item xs={12} md={6}>
                <div
                  id="multipleUsersCard"
                  className={
                    info.data.teamSize === "many"
                      ? "teamCard teamSelected"
                      : "teamCard"
                  }
                  onClick={multipleUsersSelection}
                >
                  <FontAwesomeIcon className="oneUserIcon" icon={faUsers} />
                  <p className="teamCardName">With my team</p>
                  <p className="teamCardDescription">
                    Wikis, docs, tasks & projects, all in one place
                  </p>
                </div>
              </Grid>

              {info.error.teamSize && (
                <Grid id="form3PageButton" item xs={12}>
                  <div className="centerDiv">
                    <p id="form3RequiredText" className="requiredText">
                      Please select the team size.
                    </p>
                  </div>
                </Grid>
              )}

              <Grid id="form3PageButton" item xs={12}>
                <button className="pageButton" name="3" onClick={validate}>
                  Create Workspace
                </button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={2} />
        </Grid>
      </div>
    )
  );
}

export default FormScreen3;
