import { useState } from "react";
import "./App.css";

import Header from "./components/header/header";
import WeatgerBoard from "./components/weather/weather-board";
import {
  FavouriteProvider,
  LocationProvider,
  WeatherProvider,
} from "./provider";

function App() {
  const [count, setCount] = useState(0);

  return (
    <LocationProvider>
      <WeatherProvider>
        <FavouriteProvider>
          <div className="grid place-items-center h-screen">
            <Header />
            <main>
              <section className="">
                <WeatgerBoard />
              </section>
            </main>
          </div>
        </FavouriteProvider>
      </WeatherProvider>
    </LocationProvider>
  );
}

export default App;
