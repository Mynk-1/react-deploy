import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import {loginHandler} from '../redux/slice/CardSlice';
import {useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom';

const SigninForm = () => {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State for show/hide password
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate=useNavigate();



  const apiUrl = 'http://localhost:3000/api/login';
  const notifySuccess = () => toast.success('Login successful');
  const notifyError = (message) => toast.error(message);
  const login=()=>{
    dispatch(loginHandler());
    setTimeout(() => {
      navigate("/");
    }, 1000);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.post(apiUrl, { phone, password }, { withCredentials: true });
      if (response.status === 200) {
        notifySuccess();
        login();

      } else {
        notifyError('Login failed. Please check your credentials and try again.');
      }
    } catch (err) {
      console.error('Login failed:', err);
      notifyError(err.response?.data?.msg || 'Login failed. Please check your credentials and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword); // Toggle show/hide password state
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-dark p-4">
      <div>
        <ToastContainer position="top-left" className="pt-5" />
      </div>
      <form onSubmit={handleSubmit} className="bg-primary p-6 rounded shadow-md w-full max-w-sm border-gray-900 border">
        <h2 className="text-2xl font-bold mb-6 text-white">Sign In</h2>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-white font-bold mb-2">Phone Number:</label>
          <input
            type="text"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full px-3 py-2 border border-gray-900 rounded focus:outline-none focus:border-slate-400 bg-slate-700 text-white"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-white font-bold mb-2">Password:</label>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'} // Toggle input type based on showPassword state
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-900 rounded focus:outline-none focus:border-slate-400 bg-slate-700 text-white"
              required
            />
            <label
              className="absolute right-0 top-0 mt-2 mr-4 cursor-pointer"
              onClick={togglePasswordVisibility}
            >
              <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} className="text-gray-400" />
            </label>
          </div>
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-500 text-white font-bold rounded hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
          disabled={isLoading}
        >
          {isLoading ? 'Signing In...' : 'Sign In'}
        </button>
      </form>
    </div>
  );
};

export default SigninForm;
