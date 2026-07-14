import { Link } from "react-router";
import booksImg from "../../assets/books.jpg";

const Banner = () => {
  return (
    <div className="hero bg-base-200 rounded-2xl  px-6 py-10 lg:px-16 lg:py-16 my-10">
      <div className="hero-content flex-col-reverse lg:flex-row-reverse gap-10">

        {/* Image */}
        <img
          src={booksImg}
          alt="Books"
          className="w-64 md:w-80 rounded-lg hover:scale-105 transition duration-300"
        />

        {/* Content */}
        <div className="text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Books to freshen up your bookshelf
          </h1>

          <p className="py-5 text-gray-600">
            Discover your next favorite book from our collection.
          </p>

          <Link to="/books">
            <button className="btn bg-green-600 hover:bg-green-700 text-white border-none">
              View The List
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Banner;