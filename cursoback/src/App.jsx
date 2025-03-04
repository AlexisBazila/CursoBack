import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import E1 from "./Pages/Repaso/Ejercicios/E1";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>EJERCICIOS DE REPASO</h2>
      <E1 />
    </>
  );
}

export default App;
