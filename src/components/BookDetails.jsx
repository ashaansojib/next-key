import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftCircleIcon } from '@heroicons/react/24/solid';
import { useLoaderData, useNavigate } from 'react-router-dom';

const BookDetails = () => {
    const navigation = useNavigate();
    const { authors, desc, image, price, publisher, rating, subtitle, title } = useLoaderData();
    // console.log(authors)
    return (
        <div className='grid grid-cols-2 p-4'>
            <div>
                <img className='w-3/4' src={image} alt="" />
            </div>
            <div className='shadow-lg p-4 space-y-4'>
                <h2 className='font-bold text-2xl'>{title}</h2>
                <p>Author: {authors}</p>
                <p>Publisher: {publisher}</p>
                <p>Rate: {rating}</p>
                <p>{desc}</p>

                <div className='flex items-center'>
                    <Link><button className='btn bg-green-500 p-4 rounded-md md:w-auto md:mr-4'>Purchage Now</button></Link>
                    <p className='text-xl font-bold text-green-500 hover:text-black'>{price}</p>
                </div>
                <button onClick={() => navigation(-1)}> <ArrowLeftCircleIcon className='w-7 text-pink-600 h-7'></ArrowLeftCircleIcon> </button>
            </div>

        </div>
    );
};

export default BookDetails;