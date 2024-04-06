import React from "react";

function Counter({ role, count, increment, decrement }) {
  return (
    <div>
      <h2>
        {role}: {count}
      </h2>
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    </div>
  );
}

export default Counter;
