import React, { useState } from 'react';
import axios from 'axios';

const SignupForm = () => {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [hasReferral, setHasReferral] = useState(false);
  const [referral, setReferral] = useState('');
  const [error, setError] = useState('');

  const apiUrl = 'http://localhost:3000/api/register'; // Adjust the API URL based on your backend setup

  const handleSubmit = async (event) => {
    event.preventDefault();

    const postData = {
      phone: phone,
      password: password,
      referralCode: hasReferral ? referral : '', // Include referral code only if hasReferral is true
    };

    try {
      const response = await axios.post(apiUrl, postData);
      if(response.data.token){
        const token = response.data.token; // Assuming your backend returns a token

      localStorage.setItem('token', token);
      console.log(localStorage.getItem('token'));
      
      alert('Signup successful'); 
      }
      else{
        console.log(response);
      }
    } catch (error) {
      console.error('Error:', error);
      setError('Signup failed. Please try again.'); // Set error message
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-dark p-4">
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
          />
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
          />
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

        <button type="submit" className="w-full py-2 px-4 bg-blue-500 text-white font-bold rounded hover:bg-blue-700 focus:outline-none focus:bg-blue-700">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
