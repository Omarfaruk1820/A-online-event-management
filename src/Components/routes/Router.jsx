import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../Main/MainLayout";
import Home from "../pages/Home";
import ErrorElement from "./ErrorElement";
import Events from "../pages/Events";
import EventDetails from "../pages/EventDetails";
import CreateEvent from "../pages/CreateEvent";
import Bookings from "../Navbar/Bookings";
import Contact from "../Navbar/Contract";
import Login from "../Navbar/Login";
import Register from "../Navbar/Register";
import PrivateRoute from "./../Auth/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorElement></ErrorElement>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "events",
        element: (
          <PrivateRoute>
            {" "}
            <Events></Events>
          </PrivateRoute>
        ),
      },
      {
        path: "events/:id",
        element: <EventDetails></EventDetails>,
      },
      {
        path: "create-event",
        element: (
          <PrivateRoute>
            <CreateEvent></CreateEvent>
          </PrivateRoute>
        ),
      },
      {
        path: "/booking/:id",
        element: (
          <PrivateRoute>
            {" "}
            <Bookings></Bookings>
          </PrivateRoute>
        ),
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/Register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
