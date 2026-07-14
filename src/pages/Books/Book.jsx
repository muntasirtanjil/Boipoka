import React from 'react';
import { FaRegStar } from 'react-icons/fa';
import { Link } from 'react-router';

const Book = ({ singleBook }) => {
    const {
        bookName,
        author,
        image,
        category,
        rating,
        tags,
        bookId
    } = singleBook;
    // console.log(book)
    return (
        <Link to={`/bookDetails/${bookId}`}>
            <div className="bg-white border border-gray-200 rounded-2xl p-4 md:p-5 hover:shadow-xl transition-all duration-300">
                {/* Image */}
                <div className="bg-gray-100  rounded-2xl p-5 md:p-8 flex justify-center items-center">
                    <img
                        src={image}
                        alt={bookName}
                        className="h-40 sm:h-48 md:h-56 object-contain hover:scale-105 transition duration-300 "
                    />
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-5">
                    {tags.map((tag, index) => (
                        <span
                            key={index}
                            className="bg-green-100 text-green-600 text-xs md:text-sm font-medium px-3 py-1 rounded-full"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Book Name */}
                <h2 className="mt-5 text-xl md:text-2xl font-bold text-gray-800 line-clamp-2">
                    {bookName}
                </h2>

                {/* Author */}
                <p className="mt-2 text-sm md:text-base text-gray-500">
                    By : {author}
                </p>

                <div className="border-t border-dashed border-gray-300 my-5"></div>

                {/* Footer */}
                <div className="flex justify-between items-center">
                    <span className="text-sm md:text-base font-medium text-gray-600">
                        {category}
                    </span>

                    <div className="flex items-center gap-2">
                        <span className="font-semibold">{rating}</span>
                        <FaRegStar className="text-yellow-500" />
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;