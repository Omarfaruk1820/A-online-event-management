import { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";
import { Toaster, toast } from "react-hot-toast";

function Contact() {
  const initialState = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Contact Form Data:", formData);

    // Show success toast
    toast.success("Message sent successfully!");

    // Reset form
    setFormData(initialState);
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-10">
      {/* React Hot Toast Container */}
      <Toaster position="top-right" reverseOrder={false} />

      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800">Contact Us</h1>
        <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
          Have questions about our events or booking system? Get in touch with
          us and our team will respond quickly.
        </p>
      </div>

      {/* Contact Info Cards */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {/* Phone */}
        <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-xl transition">
          <div className="flex justify-center mb-4 text-blue-600 text-2xl">
            <FaPhoneAlt />
          </div>
          <h3 className="font-semibold text-lg mb-2">Phone</h3>
          <p className="text-gray-500">+880 1822637989</p>
        </div>
        {/* Email */}
        <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-xl transition">
          <div className="flex justify-center mb-4 text-blue-600 text-2xl">
            <FaEnvelope />
          </div>
          <h3 className="font-semibold text-lg mb-2">Email</h3>
          <p className="text-gray-500">omarfarukfci9th@gmail.com</p>
        </div>
        {/* Location */}
        <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-xl transition">
          <div className="flex justify-center mb-4 text-blue-600 text-2xl">
            <FaMapMarkerAlt />
          </div>
          <h3 className="font-semibold text-lg mb-2">Location</h3>
          <p className="text-gray-500">Kumarkhali, Kusthia</p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-xl p-10">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
          Send Us a Message
        </h2>
        <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
          {/* Name */}
          <div>
            <label className="block font-medium mb-2">Your Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block font-medium mb-2">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email"
              className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>

          {/* Subject */}
          <div className="md:col-span-2">
            <label className="block font-medium mb-2">Subject</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Enter subject"
              className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>

          {/* Message */}
          <div className="md:col-span-2">
            <label className="block font-medium mb-2">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              placeholder="Write your message..."
              className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 text-center">
            <button
              type="submit"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              <FaPaperPlane />
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
