import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "sonner";
import { App } from "./App";
import "./styles.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
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
  </StrictMode>,
);
