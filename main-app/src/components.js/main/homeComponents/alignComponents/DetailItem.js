import React from 'react';

export default function DetailItem({ label, value }) {
    return (
        <div className='flex flex-col mb-3'>
            <span className='text-[1.25em] text-[#9171f8] font-extrabold font-Quicksand drop-shadow-2xl opacity-80'>
                {label}
            </span>
            <span className='text-white text-[1.25em] font-Quicksand font-semibold'>
                {value}
            </span>
        </div>
    );
}
