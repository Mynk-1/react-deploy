import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {loginHandler} from '../redux/slice/CardSlice';
import {useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom';

const SignupForm = () => {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [hasReferral, setHasReferral] = useState(false);
  const [referral, setReferral] = useState('');
  const [validationErrors, setValidationErrors] = useState([]);
  const [otherErrors, setOtherErrors] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const dispatch=useDispatch();
  const navigate=useNavigate();

  const login=()=>{
    dispatch(loginHandler());
    setTimeout(() => {
      navigate("/");
    }, 1000);
  }

  const apiUrl = 'https://vercel-test-phi-rose.vercel.app/api/register';
  const notifySuccess = () => toast.success("User created successfully");
  const notifyInfo = (message) => toast.info(message);
  const notifyError = (message) => toast.error(message);

  const validateForm = () => {
    const errors = [];
    const phoneRegex = /^[0-9]{10}$/;

    if (!phone.match(phoneRegex)) {
      errors.push('Phone number must be 10 digits Number.');
    }

    if (password.length < 6) {
      errors.push('Password must be at least 6 characters.');
    }

    return errors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setValidationErrors([]);
    setOtherErrors('');
    setIsLoading(true);

    const formErrors = validateForm();
    if (formErrors.length > 0) {
      setValidationErrors(formErrors);
      setIsLoading(false);
      return;
    }

    const postData = {
      phone: phone,
      password: password,
      referralCode: hasReferral ? referral : '',
    };

    try {
      const response = await axios.post(apiUrl, postData, { withCredentials: true });
      if (response.status === 200) {
        notifySuccess();
        login()
      } else if (response.status === 201) {
        notifyInfo(response.data.msg);
      }
      console.log(response);
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setValidationErrors(error.response.data.validationErrors || []);
      } else {
        setOtherErrors('Signup failed. Please try again.');
        notifyError('Signup failed. Please try again.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-dark p-4">
      <div>
        <ToastContainer position="top-left" className="pt-5"/>
      </div>
      <form onSubmit={handleSubmit} className="bg-primary p-6 rounded shadow-lg w-full max-w-sm shadow-gray-900 border border-gray-950">
        <h2 className="text-2xl font-bold mb-6 text-white">Sign Up</h2>

        <div className="mb-4">
          <label htmlFor="phone" className="block text-white font-bold mb-2">Phone Number:</label>
          <input
            type="text"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full px-3 py-2 border border-gray-900 rounded focus:outline-none focus:border-slate-400 bg-slate-600 text-white"
            required
            aria-describedby="phoneHelp"
          />
          <small id="phoneHelp" className="text-gray-400">Enter a 10-digit phone number.</small>
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-white font-bold mb-2">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border border-gray-900 rounded focus:outline-none focus:border-slate-400 bg-slate-600 text-white"
            required
            aria-describedby="passwordHelp"
          />
          <small id="passwordHelp" className="text-gray-400">Password must be at least 6 characters.</small>
        </div>

        <div className="mb-4">
          <label className="block font-bold mb-2 text-white">
            <input
              type="checkbox"
              checked={hasReferral}
              onChange={(e) => setHasReferral(e.target.checked)}
              className="mr-2 leading-tight"
            />
            I have a referral code
          </label>
        </div>

        {hasReferral && (
          <div className="mb-4">
            <label htmlFor="referral" className="block font-bold mb-2 text-white">Referral Code:</label>
            <input
              type="text"
              id="referral"
              value={referral}
              onChange={(e) => setReferral(e.target.value)}
              className="w-full px-3 py-2 border border-gray-900 rounded focus:outline-none focus:border-slate-400 bg-slate-600 text-white"
            />
          </div>
        )}

        {validationErrors.length > 0 && (
          <div className="mb-4">
            <ul className="text-red-600">
              {validationErrors.map((error, index) => (
                <li key={index}>{error}</li>
              ))}
            </ul>
          </div>
        )}

        {otherErrors && (
          <div className="mb-4">
            <p className="text-red-600">{otherErrors}</p>
          </div>
        )}

        <button type="submit" className="w-full py-2 px-4 bg-blue-500 text-white font-bold rounded hover:bg-blue-700 focus:outline-none focus:bg-blue-700" disabled={isLoading}>
          {isLoading ? 'Signing Up...' : 'Sign Up'}
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
