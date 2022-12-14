import {BrowserRouter, Routes, Route} from 'react-router-dom';

import CreateList from '../pages/CreateList';
import Home from '../pages/Home';

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/lista/:action' element={<CreateList />} />
    </Routes>
  );
};

export default Router;
