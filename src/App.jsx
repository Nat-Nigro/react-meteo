import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WeatherApp from "./components/WeatherApp";
import MyNav from "./components/MyNav";

function App() {
  return (
    <div>
      <MyNav />
      <WeatherApp />
    </div>
  );
}

export default App;
