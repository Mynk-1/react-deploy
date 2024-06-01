import React, { useState } from 'react';
import {useSelector,useDispatch} from 'react-redux'
import { bgmiToggle, ludoToggle ,otherToggle} from '../redux/slice/CardSlice';
function Filter() {
    const filter =useSelector((state)=> state.Card.selectedFilter )
    const dispatch = useDispatch();
    return (
        <div className='p-4 rounded-full'>
            <div className='flex justify-center items-center mx-auto gap-4 text-white text-[15] w-[300px] h-[60px] bg-gray-900 rounded-full'>
                <div className={`flex justify-center items-center ${filter === 'Bgmi' ? 'bg-gray-700' : 'bg-gray-900'} rounded-3xl hover:bg-gray-800`}>
                    <button className="w-[80px] h-[40px] " onClick={()=>dispatch(bgmiToggle())}>Bgmi</button>
                </div>
                <div className={`flex justify-center items-center ${filter === 'Ludo' ? 'bg-gray-700' : 'bg-gray-900'} w-[80px] h-[40px] rounded-3xl hover:bg-gray-800`}>
                    <button className="w-[80px] h-[40px]" onClick={() =>dispatch(ludoToggle()) }>Ludo</button>
                </div>
                <div className={`flex justify-center items-center ${filter === 'Other' ? 'bg-gray-700' : 'bg-gray-900'} w-[80px] h-[40px] rounded-3xl hover:bg-gray-800`}>
                    <button className="w-[80px] h-[40px]" onClick={() =>dispatch(otherToggle())}>Other</button>
                </div>
            </div>
        </div>
    );
}

export default Filter;
