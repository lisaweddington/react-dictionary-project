import React from "react";

import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div className="Synonyms">
        <ul className="synonyms-list">
          {props.synonyms.map(function (synonym, index) {
            return <li key={index}>Synonym(s): {synonym}</li>;
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}
