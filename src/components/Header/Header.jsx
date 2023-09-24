import React, { useState } from 'react';
import { FaShoppingCart, FaBars, FaArrowAltCircleUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Header = () => {
    const [show, setShow] = useState(false);

    return (
        <div className='flex justify-between shadow-xl shadow-b px-2 md:px-24 py-5 '>
            <div>
                <Link to='/' className='text-3xl font-sans font-bold text-pink-500 '>foodbucket</Link>
            </div>
            <div onClick={() => setShow(!show)} className='text-2xl text-pink-500 md:hidden'>
                <span> {show === true ? <FaArrowAltCircleUp /> : <FaBars />}</span>
            </div>

            <div className={`flex flex-col md:flex-row items-center gap-3 absolute  right-0  rounded-lg  duration-150 md:static ${show ? 'top-16 bg-white shadow-lg p-3' : '-top-36'}`}>
                <li className='list-none text-1xl py-1 px-3 border border-pink-500 rounded-lg font-semibold text-pink-500' ><Link to="login">Log in</Link></li>
                <li className=' list-none text-1xl py-1 px-3 border border-pink-500 bg-pink-500 rounded-lg font-semibold text-white' ><Link to="signup">Sign up</Link></li>
                <li className=' list-none text-2xl text-pink-500' ><Link to="cart"><FaShoppingCart /></Link></li>
            </div>

        </div>
    );
};

export default Header;