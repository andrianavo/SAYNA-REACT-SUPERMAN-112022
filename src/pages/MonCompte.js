import React from 'react'
import '../styles/MonCompte.scss';
import { Link } from 'react-router-dom';

function MonCompte() {
  return (
    <>
      <section id="hero">
        <div className="hero-compte">
          <div className="container">
            <h1 className="hero-title text-uppercase text-white">
            SERIEZ-VOUS KRYPTONIEN ?<br />
            DITES NOUS EN PLUS 
            
            </h1>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="d-flex justify-content-around mt-5">
            <div className="aside-menu">
              <nav>
                <ul className="d-flex flex-column">
                  <a href="">informations</a>
                  <a href="">Historique des commandes</a>
                  <a href="">Mes avis</a>
                  <a href="">Mes favoris</a>
                  <Link to="/login">
                  <button className="mt-5">CONNEXION</button>
                    
                  </Link>
                  <Link to="/signup">
                  <button className="mt-5">INSCRIPTION</button>
                  </Link>
                  <Link to="/deconnexion">
                  <button className="mt-5">DECONNEXION</button>
                  </Link>
                  
                </ul>
              </nav>
            </div>
            <div className="compte-info my-5">
              <div className="info-perso">
                <h1 className="my-4">Informations personnelles</h1>
                <div className="content">
                  <p>Nom: Dupont</p>
                  <p>Prenom : Edeline</p>
                  <p>Mot de passe: lorem ipsum</p>
                  <p>Email: edelineprty@gmail.com</p>
                  <p>numero de téléphone: 060612756</p>
                  <p>adresse de Livraison : rue panamericaine, 234, marve 43,PARIS</p>
                  <p>
                    adresse de facturation : rue panamericaine, 234, marve 43,PARIS
                  </p>
                </div>
                <button>MODIFIER</button>
              </div>
              <div className="info-newsletter">
                <h1 className="my-4">Newsletter</h1>
                <div className="content">
                  <p>
                    Abonnez vous à la newsletter ! Ne ratez pas nos offres
                    exceptionnels sur votre article préféré !
                  </p>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                    <label className="form-check-label" for="flexRadioDefault1">
                      OUI
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault2"
                      checked
                    />
                    <label className="form-check-label" for="flexRadioDefault2">
                      Non
                    </label>
                  </div>
                </div>
                <button>ENREGISTRER</button>
              </div>
            </div>
            <div className="newsletter"></div>
          </div>
        </div>
      </section>
    </>

  )
}

export default MonCompte