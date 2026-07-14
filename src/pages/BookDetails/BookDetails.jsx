import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoredDB } from '../../utility/Utility';

const BookDetails = () => {
    const { id } = useParams();
    const bookId = parseInt(id)
    const data = useLoaderData();

    const singleBook = data.find(book => book.bookId === bookId);
    // console.log(singleBook)

    const {
        author,
        bookName,
        category,
        image,
        publisher,
        review,
        tags,
        totalPages,
        yearOfPublishing,
        rating,
    } = singleBook;

    const handleMarkAsRead = (id) => {

        addToStoredDB(id);

    }

    return (
        <div className="my-14 grid grid-cols-1 lg:grid-cols-2 gap-10 w-[95%] mx-auto">
            {/* Left Side */}
            <div className="bg-gray-100 rounded-2xl flex justify-center items-center p-8">
                <img
                    src={image}
                    alt={bookName}
                    className="h-80 md:h-[500px] object-contain"
                />
            </div>

            {/* Right Side */}
            <div>
                <h1 className="text-2xl md:text-3xl font-bold">{bookName}</h1>

                <p className="text-lg text-gray-600 mt-4">
                    By : <span className="font-semibold">{author}</span>
                </p>

                <hr className="my-5 text-gray-300" />

                <p className="text-lg font-medium">{category}</p>

                <hr className="my-5 text-gray-300" />

                <p className="leading-8 text-gray-600">
                    <span className="font-bold text-black">Review : </span>
                    {review}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap items-center gap-3 mt-6">
                    <span className="font-bold">Tag</span>

                    {tags.map((tag, index) => (
                        <span
                            key={index}
                            className="bg-green-100 text-green-600 px-4 py-1 rounded-full font-medium"
                        >
                            #{tag}
                        </span>
                    ))}
                </div>

                <hr className="my-6 text-gray-300" />

                {/* Book Info */}
                <div className="space-y-4">
                    <div className="flex justify-between md:justify-start md:gap-22">
                        <p className="text-gray-500">Number of Pages:</p>
                        <p className="font-bold">{totalPages}</p>
                    </div>

                    <div className="flex justify-between md:justify-start md:gap-36">
                        <p className="text-gray-500">Publisher:</p>
                        <p className="font-bold">{publisher}</p>
                    </div>

                    <div className="flex justify-between md:justify-start md:gap-20">
                        <p className="text-gray-500">Year of Publishing:</p>
                        <p className="font-bold">{yearOfPublishing}</p>
                    </div>

                    <div className="flex justify-between md:justify-start md:gap-40">
                        <p className="text-gray-500">Rating:</p>
                        <p className="font-bold">{rating}</p>
                    </div>
                </div>

                {/* Buttons */}
                <div className="mt-10 flex gap-4">
                    <button onClick={() => handleMarkAsRead(id)} className="btn btn-outline">Read</button>

                    <button className="btn bg-cyan-500 hover:bg-cyan-600 text-white border-none">
                        Wishlist
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;