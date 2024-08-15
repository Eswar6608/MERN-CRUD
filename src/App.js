import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import CreateDetails from "./components/CreateDetails";
import EditDetails from "./components/EditDetails";
import DetailsList from "./components/DetailsList";

function App() {
  return (
    <div className="App">
      <div className="container mt-5">
        <div className="wrapper">
          <Routes>
            <Route exact path="/" element={<DetailsList />} />
            <Route exact path="/create-details" element={<CreateDetails />} />
            <Route exact path="/edit-details/:id" element={<EditDetails />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
