import React, { useEffect, useState } from 'react';
import Book from './Book';

const Books = ({data}) => {
    const [allBooks, setAllBooks] = useState([]);
    // useEffect(() => {
    //     fetch("booksData.json")
    //         .then(res => res.json())
    //         .then(data => {
    //             setAllBooks(data)
    //         })
    // }, [])

    // console.log(allBooks)
    // console.log(data)

    return (
        <div>
            <h1 className='text-2xl md:text-3xl font-bold text-center my-4'>Books </h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  my-5'>
                {
                   data.map(singleBook => <Book key={singleBook.bookId} singleBook={singleBook}></Book>)
                } 
            </div>
        </div>
    );
};

export default Books;