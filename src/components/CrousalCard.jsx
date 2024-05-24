import React, { useState, useEffect } from 'react';

function CrousalCard({ image, title, description }) {
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
            {image && <img src={image} alt={title} className="w-full h-32 object-cover" />}
            <div className="p-4">
                <h3 className="text-lg text-white font-bold">{title}</h3>
                <p className="text-gray-300">{description}</p>
            </div>
        </div>
    );
}

export default CrousalCard;
