

import React from 'react';
import { useNavigate } from 'react-router-dom';
import {logoutHandler} from '../redux/slice/CardSlice';
import {useDispatch} from 'react-redux'

const UserProfile = () => {
  const user = {
    name: "John Doe",
    phone: "1234567890",
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logout=()=>{
    dispatch(logoutHandler());
    navigate("/")
  }

  return (
    <div className="max-w-md mx-auto border-b border-gray-300 pt-24  ">
      <div className="profile-detail mb-4 text-center">
        <h2 className="text-2xl font-bold mb-1">{user.name}</h2>
        <p className="text-gray-700">Phone: {user.phone}</p>
      </div>
      <div className="flex flex-col space-y-2">
        <button
          className="py-2 border-y border-gray-300 font-semibold"
          onClick={() => navigate('/transactions')}
        >
          Transaction History
        </button>
        <button
          className="py-2 border-b border-gray-300 font-semibold"
          onClick={() => navigate('/matches')}
        >
          Your Matches
        </button>
        <button
          className="py-2 border-b border-gray-300 font-semibold"
          onClick={() => navigate('/support')}
        >
          Support
        </button>
        <button
          className="py-2 font-semibold"
          onClick={logout}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
