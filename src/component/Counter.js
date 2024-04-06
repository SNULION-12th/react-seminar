import React from "react";

function Counter({ name, count, inCreonClick, deCreonClick }) {
  return (
    <div>
      <h2>
        {name}: {count}
      </h2>
      <div>
        <button onClick={inCreonClick}>Increment</button>
        <button onClick={deCreonClick}>Decrement</button>
      </div>
    </div>
  );
}

export default Counter;
