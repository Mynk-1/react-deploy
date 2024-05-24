import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faSearch, faPlus, faBell, faUser } from "@fortawesome/free-solid-svg-icons";

function BottomNavbar() {
  return (
    
    <nav className='fixed bottom-0 left-0 w-full h-16 flex justify-around items-center bg-primary shadow-inner shadow-gray-900 z-50'>
      <div className='flex-1 flex items-center justify-center'>
        <FontAwesomeIcon icon={faHome} className='text-white text-2xl' />
      </div>
      <div className='flex-1 flex items-center justify-center'>
        <FontAwesomeIcon icon={faSearch} className='text-white text-2xl' />
      </div>
      <div className='flex-1 flex items-center justify-center'>
        <FontAwesomeIcon icon={faPlus} className='text-white text-3xl border-3 border-white ' />
      </div>
      <div className='flex-1 flex items-center justify-center'>
        <FontAwesomeIcon icon={faBell} className='text-white text-2xl' />
      </div>
      <div className='flex-1 flex items-center justify-center'>
        <FontAwesomeIcon icon={faUser} className='text-white text-2xl' />
      </div>
    </nav>
  );
}

export default BottomNavbar;
