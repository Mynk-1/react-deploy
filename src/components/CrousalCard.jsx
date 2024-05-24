import React, { useState, useEffect } from 'react';
import banner from "../assets/banner.jpg";

function CrousalCard({ title, description }) {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const cardWidth = width < 500 ? '98%' : '365px';

    return (
        <div
            className="h-56 bg-gray-700 rounded-md shadow-lg shadow-gray-900 overflow-hidden"
            style={{ width: cardWidth }}
        >
            <img
                src={banner}
                alt={title}
                className="w-full h-full object-cover"
                style={{ objectFit: 'cover' }}
            />
            <div className="p-4">
                <h3 className="text-lg text-white font-bold">{title}</h3>
                <p className="text-gray-300">{description}</p>
            </div>
        </div>
    );
}

export default CrousalCard;
