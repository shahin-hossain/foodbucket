import React from 'react';
import { Link } from 'react-router-dom';
const ErrorPage = () => {
    return (
        <div>
            <section className='px-4 py-32 mx-auto max-w-7xl'>
                <h1 className='mb-4 text-2xl font-extrabold leading-tight tracking-tight text-left text-gray-900 md:text-4xl'>
                    Oops! The page you're looking for isn't here.
                </h1>
                <p className='mb-5 text-base text-left text-gray-800 md:text-xl'>
                    You might have the wrong address, or the page may have moved.
                </p>
                <Link to='/' className='w-full mb-2 py-2 px-3 text-white mt-3 bg-pink-600 sm:w-auto sm:mb-0 rounded-lg'>
                    Back to homepage
                </Link>
            </section>

        </div>
    );
};

export default ErrorPage;