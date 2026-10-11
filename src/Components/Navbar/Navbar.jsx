
import { useContext, useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaCalendarAlt,
  FaChevronDown,
  FaUserCircle,
  FaSignOutAlt,
  FaTachometerAlt,
  FaPlus,
  FaCompass,
} from "react-icons/fa";
import { AuthContext } from "../Auth/AuthProvider";

function Navbar() {
  const { user, loading, loggedOutUser } = useContext(AuthContext);

  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [loggingOut, setLoggingOut] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const mobileMenuRef = useRef(null);
  const profileRef = useRef(null);

  // Close menus when the route changes.
  useEffect(() => {
    setMenuOpen(false);
    setProfileOpen(false);
  }, [location.pathname]);

  // Close menus when clicking outside or pressing Escape.
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }

      if (
        profileRef.current &&
        !profileRef.current.contains(event.target)
      ) {
        setProfileOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        setProfileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const handleLogout = async () => {
    if (loggingOut) return;

    setLoggingOut(true);

    try {
      await loggedOutUser();

      setMenuOpen(false);
      setProfileOpen(false);
      navigate("/login", { replace: true });
    } catch (error) {
      console.error("Logout failed:", error);
    } finally {
      setLoggingOut(false);
    }
  };

  const navLinks = [
    {
      name: "Home",
      path: "/",
      end: true,
    },
    {
      name: "Explore Events",
      path: "/events",
      icon: FaCompass,
    },
    {
      name: "Create Event",
      path: "/create-event",
      icon: FaPlus,
    },
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: FaTachometerAlt,
    },
  ];

  const linkClass = ({ isActive }) =>
    `inline-flex items-center gap-2 whitespace-nowrap rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-200 ${
      isActive
        ? "bg-indigo-50 text-indigo-700"
        : "text-slate-600 hover:bg-slate-50 hover:text-indigo-700"
    }`;

  const mobileLinkClass = ({ isActive }) =>
    `flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
      isActive
        ? "bg-indigo-50 text-indigo-700"
        : "text-slate-700 hover:bg-slate-50 hover:text-indigo-700"
    }`;

  const renderNavLinks = (mobile = false) =>
    navLinks.map(({ name, path, icon: Icon, end }) => (
      <NavLink
        key={path}
        to={path}
        end={end}
        className={mobile ? mobileLinkClass : linkClass}
        onClick={() => setMenuOpen(false)}
      >
        {Icon && <Icon className="shrink-0 text-sm" aria-hidden="true" />}
        {name}
      </NavLink>
    ));

  const renderUserAvatar = (size = "h-10 w-10") => (
    <div
      className={`${size} flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-indigo-100 text-indigo-700 ring-2 ring-white`}
    >
      {user?.photoURL ? (
        <img
          src={user.photoURL}
          alt={`${user?.displayName || "User"}'s profile`}
          className="h-full w-full object-cover"
          referrerPolicy="no-referrer"
        />
      ) : (
        <FaUserCircle className="h-7 w-7" aria-hidden="true" />
      )}
    </div>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/95 shadow-sm backdrop-blur-md">
      <nav
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <div className="flex h-[72px] items-center justify-between gap-4">
          {/* Brand */}
          <Link
            to="/"
            className="group flex shrink-0 items-center gap-2.5"
            aria-label="EventHub home"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-md shadow-indigo-200 transition-transform duration-200 group-hover:scale-105">
              <FaCalendarAlt className="text-xl" aria-hidden="true" />
            </span>

            <span className="text-2xl font-extrabold tracking-tight text-slate-900">
              Event<span className="text-indigo-600">Hub</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 lg:flex">
            {renderNavLinks()}
          </div>

          {/* Desktop Authentication */}
          <div className="hidden shrink-0 items-center gap-3 md:flex">
            {loading ? (
              <div
                className="h-10 w-28 animate-pulse rounded-lg bg-slate-100"
                aria-label="Loading account"
              />
            ) : !user ? (
              <>
                <Link
                  to="/login"
                  className="rounded-lg px-4 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-100 hover:text-indigo-700"
                >
                  Log in
                </Link>

                <Link
                  to="/register"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-indigo-200 transition-all duration-200 hover:-translate-y-0.5 hover:bg-indigo-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Get Started
                  <FaChevronDown
                    className="rotate-[-90deg] text-xs"
                    aria-hidden="true"
                  />
                </Link>
              </>
            ) : (
              <div className="relative" ref={profileRef}>
                <button
                  type="button"
                  onClick={() => setProfileOpen((prev) => !prev)}
                  className="flex items-center gap-2 rounded-xl p-1.5 pr-2 transition-colors hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  aria-expanded={profileOpen}
                  aria-haspopup="true"
                  aria-label="Open account menu"
                >
                  {renderUserAvatar("h-10 w-10")}

                  <div className="hidden max-w-32 text-left xl:block">
                    <p className="truncate text-sm font-semibold text-slate-800">
                      {user?.displayName || "My Account"}
                    </p>
                    <p className="truncate text-xs text-slate-500">
                      {user?.email}
                    </p>
                  </div>

                  <FaChevronDown
                    className={`ml-1 text-xs text-slate-500 transition-transform ${
                      profileOpen ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>

                {profileOpen && (
                  <div className="absolute right-0 top-full mt-3 w-64 overflow-hidden rounded-2xl border border-slate-100 bg-white p-2 shadow-xl shadow-slate-200/70">
                    <div className="border-b border-slate-100 px-3 py-3">
                      <p className="truncate text-sm font-semibold text-slate-900">
                        {user?.displayName || "Welcome back"}
                      </p>
                      <p className="mt-1 truncate text-xs text-slate-500">
                        {user?.email}
                      </p>
                    </div>

                    <Link
                      to="/dashboard"
                      className="mt-2 flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-slate-700 transition-colors hover:bg-indigo-50 hover:text-indigo-700"
                      onClick={() => setProfileOpen(false)}
                    >
                      <FaTachometerAlt aria-hidden="true" />
                      My Dashboard
                    </Link>

                    <button
                      type="button"
                      onClick={handleLogout}
                      disabled={loggingOut}
                      className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm text-red-600 transition-colors hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      <FaSignOutAlt aria-hidden="true" />
                      {loggingOut ? "Logging out..." : "Log out"}
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slate-200 text-slate-700 transition-colors hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            {menuOpen ? (
              <FaTimes className="text-xl" aria-hidden="true" />
            ) : (
              <FaBars className="text-xl" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          id="mobile-navigation"
          ref={mobileMenuRef}
          className={`overflow-hidden transition-[max-height,opacity,padding] duration-300 ease-in-out md:hidden ${
            menuOpen
              ? "max-h-[650px] border-t border-slate-100 pb-5 pt-4 opacity-100"
              : "pointer-events-none max-h-0 py-0 opacity-0"
          }`}
          aria-hidden={!menuOpen}
          inert={!menuOpen}
        >
          <div className="flex flex-col gap-1">
            {renderNavLinks(true)}
          </div>

          <div className="mt-4 border-t border-slate-100 pt-4">
            {loading ? (
              <div className="h-12 animate-pulse rounded-xl bg-slate-100" />
            ) : !user ? (
              <div className="grid grid-cols-2 gap-3">
                <Link
                  to="/login"
                  className="flex items-center justify-center rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50"
                  onClick={() => setMenuOpen(false)}
                >
                  Log in
                </Link>

                <Link
                  to="/register"
                  className="flex items-center justify-center rounded-xl bg-indigo-600 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-indigo-700"
                  onClick={() => setMenuOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            ) : (
              <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                <div className="flex min-w-0 items-center gap-3">
                  {renderUserAvatar("h-11 w-11")}

                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold text-slate-900">
                      {user?.displayName || "My Account"}
                    </p>
                    <p className="truncate text-xs text-slate-500">
                      {user?.email}
                    </p>
                  </div>
                </div>

                <Link
                  to="/dashboard"
                  className="mt-4 flex items-center gap-3 rounded-lg px-2 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:bg-white hover:text-indigo-700"
                  onClick={() => setMenuOpen(false)}
                >
                  <FaTachometerAlt aria-hidden="true" />
                  My Dashboard
                </Link>

                <button
                  type="button"
                  onClick={handleLogout}
                  disabled={loggingOut}
                  className="mt-1 flex w-full items-center gap-3 rounded-lg px-2 py-2.5 text-left text-sm font-semibold text-red-600 transition-colors hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  <FaSignOutAlt aria-hidden="true" />
                  {loggingOut ? "Logging out..." : "Log out"}
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
