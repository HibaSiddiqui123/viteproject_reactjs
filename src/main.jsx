import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LeadAssessmentScreen from "./LeadAssessmentScreen.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App.jsx";

const router = createBrowserRouter([
  { path: "/", Component: App },
  { path: "/lead-assessment", Component: LeadAssessmentScreen },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);