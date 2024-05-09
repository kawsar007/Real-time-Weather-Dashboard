import { useState } from "react";
import "./App.css";

import Header from "./components/header/header";
import WeatgerBoard from "./components/weather/weather-board";
import { WeatherProvider } from "./provider";

function App() {
  const [count, setCount] = useState(0);

  return (
    <WeatherProvider>
      <div className="grid place-items-center h-screen">
        <Header />
        <main>
          <section className="">
            <WeatgerBoard />
          </section>
        </main>
      </div>
    </WeatherProvider>
  );
}

export default App;
