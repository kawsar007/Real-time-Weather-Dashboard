import Header from "./components/header/header";
import WeatherBoard from "./components/weather/weather-board";

function Page() {
  return (
    <div className="grid place-items-center h-screen">
      <Header />
      <main>
        <section className="">
          <WeatherBoard />
        </section>
      </main>
    </div>
  );
}

export default Page;
