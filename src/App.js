import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Employees from "./components/Employees";
import GroupedTeamMembers from "./components/GroupedTeamMembers";
import NoFound from "./components/NoFound";
import { DataProvider } from "./context/DataContext";

export default function App() {
  return (
    <DataProvider>
      <Router>
        <Nav />
        <Header />
        <Routes>
          <Route path="/" element={<Employees />}></Route>
          <Route
            path="/GroupedTeamMembers"
            element={<GroupedTeamMembers />}
          ></Route>
          <Route path="*" element={<NoFound />}></Route>
        </Routes>
        <Footer />
      </Router>
    </DataProvider>
  );
}
