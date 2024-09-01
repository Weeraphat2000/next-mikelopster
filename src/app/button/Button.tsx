"use client";

import React, { useState } from "react";

export default function Button() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => setCount(count + 1)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Click plus
      </button>
      <button
        onClick={() => setCount(count - 1)}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      >
        Click minus
      </button>
    </div>
  );
}
