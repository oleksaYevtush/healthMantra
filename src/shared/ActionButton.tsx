import React from "react";
import '../index.css';
import { SelectedPage } from "../shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  children: React.ReactNode;
  setSelectedPage: (page: SelectedPage) => void;
};

const ActionButton = ({ children, setSelectedPage }: Props) => {
  return (
    <AnchorLink href={`#${SelectedPage.ContactUs}`}>
      <button className="btn" type="button" onClick={() => setSelectedPage(SelectedPage.ContactUs)}>
        <strong>{children}</strong>
        <div id="container-stars">
          <div id="stars"></div>
        </div>
        <div id="glow">
          <div className="circle"></div>
          <div className="circle"></div>
        </div>
      </button>
    </AnchorLink>
  );
};

export default ActionButton;
