import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Form from './pages/Form';
import User from './pages/User';
import Users from './pages/Users';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Form />} />
        <Route path="usuario/:id" element={<User />} />
        <Route path="usuarios" element={<Users />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
