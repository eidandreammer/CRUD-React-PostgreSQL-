import React, { useState } from "react";
import "./Registro.css";

function registro() {
  const [users, setUsers] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  function inpUser(e) {
    setUsers(e.target.value);
  }

  function inpPassword(e) {
    setPassword(e.target.value);
  }

  function inpEmail(e) {
    setEmail(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
  }

  const data = { users, password, email };

  fetch("http://localhost:5173", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: data.users,
      password: data.password,
      email: data.email,
    }),
  });

  return (
    <div className="card">
      <h1>User's form</h1>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="text"
            className="input"
            placeholder="Name"
            onChange={(e) => inpUser(e)}
          />
          <input
            type="password"
            name="password"
            className="input"
            placeholder="Password"
            onChange={(e) => inpPassword(e)}
          />

          <input
            id="email"
            type="email"
            name="email"
            className="input"
            placeholder="Email address"
            onChange={(e) => inpEmail(e)}
          />

          <div className="buttons">
            <button>Sing In</button>
            <button>Register</button>
          </div>
          {users}
          {password}
          {email}
        </form>
      </div>
    </div>
  );
}

export default registro;
