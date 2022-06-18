import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Form from './pages/Form';
import Teste from './pages/Teste';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route index element={<Form />} />
          <Route path="/teste" element={<Teste />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
