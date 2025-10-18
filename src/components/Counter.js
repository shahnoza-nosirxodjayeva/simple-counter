import React, { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Counter updated:", count);
  }, [count]); 

  return (
    <div className="text-center py-12">
      <h1 className="text-5xl font-bold mb-6 text-blue-900">Counter: {count}</h1>
      <div className="space-x-4">
        <button
          onClick={() => setCount(count + 1)}
          className="bg-blue-900 text-yellow-50 px-6 py-2 rounded shadow hover:bg-blue-700 transition"
        >
          Increment
        </button>
        <button
          onClick={() => setCount(count > 0 ? count - 1 : 0)}
          className="bg-blue-900 text-yellow-50 px-6 py-2 rounded shadow hover:bg-blue-700 transition"
        >
          Decrement
        </button>
        <button
          onClick={() => setCount(0)}
          className="bg-blue-900 text-yellow-50 px-6 py-2 rounded shadow hover:bg-blue-700 transition"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
