import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { logoutHandler } from '../redux/slice/CardSlice';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Profile = () => {
  const loggedIn = useSelector((state) => state.Card.loggedIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const notifySuccess = (message) => toast.success(message);
  const notifyError = (message) => toast.error(message);


  const handleLogout = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/logout',{
        withCredentials: true,});
      if (response.status >= 200) {
        const message = response.data.msg;
        notifySuccess(message);
        
        dispatch(logoutHandler());
       
        setTimeout(() => {
          navigate('/');
        }, 2000); 
      } else {
        console.error('Logout failed with status:', response.status);
      }

    } catch (error) {
      console.error('Logout failed:', error);
      notifyError('Logout failed. Please try again.');
    }
  };

  return (
    <div className="w-screen h-screen bg-dark justify-center flex">
      <div>
        <ToastContainer position="top-left" className="pt-5" />
      </div>
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
          </div>)}
    </div>
  );
};

export default Profile;
