import React from "react";
import notes from "../notes.js";

// function create(val){
// <h1>{val.title}</h1>
//   <p>{val.content}</p>
// }

function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
    </div>
  );
}

export default Note;
