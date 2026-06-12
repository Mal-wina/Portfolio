import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import BusinessWebsite from "./pages/BusinessWebsite";
import WorkTracker from "./pages/WorkTracker";

import Projects from "./components/Projects";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route
          path="/projects/business-website"
        element={<BusinessWebsite />}
        />
        <Route
          path="/projects/work-tracker"
        element={<WorkTracker />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;