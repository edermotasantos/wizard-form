import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Form from './pages/Form';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route index element={<Form />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
