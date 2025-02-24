import React from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Dashboard from "./pages/Dashboard.jsx";
import Booking from "./pages/Booking.jsx";
import Cabins from "./pages/Cabins.jsx";
import Users from "./pages/Users.jsx";
import Settings from "./pages/Settings.jsx";
import Account from "./pages/Account.jsx";
import Login from "./pages/Login.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import AppLayout from "./ui/AppLayout.jsx";

const router = createBrowserRouter([
  {
    path: "/", // والد تمام مسیرها
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Navigate replace to="dashboard" />, // ریدایرکت به داشبورد
      },
      {
        path: "Dashboard",
        element: <Dashboard />,
      },
      {
        path: "Booking",
        element: <Booking />,
      },
      {
        path: "Cabins",
        element: <Cabins />,
      },
      {
        path: "Users",
        element: <Users />,
      },
      {
        path: "Settings",
        element: <Settings />,
      },
      {
        path: "Account",
        element: <Account />,
      },
    ],
  },
  {
    path: "Login", // لاگین , * جدا از AppLayout نمایش داده شود
    element: <Login />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
