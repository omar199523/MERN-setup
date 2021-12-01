import React from 'react';

const Input = ({
  type,
  placeholder,
  label,
  minLength,
  value,
  handleInputChange,
  name,
}) => (
  <>
    <label htmlFor={name}>
      {(type !== "radio" && type !=="checkBox")?label:null}
      <input
        type={type}
        placeholder={placeholder}
        minLength = {minLength}
        defaultValue={value}
        onChange={handleInputChange}
        name={name}
      />
      {(type === "radio" || type ==="checkBox")?label:null}
    </label>
  </>
);
export default Input;
