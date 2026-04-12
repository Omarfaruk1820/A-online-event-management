import { useState } from "react";
// import axios from "axios";
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaTag,
  FaImage
} from "react-icons/fa";

function CreateEvent() {

  const initialState = {
    title: "",
    category: "",
    date: "",
    time: "",
    location: "",
    price: "",
    image: "",
    description: "",
    details: ""
  };

  const [formData, setFormData] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    // SHOW ALL FORM DATA IN CONSOLE
    console.log("Event Form Data:", formData);

    try {

      setLoading(true);
      setMessage("");

    //   await axios.post(
    //     "http://localhost:5000/api/events",
    //     formData
    //   );

      setMessage("✅ Event created successfully!");

      // RESET FORM
      setFormData(initialState);

    } catch (error) {

      setMessage("❌ Failed to create event",error.message);

    } finally {

      setLoading(false);

    }

  };

  return (

    <section className="max-w-4xl mx-auto px-6 py-8">

      {/* Header */}
      <div className="text-center mb-5">

        <h1 className="text-4xl font-bold text-gray-800">
          Create New Event
        </h1>

        <p className="text-gray-500 mt-2">
          Fill the form to publish your event
        </p>

      </div>

      {/* Form */}

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-xl rounded-xl p-4 space-y-6"
      >

        {/* Title */}

        <div>

          <label className="block font-medium mb-2">
            Event Title
          </label>

          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter event title"
            className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            required
          />

        </div>


        {/* Category */}

        <div>

          <label className="block font-medium mb-2">
            Category
          </label>

          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded-lg"
            required
          >

            <option value="">Select Category</option>
            <option>Technology</option>
            <option>Music</option>
            <option>Business</option>
            <option>Workshop</option>
            <option>Sports</option>
            <option>Festival</option>
            <option>Art</option>

          </select>

        </div>


        {/* Date + Time */}

        <div className="grid md:grid-cols-2 gap-4">

          <div>

            <label className="block font-medium mb-2">
              Event Date
            </label>

            <div className="flex items-center border rounded-lg px-3">

              <FaCalendarAlt className="text-gray-400"/>

              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full px-3 py-2 outline-none"
                required
              />

            </div>

          </div>


          <div>

            <label className="block font-medium mb-2">
              Event Time
            </label>

            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded-lg"
              required
            />

          </div>

        </div>


        {/* Location */}

        <div>

          <label className="block font-medium mb-2">
            Location
          </label>

          <div className="flex items-center border rounded-lg px-3">

            <FaMapMarkerAlt className="text-gray-400"/>

            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Event location"
              className="w-full px-3 py-2 outline-none"
              required
            />

          </div>

        </div>


        {/* Price */}

        <div>

          <label className="block font-medium mb-2">
            Ticket Price ($)
          </label>

          <div className="flex items-center border rounded-lg px-3">

            <FaTag className="text-gray-400"/>

            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="Enter price"
              className="w-full px-3 py-2 outline-none"
              required
            />

          </div>

        </div>


        {/* Image */}

        <div>

          <label className="block font-medium mb-2">
            Event Image URL
          </label>

          <div className="flex items-center border rounded-lg px-3">

            <FaImage className="text-gray-400"/>

            <input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
              placeholder="Paste image URL"
              className="w-full px-3 py-2 outline-none"
              required
            />

          </div>

        </div>


        {/* Description */}

        <div>

          <label className="block font-medium mb-2">
            Short Description
          </label>

          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="3"
            className="w-full border px-4 py-2 rounded-lg"
            required
          />

        </div>


        {/* Details */}

        <div>

          <label className="block font-medium mb-2">
            Event Details
          </label>

          <textarea
            name="details"
            value={formData.details}
            onChange={handleChange}
            rows="5"
            className="w-full border px-4 py-2 rounded-lg"
            required
          />

        </div>


        {/* Submit Button */}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
        >

          {loading ? "Creating Event..." : "Create Event"}

        </button>


        {/* Message */}

        {message && (

          <p className="text-center text-sm mt-2 text-green-600">
            {message}
          </p>

        )}

      </form>

    </section>

  );

}

export default CreateEvent;