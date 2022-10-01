
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Gym from "./pages/gym/Gym";
import Home from "./pages/Home/Home";
import ListGym from "./pages/list-gym/ListGym";
import ListTrainer from "./pages/list-trainer/ListTrainer";
import Trainer from "./pages/trainer/Trainer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trainers" element={<ListTrainer />} />
        <Route path="/trainers/:id" element={<Trainer />} />
        <Route path="/gyms" element={<ListGym />} />
        <Route path="/gyms/:id" element={<Gym />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
