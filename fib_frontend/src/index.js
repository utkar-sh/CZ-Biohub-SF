// src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import FibonacciResultPage from '../src/pages/FibonacciResultPage';

const Root = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/fibonacci-result" element={<FibonacciResultPage />} />
    </Routes>
  </Router>
);

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(<Root />);
