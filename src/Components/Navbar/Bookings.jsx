import { useState } from "react";
import { useParams } from "react-router-dom";
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaTicketAlt,
} from "react-icons/fa";

import { eventsData } from "../utils/eventsData";

function Bookings() {
  const { id } = useParams();

  // find event dynamically
  const event = eventsData.find((item) => item.id === parseInt(id));

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    tickets: 1,
  });

  if (!event) {
    return <div className="text-center py-20 text-xl">Event Not Found</div>;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const totalPrice = event.price * formData.tickets;

  const handleSubmit = (e) => {
    e.preventDefault();

    const bookingData = {
      ...formData,
      eventId: event.id,
      eventTitle: event.title,
      totalPrice,
    };

    console.log("Booking Data:", bookingData);

    alert("Booking Submitted Successfully!");

    setFormData({
      name: "",
      email: "",
      phone: "",
      tickets: 1,
    });
  };

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      {/* Header */}

      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">Book Your Ticket</h1>

        <p className="text-gray-500 mt-2">Reserve your seat for this event</p>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Event Info */}

        <div className="bg-white shadow-xl rounded-xl overflow-hidden">
          <img
            src={event.image}
            alt={event.title}
            className="h-64 w-full object-cover"
          />

          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              {event.title}
            </h2>

            <div className="flex items-center gap-3 text-gray-600 mb-3">
              <FaCalendarAlt />
              {event.date}
            </div>

            <div className="flex items-center gap-3 text-gray-600 mb-4">
              <FaMapMarkerAlt />
              {event.location}
            </div>

            <p className="text-2xl font-bold text-blue-600">
              ${event.price} / Ticket
            </p>
          </div>
        </div>

        {/* Booking Form */}

        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-xl rounded-xl p-8 space-y-6"
        >
          {/* Name */}

          <div>
            <label className="block font-medium mb-2">Full Name</label>

            <div className="flex items-center border rounded-lg px-3">
              <FaUser className="text-gray-400" />

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full px-3 py-2 outline-none"
                required
              />
            </div>
          </div>

          {/* Email */}

          <div>
            <label className="block font-medium mb-2">Email Address</label>

            <div className="flex items-center border rounded-lg px-3">
              <FaEnvelope className="text-gray-400" />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter email"
                className="w-full px-3 py-2 outline-none"
                required
              />
            </div>
          </div>

          {/* Phone */}

          <div>
            <label className="block font-medium mb-2">Phone Number</label>

            <div className="flex items-center border rounded-lg px-3">
              <FaPhone className="text-gray-400" />

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter phone number"
                className="w-full px-3 py-2 outline-none"
                required
              />
            </div>
          </div>

          {/* Ticket Quantity */}

          <div>
            <label className="block font-medium mb-2">Number of Tickets</label>

            <div className="flex items-center border rounded-lg px-3">
              <FaTicketAlt className="text-gray-400" />

              <input
                type="number"
                name="tickets"
                min="1"
                value={formData.tickets}
                onChange={handleChange}
                className="w-full px-3 py-2 outline-none"
                required
              />
            </div>
          </div>

          {/* Total Price */}

          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="text-lg font-semibold">
              Total Price:
              <span className="text-blue-600 ml-2">${totalPrice}</span>
            </p>
          </div>

          {/* Submit Button */}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Confirm Booking
          </button>
        </form>
      </div>
    </section>
  );
}

export default Bookings;
