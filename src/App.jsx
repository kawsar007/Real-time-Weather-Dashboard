import { useState } from "react";
import "./App.css";

import Header from "./components/header/header";
import WeatgerBoard from "./components/weather/weather-board";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="grid place-items-center h-screen">
      <Header />
      <main>
        <section className="">
          <WeatgerBoard />
        </section>
      </main>
    </div>
  );
}

export default App;
