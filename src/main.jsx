import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrownserRouter, RouterProvider } from "react-router-dom";

const router = createBrownserRouter([
  {
    path: "/task",
    element: <div>Hello</div>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
    <App />
  </StrictMode>
);
