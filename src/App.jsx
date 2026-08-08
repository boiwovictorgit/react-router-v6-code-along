import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './components/About';
import Login from './components/Login';
import UserProfile from './components/UserProfile';
import ErrorPage from './components/ErrorPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/login" element={<Login />} />

        <Route path="/user-profile" element={<UserProfile />} />

        <Route path="*" element={<ErrorPage />} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;
