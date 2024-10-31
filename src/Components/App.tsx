import { useEffect } from 'react';
import { AuthProvider } from '../contexts/AuthContext';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Dashboard from './Dashboard';
import Login from './Login';
import PrivateRoutes from './PrivateRoutes';
import ForgotPassword from './ForgotPassword';
import UpdateProfile from './UpdateProfile';
import { ToastProvider } from '../contexts/ToastContext';
import { ApiProvider } from '../contexts/ApiContext';
import 'react-toastify/dist/ReactToastify.min.css';
import AppContextProviders from '../contexts/AppContextProvider';
import Home from './Home';
import Signup from './Signup';
import Footer from './Footer';

function App() {
  const providers = [ToastProvider, AuthProvider, ApiProvider];

  return (
    <Router>
      <AppContextProviders components={providers}>
        <Content />
      </AppContextProviders>
    </Router>
  );
}

// Separate component to use hooks
function Content() {
  const location = useLocation();

  // Define paths where the footer should not appear
  const noFooterPaths = ['/login', '/signup', '/forgot-password', '/dashboard', '/update-profile'];

  // Check if the current path is in the noFooterPaths array
  const showFooter = !noFooterPaths.includes(location.pathname);

  return (
    <>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/update-profile" element={<UpdateProfile />} />
        </Route>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        {/* Add other routes */}
      </Routes>
      {showFooter && <Footer />}
    </>
  );
}

export default App;
