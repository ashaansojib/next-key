import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Book from './Book';

const Books = () => {
    const {books} = useLoaderData();
    return (
        <div className='grid grid-cols-3 py-4'>
            {
                books.map( book => <Book
                key={book.isbn13}
                book={book}
                ></Book>)
            }
        </div>
    );
};

export default Books;