import { Link } from "react-router-dom";
import { FaSearch, FaCalendarPlus } from "react-icons/fa";

function Banner() {
  return (
    <section
      className="relative bg-cover bg-center h-[85vh] flex items-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1492684223066-81342ee5ff30')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <div className="relative max-w-7xl mx-auto px-6 text-center text-white">

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          Discover Amazing Events Near You
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
          Find concerts, workshops, seminars, and community events easily.
          Join exciting experiences and connect with people around you.
        </p>

        {/* Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">

          <div className="flex items-center bg-white rounded-lg overflow-hidden w-full md:w-[400px] shadow-lg">
            <input
              type="text"
              placeholder="Search events..."
              className="w-full px-4 py-3 text-gray-700 focus:outline-none"
            />

            <button className="bg-blue-600 hover:bg-blue-700 px-5 py-3 text-white flex items-center gap-2">
              <FaSearch />
              Search
            </button>
          </div>

        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row justify-center gap-5">

          <Link
            to="/events"
            className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg text-lg font-medium flex items-center justify-center gap-2 transition"
          >
            <FaSearch />
            Search Events
          </Link>

          <Link
            to="/create-event"
            className="bg-white text-gray-900 hover:bg-gray-200 px-8 py-3 rounded-lg text-lg font-medium flex items-center justify-center gap-2 transition"
          >
            <FaCalendarPlus />
            Create Event
          </Link>

        </div>
      </div>
    </section>
  );
}

export default Banner;