import { Route, Routes } from 'react-router-dom';
import './App.css';
import AuthPage from './pages/AuthPage/AuthPage';
import PageLayout from './layouts/PageLayout';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import FocusDashBoard from './pages/FocusDashBoard/FocusDashBoard';

function App() {
  return (
    <PageLayout>
      <Routes>
        <Route path='/dashboard/:username' element={<FocusDashBoard />} />
        <Route path='/auth' element={<AuthPage />} />
        <Route path='/profile/:username' element={<ProfilePage />} />
      </Routes>
    </PageLayout>
  );
}

export default App;
