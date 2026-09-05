import { StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "sonner";
import { App } from "./App";
import "./styles.css";

hydrateRoot(
  document.getElementById("root")!,
  <StrictMode>
    <BrowserRouter>
      <App />
      <Toaster
        theme="dark"
        position="bottom-right"
        toastOptions={{
          classNames: {
            toast: "bg-card text-foreground border border-border shadow-none",
            title: "text-foreground",
            description: "text-muted-foreground",
          },
        }}
      />
    </BrowserRouter>
  </StrictMode>,
);
