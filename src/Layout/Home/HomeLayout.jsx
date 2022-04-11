import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Dashboard from "./pages/Dashboard/Dashboard";

export default function HomeLayout() {
  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
      <Footer />
    </main>
  );
}
