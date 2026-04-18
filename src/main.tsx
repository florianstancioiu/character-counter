import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { CharacterCounterContextProvider } from "./store/CharacterCounterContext.tsx";
import { DarkModeContextProvider } from "./store/DarkModeContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <DarkModeContextProvider>
      <CharacterCounterContextProvider>
        <App />
      </CharacterCounterContextProvider>
    </DarkModeContextProvider>
  </StrictMode>,
);
