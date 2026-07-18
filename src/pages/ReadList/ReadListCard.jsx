import React from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { HiOutlineUsers } from 'react-icons/hi';
import { LuFileText } from 'react-icons/lu';
import { Link } from 'react-router';

const ReadListCard = ({ readListData }) => {

    const {
        bookId,
        image,
        bookName,
        author,
        category,
        publisher,
        tags,
        totalPages,
        yearOfPublishing,
        rating,
    } = readListData;
    return (
        <div className="flex flex-col lg:flex-row gap-6 p-6 border rounded-2xl my-5">

            {/* Image */}
            <div className="bg-gray-100 rounded-xl p-6 flex justify-center items-center">
                <img
                    src={image}
                    alt={bookName}
                    className="w-28 md:w-36 object-contain"
                />
            </div>

            {/* Content */}
            <div className="flex-1">

                <h2 className="text-3xl font-bold font-serif">
                    {bookName}
                </h2>

                <p className="mt-2 font-medium text-gray-600">
                    By : {author}
                </p>

                <div className="flex flex-wrap items-center gap-3 mt-5">
                    <span className="font-bold">Tag</span>

                    {tags.map(tag => (
                        <span
                            key={tag}
                            className="px-3 py-1 rounded-full bg-green-100 text-green-600 font-semibold"
                        >
                            #{tag}
                        </span>
                    ))}

                    <span className="flex items-center gap-1 text-gray-500">
                        <CiLocationOn />
                        Year of Publishing: {yearOfPublishing}
                    </span>
                </div>

                <div className="flex flex-wrap items-center gap-6 mt-4 text-gray-500">
                    <span className="flex items-center gap-2">
                        <HiOutlineUsers />
                        Publisher: {publisher}
                    </span>

                    <span className="flex items-center gap-2">
                        <LuFileText />
                        Page {totalPages}
                    </span>
                </div>

                <hr className="my-5" />

                <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 rounded-full bg-blue-100 text-blue-600">
                        Category: {category}
                    </span>

                    <span className="px-4 py-2 rounded-full bg-orange-100 text-orange-500">
                        Rating: {rating}
                    </span>

                    <Link
                        to={`/bookDetails/${bookId}`}
                        className="px-6 py-2 rounded-full bg-green-500 text-white hover:bg-green-600 transition duration-300"
                    >
                        View Details
                    </Link>
                </div>

            </div>

        </div>
    );
};

export default ReadListCard;