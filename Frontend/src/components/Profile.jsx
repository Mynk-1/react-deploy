import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { logoutHandler } from '../redux/slice/CardSlice';
import { useDispatch } from 'react-redux';

const Profile = () => {
  const [redirectTimer, setRedirectTimer] = useState(3); // Timer for redirection
  const loggedIn = useSelector((state) => state.Card.loggedIn); // Get loggedIn state from Redux
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    // If not logged in, start the countdown to redirect
    if (!loggedIn) {
      const timer = setInterval(() => {
        setRedirectTimer((prevTimer) => prevTimer - 1);
      }, 1000);

      // Redirect to signin page after 3 seconds
      setTimeout(() => {
        clearInterval(timer);
        navigate('/signin');
      }, 3000);

      // Cleanup timer on component unmount
      return () => clearInterval(timer);
    }
  }, [loggedIn, navigate]);

  const handleLogout = () => {
    dispatch(logoutHandler());
    navigate("/");
  };

  return (
    <div className="w-screen h-screen bg-dark justify-center flex">
      {loggedIn ? (
        <div className='w-[500px] h-screen'>
          <div className="profile-detail mb-4 text-center pt-24">
            <h2 className="text-2xl font-bold mb-1 text-white">John Doe</h2>
            <p className="text-slate-300">Phone: 1234567890</p>
          </div>
          <div className="flex flex-col">
            <button
              className="py-3 border-y-2 border-gray-300 font-semibold hover:bg-gray-700 text-white"
              onClick={() => navigate('/transactions')}
            >
              Transaction History
            </button>
            <button
              className="py-3 border-b-2 border-gray-300 font-semibold hover:bg-gray-700 text-white"
              onClick={() => navigate('/matches')}
            >
              Your Matches
            </button>
            <button
              className="py-3 border-b-2 border-gray-300 font-semibold hover:bg-gray-700 text-white"
              onClick={() => navigate('/support')}
            >
              Support
            </button>
            <button
              className="py-3 font-semibold border-b-2 hover:bg-gray-700 text-white"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </div>
      ) : (<div className='flex flex-col justify-center items-center h-screen gap-5 bg-dark'>
            <h1 className='text-2xl font-bold text-white'>Please Signin to see Profile</h1>
            <div className="w-16 h-16 bg-gray-700 text-white rounded-full flex items-center justify-center">
            <span className="text-xl font-bold text-white">{redirectTimer}</span>
            </div>
          </div>)}
    </div>
  );
};

export default Profile;
