/* eslint-disable no-unused-vars */
import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';

const Home = () => {

    const [allCourse, setAllCourse] = useState([]);

    const [selectedCourse, setSelectedCourse] = useState([]);

    useEffect( () => {
        fetch("./data.json")
        .then(res => res.json())
        .then(data => setAllCourse(data))
    })

    return (
        <div className=''>
            <div className='bg-slate-200 w-72 p-4 rounded-xl'>
                <img src="https://i.ibb.co/XJPy8zy/Rectangle-2-4.png" alt="" />
                <h1 className='text-xl font-bold '>C programing</h1>
                <p className='text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum rerum ducimus ut. Perspiciatis, et minima?</p>
                <div className='flex justify-between'>
                    <h4 className='ml-3'>Price:</h4>
                    <h4>Credit</h4>
                </div>
                <button className='bg-indigo-600 m-5 p-3 px-20 rounded-lg '>Select</button>
            </div>
        </div>
    );
};

export default Home;