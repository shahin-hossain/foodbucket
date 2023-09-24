import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

const Home = () => {

    return (
        <div className='max-w-7xl mx-auto'>
            <div className='flex flex-col md:flex-row justify-center md:justify-between items-center'>
                <div className='order-1'>
                    <h1 className='text-5xl'>Food delivery from ঢাকা বিভাগ’s best restaurants</h1>
                </div>
                <div className='flex justify-center md:justify-end order-2'>
                    <img className='w-3/4' src="https://images.deliveryhero.io/image/foodpanda/city-page/refresh-hero-city-bd.png" alt="" />
                </div>
            </div>
            <div className='flex justify-center mt-28'>
                <Link to='/foods'><button className=' py-2 px-5 text-2xl rounded-lg border-2 border-pink-500 text-pink-500'>All Foods</button></Link>
            </div>
        </div>
    );
};

export default Home;