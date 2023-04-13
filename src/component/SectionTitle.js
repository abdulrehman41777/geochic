import React from "react";
import { Link } from "react-router-dom";

export const SectionTitleh2 = (props) => {
  return (
    <div className={`sectionBoxh2 ${props.className}`}>
      <div className="sectitle">{props.title}</div>
      <div className="secsubtitle">{props.text}</div>
      {props.linkbtn && (
        <Link to={props.link} className="btn btn-yellow mt-4">
          {props.linktext}
        </Link>
      )}
    </div>
  );
};
export const SectionTitleh3 = (props) => {
  return (
    <div className={`sectionBoxh3 ${props.className}`}>
      <div className="sectitle">{props.title}</div>
      <div className="secsubtitle">{props.text}</div>
      {props.linkbtn && (
        <Link to={props.link} className="btn btn-yellow mt-4">
          {props.linktext}
        </Link>
      )}
    </div>
    
  );
};
