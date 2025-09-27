import React from "react";
import { Link } from "react-router-dom";

const ScrollToTopLink = (props) => {
  const { to, children, closeOnNavigate } = props;

  const handleClick = () => {
    window.scrollTo(0, 0);

    if (closeOnNavigate) {
      closeOnNavigate();
    }
  };
  return (
    <Link to={to} onClick={handleClick}>
      {children}
    </Link>
  );
};

export default ScrollToTopLink;
