import { useContext, useState } from "react";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import { AuthContext } from "../Auth/AuthProvider";
import Google from "../Auth/Google";

function Login() {
  const { userLogin } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = formData;

    setError("");

    try {
      setLoading(true);

      await userLogin(email, password);

      toast.success("Login Successful 🚀");

      setFormData({
        email: "",
        password: "",
      });

      // Redirect previous page
      navigate(from, { replace: true });
    } catch (err) {
      setError(err.message);
      toast.error("Login Failed ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <Toaster position="top-right" />

      <div className="bg-white shadow-xl rounded-xl w-full max-w-md p-8">
        <h2 className="text-3xl font-bold text-center mb-6">
          Login to Your Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email */}

          <div>
            <label className="block mb-2 font-medium">Email Address</label>

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

          {/* Password */}

          <div>
            <label className="block mb-2 font-medium">Password</label>

            <div className="flex items-center border rounded-lg px-3">
              <FaLock className="text-gray-400" />

              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter password"
                className="w-full px-3 py-2 outline-none"
                required
              />

              <span
                onClick={() => setShowPassword(!showPassword)}
                className="cursor-pointer text-gray-500"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>

          {/* Error */}

          {error && <p className="text-red-500 text-sm">{error}</p>}

          {/* Button */}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* Register Link */}

        <p className="text-center text-gray-500 mt-6">
          Don't have an account?
          <Link to="/register" className="text-blue-600 font-medium ml-1">
            Register
          </Link>
        </p>
        <Google></Google>
      </div>
      
    </section>
  );
}

export default Login;
