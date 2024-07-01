import { useState } from "react";
import "./App.css";

import Page from "./Page";
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
          <Page />
          {/* <div className="grid place-items-center h-screen">
            <Header />
            <main>
              <section className="">
                <WeatgerBoard />
              </section>
            </main>
          </div> */}
        </FavouriteProvider>
      </WeatherProvider>
    </LocationProvider>
  );
}

export default App;
