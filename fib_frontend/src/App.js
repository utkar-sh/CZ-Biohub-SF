import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const FibonacciInputPage = () => {
  const [inputValue, setInputValue] = useState('');
  const [fibNumbers, setFibNumbers] = useState([]);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/fibonacci/', {
        n: parseInt(inputValue),
      });
      setFibNumbers(response.data.numbers);
      setError('');
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        setError(error.response.data.error);
      } else {
        setError('An error occurred while fetching Fibonacci numbers.');
      }
      setFibNumbers([]);
    }
  };

  // Use useEffect to trigger redirection when fibNumbers is updated
  useEffect(() => {
    if (fibNumbers.length > 0) {
      // Redirect to the new page to show the Fibonacci series
      navigate('/fibonacci-result', { state: { fibNumbers } });
    }
  }, [fibNumbers, navigate]);

  return (
    <div>
      <h1>Fibonacci Numbers Generator</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Enter the value of n:
          <input
            type="number"
            value={inputValue}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      {error && <p>Error: {error}</p>}
      {fibNumbers.length > 0 && (
        <div>
          <h2>Fibonacci Numbers</h2>
          <p>{fibNumbers.join(', ')}</p>
        </div>
      )}
    </div>
  );
};

export default FibonacciInputPage;
