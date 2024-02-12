import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SupportOurMission from "./components/SupportOurMission";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/support" element={<SupportOurMission />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
