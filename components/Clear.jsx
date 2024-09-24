import React from "react";

export default function Clear(props) {
 
  return (
    <div>
      <button onClick={props.handleClear} className="btn">
        Clear
      </button>
    </div>
  );
}
