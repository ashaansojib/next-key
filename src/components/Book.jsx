import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({ book }) => {
    // console.log(book)
    return (
        <Link to={`/bookdetails/${book.isbn13}`}>
            <div className='m-4 border rounded shadow-lg relative hover:-translate-y-2 transition overflow-hidden'>
                <img className='object-cover w-full h-56 md:h-64 xl:h-80' src={book.image} alt="" />
                <div className='p-4 absolute inset-0 top-0 opacity-0 hover:opacity-100 bg-opacity-50 bg-slate-900 text-white w-full h-full'>
                    <h2 className='font-bold text-xl'>{book.title}</h2>
                    <p className='tracking-wide py-4'>{book.subtitle}</p>
                    <p>{book.price}</p>
                </div>
            </div>
        </Link>
    );
};

export default Book;