import React from 'react';

const FibonacciNumbers = ({ numbers }) => {
  return (
    <div>
      <h2>Fibonacci Numbers</h2>
      <p>{numbers.join(', ')}</p>
    </div>
  );
};

export default FibonacciNumbers;
