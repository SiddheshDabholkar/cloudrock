import { Routes, Route } from "react-router-dom";
import HomeLayout from "./Layout/Home/HomeLayout";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/*" element={<HomeLayout />} />
    </Routes>
  );
}

export default App;
