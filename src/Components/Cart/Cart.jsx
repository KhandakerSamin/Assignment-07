/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const Cart = ({selectedCourse, remaining, totalCreditFix, totalCredit}) => {
    return (
        <div className='w-72 h-min-[100px]'>
            <div className='bg-white ml-10 min-h-[300px] rounded-xl w-[300px] px-8'>
                <h1 className='border-b-2 font-bold text-[#2F80ED] py-4 text-left'>Credit Hour Remaining {totalCreditFix} hr</h1>
                <h2 className='font-bold text-left py-4  border-b-2'>Course Name</h2>
                <div className='min-h-[120px]'>
                    
                </div>
                <h2 className='text-left  pl-1 font-bold pt-4'>Total Credit Hour : {totalCredit}</h2>
            </div>
        </div>
    );
};

export default Cart;