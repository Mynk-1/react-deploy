import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { loginHandler, logoutHandler } from './redux/slice/CardSlice';
import Navbar from './components/Navbar';
import BottomNavbar from './components/BottomNav';
import Home from './components/Home';
import SigninForm from './components/SigninForm';
import SignupForm from './components/SignupForm';
import UserProfile from './components/Profile';
import ErrorElement from './components/ErrorElement';
import ErrorBoundary from './components/ErrorBoundary';


const AppLayout = () => (
  <ErrorBoundary>
    <div className="App">
      <Navbar /> {/* Fixed position top navigation */}
      <div className="App-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SigninForm />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="*" element={<ErrorElement />} />
        </Routes>
      </div>
      <BottomNavbar /> {/* Fixed position bottom navigation */}
    </div>
  </ErrorBoundary>
);

const App = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true); // State to manage loading state

  useEffect(() => {
    // Check authentication status when the component mounts
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async () => {
    try {
      // Start loading indicator
      setLoading(true);

      // Example: Make a request to a protected endpoint to check authentication
      const response = await axios.get('http://localhost:3000/api/authCheck', {
        withCredentials: true, // Ensure cookies are sent
      });

      if (response.status === 200) {
        dispatch(loginHandler());
      } else {
        dispatch(logoutHandler());
      }
    } catch (error) {
      console.error('Error checking authentication:', error);
      dispatch(logoutHandler());
    } finally {
      // Stop loading indicator
      setLoading(false);
    }
  };

  // Show loading component while waiting for authentication check
  if (loading) {
    return <h1 className='text-2xl flex items-center justify-center h-screen font-bold'>Loading</h1>
  }

  return (
    <Router>
      <AppLayout />
    </Router>
  );
};

export default App;
