import React from "react";

function Session(props) {
  return (
    <div >
      <h4 id="session-label">Session Length</h4>
      <div className="Session">
        <button className="rounded"
          onClick={() => props.setSession("increment")}
          id="session-increment"
        >
          <span className="iconify" data-icon="akar-icons:arrow-up-thick"></span>
        </button>
        <h5 id="session-length">{props.session}</h5>
        <button className="rounded"
          onClick={() => props.setSession("decrement")}
          id="session-decrement"
        >
          <span className="iconify" data-icon="akar-icons:arrow-down-thick"></span>
        </button>
      </div>
    </div>
  );
}

export default Session;
