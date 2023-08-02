import React from "react";
import "./input.css";
const InputComponent = ({
  placeholder = "input...",
  type = "text",
  bgImage = "",
  className = "",
  ...restProps
}) => {
  let classNames = `input ${className}`;
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={classNames}
      // !gotcha: styling the instances of this component with inline-styles removes the background-image styling
      style={{
        backgroundImage: `url(/assets/${bgImage})`,
      }}
      {...restProps}
    />
  );
};
export default InputComponent;
