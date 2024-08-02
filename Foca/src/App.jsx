import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import AuthPage from './pages/AuthPage/AuthPage';
import PageLayout from './layouts/PageLayout';
import ProfilePage from './pages/ProfilePage/ProfilePage';

function App() {
  return (
    <PageLayout>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/auth' element={<AuthPage />} />
        <Route path='/*' element={<ProfilePage />} />
      </Routes>
    </PageLayout>
  );
}

export default App;
