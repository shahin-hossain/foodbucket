import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='max-w-7xl flex justify-center mt-10 items-center'>

            <div className='w-full md:w-96 flex flex-col gap-4 border-2 rounded-lg p-10 shadow-2xl'>
                <h1 className='text-slate-800 text-2xl'>Login Your Account</h1>
                <input className='border-2 px-2 py-3 ' type="email" name="email" id="email" placeholder='example@mail.com' />
                <input className='border-2 px-2 py-3 ' type="password" name="password" id="password" placeholder='123456' />
                <Link className='list-none text-1xl py-3 px-3 text-center  bg-pink-600 rounded-lg font-semibold text-white' to="/"><a >Log in</a></Link>
                <Link className='list-none text-1xl py-3 px-3 text-center border border-pink-600 rounded-lg font-semibold text-pink-600' to="/signup"><a >Sign up</a></Link>
                <p>By signing up, you agree to our <span className='text-pink-600'>Terms and Conditions</span> and <span className='text-pink-600'>Privacy Policy.</span></p>
            </div>
        </div>
    );
};

export default Login;