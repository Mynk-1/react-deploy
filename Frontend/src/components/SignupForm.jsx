// Signup.js
import React, { useState } from 'react';

const SignupForm = () => {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [hasReferral, setHasReferral] = useState(false);
  const [referral, setReferral] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle the form data submission here
    console.log('Phone:', phone);
    console.log('Password:', password);
    console.log('Email:', email);
    if (hasReferral) {
      console.log('Referral:', referral);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Sign Up</h2>
        
        <div className="mb-4">
          <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">Phone Number:</label>
          <input
            type="text"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
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
            <label htmlFor="referral" className="block text-gray-700 font-bold mb-2">Referral Code:</label>
            <input
              type="text"
              id="referral"
              value={referral}
              onChange={(e) => setReferral(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
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
