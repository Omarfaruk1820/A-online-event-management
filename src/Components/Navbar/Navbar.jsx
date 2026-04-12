import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes, FaUserCircle } from "react-icons/fa";
import { AuthContext } from "../Auth/AuthProvider";

function Navbar() {

  const { user, loading, loggedOutUser } = useContext(AuthContext);

  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();

  const handleLogout = () => {

    loggedOutUser()
      .then(() => {

        navigate("/login");

      })
      .catch((error) => {

        console.log(error);

      });

  };

  if (loading) {
    return <p className="text-center mt-4">Loading...</p>;
  }

  return (
    <nav className="bg-white shadow-md">

      <div className="max-w-7xl mx-auto px-4">

        <div className="flex justify-between items-center h-16">

          {/* Logo */}

          <Link to="/" className="text-2xl font-bold text-blue-600">
            EventHub
          </Link>

          {/* Desktop Menu */}

          <div className="hidden md:flex items-center gap-6">

            <Link to="/" className="hover:text-blue-600">
              Home
            </Link>

            <Link to="/events" className="hover:text-blue-600">
              Events
            </Link>
            <Link to="/create-event" className="hover:text-blue-600">
                Create Event
            </Link>

            <Link to="/dashboard" className="hover:text-blue-600">
              Dashboard
            </Link>

            {/* If user not logged */}

            {!user ? (

              <>

                <Link
                  to="/login"
                  className="px-4 py-2 border border-blue-600 text-blue-600 rounded"
                >
                  Login
                </Link>

                <Link
                  to="/register"
                  className="px-4 py-2 bg-blue-600 text-white rounded"
                >
                  Register
                </Link>

              </>

            ) : (

              <div className="flex items-center gap-3">

                <FaUserCircle size={26} />

                <div>

                  <p className="text-sm font-semibold">
                    {user?.displayName || "User"}
                  </p>

                  <p className="text-xs text-gray-500">
                    {user?.email}
                  </p>

                </div>

                <button
                  onClick={handleLogout}
                  className="ml-3 px-3 py-1 bg-red-500 text-white rounded"
                >
                  Logout
                </button>

              </div>

            )}

          </div>

          {/* Mobile Menu Button */}

          <div className="md:hidden">

            <button
              onClick={() => setMenuOpen(!menuOpen)}
            >

              {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}

            </button>

          </div>

        </div>

      </div>

      {/* Mobile Menu */}

      {menuOpen && (

        <div className="md:hidden flex flex-col gap-3 p-4 border-t">

          <Link to="/">Home</Link>

          <Link to="/events">Events</Link>

          <Link to="/dashboard">Dashboard</Link>

          {!user ? (

            <>

              <Link to="/login">Login</Link>

              <Link to="/register">Register</Link>

            </>

          ) : (

            <>

              <p className="font-semibold">
                {user?.displayName || "User"}
              </p>

              <p className="text-sm text-gray-500">
                {user?.email}
              </p>

              <button
                onClick={handleLogout}
                className="text-red-500"
              >
                Logout
              </button>

            </>

          )}

        </div>

      )}

    </nav>
  );
}

export default Navbar;