import React from "react";
import ReactDOM from "react-dom/client";

import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";

import "./index.css";
import { SessionDetector } from "./components/auth/Session";
import { SocketContextProvider } from "./context/useSocket";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <SessionDetector>
      <SocketContextProvider>
        <RouterProvider router={router} />
      </SocketContextProvider>
    </SessionDetector>
  </React.StrictMode>
);
