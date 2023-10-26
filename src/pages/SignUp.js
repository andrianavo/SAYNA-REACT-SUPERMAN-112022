import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import "../styles/signup.scss";

function SignUp() {
  const [email, setEmail] = useState(""); //Decomposition
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { createUser } = UserAuth();
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await createUser(email, password);
      navigate("/compte");
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }

    console.log(email);
    console.log(password);
  };

  return (
    <section id="hero_sign-up">
      <div class="container">
        <form onSubmit={onSubmit}>
          <h4>Inscription</h4>
          <p>
            Vous avez un compte? <Link to={"/login"}>Connectez-vous?</Link>
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

export default SignUp;
