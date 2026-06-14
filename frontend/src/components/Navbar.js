import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar({
  adminLoggedIn,
  setAdminLoggedIn,
}) {
  const logout = () => {
    setAdminLoggedIn(false);
  };

  return (
    <nav className="navbar">

      <div className="nav-left">
        <Link className="logo" to="/">
          ☕ Coffee Shop
        </Link>

        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/reserve">Reserve</Link>
      </div>

      <div className="nav-right">
        {adminLoggedIn ? (
          <>
            <Link to="/admin">Dashboard</Link>

            <button
              className="logout-btn"
              onClick={logout}
            >
              Logout
            </button>
          </>
        ) : (
          <Link to="/login">Admin Login</Link>
        )}
      </div>

    </nav>
  );
}