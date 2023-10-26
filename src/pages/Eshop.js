import React from "react";
import { Link } from "react-router-dom";
import Products from "../components/Products";
import "../styles/eshop.scss";

function Eshop() {
  return (
    <>
      <section id="hero_e-shop">
        <div class="container">
          <h2>envie d'un slip jaune!</h2>
        </div>
      </section>
      <section className="container mt-5">
        <div className="row">
          <div className="col-md-3">
            <h3>Filtres</h3>
            <div>
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="search"
              />
            </div>
          </div>
          <div className="col-md-9">
            <Link to={"/cart"}>
              <i className="fa-solid fa-2x fa-cart-plus lex-end"></i>
            </Link>
            <Products />
          </div>
        </div>
      </section>
    </>
  );
}

export default Eshop;
