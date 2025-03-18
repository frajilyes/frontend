import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Userpage from "./pages/Userpage";
import NotFoundpage from "./pages/NotFoundpage";
import Authpage from "./pages/Authpage";
import Navbarexemple from "./components/Navbar";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Navbarexemple />
       <Routes>
        <Route path="/" element={<Authpage />} />
        <Route path="/user/:id" element={<Homepage />} />
        <Route path="*" element={<NotFoundpage />} />
       </Routes>
    </div>
  );
};

export default App;
