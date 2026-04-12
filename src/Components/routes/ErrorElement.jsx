import { Link } from "react-router-dom";
import { FaExclamationTriangle, FaHome, FaCalendarAlt } from "react-icons/fa";

function ErrorElement() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-gray-100 px-6">
      
      <div className="text-center max-w-xl">

        {/* Icon */}
        <div className="flex justify-center mb-6 text-red-500 animate-bounce">
          <FaExclamationTriangle size={60} />
        </div>

        {/* 404 Title */}
        <h1 className="text-7xl font-extrabold text-gray-800 mb-4">
          404
        </h1>

        {/* Message */}
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Oops! Page Not Found
        </h2>

        <p className="text-gray-500 mb-8">
          The page you are looking for might have been removed,
          renamed, or temporarily unavailable.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">

          <Link
            to="/"
            className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow transition"
          >
            <FaHome />
            Back to Home
          </Link>

          <Link
            to="/events"
            className="flex items-center justify-center gap-2 bg-gray-800 hover:bg-black text-white px-6 py-3 rounded-lg shadow transition"
          >
            <FaCalendarAlt />
            Browse Events
          </Link>

        </div>

        {/* Extra Hint */}
        <p className="text-sm text-gray-400 mt-8">
          If you believe this is an error, please contact support.
        </p>

      </div>

    </section>
  );
}

export default ErrorElement;