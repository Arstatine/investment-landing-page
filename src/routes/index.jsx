import { Routes, Route } from 'react-router-dom';

import Home from '../views';

const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      {/* <Route path='login' element={<LoginPage />} />
      <Route path='register' element={<RegisterPage />} />
      <Route path='chat-list' element={<ChatList />} />
      <Route path='messages/:to' element={<Messages />} />
      <Route path='profile' element={<Profile />} />
      <Route path='*' element={<NotFound />} /> */}
    </Routes>
  );
};

export default AppRoutes;
