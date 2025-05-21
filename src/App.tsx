import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import { Event } from "./routes/Event/event"; // Asegúrate de que `Event` esté bien exportado
import ChildSafety from "./routes/Politicians/child-safety"; // Asegúrate de que `ChildSafety` esté bien exportado
import React from "react";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event" element={<Event />} />
        <Route path="/child-safety" element={<ChildSafety />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
