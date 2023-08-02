import React from "react";
import "./button.css";

const ButtonLink = ({
  link,
  children,
  className = "",
  href = "",
  ...props
}) => {
  let classNames = `button-link ${className}`;
  return link ? (
    <a className={classNames} href={href}>
      {children}
    </a>
  ) : (
    <button className={classNames} {...props}>
      {children}
    </button>
  );
};

export default ButtonLink;
