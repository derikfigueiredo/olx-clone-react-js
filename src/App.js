import React from "react";
import './App.css';
import {Template } from "./Components/MainComponents";
import Header from "./Components/Partials/Header";
import { MainRoutes } from "./routes/MainRoutes";

function App() {
  return (
      <Template>
          <Header />
          <MainRoutes />
      </Template>
  );
}

export default App;
