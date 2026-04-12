import { FaPaperPlane } from "react-icons/fa";

function Newsletter() {
  return (
    <section className="bg-blue-600 py-20 px-6 text-white">
      <div className="max-w-4xl mx-auto text-center">

        <h2 className="text-3xl md:text-4xl  font-bold mb-4">
          Subscribe to Our Newsletter
        </h2>

        <p className="text-blue-100 mb-8">
          Get updates about upcoming events, workshops, and special offers.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center">

          <input
            type="email"
            placeholder="Enter your email address"
            className="px-5 py-3 rounded-lg border-2  font-bold w-full `md:w-[350px]` "
          />

          <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-gray-100">
            <FaPaperPlane />
            Subscribe
          </button>

        </div>

      </div>
    </section>
  );
}

export default Newsletter;