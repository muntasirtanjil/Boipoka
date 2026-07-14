import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 flex items-center justify-center px-4">
            <div className="text-center max-w-xl">
                {/* Error Code */}
                <h1 className="text-8xl md:text-9xl font-extrabold text-orange-500">
                    404
                </h1>

                {/* Title */}
                <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-800">
                    Oops! Page Not Found
                </h2>

                {/* Description */}
                <p className="mt-4 text-gray-600 text-lg">
                    Sorry, the page you're looking for doesn't exist or may have been
                    moved.
                </p>

                {/* Book Icon */}
                <div className="my-8 text-7xl">
                    📚
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link
                        to="/"
                        className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold transition duration-300"
                    >
                        🏠 Back to Home
                    </Link>

                    <button
                        onClick={() => window.history.back()}
                        className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-6 py-3 rounded-xl font-semibold transition duration-300"
                    >
                        ← Go Back
                    </button>
                </div>

                {/* Footer Text */}
                <p className="mt-10 text-sm text-gray-500">
                    BoiPoka • Discover Your Next Favorite Book 📖
                </p>
            </div>
        </div>
    );
};

export default ErrorPage;