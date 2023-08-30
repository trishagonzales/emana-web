import "@fontsource-variable/inter";
import "@shared/theme/global-styles.css";
import React from "react";
import ReactDOM from "react-dom/client";
import Providers from "@shared/providers";
import RootRoutes from "@routes/RootRoutes";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Providers>
      <RootRoutes />
    </Providers>
  </React.StrictMode>
);
