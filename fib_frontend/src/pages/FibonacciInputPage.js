import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const FibonacciInputPage = ({ setFibNumbers }) => {
  const [inputValue, setInputValue] = useState('');
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
      setFibNumbers(response.data.numbers);  // Update the fibNumbers state with the generated series
      setError('');

      // Redirect to the result page with the fibNumbers state
      navigate('/fibonacci-result', { state: { fibNumbers: response.data.numbers } });
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        setError(error.response.data.error);  // Set error message if available in the response
      } else {
        setError('An error occurred while fetching Fibonacci numbers.');  // Set generic error message
      }
      setFibNumbers([]);  // Clear the fibNumbers state on error
    }
  };

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
      {error && <p>Error: {error}</p>}  // Display error message if there's an error
    </div>
  );
};

export default FibonacciInputPage;
