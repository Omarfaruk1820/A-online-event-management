import { useContext, useState } from "react";
import { AuthContext } from "../Auth/AuthProvider";
import { updateProfile } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import Google from "../Auth/Google";

function Register() {
  const { createUser } = useContext(AuthContext);

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const password = form.password.value;

    setError("");

    if (!name) {
      setError("Name is required");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    try {
      setLoading(true);

      const result = await createUser(email, password);
      const user = result.user;

      // Save Name to Firebase Profile
      await updateProfile(user, {
        displayName: name,
      });

      alert("Registration Successful");
      navigate("/");
      form.reset();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-xl rounded-xl w-full max-w-md p-8">
        <form onSubmit={handleSubmit} className="space-y-5">
          <h2 className="text-3xl font-bold text-center mb-6">
            Register to Your Account
          </h2>

          <fieldset className="fieldset">
            <label className="block mb-2 font-medium">Name</label>
            <input
              name="name"
              type="text"
              className="input input-bordered w-full outline-1"
              placeholder="Enter Name"
              required
            />

            <label className="block mb-2 font-medium">Email</label>
            <input
              name="email"
              type="email"
              className="input input-bordered w-full outline-1"
              placeholder="Enter Email"
              required
            />

            <label className="block mb-2 font-medium">Password</label>
            <input
              name="password"
              type="password"
              className="input input-bordered w-full outline-1"
              placeholder="Enter Password"
              required
            />

            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
              disabled={loading}
            >
              {loading ? "Registering..." : "Register"}
            </button>
          </fieldset>
          <p className="text-center text-gray-500 mt-6">
            Already have an account?
            <Link to="/login" className="text-blue-600 font-medium ml-1">
              Please Login
            </Link>
          </p>
          <Google></Google>
        </form>
      </div>
    </div>
  );
}

export default Register;
