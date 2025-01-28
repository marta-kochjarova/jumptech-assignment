import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Vacations from './pages/Vacations';

const RoutesConfig = () => {
  return (
     <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/vacations" element={<Vacations />} />
   </Routes>
  );
};

export default RoutesConfig;
