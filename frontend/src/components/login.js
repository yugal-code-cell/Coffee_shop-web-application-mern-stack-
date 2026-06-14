import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login({
  setAdminLoggedIn,
}) {

  const [username, setUsername] =
    useState("");

  const [password, setPassword] =
    useState("");

  const navigate = useNavigate();

  const login = () => {

    if (
      username === "admin" &&
      password === "coffee123"
    ) {
      setAdminLoggedIn(true);
      navigate("/admin");
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <div className="login">

      <h1>Admin Login</h1>

      <input
        placeholder="Username"
        onChange={(e) =>
          setUsername(e.target.value)
        }
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) =>
          setPassword(e.target.value)
        }
      />

      <button onClick={login}>
        Login
      </button>

    </div>
  );
}