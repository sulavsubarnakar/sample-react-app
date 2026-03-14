import "./App.css";
import NavBar from "./components/NavBar";
import WeatherCard from "./components/WeatherCard";
import SeismicCard from "./components/SeismicCard";

const App = () => {
  return (
    <div className="flex flex-col h-screen">
      <NavBar />
      <div className="flex flex-1 overflow-auto flex-row items-center justify-center gap-6 h-full w-full flex-wrap">
        <WeatherCard />
        <SeismicCard />
      </div>
    </div>
  );
};

export default App;