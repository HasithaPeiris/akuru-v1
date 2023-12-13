import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import FontPreview from "./pages/fontPreview/FontPreview";
import FontsPage from "./pages/fontsPage/FontsPage";
import FontCard from "./components/fontCard/FontCard";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/fonts/:fontName" element={<FontPreview />}></Route>
            <Route path="/" element={<FontsPage />}></Route>
            <Route path="/card" element={<FontCard />}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
