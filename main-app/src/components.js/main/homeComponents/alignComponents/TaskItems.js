import React from 'react';

export default function TaskItems({ label, value }) {
    return (
             <div className='flex flex-col mx-3'>
                <span className='text-[18px] text-[#9171f8] font-extrabold font-Quicksand drop-shadow-2xl opacity-80'>
                    {label}
                </span>
                <span className='text-white text-[18px] font-Quicksand font-semibold'>
                    {value}
                </span>
            </div>
       
    );
}
