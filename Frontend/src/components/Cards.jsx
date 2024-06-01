import React from 'react';
import Bgmi from "../assets/bgmiCard.jpg";
import Ludo from "../assets/Ludo.jpg"
import { useSelector } from 'react-redux';

function Cards() {
  const selectedFilter = useSelector((state) => state.Card.selectedFilter);
  const image = selectedFilter === 'Bgmi' ? Bgmi : selectedFilter === 'Ludo' ? Ludo : '';
  return (
    <div className=' p-4'>
      <div className=" max-w-sm bg-gray-700 backdrop-blur-lg rounded-lg shadow-lg">
        <figure className="overflow-hidden rounded-t-lg">
          <img src={image} alt="card" className="w-full" />
        </figure>
        <div className="p-4">
          <h2 className="text-white text-2xl font-bold ">#1001 TDM (Squad)</h2>
          <p className="text-white">How to park your car at your garage?</p>
          <div className="mt-4 text-right">
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">Register</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
