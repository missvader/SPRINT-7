import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Main from "./pages/Main";

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="form" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;

