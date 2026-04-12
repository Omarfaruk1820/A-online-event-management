import { useState } from "react";
import { Link } from "react-router-dom";
import { eventsData } from "../utils/eventsData";
import { FaSearch, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";

function Events() {
  const [searchName, setSearchName] = useState("");
  const [searchLocation, setSearchLocation] = useState("");
  const [searchDate, setSearchDate] = useState("");
  const [category, setCategory] = useState("All");
  const [showAll, setShowAll] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const eventsPerPage = 8;

  const categories = [
    "All",
    "Technology",
    "Music",
    "Business",
    "Workshop",
    "Sports",
    "Festival",
    "Art",
  ];

  // Filter events
  const filteredEvents = eventsData.filter((event) => {
    return (
      event.title.toLowerCase().includes(searchName.toLowerCase()) &&
      event.location.toLowerCase().includes(searchLocation.toLowerCase()) &&
      (searchDate === "" || event.date === searchDate) &&
      (category === "All" || event.category === category)
    );
  });

  // Pagination
  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;

  const currentEvents = showAll
    ? filteredEvents.slice(indexOfFirstEvent, indexOfLastEvent)
    : filteredEvents.slice(0, 8);

  const totalPages = Math.ceil(filteredEvents.length / eventsPerPage);

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">

      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800">Discover Events</h1>
        <p className="text-gray-500 mt-2">
          Search and explore amazing events happening near you
        </p>
      </div>

      {/* Search Filters */}
      <div className="grid md:grid-cols-4 gap-4 mb-10">

        {/* Name Search */}
        <div className="flex items-center border rounded-lg px-3 py-2">
          <FaSearch className="text-gray-400" />
          <input
            type="text"
            placeholder="Search event name"
            className="ml-2 w-full outline-none"
            onChange={(e) => setSearchName(e.target.value)}
          />
        </div>

        {/* Location Search */}
        <input
          type="text"
          placeholder="Location"
          className="border px-4 py-2 rounded-lg"
          onChange={(e) => setSearchLocation(e.target.value)}
        />

        {/* Date Search */}
        <input
          type="date"
          className="border px-4 py-2 rounded-lg"
          onChange={(e) => setSearchDate(e.target.value)}
        />

        {/* Category Filter */}
        <select
          className="border px-4 py-2 rounded-lg"
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map((cat, index) => (
            <option key={index}>{cat}</option>
          ))}
        </select>

      </div>

      {/* Event Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {currentEvents.map((event) => (
          <div
            key={event.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition"
          >

            <img
              src={event.image}
              alt={event.title}
              className="h-48 w-full object-cover"
            />

            <div className="p-5">

              <span className="text-xs bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
                {event.category}
              </span>

              <h3 className="text-lg font-semibold mt-3">
                {event.title}
              </h3>

              <div className="flex items-center text-gray-500 text-sm mt-2 gap-2">
                <FaCalendarAlt />
                {event.date}
              </div>

              <div className="flex items-center text-gray-500 text-sm mt-2 gap-2">
                <FaMapMarkerAlt />
                {event.location}
              </div>

              <p className="text-blue-600 font-semibold mt-3">
                ${event.price}
              </p>

              <Link
                to={`/events/${event.id}`}
                className="block text-center bg-blue-600 hover:bg-blue-700 text-white mt-4 py-2 rounded-lg"
              >
                View Details
              </Link>

            </div>
          </div>
        ))}

      </div>

      {/* More Events Button */}
      {!showAll && filteredEvents.length > 8 && (
        <div className="text-center mt-12">
          <button
            onClick={() => setShowAll(true)}
            className="bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-black"
          >
            More Events
          </button>
        </div>
      )}

      {/* Pagination */}
      {showAll && totalPages > 1 && (
        <div className="flex justify-center mt-12 gap-3 flex-wrap">

          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={`px-4 py-2 rounded-lg border ${
                currentPage === index + 1
                  ? "bg-blue-600 text-white"
                  : "bg-white"
              }`}
            >
              {index + 1}
            </button>
          ))}

        </div>
      )}

    </section>
  );
}

export default Events;