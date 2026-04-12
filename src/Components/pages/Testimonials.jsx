import { FaStar } from "react-icons/fa";

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Ahmed",
      role: "Event Participant",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      review:
        "This platform made it so easy to find and join amazing events. I met many new people and had a great experience.",
    },
    {
      id: 2,
      name: "John Smith",
      role: "Event Organizer",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      review:
        "Creating and managing events has never been easier. The tools are simple and powerful.",
    },
    {
      id: 3,
      name: "Fatima Khan",
      role: "Community Member",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      review:
        "I love discovering new workshops and meetups here. Highly recommended for anyone looking for events.",
    },
  ];

  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            What People Say
          </h2>
          <p className="text-gray-500 mt-3">
            Hear from people who have used our platform.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition"
            >
              <div className="flex items-center mb-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-14 h-14 rounded-full object-cover"
                />

                <div className="ml-4">
                  <h4 className="font-semibold">{t.name}</h4>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>

              <div className="flex text-yellow-400 mb-3">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              <p className="text-gray-600 text-sm leading-relaxed">
                {t.review}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Testimonials;