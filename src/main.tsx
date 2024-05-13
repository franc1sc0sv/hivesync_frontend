import React from "react";
import ReactDOM from "react-dom/client";

import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";

import "./index.css";
import { SessionDetector } from "./components/auth/Session";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <SessionDetector>
      <RouterProvider router={router} />
    </SessionDetector>
  </React.StrictMode>
);
