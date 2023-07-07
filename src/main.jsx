import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Home from "./pages/Home.jsx";
import ErrorPage from "./pages/error-page.jsx";
import About from "./pages/About.jsx";
import Quiz from "./pages/Quiz.jsx";

const router = createBrowserRouter([
  {
    path: "/africadyk/",
    element: <App />,
    children: [
      {
        path: "/africadyk/",
        element: <Home />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/africadyk/about",
        element: <About />,
      },
      {
        path: "/africadyk/quiz",
        element: <Quiz />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
