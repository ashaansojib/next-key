import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Book from './Book';

const Books = () => {
    const {books} = useLoaderData();
    console.log(books)
    return (
        <div className='grid grid-cols-3 space-x-4 space-y-2'>
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