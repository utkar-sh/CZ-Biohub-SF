// src/components/FibonacciResult.js

import React from 'react';

const FibonacciResult = ({ numbers }) => {
  return (
    <div>
      <h2>Fibonacci Series</h2>
      <p>{numbers.join(', ')}</p>
    </div>
  );
};

export default FibonacciResult;
