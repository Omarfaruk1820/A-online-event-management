import { Link } from "react-router-dom";
import {
  FaMusic,
  FaLaptopCode,
  FaBriefcase,
  FaRunning,
  FaChalkboardTeacher,
  FaPaintBrush
} from "react-icons/fa";

function EventCategories() {
  const categories = [
    {
      id: 1,
      name: "Music",
      icon: <FaMusic size={28} />,
      description: "Concerts, festivals, and live performances",
    },
    {
      id: 2,
      name: "Technology",
      icon: <FaLaptopCode size={28} />,
      description: "Tech conferences, coding workshops",
    },
    {
      id: 3,
      name: "Business",
      icon: <FaBriefcase size={28} />,
      description: "Leadership, networking, startup events",
    },
    {
      id: 4,
      name: "Sports",
      icon: <FaRunning size={28} />,
      description: "Sports competitions and fitness events",
    },
    {
      id: 5,
      name: "Workshop",
      icon: <FaChalkboardTeacher size={28} />,
      description: "Skill-building and hands-on workshops",
    },
    {
      id: 6,
      name: "Art & Design",
      icon: <FaPaintBrush size={28} />,
      description: "Creative art, design and culture events",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">

      {/* Section Header */}
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Event Categories
        </h2>

        <p className="text-gray-500 mt-3 max-w-xl mx-auto">
          Explore events by category and find the experiences that match
          your interests.
        </p>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">

        {categories.map((category) => (
          <Link
            key={category.id}
            to={`/events?category=${category.name}`}
            className="group bg-white shadow-md rounded-xl p-6 text-center hover:shadow-xl transition duration-300"
          >
            {/* Icon */}
            <div className="flex justify-center mb-4 text-blue-600 group-hover:scale-110 transition">
              {category.icon}
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-gray-800">
              {category.name}
            </h3>

            {/* Description */}
            <p className="text-sm text-gray-500 mt-2">
              {category.description}
            </p>
          </Link>
        ))}

      </div>
    </section>
  );
}

export default EventCategories;