import React from "react";

function Break(props) {
  return (
    <div>
      <h4 id="break-label">Break Length</h4>
      <div className="Break">
        <button className="rounded"
          onClick={() => props.setBreak("increment")}
          id="break-increment"
        >
          <span className="iconify" data-icon="akar-icons:arrow-up-thick"></span>
        </button>
        <h5 id="break-length">{props.break}</h5>
        <button className="rounded"
          onClick={() => props.setBreak("decrement")}
          id="break-decrement"
        >
          <span className="iconify" data-icon="akar-icons:arrow-down-thick"></span>
        </button>
      </div>
    </div>
  );
}

export default Break;
