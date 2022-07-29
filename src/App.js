import { Routes, Route } from "react-router-dom";
import DetailsPage from "./pages/DetailsPage";
import HomeCountryPage from "./pages/HomeCountryPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeCountryPage />} />
      <Route path="/name/:countryName" element={<DetailsPage />} />
    </Routes>
  );
}

export default App;
