import React from 'react';
import { Routes, Route } from 'react-router-dom';
import GimpPage from '../pages/GimPage';
import MainPage from '../pages/MainPage';

interface RoutesProps { }

const Router: React.FC<RoutesProps> = ({ }) => {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/product' element={<GimpPage />} />
    </Routes>
  );
};

export default Router;
