import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import AuthPage from './pages/AuthPage/AuthPage';
import PageLayout from './layouts/PageLayout';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import FocusDashBoard from './pages/FocusDashBoard/FocusDashBoard';
import FocusFeedPage from './pages/FocusFeedPage/FocusFeedPage';

const defaultUsername = 'Heisenberg';

function App() {
  return (
    <PageLayout>
      <Routes>
        <Route path='/' element={<Navigate to={`/dashboard/${defaultUsername}`} />} />
        <Route path='/dashboard/:username' element={<FocusDashBoard />} />
        <Route path='/auth' element={<AuthPage />} />
        <Route path='/profile/:username' element={<ProfilePage />} />
        <Route path='/focusfeed/:username' element={<FocusFeedPage />} />
      </Routes>
    </PageLayout>
  );
}

export default App;
