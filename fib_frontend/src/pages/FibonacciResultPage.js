import React from 'react';
import { useLocation } from 'react-router-dom';

const FibonacciResultPage = () => {
  const location = useLocation();
  const fibNumbers = location.state?.fibNumbers || [];

  return (
    <div>
      <h1>Fibonacci Series Result</h1>
      {fibNumbers && fibNumbers.length > 0 ? (
        <div>
          <h2>Fibonacci Numbers</h2>
          <p>{fibNumbers.join(', ')}</p>
        </div>
      ) : (
        <p>No Fibonacci series data found.</p>
      )}
    </div>
  );
};

export default FibonacciResultPage;
