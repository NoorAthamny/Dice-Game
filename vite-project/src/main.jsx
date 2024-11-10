import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import DiceGame from "./DiceGame.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DiceGame />
  </StrictMode>
);
