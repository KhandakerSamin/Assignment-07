/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const Cart = ({ selectedCourse, remaining, totalCreditFix, totalCredit }) => {
    return (
        <div className='w-72 h-min-[100px]'>
            <div className='bg-white ml-10 min-h-[300px] rounded-xl w-[300px] px-8'>
                <h1 className='border-b-2 font-bold text-[#2F80ED] py-4 text-base text-left'>Credit Hour Remaining {remaining} hr</h1>
                <h2 className='font-bold text-left py-4  border-b-2 text-xl'>Course Name</h2>
                <div className='min-h-[120px]'>
                    {selectedCourse.map((course) => (
                        <li className='list-decimal text-left font-normal pt-3 ' key={course.id}>{course.course_name}</li>
                    ))}
                </div>
                <br />
                <h2 className='text-left  pl-1 font-semibold pt-4 border-t-2 pb-5'>Total Credit Hour : {totalCredit}</h2>
            </div>
        </div>
    );
};


export default Cart;