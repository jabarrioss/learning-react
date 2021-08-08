import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    let data = {email, password};
    console.log(data);
    console.log(`Email ${email}`);
    console.log(`Password ${password}`);
  }

  return (
    <div className="App">
      <form onSubmit={handleFormSubmit}>
        <h1>Iniciar sesion</h1>
        <br />
        <label htmlFor="correo">
          Correo
          <input type="email" name="correo" id="correo" onChange={handleEmailChange} value={email}/>
        </label>
        <br />
        <label htmlFor="password">
          Password
          <input type="password" name="password" id="password" onChange={handlePasswordChange} value={password}/>
        </label>
        <br />
        <button type="submit">Hola cara de bola</button>
      </form>
    </div>
  );
}

export default App;
