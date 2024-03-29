import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-2xl">Weather Dashboard</h1>
    </>
  );
}

export default App;
