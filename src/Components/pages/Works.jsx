import { FaUserPlus, FaSearch, FaCalendarCheck } from "react-icons/fa";

function Works() {
  const steps = [
    {
      id: 1,
      icon: <FaUserPlus size={36} />,
      title: "Create an Account",
      description:
        "Sign up easily and create your personal account to start exploring and managing events.",
    },
    {
      id: 2,
      icon: <FaSearch size={36} />,
      title: "Browse Events",
      description:
        "Discover concerts, workshops, seminars, and community events happening near you.",
    },
    {
      id: 3,
      icon: <FaCalendarCheck size={36} />,
      title: "Join or Create Events",
      description:
        "Register for exciting events or create your own event and invite people to join.",
    },
  ];

  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            How It Works
          </h2>

          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            Our platform makes it easy to discover and manage events in just a
            few simple steps.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {steps.map((step) => (
            <div
              key={step.id}
              className="relative bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-2xl transition duration-300"
            >

              {/* Step Number */}
              <div className="absolute -top-4 -left-4 bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold shadow">
                {step.id}
              </div>

              {/* Icon */}
              <div className="flex justify-center mb-6 text-blue-600">
                {step.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-sm leading-relaxed">
                {step.description}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Works;