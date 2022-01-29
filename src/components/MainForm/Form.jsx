import React, { useState, createContext } from "react";
import FormScreen1 from "./../FormScreen1/FormScreen1";
import FormScreen2 from "./../FormScreen2/FormScreen2";
import FormScreen3 from "./../FormScreen3/FormScreen3";
import FormScreen4 from "./../FormScreen4/FormScreen4";
import { Grid } from "@mui/material";
import eden from "./../../assets/eden.png";
import MultiStepProgressBar from "./../MultiStepProgressBar";
import "./Form.css";
const information = {
  data: {
    fullName: "",
    displayName: "",
    workspaceName: "",
    workspaceURL: "",
    teamSize: "",
  },
  error: {
    fullName: false,
    displayName: false,
    workspaceName: false,
    workspaceURL: false,
    teamSize: false,
  },
};
const schema = [
  ["fullName", "displayName"],
  ["workspaceName"],
  ["teamSize"],
  [],
];
export const FormContext = createContext(null);
export default function Form() {
  const [info, setInfo] = useState(information);
  const [steps, setSteps] = useState(1);
  const handleChange = (e) => {
    const eleValue = e.target.value;
    const eleName = e.target.name;
    const prevInfo = { ...info };
    prevInfo.data[eleName] = eleValue;
    if (eleValue !== "") prevInfo.error[eleName] = false;
    setInfo(prevInfo);
  };

  const onButtonClick = (e) => {
    var currentScreenNumber = e.target.name;
    currentScreenNumber++;
    setSteps(currentScreenNumber);
  };

  const oneUserSelection = () => {
    const prevInfo = { ...info };
    prevInfo.data["teamSize"] = "one";
    prevInfo.error.teamSize = false;
    setInfo(prevInfo);
  };
  const multipleUsersSelection = () => {
    const prevInfo = { ...info };
    prevInfo.data["teamSize"] = "many";
    prevInfo.error.teamSize = false;
    setInfo(prevInfo);
  };

  const validate = (e) => {
    const infoData = { ...info };
    var ifErrors = false;
    schema[steps - 1].forEach((field) => {
      infoData.error[field] = infoData.data[field] === "" ? true : false;
      if (infoData.error[field] || (!infoData.error[field] && ifErrors)) {
        ifErrors = true;
      }
      setInfo(infoData);
    });
    if (!ifErrors) onButtonClick(e);
  };
  return (
    <>
      <div className="edenImageDiv">
        <img className="edenImage" src={eden} alt="EDEN" />
      </div>
      <Grid container>
        <Grid item xs={1} md={2} lg={3} />
        <Grid item xs={10} md={8} lg={6}>
          <Grid container>
            <Grid item xs={2} lg={3} />
            <Grid item xs={8} lg={6}>
              <MultiStepProgressBar currentStep={steps} />
            </Grid>
            <Grid item xs={8} lg={3} />
          </Grid>
          <FormContext.Provider
            value={{
              handleChange,
              oneUserSelection,
              multipleUsersSelection,
              validate,
              info,
              steps,
            }}
          >
            <FormScreen1 />
            <FormScreen2 />
            <FormScreen3 />
            <FormScreen4 />
          </FormContext.Provider>
        </Grid>
        <Grid item xs={1} md={2} lg={3} />
      </Grid>
    </>
  );
}
