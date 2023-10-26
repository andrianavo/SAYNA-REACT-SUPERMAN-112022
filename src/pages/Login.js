import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import "../styles/login.scss";

function Login() {
  const [email, setEmail] = useState(""); //Decomposition
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { logIn } = UserAuth();
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/compte");
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }

    console.log(email);
    console.log(password);
  };

  return (
    <section id="hero_login">
      <div class="container">
        <form onSubmit={onSubmit}>
          <h4>Connexion</h4>
          <p>
            Pas de compte? <Link to={"/sign-up"}>Inscrivez-vous?</Link>
          </p>
          <label>Identiiant</label>
          <input
            type="email"
            placeholder="e-mail"
            id="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <label>Mot de passe</label>
          <input
            type="password"
            placeholder="Mot de passe"
            id="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button type="submit">VALIDER</button>
          <p>{setError}</p>
        </form>
      </div>
    </section>
  );
}

export default Login;
