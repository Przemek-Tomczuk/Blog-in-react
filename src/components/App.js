import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Header from './header';
import Essays from './Essays';
import Essay from './Essay';
import './styles.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Header />
        <Routes>
          <Route path="/" element={<Essays />} />
          <Route path="/essay/:id" element={<Essay />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;