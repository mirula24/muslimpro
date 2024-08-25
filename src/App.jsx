import { useState } from "react";
import "./App.css";
import LandingPage from "./pages/LandingPage";

function App() {
  const [count, setCount] = useState(0);

  return (
      <div className="w-full h-min-screen flex flex-col bg-custom-radial">
        <LandingPage />
      </div>
  );
}

export default App;
