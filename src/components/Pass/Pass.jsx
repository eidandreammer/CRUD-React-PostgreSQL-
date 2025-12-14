import React, { useState } from "react";
import Login from "../Login/Login";

function Pass() {
  const [view, setView] = useState(true);
  const [password, setPassword] = useState("");

  function inpPassword(e) {
    setPassword(e.target.value);
  }
  return (
    <div>
      {view && (
        <div className="container">
          <img className="logo" src="/img/OrbiNombre.png" />

          <div className="form">
            <form>
              <h1>Change password</h1>
              <input
                type="password"
                name="password"
                className="input"
                placeholder="New password"
                onChange={(e) => inpPassword(e)}
              />
              <input
                type="password"
                name="password"
                className="input"
                placeholder="Confirm password"
                onChange={(e) => inpPassword(e)}
              />
              <div className="button">
                <button type="button" onClick={() => setView(!view)}>
                  Change
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      {!view && <Login />}
    </div>
  );
}

export default Pass;
