import { useEffect, useState } from "react";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

function EventCountdown() {
  // Example event (Later you can fetch from API)
  const event = {
    title: "Tech Conference 2026",
    location: "Dhaka Convention Center",
    date: "2026-08-10T10:00:00",
    image:
      "https://i.ibb.co.com/xbt5K2R/carlos-gil-se-Vjuv-Iin-V4-unsplash.jpg"
  };

  const calculateTimeLeft = () => {
    const difference = new Date(event.date) - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timerComponents = Object.keys(timeLeft).length ? (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
      {Object.entries(timeLeft).map(([interval, value]) => (
        <div
          key={interval}
          className="bg-white text-gray-800 rounded-xl shadow-lg p-6 text-center"
        >
          <h3 className="text-3xl font-bold">{value}</h3>
          <p className="uppercase text-sm text-gray-500">{interval}</p>
        </div>
      ))}
    </div>
  ) : (
    <p className="text-2xl font-semibold text-red-500 mt-8">
      Event Started 🎉
    </p>
  );

  return (
    <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* Event Image */}
        <div>
          <img
            src={event.image}
            alt={event.title}
            className="rounded-xl shadow-xl"
          />
        </div>

        {/* Event Info */}
        <div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {event.title}
          </h2>

          <div className="flex items-center gap-3 mb-3 text-blue-100">
            <FaCalendarAlt />
            <span>{new Date(event.date).toDateString()}</span>
          </div>

          <div className="flex items-center gap-3 text-blue-100">
            <FaMapMarkerAlt />
            <span>{event.location}</span>
          </div>

          <p className="mt-6 text-blue-100">
            Don't miss this amazing event. Join us and connect with
            professionals, innovators, and community members.
          </p>

          {/* Countdown */}
          {timerComponents}

        </div>
      </div>
    </section>
  );
}

export default EventCountdown;