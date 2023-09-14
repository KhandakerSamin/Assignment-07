/* eslint-disable no-unused-vars */
import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import swal from 'sweetalert';

const Home = () => {

    const [allCourse, setAllCourse] = useState([]);

    const [selectedCourse, setSelectedCourse] = useState([]);

    const [remaining , setRemaining] = useState(20);

    const [totalCredit, setTotalCredit] = useState(0);

    useEffect(() => {
        fetch("./data.json")
            .then(res => res.json())
            .then(data => setAllCourse(data))
    }, []);


    const handleSelectCourse = (course) => {
        const isExist = selectedCourse.find(item => item.id === course.id);
    
        if (isExist) {
            return swal('Taken');
        } else {
            const totalCreditsSelected = selectedCourse.reduce((total, item) => total + item.credit_time, 0);
            const newTotalCredits = totalCreditsSelected + course.credit_time;
    
            if (newTotalCredits > 20) {
                alert("Cannot select more courses. Total credits exceed the limit (20 credits).");
            } else {
                setSelectedCourse([...selectedCourse, course]);
                setTotalCredit(newTotalCredits);
                setRemaining(20 - newTotalCredits);
            }
        }
    };
    
    



    return (
        <div>
            <h1 className='font-bold text-4xl mb-10'>Course Registration</h1>
            <div className='flex justify-between'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-2/3 gap-x-36 gap-y-6' >
                    {
                        allCourse.map((course) => (
                            <div className='bg-white w-72 p-4 rounded-xl' key={course.id}>
                                <img className='mb-4 h-36' src={course.img} alt="" />
                                <h1 className='text-xl font-bold mb-3'>{course.course_name}</h1>
                                <p className='text-center mb-3'>{course.description}</p>
                                <div className='flex justify-between'>
                                    <h4 className='ml-3 font-medium'>Price: {course.price}</h4>
                                    <h4 className='font-medium'>Credit: {course.credit_time} hr</h4>
                                </div>

                                <button
                                    onClick={() => handleSelectCourse(course)} className='bg-indigo-600 mt-4 p-2 px-24 rounded-lg mx-auto text-white font-semibold text-lg'>Select</button>
                            </div>
                        ))
                    }
                </div>
                <div className='w-72 h-min-[100px]'>
                    <Cart selectedCourse={selectedCourse}
                    remaining={remaining}
                    totalCredit={totalCredit}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Home;