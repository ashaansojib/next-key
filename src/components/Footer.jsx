import React from 'react';
import { HeartIcon } from '@heroicons/react/24/solid'
const Footer = () => {
    return (
        <div>
            <p className='p-4 bg-slate-600 text-white text-2xl text-center font-semibold'>All Rights Are Reserved By <HeartIcon className='h-6 w-6 text-red-600 inline' /> Sojib Khan</p>
        </div>
    );
};

export default Footer;