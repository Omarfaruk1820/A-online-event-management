import { FaCalendarAlt, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { Link } from "react-router-dom";

function UpcomingEvents() {
  const events = [
    {
      id: 1,
      title: "Startup Networking Night",
      date: "15 July 2026",
      location: "Dhaka",
      timeLeft: "5 Days Left",
      image: "https://i.ibb.co.com/5XrVqf6F/marwen-larafa-qz-O9a6o-Q8-AM-unsplash.jpg",
    },
    {
      id: 2,
      title: "Music Festival 2026",
      date: "22 July 2026",
      location: "Chittagong",
      timeLeft: "10 Days Left",
      image: "https://i.ibb.co.com/gb6FVq9D/nicolas-flor-5-CBcj-J3-AM88-unsplash.jpg",
    },
    {
      id: 3,
      title: "Creative Design Workshop",
      date: "30 July 2026",
      location: "Sylhet",
      timeLeft: "15 Days Left",
      image: "https://i.ibb.co.com/hRN91Bjb/ryan-waring-r-L1u334-Qq-Tw-unsplash.jpg",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Upcoming Events
        </h2>
        <p className="text-gray-500 mt-3">
          Don't miss these exciting upcoming events.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {events.map((event) => (
          <div
            key={event.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition"
          >
            <div className="relative">
              <img
                src={event.image}
                alt={event.title}
                className="h-52 w-full object-cover"
              />

              <span className="absolute top-4 left-4 bg-red-500 text-white text-xs px-3 py-1 rounded-full flex items-center gap-1">
                <FaClock /> {event.timeLeft}
              </span>
            </div>

            <div className="p-5">
              <h3 className="text-lg font-semibold text-gray-800">
                {event.title}
              </h3>

              <div className="flex items-center gap-2 text-gray-500 mt-3 text-sm">
                <FaCalendarAlt />
                {event.date}
              </div>

              <div className="flex items-center gap-2 text-gray-500 mt-2 text-sm">
                <FaMapMarkerAlt />
                {event.location}
              </div>

              <Link
                to={`/events/${event.id}`}
                className="block mt-5 text-center bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default UpcomingEvents;