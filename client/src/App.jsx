import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Provider from './context/Provider';
import Home from './pages/Home';
import './App.css';

const App = () => (
  <Provider>
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  </Provider>
);

export default App;
