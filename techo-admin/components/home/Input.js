import React from "react";

const Input = ({ label, name, type, value, onChange, placeholder }) => {
  return (
    <label>
      {label}
      <input
        className="mt-2 m-5 text-black"
        type={type}
        value={value}
        name={name} /* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */
        onChange={onChange}
        placeholder={placeholder}
      />
    </label>
  );
};

export default Input;
