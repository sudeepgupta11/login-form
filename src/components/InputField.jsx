import React from "react";

function InputField(props) {
  return (
    <div className="inputDiv">
      <p className="inputFieldName">
        {props.fieldName}
        {props.optional && (
          <span className="optionalFieldName">(optional)</span>
        )}
      </p>
      <input
        type={props.inputFieldType}
        placeholder={props.placeholder}
        className={
          props.info.error[props.name]
            ? props.classesWhenError
            : props.classesWithoutError
        }
        name={props.name}
        onChange={props.handleChange}
        value={props.value}
        disabled={props.disabled}
      />
      {props.info.error[props.name] && <p className="requiredText">Required</p>}
    </div>
  );
}

export default InputField;
