import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGamepad, faWallet, faIndianRupeeSign, faUser, faBell } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  let loggedIn = false;

  const handleSigninClick = () => {
    navigate('/signin');
  };

  const handleSignupClick = () => {
    navigate('/signup');
  };

  return (
    <nav className='fixed top-0 left-0 w-full z-50 flex p-3 bg-primary justify-between items-center shadow-sm shadow-gray-900'>
      <a href='/' className='flex gap-3 items-center'>
        <FontAwesomeIcon icon={faGamepad} className='text-white text-3xl' />
        <h1 className='text-white text-xl font-medium max-[500px]:hidden'>Gaming World</h1>
      </a>
      {loggedIn && (
        <div className='border border-white min-[400px]:w-40 max-[400px]:gap-2 h-10 rounded flex items-center justify-evenly p-3 shadow shadow-gray-700 bg-dark'>
          <div className='flex items-center gap-2'>
            <h1 className='text-white'>500.00</h1>
            <FontAwesomeIcon icon={faIndianRupeeSign} className='text-white' />
          </div>
          <FontAwesomeIcon icon={faWallet} className='text-blue-500 text-xl justify-end ' />
        </div>
      )}
      {!loggedIn && (
        <div className='flex gap-4 p-1'>
          <button onClick={handleSigninClick} className='text-white'>Signin</button>
          <button onClick={handleSignupClick} className='text-white w-24 h-8 bg-blue-600 rounded hover:bg-blue-700'>Register</button>
        </div>
      )}
      {loggedIn && (
        <div className='flex gap-7'>
          <FontAwesomeIcon icon={faUser} className='text-white text-xl' />
          <FontAwesomeIcon icon={faBell} className='text-white text-xl' />
        </div>
      )}
    </nav>
  );
}

export default Navbar;
