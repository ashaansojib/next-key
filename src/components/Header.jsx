import { ChartBarIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='p-2 bg-slate-100 flex items-center justify-between'>
            <Link to="/" className='text-2xl text-gray-700 font-bold flex items-center'><ChartBarIcon className='w-6 h-6 text-green-500'/> NewPro</Link>
            <div>
                <ul className='inline-flex space-x-2'>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/books">Books</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;