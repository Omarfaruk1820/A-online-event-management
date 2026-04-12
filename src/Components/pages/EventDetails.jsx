import { Link, useParams } from "react-router-dom";
import { eventsData } from "../utils/eventsData";
import { FaCalendarAlt, FaMapMarkerAlt, FaClock } from "react-icons/fa";

function EventDetails() {
  const { id } = useParams();
  const event = eventsData.find((e) => e.id === parseInt(id));

  if (!event) {
    return <p className="text-center mt-20">Event Not Found</p>;
  }

  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <img
        src={event.image}
        className="w-full h-[400px] object-cover rounded-xl mb-10"
      />

      <div className="grid md:grid-cols-3 gap-10">
        {/* Event Info */}
        <div className="md:col-span-2">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            {event.title}
          </h1>

          <div className="flex items-center gap-3 text-gray-600 mb-3">
            <FaCalendarAlt /> {event.date}
          </div>

          <div className="flex items-center gap-3 text-gray-600 mb-3">
            <FaClock /> {event.time}
          </div>

          <div className="flex items-center gap-3 text-gray-600 mb-6">
            <FaMapMarkerAlt /> {event.location}
          </div>

          <p className="text-gray-600 mb-6">{event.description}</p>

          <p className="text-gray-600">{event.details}</p>
        </div>

        {/* Pricing Card */}
        <div className="bg-white shadow-lg rounded-xl p-6 h-fit">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Ticket Price
          </h3>

          <p className="text-4xl text-blue-600 font-bold mb-6">
            ${event.price}
          </p>

          <Link to={`/booking/${event.id}`}>
            <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
              Register Now
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default EventDetails;
