import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WeatherApp from "./components/WeatherApp";
import MyNav from "./components/MyNav";
import CityDetails from "./components/CityDetails";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <MyNav />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WeatherApp />} />
          <Route path="/CityDetails/:city" element={<CityDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
