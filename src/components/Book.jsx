import React from 'react';

const Book = ({ book }) => {
    console.log(book)
    return (
        <div className='border '>
            <img className='w-full h-full object-cover' src={book.image} alt="" />
            <div className='p-4'>
                <h2>{book.title}</h2>
            </div>
        </div>
    );
};

export default Book;