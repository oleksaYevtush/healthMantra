import React from "react";
import '../index.css';

type Props = {
  children: React.ReactNode;
  setSelectedPage: () => void;
};

const ActionButton = ({ children, setSelectedPage }: Props) => {
  return (
    <button className="btn" type="button" onClick={setSelectedPage}>
      <strong>{children}</strong>
      <div id="container-stars">
        <div id="stars"></div>
      </div>
      <div id="glow">
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
    </button>
  );
};

export default ActionButton;
