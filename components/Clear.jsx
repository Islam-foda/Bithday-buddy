import React from "react";

export default function Clear(props) {
 
  return (
    <div style={{width:"100%"}}>
      <button onClick={props.handleClear} className="btn">
        Clear
      </button>
    </div>
  );
}
