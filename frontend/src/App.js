// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Contact from "./components/Contact";
import ReserveTable from "./components/ReserveTable";
import Login from "./components/Login";
import AdminDashboard from "./components/AdminDashboard";

import "./App.css";

function App() {
  const [adminLoggedIn, setAdminLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <Navbar
        adminLoggedIn={adminLoggedIn}
        setAdminLoggedIn={setAdminLoggedIn}
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/reserve" element={<ReserveTable />} />
        <Route
          path="/login"
          element={<Login setAdminLoggedIn={setAdminLoggedIn} />}
        />
        <Route
          path="/admin"
          element={
            adminLoggedIn ? (
              <AdminDashboard />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;