import { Routes, Route } from 'react-router-dom';

import Home from '../views';
import Contact from '../views/Contact';
import About from '../views/About';

const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/about' element={<About />} />
    </Routes>
  );
};

export default AppRoutes;
