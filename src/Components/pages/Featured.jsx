import { FaCalendarAlt, FaMapMarkerAlt, FaTag } from "react-icons/fa";
import { Link } from "react-router-dom";

function Featured() {
  const events = [
    {
      id: 1,
      title: "Tech Conference 2026",
      date: "10 July 2026",
      location: "Dhaka",
      category: "Technology",
      price: "$20",
      image:
        "https://i.ibb.co.com/xbt5K2R/carlos-gil-se-Vjuv-Iin-V4-unsplash.jpg",
    },
    
    {
      id: 2,
      title: "Music Festival Night",
      date: "18 August 2026",
      location: "Chittagong",
      category: "Music",
      price: "$15",
      image:
        "https://i.ibb.co.com/G4v1HX17/adhika-bagus-prasada-8-SBw-Dq-LXFy4-unsplash-1.jpg",
    },
    {
      id: 3,
      title: "Business Leadership Summit",
      date: "5 September 2026",
      location: "Dhaka",
      category: "Business",
      price: "$25",
      image:
        "https://i.ibb.co.com/FkHMy6cK/carlos-gil-E3-ZO8-s-DC-U-unsplash.jpg",
    },
    
    {
      id: 4,
      title: "Creative Design Workshop",
      date: "22 October 2026",
      location: "Sylhet",
      category: "Workshop",
      price: "$10",
      image:
        "https://i.ibb.co.com/vxVRKXPc/dlxmedia-hu-E7jfs2h4z-LU-unsplash.jpg",
    },
    
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">

      {/* Section Header */}
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Featured Events
        </h2>

        <p className="text-gray-500 mt-3 max-w-xl mx-auto">
          Discover the most popular and trending events happening near you.
          Join exciting experiences and connect with amazing people.
        </p>
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {events.map((event) => (
          <div
            key={event.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
          >

            {/* Event Image */}
            <img
              src={event.image}
              alt={event.title}
              className="h-48 w-full object-cover"
            />

            <div className="p-5">

              {/* Category */}
              <span className="text-xs bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
                {event.category}
              </span>

              {/* Title */}
              <h3 className="text-lg font-semibold mt-3 text-gray-800">
                {event.title}
              </h3>

              {/* Date */}
              <div className="flex items-center text-gray-500 text-sm mt-3 gap-2">
                <FaCalendarAlt />
                {event.date}
              </div>

              {/* Location */}
              <div className="flex items-center text-gray-500 text-sm mt-2 gap-2">
                <FaMapMarkerAlt />
                {event.location}
              </div>

              {/* Price */}
              <div className="flex items-center text-gray-600 text-sm mt-2 gap-2">
                <FaTag />
                {event.price}
              </div>

              {/* Button */}
              <Link
                to={`/events/${event.id}`}
                className="block text-center bg-blue-600 hover:bg-blue-700 text-white mt-5 py-2 rounded-lg transition"
              >
                View Details
              </Link>

            </div>
          </div>
        ))}
      </div>

      {/* View All Events */}
      <div className="text-center mt-14">
        <Link
          to="/events"
          className="px-8 py-3 bg-gray-900 text-white rounded-lg hover:bg-black transition"
        >
          View All Events
        </Link>
      </div>

    </section>
  );
}

export default Featured;