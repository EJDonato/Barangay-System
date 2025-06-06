import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/core";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import DisplayPage from "./pages/DisplayPage/display_page";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<DisplayPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
