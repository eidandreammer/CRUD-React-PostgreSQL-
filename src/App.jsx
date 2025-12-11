import React, { useState } from "react";
import Registro from "./components/Registro/Registro";
import Login from "./components/Login/Login";

function App() {
  const [login, setLogin] = useState(false);
  const [registro, setRegistro] = useState(false);

  return (
    <div className="card">
      <h2>Do you have an acount?</h2>
      <div className="btn">
        <button onClick={() => setLogin(!login)}>Login</button>
        {login && <Login />}
        <button onClickCapture={() => setRegistro(!registro)}>Register</button>
        {registro && <Registro />}
      </div>
    </div>
  );
}
export default App;
